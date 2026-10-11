import { gsap } from "@/shared/lib";

function moveDesktopIndicator(link: HTMLElement | null): void {
  const indicator = document.querySelector<HTMLElement>("#desktop-nav-indicator");
  if (!indicator) return;

  if (!link || link.offsetWidth === 0) {
    gsap.to(indicator, {
      autoAlpha: 0,
      duration: 0.25,
      overwrite: "auto",
    });
    return;
  }

  gsap.to(indicator, {
    x: link.offsetLeft,
    width: link.offsetWidth,
    autoAlpha: 1,
    duration: 0.5,
    ease: "power3.inOut",
    overwrite: "auto",
    onStart: () => {
      gsap.set(indicator, { willChange: "transform, width, opacity" });
    },
    onComplete: () => {
      gsap.set(indicator, { clearProps: "willChange" });
    },
  });
}

function moveMobileIndicator(link: HTMLElement | null): void {
  const indicator = document.querySelector<HTMLElement>("#mobile-dock-indicator");
  if (!indicator) return;

  if (!link || link.offsetWidth === 0) {
    gsap.to(indicator, {
      autoAlpha: 0,
      duration: 0.25,
      overwrite: "auto",
    });
    return;
  }

  const targetCenterX = link.offsetLeft + link.offsetWidth / 2;
  gsap.to(indicator, {
    x: targetCenterX,
    autoAlpha: 1,
    duration: 0.5,
    ease: "power3.inOut",
    overwrite: "auto",
    onStart: () => {
      gsap.set(indicator, { willChange: "transform, opacity" });
    },
    onComplete: () => {
      gsap.set(indicator, { clearProps: "willChange" });
    },
  });
}

function setDesktopActiveStyles(nav: HTMLElement, activeLink: HTMLElement | null): void {
  const links = nav.querySelectorAll<HTMLAnchorElement>("a");
  for (const link of links) {
    link.classList.add("font-semibold");
    if (link === activeLink) {
      link.setAttribute("aria-current", "page");
      link.classList.remove("text-mist-400", "hover:bg-white/5");
      link.classList.add("text-black");
    } else {
      link.removeAttribute("aria-current");
      link.classList.remove("text-black");
      link.classList.add("text-mist-400");
    }
  }
}

function setMobileActiveStyles(dock: HTMLElement, activeLink: HTMLElement | null): void {
  const links = dock.querySelectorAll<HTMLAnchorElement>("a");
  for (const link of links) {
    const icon = link.querySelector("svg");
    const label = link.querySelector("span");

    if (link === activeLink) {
      link.setAttribute("aria-current", "page");
      link.classList.add("bg-white/10", "text-yellow", "shadow-inner", "shadow-white/5");
      link.classList.remove("text-mist-500");
      icon?.classList.add("scale-110", "text-yellow");
      icon?.classList.remove("text-mist-500");
      if (label) {
        label.classList.remove("font-semibold", "text-mist-500");
        label.classList.add("font-bold", "text-white");
      }
    } else {
      link.removeAttribute("aria-current");
      link.classList.remove("bg-white/10", "text-yellow", "shadow-inner", "shadow-white/5");
      link.classList.add("text-mist-500");
      icon?.classList.remove("scale-110", "text-yellow");
      if (label) {
        label.classList.remove("font-bold", "text-white");
        label.classList.add("font-semibold", "text-mist-500");
      }
    }
  }
}

function findMatchingLink(container: HTMLElement, currentPath: string): HTMLElement | null {
  const cleanPath = currentPath === "/" ? "/" : currentPath.replace(/\/$/, "");
  const links = container.querySelectorAll<HTMLAnchorElement>("a");

  for (const link of links) {
    const href = link.getAttribute("href") ?? "";
    const cleanHref = href === "/" ? "/" : href.replace(/\/$/, "");

    const matches =
      cleanHref === "/"
        ? cleanPath === "/"
        : cleanPath === cleanHref || cleanPath.startsWith(cleanHref + "/");

    if (matches) return link;
  }
  return null;
}

function setupDesktopNav(): void {
  const nav = document.querySelector<HTMLElement>("#desktop-nav");
  if (nav?.offsetParent == null) return;

  const currentPath = globalThis.location.pathname;
  const activeLink = findMatchingLink(nav, currentPath);

  setDesktopActiveStyles(nav, activeLink);
  moveDesktopIndicator(activeLink);

  if (nav.dataset["hasClickBound"]) return;
  nav.dataset["hasClickBound"] = "true";

  const links = nav.querySelectorAll<HTMLAnchorElement>("a");
  for (const link of links) {
    link.addEventListener("click", () => {
      setDesktopActiveStyles(nav, link);
      moveDesktopIndicator(link);
    });
  }
}

function setupMobileDock(): void {
  const dock = document.querySelector<HTMLElement>("#mobile-dock");
  if (dock?.offsetParent == null) return;

  const currentPath = globalThis.location.pathname;
  const activeLink = findMatchingLink(dock, currentPath);

  setMobileActiveStyles(dock, activeLink);
  moveMobileIndicator(activeLink);

  if (dock.dataset["hasClickBound"]) return;
  dock.dataset["hasClickBound"] = "true";

  const links = dock.querySelectorAll<HTMLAnchorElement>("a");
  for (const link of links) {
    link.addEventListener("click", () => {
      setMobileActiveStyles(dock, link);
      moveMobileIndicator(link);
    });
  }
}

function syncAllNavigations(): void {
  setupDesktopNav();
  setupMobileDock();
}

if (typeof document !== "undefined") {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    syncAllNavigations();
  }
  document.addEventListener("astro:page-load", syncAllNavigations);

  if (typeof ResizeObserver !== "undefined") {
    const observer = new ResizeObserver(() => {
      syncAllNavigations();
    });

    const observeContainers = () => {
      const desktop = document.querySelector<HTMLElement>("#desktop-nav");
      if (desktop) observer.observe(desktop);
      const mobile = document.querySelector<HTMLElement>("#mobile-dock");
      if (mobile) observer.observe(mobile);
    };

    observeContainers();
    document.addEventListener("astro:page-load", observeContainers);
  }
}
