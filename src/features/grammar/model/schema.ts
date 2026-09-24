import { z } from "astro/zod";

const grammarCellSchema = z.union([
  z.string(),
  z.object({ text: z.string(), highlight: z.boolean().optional() }),
]);

const grammarTableRowSchema = z.array(grammarCellSchema);
const grammarUsageSchema = z.object({ speaker: z.string(), text: z.string() });

const grammarSectionContentSchema = z.object({
  title: z.string(),
  items: z.array(grammarCellSchema),
});

const grammarTableDataSchema = z.object({
  caption: z.string().optional(),
  headers: z.array(z.string()),
  rows: z.array(grammarTableRowSchema),
});

const grammarSubtopicSchema = z.object({
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

const grammarTopicSchema = z.object({
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
