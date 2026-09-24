import { z } from "astro/zod";

export const themenCollectionSchema = z.object({
  id: z.string(),
  label: z.string(),
  cat: z.string(),
  text: z.string().optional().nullable(),
  pro: z.array(z.string()).optional(),
  con: z.array(z.string()).optional(),
  isTextOnly: z.boolean().optional(),
  sampleText: z.string().optional(),
});
