import { z } from "astro/zod";

const examPartSubSchema = z.object({
  name: z.string(),
  taskType: z.string(),
  items: z.number(),
  points: z.number(),
  description: z.string().optional(),
  checklist: z.array(z.string()).optional(),
});

const examPartSchema = z.object({
  id: z.string(),
  title: z.string(),
  duration: z.string(),
  points: z.number(),
  description: z.string(),
  tips: z.array(z.string()),
  parts: z.array(examPartSubSchema),
});

export const examCollectionSchema = z.object({
  id: z.string(),
  level: z.string(),
  title: z.string(),
  category: z.string(),
  description: z.string(),
  totalDuration: z.string(),
  passingScore: z.string(),
  sections: z.array(examPartSchema),
});

/** Recursive phrase group: a group can contain strings or nested groups */
const basePhraseGroupSchema = z.object({
  label: z.string(),
  badge: z.string().optional(),
});

type PhraseGroupInput = z.infer<typeof basePhraseGroupSchema> & {
  phrases: (string | PhraseGroupInput)[];
};

const phraseGroupSchema: z.ZodType<PhraseGroupInput> = basePhraseGroupSchema.extend({
  phrases: z.lazy(() => z.array(z.union([z.string(), phraseGroupSchema]))),
});

export const redemittelCollectionSchema = z.object({
  level: z.string(),
  categories: z.record(z.string(), z.array(phraseGroupSchema)),
});
