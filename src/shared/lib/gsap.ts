import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Centralized GSAP configuration for the entire application. Ensures plugins are registered only
 * once and sets optimal compositor-friendly defaults.
 */
if (typeof document !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  gsap.defaults({ duration: 0.5, ease: "power2.out" });

  // Global ScrollTrigger defaults
  ScrollTrigger.config({ autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize" });
}

export * from "gsap";

export { ScrollTrigger } from "gsap/ScrollTrigger";
export { default } from "gsap";
