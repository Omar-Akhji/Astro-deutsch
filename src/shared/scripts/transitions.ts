import type { TransitionBeforePreparationEvent } from "astro:transitions/client";
import { wait } from "@/shared/lib";

const SKELETON_DEV_DELAY_MS = 600;

function isPreparationEvent(event: Event): event is TransitionBeforePreparationEvent {
  return "to" in event && event.to instanceof URL;
}

document.addEventListener("astro:before-preparation", (e: Event) => {
  if (!isPreparationEvent(e)) return;

  // In development mode, delay page loader so skeleton transition is visible
  const originalLoader = e.loader;
  e.loader = async () => {
    await Promise.all([originalLoader(), wait(SKELETON_DEV_DELAY_MS)]);
  };

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
    const lowerPath = targetPath.toLowerCase();
    if (lowerPath.startsWith("/quiz")) {
      targetSkeleton = container.querySelector('[data-skeleton="/quiz"]');
    } else if (lowerPath.startsWith("/pruefung")) {
      const parts = lowerPath.split("/").filter(Boolean);
      if (parts.length === 1) {
        targetSkeleton = container.querySelector('[data-skeleton="/pruefung"]');
      } else if (parts.length >= 3 && parts[2] === "modelltests") {
        targetSkeleton = container.querySelector('[data-skeleton="/pruefung/modelltests"]');
      } else if (parts.length >= 3) {
        targetSkeleton = container.querySelector('[data-skeleton="/pruefung/study"]');
      } else if (parts.length === 2) {
        targetSkeleton = container.querySelector('[data-skeleton="/pruefung/level"]');
      }
    } else if (lowerPath.startsWith("/vokabeln")) {
      const parts = lowerPath.split("/").filter(Boolean);
      if (parts.length === 1) {
        targetSkeleton = container.querySelector('[data-skeleton="/vokabeln"]');
      } else if (parts.length >= 3 && parts[2] === "stammbaum") {
        targetSkeleton = container.querySelector('[data-skeleton="/vokabeln/family-tree"]');
      } else if (parts.length >= 3) {
        targetSkeleton = container.querySelector('[data-skeleton="/vokabeln/detail"]');
      } else if (parts.length === 2) {
        targetSkeleton = container.querySelector('[data-skeleton="/vokabeln/level"]');
      }
    } else if (lowerPath.startsWith("/grammatik")) {
      const parts = lowerPath.split("/").filter(Boolean);
      if (parts.length === 1) {
        targetSkeleton = container.querySelector('[data-skeleton="/grammatik"]');
      } else {
        targetSkeleton = container.querySelector('[data-skeleton="/grammatik/detail"]');
      }
    } else if (lowerPath.startsWith("/themen")) {
      targetSkeleton = container.querySelector('[data-skeleton="/themen"]');
    } else if (lowerPath.startsWith("/login")) {
      targetSkeleton = container.querySelector('[data-skeleton="/login"]');
    } else if (lowerPath.startsWith("/register")) {
      targetSkeleton = container.querySelector('[data-skeleton="/register"]');
    } else if (lowerPath.startsWith("/404")) {
      targetSkeleton = container.querySelector('[data-skeleton="/404"]');
    }
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
