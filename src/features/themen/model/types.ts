import type { z } from "astro/zod";
import type { themenCollectionSchema } from "./schema.ts";

export type Thema = z.infer<typeof themenCollectionSchema>;
