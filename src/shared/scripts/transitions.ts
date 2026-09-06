// Client-side script to handle skeleton displays during view transitions

document.addEventListener("astro:before-preparation", (e) => {
  const event = e as unknown as { to: { pathname: string } };
  if (!event?.to?.pathname) return;

  const toPath = event.to.pathname;
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
      } else if (parts.length === 3 && parts[2] === "modelltests") {
        targetSkeleton = container.querySelector('[data-skeleton="/pruefung/modelltests"]');
      } else if (parts.length === 3) {
        targetSkeleton = container.querySelector('[data-skeleton="/pruefung/study"]');
      } else if (parts.length === 2) {
        targetSkeleton = container.querySelector('[data-skeleton="/pruefung/level"]');
      }
    } else if (lowerPath.startsWith("/vokabeln")) {
      const parts = lowerPath.split("/").filter(Boolean);
      if (parts.length === 1) {
        targetSkeleton = container.querySelector('[data-skeleton="/vokabeln"]');
      } else if (parts.length === 3 && parts[2] === "stammbaum") {
        targetSkeleton = container.querySelector('[data-skeleton="/vokabeln/family-tree"]');
      } else if (parts.length === 3) {
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
    }
  }

  // 3. Fallback to default skeleton if no specific skeleton found
  if (!targetSkeleton) {
    targetSkeleton = container.querySelector('[data-skeleton="default"]');
  }

  if (targetSkeleton) {
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
  }
});

// Ensure that on swap or page load, the skeleton container is hidden and actual content is shown.
document.addEventListener("astro:after-swap", () => {
  const container = document.querySelector("#skeleton-container");
  const content = document.querySelector("#page-content");
  if (container && content) {
    container.classList.add("hidden");
    container.setAttribute("aria-hidden", "true");
    content.classList.remove("hidden");
  }
});
