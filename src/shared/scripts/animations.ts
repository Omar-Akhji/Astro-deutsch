import { gsap, ScrollTrigger } from "@/shared/lib";

let pageMatchMedia: gsap.MatchMedia | null = null;
const SCROLL_REVEAL_START = "top 90%";
const SCROLL_REVEAL_DURATION = 0.65;
const SCROLL_REVEAL_STAGGER = 0.1;

function initializeGsapUtilityAnimations(root: ParentNode) {
  const elements = [
    ...(root instanceof HTMLElement ? [root] : []),
    ...root.querySelectorAll<HTMLElement>(
      ".animate-fade-in, .animate-scale-in, [data-gsap-glow], [data-gsap-shimmer], [data-gsap-pulse]",
    ),
  ];

  for (const element of elements) {
    if (element.dataset["gsapAnimationBound"]) continue;
    element.dataset["gsapAnimationBound"] = "true";

    if (element.matches(".animate-fade-in")) {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: 10 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          clearProps: "transform,opacity,visibility",
        },
      );
    } else if (element.matches(".animate-scale-in")) {
      gsap.fromTo(
        element,
        { autoAlpha: 0, scale: 0.96, y: 8 },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.2)",
          clearProps: "transform,opacity,visibility",
        },
      );
    } else if (element.matches("[data-gsap-glow]")) {
      const reverse = element.dataset["gsapGlow"] === "reverse";
      gsap.fromTo(
        element,
        reverse ? { autoAlpha: 0.6, scale: 1.1 } : { autoAlpha: 0.5 },
        reverse ?
          {
            autoAlpha: 0.4,
            scale: 0.9,
            x: -20,
            y: 30,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          }
        : {
            autoAlpha: 0.8,
            scale: 1.15,
            x: 30,
            y: -20,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          },
      );
    } else if (element.matches("[data-gsap-shimmer]")) {
      gsap.fromTo(
        element,
        { xPercent: -100 },
        { xPercent: 200, duration: 2, repeat: -1, ease: "none" },
      );
    } else if (element.matches("[data-gsap-pulse]")) {
      gsap.to(element, {
        scale: 1.15,
        autoAlpha: 0.65,
        duration: 0.75,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }
}

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
    gsap.set("[data-animate], .animate-on-scroll:not([data-vue-managed]), [data-card-link]", {
      autoAlpha: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: "none",
      clearProps: "all",
    });
  });

  pageMatchMedia.add("(prefers-reduced-motion: no-preference)", () => {
    initializeGsapUtilityAnimations(document);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof HTMLElement) initializeGsapUtilityAnimations(node);
        }
        if (mutation.target instanceof HTMLElement) {
          initializeGsapUtilityAnimations(mutation.target);
        }
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });

    // 1. Batched staggered entrance for cards and grid items
    const batchedElements = gsap.utils.toArray<HTMLElement>(
      '[data-animate="fade-up"], [data-animate="stagger-card"], .animate-on-scroll:not([data-vue-managed])',
    );

    if (batchedElements.length > 0) {
      // Set initial state without causing layout recalculation
      gsap.set(batchedElements, { autoAlpha: 0, y: 20, force3D: true });

      ScrollTrigger.batch(batchedElements, {
        interval: 0.08,
        batchMax: 4,
        start: SCROLL_REVEAL_START,
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: SCROLL_REVEAL_STAGGER,
            duration: SCROLL_REVEAL_DURATION,
            ease: "power3.out",
            force3D: true,
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
      gsap.set(zoomElements, { autoAlpha: 0, scale: 0.97, y: 8, force3D: true });

      ScrollTrigger.batch(zoomElements, {
        interval: 0.08,
        start: SCROLL_REVEAL_START,
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            scale: 1,
            stagger: 0.08,
            duration: 0.55,
            ease: "power3.out",
            force3D: true,
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
        interval: 0.08,
        start: "top 94%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            stagger: 0.08,
            duration: SCROLL_REVEAL_DURATION,
            ease: "power3.out",
            overwrite: "auto",
          });
        },
      });
    }

    // 4. Directional slide animations (fade-left, fade-right)
    const fadeLeftElements = gsap.utils.toArray<HTMLElement>('[data-animate="fade-left"]');
    if (fadeLeftElements.length > 0) {
      gsap.set(fadeLeftElements, { autoAlpha: 0, x: 24, force3D: true });
      ScrollTrigger.batch(fadeLeftElements, {
        interval: 0.08,
        start: SCROLL_REVEAL_START,
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            x: 0,
            duration: SCROLL_REVEAL_DURATION,
            ease: "power3.out",
            force3D: true,
            overwrite: "auto",
          });
        },
      });
    }

    const fadeRightElements = gsap.utils.toArray<HTMLElement>('[data-animate="fade-right"]');
    if (fadeRightElements.length > 0) {
      gsap.set(fadeRightElements, { autoAlpha: 0, x: -24, force3D: true });
      ScrollTrigger.batch(fadeRightElements, {
        interval: 0.08,
        start: SCROLL_REVEAL_START,
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            x: 0,
            duration: SCROLL_REVEAL_DURATION,
            ease: "power3.out",
            force3D: true,
            overwrite: "auto",
          });
        },
      });
    }

    // Recalculate layout metrics after DOM settles
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      observer.disconnect();
    };
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
  for (const trigger of ScrollTrigger.getAll()) trigger.kill();
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
