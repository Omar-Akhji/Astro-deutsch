import { gsap } from "@/shared/lib";

let currentDesktopTarget: HTMLElement | null = null;
let currentMobileTarget: HTMLElement | null = null;
let desktopNavTimeline: gsap.core.Timeline | null = null;
let mobileDockTimeline: gsap.core.Timeline | null = null;
let hasDesktopInit = false;
let hasMobileInit = false;

const DESKTOP_ACTIVE_CLASSES = ["text-black"] as const;
const DESKTOP_INACTIVE_CLASSES = ["text-mist-400", "hover:bg-white/5", "hover:text-white"] as const;

const MOBILE_ACTIVE_LINK_CLASSES = [
  "bg-white/10",
  "text-yellow",
  "shadow-inner",
  "shadow-white/5",
] as const;
const MOBILE_INACTIVE_LINK_CLASSES = ["text-mist-500", "hover:text-white"] as const;

function setDesktopActiveClasses(nav: HTMLElement, activeLink: HTMLElement | null): void {
  const links = nav.querySelectorAll<HTMLAnchorElement>("a");
  for (const link of links) {
    link.classList.add("font-semibold");
    if (link === activeLink) {
      link.setAttribute("aria-current", "page");
      link.classList.remove(...DESKTOP_INACTIVE_CLASSES);
      link.classList.add(...DESKTOP_ACTIVE_CLASSES);
    } else {
      link.removeAttribute("aria-current");
      link.classList.remove(...DESKTOP_ACTIVE_CLASSES);
      link.classList.add(...DESKTOP_INACTIVE_CLASSES);
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
      link.classList.remove(...MOBILE_INACTIVE_LINK_CLASSES);
      link.classList.add(...MOBILE_ACTIVE_LINK_CLASSES);
      icon?.classList.add("scale-110", "text-yellow");
      icon?.classList.remove("text-mist-500", "group-hover:text-mist-200");
      if (label) {
        label.classList.remove("text-mist-500", "group-hover:text-mist-300");
        label.classList.add("text-white");
      }
    } else {
      link.removeAttribute("aria-current");
      link.classList.remove(...MOBILE_ACTIVE_LINK_CLASSES);
      link.classList.add(...MOBILE_INACTIVE_LINK_CLASSES);
      icon?.classList.remove("scale-110", "text-yellow");
      icon?.classList.add("text-mist-500", "group-hover:text-mist-200");
      if (label) {
        label.classList.remove("text-white");
        label.classList.add("text-mist-500", "group-hover:text-mist-300");
      }
    }
  }
}

function moveDesktopIndicator(link: HTMLElement | null, immediate = false): void {
  const nav = document.querySelector<HTMLElement>("#desktop-nav");
  const indicator = document.querySelector<HTMLElement>("#desktop-nav-indicator");
  if (!nav || !indicator) return;

  const allLinks = [...nav.querySelectorAll<HTMLAnchorElement>("a")];

  if (!link || link.offsetWidth === 0) {
    if (desktopNavTimeline) {
      desktopNavTimeline.kill();
      desktopNavTimeline = null;
    }
    gsap.killTweensOf([indicator, ...allLinks]);
    currentDesktopTarget = null;
    setDesktopActiveClasses(nav, null);
    gsap.set(allLinks, { clearProps: "color" });
    gsap.to(indicator, { autoAlpha: 0, duration: 0.2, overwrite: "auto" });
    return;
  }

  // Deduplication guard: do not restart or interrupt tween if already heading to/at this link
  if (!immediate && currentDesktopTarget === link) {
    return;
  }

  const fromLink = currentDesktopTarget;
  currentDesktopTarget = link;

  if (desktopNavTimeline) {
    desktopNavTimeline.kill();
    desktopNavTimeline = null;
  }
  gsap.killTweensOf([indicator, ...allLinks]);

  // Immediate positioning without animation (initial load, window resize)
  if (immediate || !hasDesktopInit) {
    gsap.set(indicator, { x: link.offsetLeft, width: link.offsetWidth });
    gsap.to(indicator, { autoAlpha: 1, duration: 0.2, overwrite: "auto" });
    setDesktopActiveClasses(nav, link);
    gsap.set(allLinks, { clearProps: "color" });
    hasDesktopInit = true;
    return;
  }

  // Coordinated GSAP Timeline for fluid indicator glide and text color crossfade
  const inactiveColor = "rgb(159, 176, 195)"; // --color-mist-400
  const activeColor = "rgb(0, 0, 0)"; // text-black

  if (fromLink) {
    gsap.set(fromLink, { color: activeColor });
  }
  gsap.set(link, { color: inactiveColor });

  const tl = gsap.timeline({
    defaults: { ease: "power2.out" },
    onComplete: () => {
      setDesktopActiveClasses(nav, link);
      gsap.set(allLinks, { clearProps: "color" });
      desktopNavTimeline = null;
    },
  });
  desktopNavTimeline = tl;

  // 1. Indicator glides to the target link
  tl.to(
    indicator,
    { x: link.offsetLeft, width: link.offsetWidth, autoAlpha: 1, duration: 0.45 },
    0,
  );

  // 2. Previously active link stays black until indicator begins departing (0.12s),
  // then smoothly crossfades to mist-400
  if (fromLink && fromLink !== link) {
    tl.to(fromLink, { color: inactiveColor, duration: 0.28, ease: "power1.out" }, 0.12);
  }

  // 3. Target link smoothly fades from mist-400 to black as indicator slides under it
  tl.to(link, { color: activeColor, duration: 0.28, ease: "power1.out" }, 0.12);
}

