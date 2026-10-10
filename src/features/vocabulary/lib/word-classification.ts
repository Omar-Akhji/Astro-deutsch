import { parseNounGender, type GenderInfo } from "@/shared/lib";
import type { Word } from "../model/types.ts";

export type PartOfSpeechCategory = "noun" | "verb" | "adjective";

export interface EnrichedWord extends Word {
  genderInfo: GenderInfo;
}

export const KNOWN_ADJECTIVES = new Set([
  "ledig",
  "verheiratet",
  "geschieden",
  "verlobt",
  "verwitwet",
  "verwandt",
  "jung",
  "alt",
  "groß",
  "klein",
  "schön",
  "hässlich",
  "gut",
  "schlecht",
  "glücklich",
  "traurig",
  "müde",
  "gesund",
  "krank",
  "freundlich",
  "unfreundlich",
  "reich",
  "arm",
  "teuer",
  "billig",
  "schnell",
  "langsam",
  "neu",
  "wichtig",
]);

/** Classifies a vocabulary word into a grammatical part of speech category. */
export function classifyWord(word: Word): PartOfSpeechCategory {
  if (word.partOfSpeech) {
    return word.partOfSpeech;
  }

  const text = word.german.trim();
  const lower = text.toLowerCase();

  if (KNOWN_ADJECTIVES.has(lower)) {
    return "adjective";
  }

  if (
    lower.startsWith("der ") ||
    lower.startsWith("die ") ||
    lower.startsWith("das ") ||
    lower.startsWith("der/die ") ||
    lower.startsWith("das/der ") ||
    lower.startsWith("die/der ")
  ) {
    return "noun";
  }

  if (lower.startsWith("sich ")) {
    return "verb";
  }

  const firstChar = text.charAt(0);
  if (firstChar === firstChar.toUpperCase() && firstChar !== firstChar.toLowerCase()) {
    return "noun";
  }

  if (
    lower.endsWith("ig") ||
    lower.endsWith("lich") ||
    lower.endsWith("isch") ||
    lower.endsWith("bar") ||
    lower.endsWith("haft") ||
    lower.endsWith("los") ||
    lower.endsWith("voll") ||
    lower.endsWith("sam")
  ) {
    return "adjective";
  }

  if (lower.endsWith("en") || lower.endsWith("eln") || lower.endsWith("ern")) {
    return "verb";
  }

  return "adjective";
}

export interface ClassifiedWords {
  nouns: EnrichedWord[];
  verbs: EnrichedWord[];
  adjectives: EnrichedWord[];
}

/** Enriches vocabulary words with gender information and groups them by grammatical category. */
export function groupWordsByClassification(words: Word[]): ClassifiedWords {
  const nouns: EnrichedWord[] = [];
  const verbs: EnrichedWord[] = [];
  const adjectives: EnrichedWord[] = [];

  for (const word of words) {
    const genderInfo = parseNounGender(word.german);
    const enriched: EnrichedWord = { ...word, genderInfo };
    const category = classifyWord(word);
    if (category === "noun") {
      nouns.push(enriched);
    } else if (category === "verb") {
      verbs.push(enriched);
    } else {
      adjectives.push(enriched);
    }
  }

  return { nouns, verbs, adjectives };
}
