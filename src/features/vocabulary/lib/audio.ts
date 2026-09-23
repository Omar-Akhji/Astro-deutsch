import { speakGerman } from "@/shared/lib";

export function initVocabularyAudio() {
  const buttons = document.querySelectorAll<HTMLButtonElement>("button[data-speak]");
  buttons.forEach((btn) => {
    if (btn.dataset["audioBound"]) return;
    btn.dataset["audioBound"] = "true";

    btn.addEventListener("click", () => {
      const text = btn.dataset["speak"];
      if (!text) return;

      btn.classList.add("animate-pulse", "border-yellow", "bg-yellow/20", "text-yellow");
      speakGerman(text);
      setTimeout(() => {
        btn.classList.remove("animate-pulse", "border-yellow", "bg-yellow/20", "text-yellow");
      }, 1200);
    });
  });
}

if (typeof document !== "undefined") {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    initVocabularyAudio();
  }
  document.addEventListener("astro:page-load", initVocabularyAudio);
}
