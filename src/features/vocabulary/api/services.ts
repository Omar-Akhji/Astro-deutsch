import type { ApiResponse } from "@/shared/model";
import type { VocabItem } from "../model/types.ts";
import { vocabList } from "./data.ts";

const vocabMap = new Map(vocabList.map((item) => [String(item.id), item]));

export async function getVocabList(): Promise<ApiResponse<VocabItem[]>> {
  return { data: vocabList, success: true };
}

export async function getVocabById(
  id: string | number,
): Promise<ApiResponse<VocabItem | undefined>> {
  const item = vocabMap.get(String(id));

  return {
    data: item,
    success: Boolean(item),
    message: item ? undefined : `Vocabulary item with id ${id} not found`,
  };
}
