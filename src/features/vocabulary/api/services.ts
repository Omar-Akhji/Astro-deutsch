import type { ApiResponse } from "@/shared/model";
import type { VocabularyItem } from "../model/types.ts";
import { getCollection } from "astro:content";

export async function getVocabularyList(): Promise<ApiResponse<VocabularyItem[]>> {
  const entries = await getCollection("vocabulary");
  const data = entries.map((e) => e.data);
  return { data, success: true };
}

export async function getVocabularyById(
  id: string | number,
): Promise<ApiResponse<VocabularyItem | undefined>> {
  const entries = await getCollection("vocabulary");
  const item = entries.find((e) => e.data.id === Number(id));

  return {
    data: item ? item.data : undefined,
    success: Boolean(item),
    message: item ? undefined : `Vocabulary item with id ${String(id)} not found`,
  };
}
