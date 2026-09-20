/**
 * Zero-latency German Text-To-Speech (TTS) using the Web Speech API. Provides clear, paced native
 * pronunciation for language learners.
 */
export function speakGerman(text: string, rate: number = 0.9): boolean {
  if (typeof window === "undefined" || !("speechSynthesis" in globalThis)) {
    return false;
  }

  try {
    globalThis.speechSynthesis.cancel();

    // Clean text: strip parenthesis annotations like (die), (Pl.) for pronunciation
    const cleanText = text
      .replaceAll(/\(.*?\)/g, "")
      .replaceAll(/[•/]/g, " ")
      .trim();

    if (!cleanText) return false;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = "de-DE";
    utterance.rate = rate; // 0.9 is calibrated for educational clarity

    // Select natural German voice if available
    const voices = globalThis.speechSynthesis.getVoices();
    const germanVoice =
      voices.find(
        (v) =>
          v.lang.startsWith("de")
          && (v.name.includes("Natural") || v.name.includes("Google") || v.localService),
      ) ?? voices.find((v) => v.lang.startsWith("de"));

    if (germanVoice) {
      utterance.voice = germanVoice;
    }

    globalThis.speechSynthesis.speak(utterance);
    return true;
  } catch (error) {
    console.warn("Speech synthesis error:", error);
    return false;
  }
}

export type GermanGender = "der" | "die" | "das" | "pl" | null;

export interface GenderInfo {
  gender: GermanGender;
  article: string | null;
  baseWord: string;
  badgeClass: string;
  borderClass: string;
  textClass: string;
}

/** Extracts and tags German noun genders (der/die/das/Plural) with pedagogical color semantics. */
export function parseNounGender(text: string): GenderInfo {
  const trimmed = text.trim();
  const lower = trimmed.toLowerCase();

  if (lower.startsWith("der ")) {
    return {
      gender: "der",
      article: "der",
      baseWord: trimmed.slice(4),
      badgeClass: "bg-blue-500/15 text-blue-400 border-blue-500/30",
      borderClass: "border-blue-500/30",
      textClass: "text-blue-300",
    };
  }

  if (lower.startsWith("die ") && (lower.includes("(pl.)") || lower.includes("pl."))) {
    return {
      gender: "pl",
      article: "die (Pl.)",
      baseWord: trimmed
        .slice(4)
        .replace(/\(pl\.?\)/i, "")
        .trim(),
      badgeClass: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      borderClass: "border-amber-500/30",
      textClass: "text-amber-300",
    };
  }

  if (lower.startsWith("die ")) {
    return {
      gender: "die",
      article: "die",
      baseWord: trimmed.slice(4),
      badgeClass: "bg-rose-500/15 text-rose-400 border-rose-500/30",
      borderClass: "border-rose-500/30",
      textClass: "text-rose-300",
    };
  }

  if (lower.startsWith("das ")) {
    return {
      gender: "das",
      article: "das",
      baseWord: trimmed.slice(4),
      badgeClass: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      borderClass: "border-emerald-500/30",
      textClass: "text-emerald-300",
    };
  }

  return {
    gender: null,
    article: null,
    baseWord: trimmed,
    badgeClass: "",
    borderClass: "",
    textClass: "text-white/90",
  };
}
