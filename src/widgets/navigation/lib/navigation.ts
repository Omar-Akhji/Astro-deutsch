import { gsap } from "@/shared/lib";

let currentDesktopTarget: HTMLElement | null = null;
let currentMobileTarget: HTMLElement | null = null;
let hasDesktopInit = false;
let hasMobileInit = false;

function moveDesktopIndicator(link: HTMLElement | null, immediate = false): void {
  const indicator = document.querySelector<HTMLElement>("#desktop-nav-indicator");
  if (!indicator) return;

  if (!link || link.offsetWidth === 0) {
    currentDesktopTarget = null;
    gsap.to(indicator, {
      autoAlpha: 0,
      duration: 0.2,
      overwrite: "auto",
    });
    return;
  }

  // Deduplication guard: do not restart or interrupt tween if already heading to/at this link
  if (!immediate && currentDesktopTarget === link) {
    return;
  }
  currentDesktopTarget = link;

  if (immediate || !hasDesktopInit) {
    gsap.killTweensOf(indicator);
    gsap.set(indicator, {
      x: link.offsetLeft,
      width: link.offsetWidth,
    });
    gsap.to(indicator, {
      autoAlpha: 1,
      duration: 0.2,
      overwrite: "auto",
    });
    hasDesktopInit = true;
    return;
  }

  gsap.to(indicator, {
    x: link.offsetLeft,
    width: link.offsetWidth,
    autoAlpha: 1,
    duration: 0.45,
    ease: "power2.out",
    overwrite: "auto",
  });
}

function moveMobileIndicator(link: HTMLElement | null, immediate = false): void {
  const indicator = document.querySelector<HTMLElement>("#mobile-dock-indicator");
  if (!indicator) return;

  if (!link || link.offsetWidth === 0) {
    currentMobileTarget = null;
    gsap.to(indicator, {
      autoAlpha: 0,
      duration: 0.2,
      overwrite: "auto",
    });
    return;
  }

  // Deduplication guard: do not restart or interrupt tween if already heading to/at this link
  if (!immediate && currentMobileTarget === link) {
    return;
  }
  currentMobileTarget = link;

  const targetCenterX = link.offsetLeft + link.offsetWidth / 2;

  if (immediate || !hasMobileInit) {
    gsap.killTweensOf(indicator);
    gsap.set(indicator, {
      x: targetCenterX,
      xPercent: -50,
    });
    gsap.to(indicator, {
      autoAlpha: 1,
      duration: 0.2,
      overwrite: "auto",
    });
    hasMobileInit = true;
    return;
  }

  gsap.to(indicator, {
    x: targetCenterX,
    xPercent: -50,
    autoAlpha: 1,
    duration: 0.45,
    ease: "power2.out",
    overwrite: "auto",
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
        label.classList.remove("text-mist-500");
        label.classList.add("text-white");
      }
    } else {
      link.removeAttribute("aria-current");
      link.classList.remove("bg-white/10", "text-yellow", "shadow-inner", "shadow-white/5");
      link.classList.add("text-mist-500");
      icon?.classList.remove("scale-110", "text-yellow");
      if (label) {
        label.classList.remove("text-white");
        label.classList.add("text-mist-500");
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

function setupDesktopNav(immediate = false): void {
  const nav = document.querySelector<HTMLElement>("#desktop-nav");
  if (nav?.offsetParent == null) return;

  const currentPath = globalThis.location.pathname;
  const activeLink = findMatchingLink(nav, currentPath);

  setDesktopActiveStyles(nav, activeLink);
  moveDesktopIndicator(activeLink, immediate);

  if (nav.dataset["hasClickBound"]) return;
  nav.dataset["hasClickBound"] = "true";

  const links = nav.querySelectorAll<HTMLAnchorElement>("a");
  for (const link of links) {
    link.addEventListener("click", () => {
      setDesktopActiveStyles(nav, link);
      moveDesktopIndicator(link, false);
    });
  }
}

function setupMobileDock(immediate = false): void {
  const dock = document.querySelector<HTMLElement>("#mobile-dock");
  if (dock?.offsetParent == null) return;

  const currentPath = globalThis.location.pathname;
  const activeLink = findMatchingLink(dock, currentPath);

  setMobileActiveStyles(dock, activeLink);
  moveMobileIndicator(activeLink, immediate);

  if (dock.dataset["hasClickBound"]) return;
  dock.dataset["hasClickBound"] = "true";

  const links = dock.querySelectorAll<HTMLAnchorElement>("a");
  for (const link of links) {
    link.addEventListener("click", () => {
      setMobileActiveStyles(dock, link);
      moveMobileIndicator(link, false);
    });
  }
}

function syncAllNavigations(immediate = false): void {
  setupDesktopNav(immediate);
  setupMobileDock(immediate);
}

if (typeof document !== "undefined") {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    syncAllNavigations(true);
  }
  document.addEventListener("astro:page-load", () => {
    syncAllNavigations(false);
  });

  if (typeof ResizeObserver !== "undefined") {
    let resizeTimer: number | null = null;
    const observer = new ResizeObserver(() => {
      if (resizeTimer !== null) cancelAnimationFrame(resizeTimer);
      resizeTimer = requestAnimationFrame(() => {
        syncAllNavigations(true);
      });
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
