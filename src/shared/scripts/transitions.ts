import type { TransitionBeforePreparationEvent } from "astro:transitions/client";
import { wait } from "@/shared/lib";

const SKELETON_DEV_DELAY_MS = 600;

function isPreparationEvent(event: Event): event is TransitionBeforePreparationEvent {
  return "to" in event && event.to instanceof URL;
}

/**
 * Resolves an arbitrary navigation pathname to the matching skeleton key. Pure function separated
 * from DOM manipulation for testability and clarity.
 */
export function resolveSkeletonRoute(pathname: string): string {
  const target = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const lower = target.toLowerCase();

  if (lower.startsWith("/quiz")) return "/quiz";
  if (lower.startsWith("/themen")) return "/themen";
  if (lower.startsWith("/login")) return "/login";
  if (lower.startsWith("/register")) return "/register";
  if (lower.startsWith("/404")) return "/404";

  if (lower.startsWith("/pruefung")) {
    const parts = lower.split("/").filter(Boolean);
    if (parts.length === 1) return "/pruefung";
    if (parts.length >= 3 && parts[2] === "modelltests") return "/pruefung/modelltests";
    if (parts.length >= 3) return "/pruefung/study";
    if (parts.length === 2) return "/pruefung/level";
  }

  if (lower.startsWith("/vokabeln")) {
    const parts = lower.split("/").filter(Boolean);
    if (parts.length === 1) return "/vokabeln";
    if (parts.length >= 3 && parts[2] === "stammbaum") return "/vokabeln/family-tree";
    if (parts.length >= 3) return "/vokabeln/detail";
    if (parts.length === 2) return "/vokabeln/level";
  }

  if (lower.startsWith("/grammatik")) {
    const parts = lower.split("/").filter(Boolean);
    return parts.length === 1 ? "/grammatik" : "/grammatik/detail";
  }

  return target;
}

document.addEventListener("astro:before-preparation", (e: Event) => {
  if (!isPreparationEvent(e)) return;

  // In development mode, delay page loader so skeleton transition is visible
  if (import.meta.env.DEV) {
    const originalLoader = e.loader;
    e.loader = async () => {
      await Promise.all([originalLoader(), wait(SKELETON_DEV_DELAY_MS)]);
    };
  }

  const toPath = e.to.pathname;
  const container = document.querySelector("#skeleton-container");
  const content = document.querySelector("#page-content");
  if (!container || !content) return;

  // Normalize path to match data-skeleton attributes (remove trailing slash except root)
  const targetPath = toPath === "/" ? "/" : toPath.replace(/\/$/, "");

  // 1. Try exact match first
  let targetSkeleton = container.querySelector(`[data-skeleton="${CSS.escape(targetPath)}"]`);

  // 2. Specialized pattern matching for dynamic routes
  if (!targetSkeleton) {
    const resolvedKey = resolveSkeletonRoute(targetPath);
    targetSkeleton = container.querySelector(`[data-skeleton="${CSS.escape(resolvedKey)}"]`);
  }

  // 3. Fallback to default skeleton if no specific skeleton found
  if (!targetSkeleton) {
    targetSkeleton = container.querySelector('[data-skeleton="default"]');
  }

  if (!targetSkeleton) {
    return;
  }

  // Hide all skeletons inside first
  container.querySelectorAll("[data-skeleton]").forEach((el) => {
    el.classList.add("hidden");
  });
  // Show targeted skeleton
  targetSkeleton.classList.remove("hidden");
  // Show container, hide current page content
  container.classList.remove("hidden");
  container.removeAttribute("aria-hidden");
  content.classList.add("hidden");

  // Show footer skeleton, hide footer content
  const footerSkeleton = document.querySelector("#footer-skeleton");
  const footerContent = document.querySelector("#footer-content");
  footerSkeleton?.classList.remove("hidden");
  footerSkeleton?.removeAttribute("aria-hidden");
  footerContent?.classList.add("hidden");
});

// Ensure that on swap or page load, the skeleton container is hidden and actual content is shown.
document.addEventListener("astro:after-swap", () => {
  const container = document.querySelector("#skeleton-container");
  const content = document.querySelector("#page-content");
  if (!container || !content) return;

  container.classList.add("hidden");
  container.setAttribute("aria-hidden", "true");
  content.classList.remove("hidden");

  const footerSkeleton = document.querySelector("#footer-skeleton");
  const footerContent = document.querySelector("#footer-content");
  footerSkeleton?.classList.add("hidden");
  footerSkeleton?.setAttribute("aria-hidden", "true");
  footerContent?.classList.remove("hidden");
});
