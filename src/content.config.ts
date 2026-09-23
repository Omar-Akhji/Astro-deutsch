import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { quizCollectionSchema } from "@/features/quiz";

const quiz = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/quiz" }),
  schema: quizCollectionSchema,
});

export const collections = { quiz };
