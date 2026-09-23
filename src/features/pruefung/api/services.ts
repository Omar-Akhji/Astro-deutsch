import type { ApiResponse } from "@/shared/model";
import type { ExamLevel, RedemittelCategory } from "../model/types.ts";
import { examLevels, redemittelData } from "./data.ts";

const examMap = new Map(examLevels.map((e) => [e.id, e]));

export async function getExamLevels(): Promise<ApiResponse<ExamLevel[]>> {
  return { data: examLevels, success: true };
}

export async function getExamLevel(id: string): Promise<ApiResponse<ExamLevel | undefined>> {
  const exam = examMap.get(id.toLowerCase());
  return { data: exam, success: Boolean(exam), message: exam ? undefined : "Exam level not found" };
}

export async function getRedemittel(level: string): Promise<ApiResponse<RedemittelCategory>> {
  const lvl = level.toLowerCase();
  const data = lvl === "b1" ? redemittelData.b1 : redemittelData.b2;
  return { data, success: true };
}

export async function getModelTests(level: string): Promise<ApiResponse<number[]>> {
  const lvl = level.toLowerCase();
  const tests = lvl === "b1" ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1];
  return { data: tests, success: true };
}
