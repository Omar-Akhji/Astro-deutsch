import { gsap } from "@/shared/lib";

export function setupDesktopNav() {
  const nav = document.querySelector<HTMLElement>("#desktop-nav");
  const indicator = document.querySelector<HTMLElement>("#desktop-nav-indicator");
  if (!nav || !indicator || nav.offsetParent === null) return;

  const activeLink = nav.querySelector<HTMLElement>('a[aria-current="page"]');
  if (activeLink && activeLink.offsetWidth > 0) {
    gsap.to(indicator, {
      x: activeLink.offsetLeft,
      width: activeLink.offsetWidth,
      duration: 0.45,
      ease: "power3.out",
      autoAlpha: 1,
      overwrite: "auto",
    });
  } else {
    gsap.to(indicator, { autoAlpha: 0, duration: 0.25, overwrite: "auto" });
  }
}

if (typeof document !== "undefined") {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    setupDesktopNav();
  }
  document.addEventListener("astro:page-load", setupDesktopNav);

  if (typeof ResizeObserver !== "undefined") {
    const observer = new ResizeObserver(() => {
      setupDesktopNav();
    });

    const observeNav = () => {
      const nav = document.querySelector<HTMLElement>("#desktop-nav");
      if (nav) {
        observer.observe(nav);
      }
    };

    observeNav();
    document.addEventListener("astro:page-load", observeNav);
  }
}
