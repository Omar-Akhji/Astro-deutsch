import type { z } from "astro/zod";
import type {
  cefrLevelSchema,
  familyMemberSchema,
  storiesRecordSchema,
  storySchema,
  vocabularyCollectionSchema,
  vocabularySectionSchema,
  vocabularyTopicSchema,
  wordSchema,
} from "./schema.ts";

export type Word = z.infer<typeof wordSchema>;
export type FamilyMember = z.infer<typeof familyMemberSchema>;
export type StoryDefinition = z.infer<typeof storySchema>;
export type CefrLevel = z.infer<typeof cefrLevelSchema>;
export type TopicStoriesRecord = z.infer<typeof storiesRecordSchema>;
export type Topic = z.infer<typeof vocabularyTopicSchema>;
export type VocabularySection = z.infer<typeof vocabularySectionSchema>;
export type VocabularyItem = z.infer<typeof vocabularyCollectionSchema>;

