import { z } from "astro/zod";

export const grammarCellSchema = z.union([
  z.string(),
  z.object({ text: z.string(), highlight: z.boolean().optional() }),
]);

export const grammarTableRowSchema = z.array(grammarCellSchema);
export const grammarUsageSchema = z.object({ speaker: z.string(), text: z.string() });

export const grammarSectionContentSchema = z.object({
  title: z.string(),
  items: z.array(grammarCellSchema),
});

export const grammarTableDataSchema = z.object({
  caption: z.string().optional(),
  headers: z.array(z.string()),
  rows: z.array(grammarTableRowSchema),
});

export const grammarSubtopicSchema = z.object({
  id: z.string(),
  number: z.string(),
  title: z.string(),
  description: z.string(),
  hasTable: z.boolean().optional(),
  tableData: grammarTableDataSchema.optional(),
  content: z.array(grammarSectionContentSchema).optional(),
  usage: z.array(grammarUsageSchema).optional(),
  tips: z.array(z.string()).optional(),
});

export const grammarTopicSchema = z.object({
  id: z.string(),
  number: z.string(),
  category: z.string(),
  title: z.string(),
  description: z.string(),
  example: z.string().optional(),
  gradients: z.array(z.string()).optional(),
  hasTable: z.boolean().optional(),
  subtopics: z.array(grammarSubtopicSchema).optional(),
  content: z.array(grammarSectionContentSchema).optional(),
  tableData: grammarTableDataSchema.optional(),
  usage: z.array(grammarUsageSchema).optional(),
  tips: z.array(z.string()).optional(),
});

export const grammarCollectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  icon: z.string(),
  gradients: z.array(z.string()),
  topics: z.array(grammarTopicSchema),
});
