import { z } from "astro/zod";

const wordSchema = z.object({
  german: z.string(),
  arabic: z.string(),
  english: z.string().optional(),
  example: z.string().optional(),
});

const familyMemberSchema = z.object({
  id: z.string(),
  german: z.string(),
  arabic: z.string(),
  gender: z.enum(["male", "female"]),
  relation: z.string(),
  level: z.number(),
  partnerId: z.string().optional(),
});

const vocabTopicSchema = z.object({
  id: z.string(),
  title: z.string(),
  words: z.array(wordSchema).optional(),
  familyTree: z.array(familyMemberSchema).optional(),
});

const vocabSectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  topics: z.array(vocabTopicSchema),
});

export const vocabCollectionSchema = z.object({
  id: z.number(),
  german: z.string(),
  category: z.string(),
  description: z.string().optional(),
  words: z.array(wordSchema).optional(),
  sections: z.array(vocabSectionSchema).optional(),
});
