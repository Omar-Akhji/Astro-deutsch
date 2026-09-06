import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
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

const vocabularySchema = z.object({
  id: z.number(),
  german: z.string(),
  category: z.string(),
  description: z.string().optional(),
  words: z.array(wordSchema).optional(),
  sections: z.array(vocabSectionSchema).optional(),
});

const vocabulary = defineCollection({
  loader: file("./src/content/vocabulary/vocab.json"),
  schema: vocabularySchema,
});

const stringArraySchema = z.array(z.string());

const tableDataSchema = z.object({ headers: stringArraySchema, rows: z.array(stringArraySchema) });

const contentTypeEnum = z.enum(["paragraph", "example", "note", "rule", "list"]);

const contentBlockSchema = z.object({
  type: contentTypeEnum,
  text: z.string().optional(),
  items: z.array(z.string()).optional(),
});

const grammarTopicSchema = z.object({
  id: z.string(),
  number: z.string(),
  title: z.string(),
  category: z.string(),
  description: z.string(),
  hasTable: z.boolean().optional(),
  tableData: tableDataSchema.optional(),
  content: z.array(contentBlockSchema).optional(),
  tips: z.array(z.string()).optional(),
  usage: z.string().optional(),
});

const grammarSchema = z.object({
  id: z.string(),
  title: z.string(),
  topics: z.array(grammarTopicSchema),
});

const grammar = defineCollection({
  loader: file("./src/content/grammar/sections.json"),
  schema: grammarSchema,
});

export const collections = { vocabulary, grammar };
