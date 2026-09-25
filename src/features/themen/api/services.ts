import type { ApiResponse } from "@/shared/model";
import type { Thema } from "../model/types.ts";
import { getCollection } from "astro:content";

export async function getThemen(): Promise<ApiResponse<Thema[]>> {
  const entries = await getCollection("themen");
  const data = entries.map((e) => e.data);
  return { data, success: true };
}