function moveMobileIndicator(link: HTMLElement | null, immediate = false): void {
  const dock = document.querySelector<HTMLElement>("#mobile-dock");
  const indicator = document.querySelector<HTMLElement>("#mobile-dock-indicator");
  if (!dock || !indicator) return;

  if (!link || link.offsetWidth === 0) {
    if (mobileDockTimeline) {
      mobileDockTimeline.kill();
      mobileDockTimeline = null;
    }
    currentMobileTarget = null;
    setMobileActiveStyles(dock, null);
    gsap.to(indicator, { autoAlpha: 0, duration: 0.2, overwrite: "auto" });
    return;
  }

  // Deduplication guard: do not restart or interrupt tween if already heading to/at this link
  if (!immediate && currentMobileTarget === link) {
    return;
  }

  currentMobileTarget = link;

  if (mobileDockTimeline) {
    mobileDockTimeline.kill();
    mobileDockTimeline = null;
  }

  const targetCenterX = link.offsetLeft + link.offsetWidth / 2;

  if (immediate || !hasMobileInit) {
    gsap.killTweensOf(indicator);
    gsap.set(indicator, { x: targetCenterX, xPercent: -50 });
    gsap.to(indicator, { autoAlpha: 1, duration: 0.2, overwrite: "auto" });
    setMobileActiveStyles(dock, link);
    hasMobileInit = true;
    return;
  }

  const tl = gsap.timeline({
    defaults: { ease: "power2.out" },
    onComplete: () => {
      setMobileActiveStyles(dock, link);
      mobileDockTimeline = null;
    },
  });
  mobileDockTimeline = tl;

  tl.to(indicator, { x: targetCenterX, xPercent: -50, autoAlpha: 1, duration: 0.45 }, 0);

  tl.call(
    () => {
      setMobileActiveStyles(dock, link);
    },
    [],
    0.15,
  );
}

function findMatchingLink(container: HTMLElement, currentPath: string): HTMLElement | null {
  const cleanPath = currentPath === "/" ? "/" : currentPath.replace(/\/$/, "");
  const links = container.querySelectorAll<HTMLAnchorElement>("a");

  for (const link of links) {
    const href = link.getAttribute("href") ?? "";
    const cleanHref = href === "/" ? "/" : href.replace(/\/$/, "");

    const matches =
      cleanHref === "/" ?
        cleanPath === "/"
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

  if (immediate) {
    setDesktopActiveClasses(nav, activeLink);
  }
  moveDesktopIndicator(activeLink, immediate);

  if (nav.dataset["hasClickBound"]) return;
  nav.dataset["hasClickBound"] = "true";

  const links = nav.querySelectorAll<HTMLAnchorElement>("a");
  for (const link of links) {
    link.addEventListener("click", () => {
      moveDesktopIndicator(link, false);
    });
  }
}

function setupMobileDock(immediate = false): void {
  const dock = document.querySelector<HTMLElement>("#mobile-dock");
  if (dock?.offsetParent == null) return;

  const currentPath = globalThis.location.pathname;
  const activeLink = findMatchingLink(dock, currentPath);

  if (immediate) {
    setMobileActiveStyles(dock, activeLink);
  }
  moveMobileIndicator(activeLink, immediate);

  if (dock.dataset["hasClickBound"]) return;
  dock.dataset["hasClickBound"] = "true";

  const links = dock.querySelectorAll<HTMLAnchorElement>("a");
  for (const link of links) {
    link.addEventListener("click", () => {
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
