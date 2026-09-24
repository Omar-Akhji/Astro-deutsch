import type { ApiResponse } from "@/shared/model";
import type { VocabItem } from "../model/types.ts";
import { getCollection } from "astro:content";

export async function getVocabList(): Promise<ApiResponse<VocabItem[]>> {
  const entries = await getCollection("vocabulary");
  const data = entries.map((e) => e.data as unknown as VocabItem);
  return { data, success: true };
}

export async function getVocabById(
  id: string | number,
): Promise<ApiResponse<VocabItem | undefined>> {
  const entries = await getCollection("vocabulary");
  const item = entries.find((e) => e.data.id === Number(id));

  return {
    data: item ? (item.data as unknown as VocabItem) : undefined,
    success: Boolean(item),
    message: item ? undefined : `Vocabulary item with id ${id} not found`,
  };
}
