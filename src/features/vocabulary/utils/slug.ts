export const CHAPTER_ID_TO_SLUG: Record<number, string> = {
  1: "menschen",
  2: "zu-hause",
  3: "essen-und-trinken",
  4: "unterwegs",
  5: "in-der-stadt",
  6: "bildung-und-beruf",
  7: "kommunikation",
  8: "freizeit",
  9: "koerper-und-gesundheit",
  10: "notfaelle",
  11: "erde-und-natur",
  12: "zahlen-und-masse",
};

export const CHAPTER_SLUG_ALIASES: Record<string, string> = {
  "körper-und-gesundheit": "koerper-und-gesundheit",
  notfälle: "notfaelle",
  "zahlen-und-maße": "zahlen-und-masse",
};

export function getVocabularySlug(item: { id: number; slug?: string | undefined }): string {
  return item.slug || CHAPTER_ID_TO_SLUG[item.id] || String(item.id);
}
