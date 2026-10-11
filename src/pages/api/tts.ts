import type { APIRoute } from "astro";
import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";

export const prerender = false;

const cache = new Map<string, Buffer>();
const MAX_CACHE_ITEMS = 500;
const GOOGLE_TTS_MAX_CHUNK = 180;
const EDGE_TIMEOUT_MS = 2500;

async function fetchGoogleTTSChunk(chunk: string, lang = "de"): Promise<Buffer> {
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${lang}&client=tw-ob&q=${encodeURIComponent(chunk)}`;
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Referer: "https://translate.google.com/",
    },
  });
  if (!res.ok) {
    throw new Error(`Google TTS failed with status ${res.status.toString()}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

async function fetchGoogleTTS(text: string, lang = "de"): Promise<Buffer> {
  if (text.length <= GOOGLE_TTS_MAX_CHUNK) {
    return fetchGoogleTTSChunk(text, lang);
  }

  const words = text.split(" ");
  const chunks: string[] = [];
  let current = "";
  for (const w of words) {
    if (`${current} ${w}`.trim().length > GOOGLE_TTS_MAX_CHUNK) {
      if (current) chunks.push(current.trim());
      current = w;
    } else {
      current = `${current} ${w}`.trim();
    }
  }
  if (current) chunks.push(current.trim());

  const buffers = await Promise.all(chunks.map((chunk) => fetchGoogleTTSChunk(chunk, lang)));
  return Buffer.concat(buffers);
}

async function generateEdgeTTS(text: string, voice: string, rateOption?: string): Promise<Buffer> {
  const ttsPromise = (async (): Promise<Buffer> => {
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

    return Buffer.concat(chunks);
  })();

  const timeoutPromise = new Promise<never>((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Edge TTS timed out after ${EDGE_TIMEOUT_MS.toString()}ms`));
    }, EDGE_TIMEOUT_MS);
  });

  return Promise.race([ttsPromise, timeoutPromise]);
}

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const text = url.searchParams.get("text")?.trim();

  if (!text) {
    return Response.json({ error: "Missing 'text' query parameter" }, { status: 400 });
  }

  if (text.length > 2000) {
    return Response.json({ error: "Text exceeds 2000 characters limit" }, { status: 400 });
  }

  // A blank voice parameter should select the default voice, just like an omitted parameter.
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
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

  let audioBuffer: Buffer;
  let engine = "msedge";

  try {
    audioBuffer = await generateEdgeTTS(text, voice, rateOption);
  } catch (edgeError: unknown) {
    const msg = edgeError instanceof Error ? edgeError.message : String(edgeError);
    console.warn(`[TTS] Edge TTS unavailable (${msg}), using resilient Google TTS fallback.`);
    try {
      audioBuffer = await fetchGoogleTTS(text, "de");
      engine = "google";
    } catch (fallbackError: unknown) {
      console.error("[TTS] Fallback engine also failed:", fallbackError);
      const details =
        fallbackError instanceof Error ? fallbackError.message : String(fallbackError);
      return Response.json({ error: "Failed to generate speech", details }, { status: 500 });
    }
  }

  if (cache.size >= MAX_CACHE_ITEMS) {
    const firstKey = cache.keys().next().value;
    if (firstKey) cache.delete(firstKey);
  }
  cache.set(cacheKey, audioBuffer);

  return new Response(new Uint8Array(audioBuffer), {
    status: 200,
    headers: {
      "Content-Type": "audio/mpeg",
      "Content-Length": audioBuffer.length.toString(),
      "Accept-Ranges": "bytes",
      "Cache-Control": "public, max-age=86400",
      "X-Cache": "MISS",
      "X-TTS-Engine": engine,
    },
  });
};
