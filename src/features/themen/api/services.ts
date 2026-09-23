import type { ApiResponse } from "@/shared/model";
import type { Thema } from "../model/types.ts";
import { themenData } from "./data.ts";

export async function getThemen(): Promise<ApiResponse<Thema[]>> {
  return { data: themenData, success: true };
}
