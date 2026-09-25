import type { ApiResponse } from "@/shared/model";
import type { ExamLevel, RedemittelCategory } from "../model/types.ts";
import { getCollection } from "astro:content";

export async function getExamLevels(): Promise<ApiResponse<ExamLevel[]>> {
  const entries = await getCollection("exams");
  const data = entries.map((e) => e.data as unknown as ExamLevel);
  return { data, success: true };
}

export async function getExamLevel(id: string): Promise<ApiResponse<ExamLevel | undefined>> {
  const entries = await getCollection("exams");
  const entry = entries.find((e) => e.data.id === id.toLowerCase());

  return {
    data: entry ? (entry.data as unknown as ExamLevel) : undefined,
    success: Boolean(entry),
    message: entry ? undefined : "Exam level not found",
  };
}

export async function getRedemittel(level: string): Promise<ApiResponse<RedemittelCategory>> {
  const entries = await getCollection("redemittel");
  const entry = entries.find((e) => e.data.level === level.toLowerCase());
  const data = (entry?.data.categories ?? {}) as unknown as RedemittelCategory;
  return { data, success: true };
}

export function getModelTests(level: string): ApiResponse<number[]> {
  const lvl = level.toLowerCase();
  const tests = lvl === "b1" ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1];
  return { data: tests, success: true };
}
