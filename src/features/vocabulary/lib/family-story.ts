import gsap from "@/shared/lib/gsap.ts";

interface GlossaryEntry {
  german: string;
  arabic: string;
  translation: string;
  explanation: string;
  example: string;
}

function escapeHtml(value: string): string {
  const entityMap: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return value.replaceAll(/[&<>"']/g, (char) => entityMap[char] ?? char);
}

export function initFamilyStoryTooltips() {
  const stories = document.querySelectorAll<HTMLElement>(".family-story, .topic-story");
  for (const story of stories) {
    if (story.dataset["tooltipBound"]) continue;
    story.dataset["tooltipBound"] = "true";

    const tooltip = story.querySelector<HTMLElement>(".story-tooltip");
    const rawGlossary = story.dataset["glossary"];
    if (!tooltip || !rawGlossary) continue;

    let parsedList: GlossaryEntry[] = [];
    try {
      const parsed: unknown = JSON.parse(rawGlossary);
      if (Array.isArray(parsed)) {
        parsedList = parsed as GlossaryEntry[];
      }
    } catch {
      continue;
    }

    const entries = new Map<string, GlossaryEntry>();
    for (const entry of parsedList) {
      entries.set(entry.german, entry);
      entries.set(entry.german.toLowerCase(), entry);

      const cleanForm = entry.german.split(",", 2)[0]?.trim().replace(/\s*\(Pl\.\)/i, "") ?? "";
      entries.set(cleanForm, entry);
      entries.set(cleanForm.toLowerCase(), entry);

      const noArticle = cleanForm.replace(/^(der|die|das|der\/die|ein|eine)\s+/i, "").trim();
      entries.set(noArticle, entry);
      entries.set(noArticle.toLowerCase(), entry);

      if (!entry.german.includes("/")) continue;

      const parts = entry.german.split("/").map((p) => p.trim());
      for (const part of parts) {
        entries.set(part, entry);
        entries.set(part.toLowerCase(), entry);
        const partNoArticle = part.replace(/^(der|die|das|der\/die|ein|eine)\s+/i, "").trim();
        entries.set(partNoArticle, entry);
        entries.set(partNoArticle.toLowerCase(), entry);
      }
    }

    const hide = () => {
      gsap.to(tooltip, {
        autoAlpha: 0,
        scale: 0.96,
        y: -2,
        duration: 0.14,
        ease: "power2.in",
        overwrite: "auto",
        onComplete: () => {
          tooltip.hidden = true;
        },
      });
    };

    const show = (word: HTMLElement) => {
      const rawWord = (word.dataset["word"] ?? "").trim();
      const cleanRaw = rawWord.split(",", 2)[0]?.trim().replace(/\s*\(Pl\.\)/i, "") ?? "";
      const noArticleRaw = cleanRaw.replace(/^(der|die|das|der\/die|ein|eine)\s+/i, "").trim();

      const entry =
        entries.get(rawWord) ??
        entries.get(rawWord.toLowerCase()) ??
        entries.get(cleanRaw) ??
        entries.get(cleanRaw.toLowerCase()) ??
        entries.get(noArticleRaw) ??
        entries.get(noArticleRaw.toLowerCase());

      if (!entry) return;

      const exampleHtml = entry.example
        ? `<div class="example">„${escapeHtml(entry.example)}“</div>`
        : "";

      /* eslint-disable-next-line no-unsanitized/property */
      tooltip.innerHTML = `<strong>${escapeHtml(entry.german)}</strong><div class="translation">${escapeHtml(entry.translation)}</div><div class="arabic" dir="rtl">${escapeHtml(entry.arabic)}</div><div class="explanation">${escapeHtml(entry.explanation)}</div>${exampleHtml}`;

      tooltip.hidden = false;
      const bounds = word.getBoundingClientRect();
      const tooltipWidth = tooltip.offsetWidth || 300;
      const tooltipHeight = tooltip.offsetHeight || 160;

      const left = Math.max(16, Math.min(bounds.left, globalThis.innerWidth - tooltipWidth - 16));
      const top =
        bounds.bottom + tooltipHeight + 12 < globalThis.innerHeight
          ? bounds.bottom + 8
          : Math.max(16, bounds.top - tooltipHeight - 8);

      tooltip.style.left = `${left.toString()}px`;
      tooltip.style.top = `${top.toString()}px`;

      gsap.fromTo(
        tooltip,
        { autoAlpha: 0, scale: 0.94, y: -4 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.18, ease: "power2.out", overwrite: "auto" },
      );
    };

    const words = story.querySelectorAll<HTMLElement>(".story-word");
    for (const word of words) {
      word.addEventListener("mouseenter", () => {
        show(word);
      });
      word.addEventListener("mouseleave", hide);
      word.addEventListener("focus", () => {
        show(word);
      });
      word.addEventListener("blur", hide);
      word.addEventListener("click", (e) => {
        show(word);
        e.stopPropagation();
      });
    }

    globalThis.addEventListener("scroll", hide, { passive: true });
  }
}

if (typeof document !== "undefined") {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    initFamilyStoryTooltips();
  }
  document.addEventListener("astro:page-load", initFamilyStoryTooltips);
}
