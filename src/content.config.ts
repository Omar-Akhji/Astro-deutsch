import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { grammarCollectionSchema } from "@/features/grammar/model/schema.ts";
import { examCollectionSchema, redemittelCollectionSchema } from "@/features/pruefung/model/schema.ts";
import { quizCollectionSchema } from "@/features/quiz/model/schema.ts";
import { themenCollectionSchema } from "@/features/themen/model/schema.ts";
import { vocabCollectionSchema } from "@/features/vocabulary/model/schema.ts";

const quiz = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/quiz" }),
  schema: quizCollectionSchema,
});

const vocabulary = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/vocabulary" }),
  schema: vocabCollectionSchema,
});

const grammar = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/grammar" }),
  schema: grammarCollectionSchema,
});

const themen = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/themen" }),
  schema: themenCollectionSchema,
});

const exams = defineCollection({
  loader: glob({ pattern: "exam-*.json", base: "./src/data/pruefung" }),
  schema: examCollectionSchema,
});

const redemittel = defineCollection({
  loader: glob({ pattern: "redemittel-*.json", base: "./src/data/pruefung" }),
  schema: redemittelCollectionSchema,
});

export const collections = { quiz, vocabulary, grammar, themen, exams, redemittel };
