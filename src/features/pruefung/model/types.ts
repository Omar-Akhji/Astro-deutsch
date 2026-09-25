import type { z } from "astro/zod";
import type {
  examCollectionSchema,
  examPartSchema,
  examPartSubSchema,
  phraseGroupSchema,
  redemittelCollectionSchema,
} from "./schema.ts";

export type ExamPartSub = z.infer<typeof examPartSubSchema>;
export type ExamPart = z.infer<typeof examPartSchema>;
export type ExamLevel = z.infer<typeof examCollectionSchema>;
export type PhraseGroup = z.infer<typeof phraseGroupSchema>;
export type RedemittelCategory = Record<string, PhraseGroup[]>;
export type RedemittelData = z.infer<typeof redemittelCollectionSchema>;
