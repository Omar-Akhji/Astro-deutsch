import type { z } from "astro/zod";
import type {
  familyMemberSchema,
  storySchema,
  vocabularyCollectionSchema,
  vocabularySectionSchema,
  vocabularyTopicSchema,
  wordSchema,
} from "./schema.ts";

export type Word = z.infer<typeof wordSchema>;
export type FamilyMember = z.infer<typeof familyMemberSchema>;
export type StoryDefinition = z.infer<typeof storySchema>;
export type VocabularyTopic = z.infer<typeof vocabularyTopicSchema>;
export type Topic = VocabularyTopic;
export type VocabularySection = z.infer<typeof vocabularySectionSchema>;
export type VocabularyItem = z.infer<typeof vocabularyCollectionSchema>;


