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
