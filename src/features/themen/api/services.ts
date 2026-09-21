import { wait } from "@/shared/lib";
import type { ApiResponse } from "@/shared/model";
import type { Thema } from "../model/types.ts";
import { themenData } from "./data.ts";

const THEMEN_DELAY_MS = 1200;

export async function getThemen(): Promise<ApiResponse<Thema[]>> {
  await wait(THEMEN_DELAY_MS);
  return { data: themenData, success: true };
}
