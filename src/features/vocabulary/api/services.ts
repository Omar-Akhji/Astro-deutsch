import type { ApiResponse } from "@/shared/model";
import { getCollection } from "astro:content";
import type { VocabularyItem } from "../model/types.ts";
import { CHAPTER_ID_TO_SLUG, CHAPTER_SLUG_ALIASES } from "../utils/slug.ts";

const chapterSlugAliases = new Map(Object.entries(CHAPTER_SLUG_ALIASES));
const chapterSlugs = new Map(
  Object.entries(CHAPTER_ID_TO_SLUG).map(([id, slug]) => [Number(id), slug]),
);

export async function getVocabularyList(): Promise<ApiResponse<VocabularyItem[]>> {
  const entries = await getCollection("vocabulary");
  const data = entries.map((e) => e.data).toSorted((a, b) => a.id - b.id);
  return { data, success: true };
}

export async function getVocabularyById(
  idOrSlug: string | number,
): Promise<ApiResponse<VocabularyItem | undefined>> {
  const entries = await getCollection("vocabulary");
  const raw = String(idOrSlug).toLowerCase().trim();
  const normalized = chapterSlugAliases.get(raw) ?? raw;
  const num = Number(idOrSlug);

  const item = entries.find((e) => {
    if (!Number.isNaN(num) && e.data.id === num) return true;
    if (e.id === normalized || e.data.slug?.toLowerCase() === normalized) return true;
    const fallbackSlug = chapterSlugs.get(e.data.id);
    return fallbackSlug?.toLowerCase() === normalized;
  });

  return {
    data: item ? item.data : undefined,
    success: Boolean(item),
    message: item ? undefined : `Vocabulary item with id or slug ${String(idOrSlug)} not found`,
  };
}
