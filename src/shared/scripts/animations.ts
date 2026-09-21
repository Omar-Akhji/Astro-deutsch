import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof document !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

let pageMatchMedia: gsap.MatchMedia | null = null;

/**
 * Initializes global GSAP animations for static and server-rendered Astro content. Integrates with
 * ScrollTrigger.batch() for maximum performance and 60fps compositor smoothness.
 */
export function initPageAnimations() {
  if (typeof document === "undefined") return;

  // Clean up previous matchMedia contexts to prevent stale triggers
  if (pageMatchMedia) {
    pageMatchMedia.revert();
    pageMatchMedia = null;
  }

  pageMatchMedia = gsap.matchMedia();

  // Accessibility: Respect user's motion preferences
  pageMatchMedia.add("(prefers-reduced-motion: reduce)", () => {
    // Instantly reveal all animatable items without movement
    gsap.set("[data-animate], .animate-on-scroll:not([data-vue-managed]), .card-link", {
      autoAlpha: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: "none",
      clearProps: "all",
    });
  });

  pageMatchMedia.add("(prefers-reduced-motion: no-preference)", () => {
    // 1. Batched staggered entrance for cards and grid items
    const batchedElements = gsap.utils.toArray<HTMLElement>(
      '[data-animate="fade-up"], [data-animate="stagger-card"], .animate-on-scroll:not([data-vue-managed])',
    );

    if (batchedElements.length > 0) {
      // Set initial state without causing layout recalculation
      gsap.set(batchedElements, { autoAlpha: 0, y: 28 });

      ScrollTrigger.batch(batchedElements, {
        interval: 0.1,
        batchMax: 6,
        start: "top 92%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.55,
            ease: "power2.out",
            overwrite: "auto",
            onStart: () => {
              gsap.set(batch, { willChange: "transform, opacity" });
            },
            onComplete: () => {
              gsap.set(batch, { clearProps: "willChange" });
            },
          });
        },
      });
    }

    // 2. Zoom-in animations (e.g. badges, decorative dividers, stat boxes)
    const zoomElements = gsap.utils.toArray<HTMLElement>('[data-animate="zoom-in"]');
    if (zoomElements.length > 0) {
      gsap.set(zoomElements, { autoAlpha: 0, scale: 0.94 });

      ScrollTrigger.batch(zoomElements, {
        interval: 0.1,
        start: "top 92%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            scale: 1,
            stagger: 0.06,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto",
          });
        },
      });
    }

    // 3. Fade-in animations
    const fadeInElements = gsap.utils.toArray<HTMLElement>('[data-animate="fade-in"]');
    if (fadeInElements.length > 0) {
      gsap.set(fadeInElements, { autoAlpha: 0 });

      ScrollTrigger.batch(fadeInElements, {
        interval: 0.1,
        start: "top 94%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            stagger: 0.06,
            duration: 0.6,
            ease: "power2.out",
            overwrite: "auto",
          });
        },
      });
    }

    // 4. Directional slide animations (fade-left, fade-right)
    const fadeLeftElements = gsap.utils.toArray<HTMLElement>('[data-animate="fade-left"]');
    if (fadeLeftElements.length > 0) {
      gsap.set(fadeLeftElements, { autoAlpha: 0, x: 30 });
      ScrollTrigger.batch(fadeLeftElements, {
        start: "top 92%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            x: 0,
            duration: 0.55,
            ease: "power2.out",
            overwrite: "auto",
          });
        },
      });
    }

    const fadeRightElements = gsap.utils.toArray<HTMLElement>('[data-animate="fade-right"]');
    if (fadeRightElements.length > 0) {
      gsap.set(fadeRightElements, { autoAlpha: 0, x: -30 });
      ScrollTrigger.batch(fadeRightElements, {
        start: "top 92%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            x: 0,
            duration: 0.55,
            ease: "power2.out",
            overwrite: "auto",
          });
        },
      });
    }

    // Recalculate layout metrics after DOM settles
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  });
}

/**
 * Clean up all ScrollTriggers on View Transition exit to eliminate memory leaks and prevent
 * triggers from referencing detached nodes.
 */
export function cleanupPageAnimations() {
  if (pageMatchMedia) {
    pageMatchMedia.revert();
    pageMatchMedia = null;
  }
  if (ScrollTrigger !== undefined) {
    for (const trigger of ScrollTrigger.getAll()) trigger.kill();
  }
}

// Lifecycle listeners for Astro View Transitions (ClientRouter)
if (typeof document !== "undefined") {
  // Before swapping out old DOM nodes, kill active triggers
  document.addEventListener("astro:before-swap", cleanupPageAnimations);

  // When a new page is loaded or swapped in, initialize animations
  document.addEventListener("astro:page-load", initPageAnimations);

  // If already loaded before listeners attached
  if (document.readyState === "complete" || document.readyState === "interactive") {
    initPageAnimations();
  }
}
