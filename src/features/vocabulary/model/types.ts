import type { z } from "astro/zod";
import type {
  familyMemberSchema,
  vocabCollectionSchema,
  vocabSectionSchema,
  vocabTopicSchema,
  wordSchema,
} from "./schema.ts";

export type Word = z.infer<typeof wordSchema>;
export type FamilyMember = z.infer<typeof familyMemberSchema>;
export type VocabTopic = z.infer<typeof vocabTopicSchema>;
export type VocabSection = z.infer<typeof vocabSectionSchema>;
export type VocabItem = z.infer<typeof vocabCollectionSchema>;
