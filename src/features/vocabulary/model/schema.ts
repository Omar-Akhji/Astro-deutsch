import { z } from "astro/zod";

export const partOfSpeechSchema = z.enum(["noun", "verb", "adjective"]);

export const wordSchema = z.object({
  german: z.string(),
  arabic: z.string(),
  english: z.string().optional(),
  example: z.string().optional(),
  partOfSpeech: partOfSpeechSchema.optional(),
});

export const familyMemberSchema = z.object({
  id: z.string(),
  german: z.string(),
  arabic: z.string(),
  gender: z.enum(["male", "female"]),
  relation: z.string(),
  level: z.number(),
  partnerId: z.string().optional(),
});

const paragraphSchema = z.array(z.string());

export const cefrLevelSchema = z.enum(["A1", "A2", "B1", "B2"]);

export const storySchema = z.object({
  badge: z.string(),
  title: z.string(),
  intro: z.string().optional(),
  paragraphs: z.array(paragraphSchema),
});

export const storyLevelSchema = z.object({
  level: cefrLevelSchema.optional(),
  badge: z.string(),
  title: z.string(),
  intro: z.string().optional(),
  paragraphs: z.array(paragraphSchema),
});

export const storiesRecordSchema = z.record(cefrLevelSchema, storyLevelSchema);

export const vocabularyTopicSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  details: z.string().optional(),
  arabicDescription: z.string().optional(),
  words: z.array(wordSchema).optional(),
  familyTree: z.array(familyMemberSchema).optional(),
  story: storySchema.optional(),
  stories: storiesRecordSchema.optional(),
});


export const vocabularySectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  topics: z.array(vocabularyTopicSchema),
});

export const vocabularyCollectionSchema = z.object({
  id: z.number(),
  german: z.string(),
  category: z.string(),
  description: z.string().optional(),
  words: z.array(wordSchema).optional(),
  sections: z.array(vocabularySectionSchema).optional(),
});
