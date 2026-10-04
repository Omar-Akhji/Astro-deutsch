import { speakGerman } from "@/shared/lib";
import gsap from "@/shared/lib/gsap.ts";

export function initVocabularyAudio() {
  const buttons = document.querySelectorAll<HTMLButtonElement>("button[data-speak]");
  buttons.forEach((btn) => {
    if (btn.dataset["audioBound"]) return;
    btn.dataset["audioBound"] = "true";

    btn.addEventListener("click", () => {
      const text = btn.dataset["speak"];
      if (!text) return;

      btn.dataset["playing"] = "true";
      if (!globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.killTweensOf(btn);
        gsap.fromTo(
          btn,
          { scale: 1 },
          {
            scale: 1.1,
            duration: 0.2,
            repeat: 5,
            yoyo: true,
            ease: "sine.inOut",
            onComplete: () => gsap.set(btn, { clearProps: "transform" }),
          },
        );
      }
      speakGerman(text);
      setTimeout(() => {
        delete btn.dataset["playing"];
        if (globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          return;
        }

        gsap.killTweensOf(btn);
        gsap.set(btn, { clearProps: "transform" });
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
