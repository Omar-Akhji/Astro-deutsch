import type { APIRoute } from "astro";
import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";

export const prerender = false;

const cache = new Map<string, Buffer>();
const MAX_CACHE_ITEMS = 500;

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const text = url.searchParams.get("text")?.trim();

  if (!text) {
    return Response.json({ error: "Missing 'text' query parameter" }, { status: 400 });
  }

  if (text.length > 2000) {
    return Response.json({ error: "Text exceeds 2000 characters limit" }, { status: 400 });
  }

  const voice = url.searchParams.get("voice")?.trim() || "de-DE-ConradNeural";
  const rateParam = url.searchParams.get("rate")?.trim();

  let rateOption: string | undefined;
  if (rateParam) {
    const num = Number(rateParam);
    if (!Number.isNaN(num) && num > 0.4 && num < 2.5) {
      const pct = Math.round((num - 1) * 100);
      rateOption = pct >= 0 ? `+${pct.toString()}%` : `${pct.toString()}%`;
    }
  }

  const cacheKey = `${voice}_${rateOption ?? "default"}_${text}`;
  const cached = cache.get(cacheKey);
  if (cached) {
    return new Response(new Uint8Array(cached), {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": cached.length.toString(),
        "Accept-Ranges": "bytes",
        "Cache-Control": "public, max-age=86400, immutable",
        "X-Cache": "HIT",
      },
    });
  }

  try {
    const tts = new MsEdgeTTS();
    await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3);

    const { audioStream } = tts.toStream(text, rateOption ? { rate: rateOption } : undefined);

    const chunks: Buffer[] = [];
    await new Promise<void>((resolve, reject) => {
      audioStream.on("data", (chunk: Buffer) => {
        chunks.push(chunk);
      });
      audioStream.on("close", () => {
        resolve();
      });
      audioStream.on("error", (err: unknown) => {
        reject(err instanceof Error ? err : new Error(String(err)));
      });
    });

    const fullBuffer = Buffer.concat(chunks);

    if (cache.size >= MAX_CACHE_ITEMS) {
      const firstKey = cache.keys().next().value;
      if (firstKey) cache.delete(firstKey);
    }
    cache.set(cacheKey, fullBuffer);

    return new Response(new Uint8Array(fullBuffer), {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": fullBuffer.length.toString(),
        "Accept-Ranges": "bytes",
        "Cache-Control": "public, max-age=86400",
        "X-Cache": "MISS",
      },
    });
  } catch (error) {
    console.error("TTS generation error:", error);
    return Response.json(
      { error: "Failed to generate speech", details: String(error) },
      { status: 500 },
    );
  }
};
