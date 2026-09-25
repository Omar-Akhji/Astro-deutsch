import type { z } from "astro/zod";
import type {
  grammarCellSchema,
  grammarCollectionSchema,
  grammarSectionContentSchema,
  grammarSubtopicSchema,
  grammarTableDataSchema,
  grammarTopicSchema,
} from "./schema.ts";

export type GrammarCell = z.infer<typeof grammarCellSchema>;
export type GrammarSectionContent = z.infer<typeof grammarSectionContentSchema>;
export type GrammarTableData = z.infer<typeof grammarTableDataSchema>;
export type GrammarSubtopic = z.infer<typeof grammarSubtopicSchema>;
export type GrammarTopic = z.infer<typeof grammarTopicSchema>;
export type GrammarSection = z.infer<typeof grammarCollectionSchema>;
