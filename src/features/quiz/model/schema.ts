import { z } from "astro/zod";

const stringArraySchema = z.array(z.string());
const stringOrArraySchema = z.union([z.string(), stringArraySchema]);

export const questionSchema = z.object({
  id: z.number(),
  type: z.enum(["multiple-choice", "matching", "fill-in", "drag-drop", "fill-gap"]).optional(),
  question: z.string(),
  context: z.string().optional(),
  gapText: z.string().optional(),
  options: stringArraySchema.optional(),
  correctAnswer: stringOrArraySchema,
  userAnswer: stringOrArraySchema.optional(),
  explanation: z.string().optional(),
  teil: z.number().optional(),
  teilTitle: z.string().optional(),
  teilInstruction: z.string().optional(),
  audioUrl: z.string().optional(),
});

export const quizCollectionSchema = z.object({
  level: z.string(),
  skill: z.string(),
  testId: z.number(),
  questions: z.array(questionSchema),
});
