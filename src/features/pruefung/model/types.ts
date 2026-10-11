import type { z } from "astro/zod";
import type {
  examCollectionSchema,
  phraseGroupSchema,
} from "./schema.ts";

export type ExamLevel = z.infer<typeof examCollectionSchema>;
export type PhraseGroup = z.infer<typeof phraseGroupSchema>;
export type RedemittelCategory = Record<string, PhraseGroup[]>;

