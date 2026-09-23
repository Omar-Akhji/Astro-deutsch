import type { ApiResponse } from "@/shared/model";
import { getCollection, getEntry } from "astro:content";
import type { Question } from "../model/types.ts";

export const getQuestions = async (
  level: string,
  skill: string,
  testId: number,
): Promise<ApiResponse<Question[]>> => {
  const normLevel = level.toLowerCase();
  const normSkill = skill.toLowerCase();
  const entryId = `${normLevel}/${normSkill}/${testId}`;

  const entry = await getEntry("quiz", entryId);
  if (entry) {
    return { data: entry.data.questions, success: true };
  }

  const allEntries = await getCollection("quiz");
  const found = allEntries.find(
    (e) =>
      e.data.level.toLowerCase() === normLevel
      && e.data.skill.toLowerCase() === normSkill
      && e.data.testId === testId,
  );

  return {
    data: found?.data.questions ?? [],
    success: Boolean(found),
    message: found ? undefined : `Test not found for ${level}/${skill}/${testId}`,
  };
};
