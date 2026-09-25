import type { ApiResponse } from "@/shared/model";
import type { GrammarSection, GrammarTopic } from "../model/types.ts";
import { getCollection } from "astro:content";

export async function getGrammarSections(): Promise<ApiResponse<GrammarSection[]>> {
  const entries = await getCollection("grammar");
  const data = entries.map((e) => e.data);
  return { data, success: true };
}

export async function getGrammarSection(
  sectionId: string,
): Promise<ApiResponse<GrammarSection | undefined>> {
  const entries = await getCollection("grammar");
  const entry = entries.find((e) => e.data.id === sectionId);

  return {
    data: entry ? entry.data : undefined,
    success: Boolean(entry),
    message: entry ? undefined : `Grammar section ${sectionId} not found`,
  };
}

export async function getGrammarTopic(
  sectionId: string,
  topicId: string,
): Promise<ApiResponse<GrammarTopic | undefined>> {
  const sectionResponse = await getGrammarSection(sectionId);
  if (!sectionResponse.success) {
    return { data: undefined, success: false, message: sectionResponse.message };
  }

  const section = sectionResponse.data;
  const topic = section?.topics.find((t) => t.id === topicId);

  return {
    data: topic,
    success: Boolean(topic),
    message: topic ? undefined : `Grammar topic ${topicId} not found`,
  };
}
