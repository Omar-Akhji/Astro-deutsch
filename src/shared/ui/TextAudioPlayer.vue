<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { Play, Pause, Square, SkipBack, SkipForward, Volume2, Headphones } from "lucide-vue-next";

interface Props {
  /** Optional direct text to read */
  text?: string;
  /** Optional pre-defined array of sentences to read */
  sentences?: string[];
  /** Optional CSS selector of the container element containing the text/sentences to read */
  targetSelector?: string;
  /** Title of the player toolbar */
  title?: string;
  /** Subtitle/hint text */
  subtitle?: string;
  /** Initial playback speed (default: 0.9) */
  defaultRate?: number;
  /** Automatically scroll active sentence into view (default: true) */
  autoScroll?: boolean;
  /** CSS class to apply to the active sentence in the DOM */
  activeClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  text: "",
  sentences: () => [],
  targetSelector: "",
  title: "Audio-Begleiter",
  subtitle: "Klicke auf Vorlesen oder wähle einen Satz im Text",
  defaultRate: 0.9,
  autoScroll: true,
  activeClass: "is-active",
});

const isSupported = ref(true);
const isPlaying = ref(false);
const isPaused = ref(false);
const currentIndex = ref(0);
const currentRate = ref(props.defaultRate);
const resolvedSentences = ref<string[]>(props.sentences ? [...props.sentences] : []);
const domSentenceElements = ref<HTMLElement[]>([]);

let currentAudio: HTMLAudioElement | null = null;
let activeUtterance: SpeechSynthesisUtterance | null = null;
let advanceTimer: ReturnType<typeof setTimeout> | null = null;
let germanVoice: SpeechSynthesisVoice | null = null;

const cleanTextForSpeech = (raw: string): string => {
  return raw
    .replaceAll(/[„“”"«»]/g, "")
    .replaceAll(/\s+/g, " ")
    .trim();
};

const totalCount = computed(() => resolvedSentences.value.length);

const currentSentenceText = computed(() => {
  if (resolvedSentences.value.length === 0) return "";
  return resolvedSentences.value[currentIndex.value] ?? "";
});

const progressPercent = computed(() => {
  if (totalCount.value === 0) return 0;
  const progress = ((currentIndex.value + (isPlaying.value ? 1 : 0)) / totalCount.value) * 100;
  return Math.min(100, Math.round(progress));
});

const statusLabel = computed(() => {
  if (!isSupported.value) return "Sprachausgabe wird im Browser nicht unterstützt.";
  if (isPlaying.value) {
    return `Liest Satz ${(currentIndex.value + 1).toString()} von ${totalCount.value.toString()}...`;
  }
  if (isPaused.value) {
    return `Pausiert bei Satz ${(currentIndex.value + 1).toString()}.`;
  }
  return props.subtitle;
});

const loadGermanVoice = () => {
  if (typeof globalThis === "undefined" || !("speechSynthesis" in globalThis)) return;
  const voices = globalThis.speechSynthesis.getVoices();
  germanVoice =
    voices.find(
      (v) =>
        v.lang.startsWith("de")
        && (v.name.includes("Natural")
          || v.name.includes("Google")
          || v.name.includes("Katja")
          || v.name.includes("Conrad")
          || v.localService),
    )
    ?? voices.find((v) => v.lang.startsWith("de"))
    ?? null;
};

const syncDomHighlight = () => {
  if (domSentenceElements.value.length === 0) return;

  for (const [idx, el] of domSentenceElements.value.entries()) {
    if (idx === currentIndex.value && (isPlaying.value || isPaused.value)) {
      el.classList.add(props.activeClass);
      el.setAttribute("aria-current", "true");
    } else {
      el.classList.remove(props.activeClass);
      el.removeAttribute("aria-current");
    }
  }

  if (!props.autoScroll || (!isPlaying.value && !isPaused.value)) return;

  const activeEl = domSentenceElements.value[currentIndex.value];
  if (activeEl) {
    activeEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
};

const clearDomHighlight = () => {
  for (const el of domSentenceElements.value) {
    el.classList.remove(props.activeClass);
    el.removeAttribute("aria-current");
  }
};

const stopAllAudio = () => {
  if (advanceTimer) {
    clearTimeout(advanceTimer);
    advanceTimer = null;
  }
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.removeAttribute("src");
    currentAudio.load();
    currentAudio = null;
  }
  if (typeof globalThis !== "undefined" && "speechSynthesis" in globalThis) {
    globalThis.speechSynthesis.cancel();
  }
  activeUtterance = null;
};

const playViaWebSpeech = (textToSpeak: string) => {
  if (typeof globalThis === "undefined" || !("speechSynthesis" in globalThis)) {
    isSupported.value = false;
    isPlaying.value = false;
    isPaused.value = false;
    return;
  }

  if (globalThis.speechSynthesis.paused) {
    globalThis.speechSynthesis.resume();
  }

  if (!germanVoice) {
    loadGermanVoice();
  }

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  utterance.lang = "de-DE";
  utterance.rate = currentRate.value;
  if (germanVoice) {
    utterance.voice = germanVoice;
  }

  activeUtterance = utterance;

  utterance.addEventListener("end", () => {
    activeUtterance = null;
    if (!isPlaying.value) return;

    if (currentIndex.value < totalCount.value - 1) {
      currentIndex.value++;
      advanceTimer = setTimeout(() => {
        if (isPlaying.value) speakCurrentSentence();
      }, 260);
    } else {
      isPlaying.value = false;
      isPaused.value = false;
      syncDomHighlight();
    }
  });

  utterance.addEventListener("error", (e: SpeechSynthesisErrorEvent) => {
    activeUtterance = null;
    if (e.error === "canceled" || e.error === "interrupted") return;
    console.warn("Speech synthesis error:", e.error);
    isPlaying.value = false;
    syncDomHighlight();
  });

  globalThis.speechSynthesis.speak(utterance);
};

const speakCurrentSentence = async () => {
  const rawText = currentSentenceText.value;
  if (!rawText) return;

  const clean = cleanTextForSpeech(rawText);
  if (!clean) return;

  stopAllAudio();
  isPlaying.value = true;
  isPaused.value = false;
  syncDomHighlight();

  // High-fidelity native German pronunciation audio stream
  const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=de&client=tw-ob&q=${encodeURIComponent(clean)}`;
  const audio = new Audio(audioUrl);
  audio.playbackRate = currentRate.value;
  currentAudio = audio;

  audio.addEventListener("ended", () => {
    if (!isPlaying.value) return;

    if (currentIndex.value < totalCount.value - 1) {
      currentIndex.value++;
      advanceTimer = setTimeout(() => {
        if (isPlaying.value) void speakCurrentSentence();
      }, 260);
    } else {
      isPlaying.value = false;
      isPaused.value = false;
      syncDomHighlight();
    }
  });

  audio.addEventListener("error", (error) => {
    console.warn("Audio stream unavailable, attempting Web Speech fallback:", error);
    currentAudio = null;
    playViaWebSpeech(clean);
  });

  try {
    await audio.play();
  } catch (error) {
    console.warn("Audio play() was prevented, attempting Web Speech fallback:", error);
    currentAudio = null;
    playViaWebSpeech(clean);
  }
};

const togglePlay = async () => {
  if (isPlaying.value) {
    pause();
    return;
  }

  if (currentAudio && isPaused.value && !currentAudio.ended) {
    isPlaying.value = true;
    isPaused.value = false;
    currentAudio.playbackRate = currentRate.value;
    syncDomHighlight();
    try {
      await currentAudio.play();
    } catch {
      await speakCurrentSentence();
    }
    return;
  }

  await speakCurrentSentence();
};

const pause = () => {
  isPlaying.value = false;
  isPaused.value = true;
  if (advanceTimer) {
    clearTimeout(advanceTimer);
    advanceTimer = null;
  }
  if (currentAudio) {
    currentAudio.pause();
  }
  if (typeof globalThis !== "undefined" && "speechSynthesis" in globalThis) {
    globalThis.speechSynthesis.pause();
  }
  syncDomHighlight();
};

const stop = () => {
  isPlaying.value = false;
  isPaused.value = false;
  currentIndex.value = 0;
  stopAllAudio();
  clearDomHighlight();
};

const prevSentence = () => {
  if (currentIndex.value <= 0) return;
  currentIndex.value--;
  if (isPlaying.value) {
    speakCurrentSentence();
  } else {
    syncDomHighlight();
  }
};

const nextSentence = () => {
  if (currentIndex.value >= totalCount.value - 1) return;
  currentIndex.value++;
  if (isPlaying.value) {
    speakCurrentSentence();
  } else {
    syncDomHighlight();
  }
};

const setRate = (rate: number) => {
  currentRate.value = rate;
  if (currentAudio) {
    currentAudio.playbackRate = rate;
  }
  if (activeUtterance && isPlaying.value) {
    void speakCurrentSentence();
  }
};

const seekByClick = (event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement;
  if (!target || totalCount.value === 0) return;
  const rect = target.getBoundingClientRect();
  const ratio = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
  const targetIndex = Math.min(totalCount.value - 1, Math.floor(ratio * totalCount.value));
  currentIndex.value = targetIndex;
  speakCurrentSentence();
};

const discoverSentences = () => {
  if (props.sentences && props.sentences.length > 0) {
    resolvedSentences.value = [...props.sentences];
  }

  if (typeof document === "undefined") return;

  if (props.targetSelector) {
    const targetRoot = document.querySelector(props.targetSelector);
    if (!targetRoot) return;

    const sentenceEls = [...targetRoot.querySelectorAll<HTMLElement>("[data-sentence-index]")];

    if (sentenceEls.length > 0) {
      domSentenceElements.value = sentenceEls;
      if (resolvedSentences.value.length === 0) {
        resolvedSentences.value = sentenceEls.map((el) => el.textContent ?? "");
      }

      for (const [idx, el] of sentenceEls.entries()) {
        el.addEventListener("click", () => {
          currentIndex.value = idx;
          speakCurrentSentence();
        });
        el.addEventListener("keydown", (e: KeyboardEvent) => {
          if (e.key !== "Enter" && e.key !== " ") return;
          e.preventDefault();
          currentIndex.value = idx;
          speakCurrentSentence();
        });
      }
      return;
    }

    if (resolvedSentences.value.length === 0) {
      const rawText = targetRoot.textContent ?? "";
      const matches = rawText.match(/[^.!?]+[.!?]+(\s|$)|[^.!?]+$/g);
      if (matches && matches.length > 0) {
        resolvedSentences.value = matches.map((s) => s.trim()).filter(Boolean);
        return;
      }
    }
  }

  if (resolvedSentences.value.length > 0 || !props.text) return;
  const matches = props.text.match(/[^.!?]+[.!?]+(\s|$)|[^.!?]+$/g);
  if (matches && matches.length > 0) {
    resolvedSentences.value = matches.map((s) => s.trim()).filter(Boolean);
  }
};

const handleBeforeSwap = () => {
  stopAllAudio();
};

onMounted(() => {
  loadGermanVoice();
  if (typeof globalThis !== "undefined" && "speechSynthesis" in globalThis) {
    if (globalThis.speechSynthesis.onvoiceschanged !== undefined) {
      globalThis.speechSynthesis.onvoiceschanged = loadGermanVoice;
    }
    globalThis.speechSynthesis.addEventListener("voiceschanged", loadGermanVoice);
  }

  discoverSentences();

  document.addEventListener("astro:before-swap", handleBeforeSwap);
  document.addEventListener("astro:page-load", discoverSentences);
  window.addEventListener("beforeunload", handleBeforeSwap);
});

onBeforeUnmount(() => {
  stopAllAudio();
  if (typeof document !== "undefined") {
    document.removeEventListener("astro:before-swap", handleBeforeSwap);
    document.removeEventListener("astro:page-load", discoverSentences);
  }
  if (typeof window !== "undefined") {
    window.removeEventListener("beforeunload", handleBeforeSwap);
  }
});
</script>

<template>
  <div
    class="w-full overflow-hidden rounded-2xl border bg-linear-to-b from-white/8 to-white/2 p-4 shadow-xl backdrop-blur-xl transition-colors duration-300 tablet:p-5"
    :class="isPlaying ? 'border-amber-400/25 shadow-amber-400/5' : 'border-white/10'"
    role="region"
    :aria-label="title"
  >
    <!-- Header Row: Title, Live Status, Equalizer, Counter -->
    <div class="flex flex-wrap items-center justify-between gap-3 border-b border-white/8 pb-3.5">
      <div class="flex items-center gap-3">
        <div
          class="flex size-10 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 shadow-md shadow-amber-400/10"
        >
          <Headphones class="size-5" />
        </div>

        <div>
          <div class="flex items-center gap-2">
            <h3 class="text-sm font-semibold tracking-wide text-white tablet:text-base">
              {{ title }}
            </h3>

            <!-- Equalizer Sound Wave Animation -->
            <div
              class="flex h-4 items-end gap-0.75"
              aria-hidden="true"
            >
              <span
                class="w-0.75 rounded-full bg-amber-400/60 transition-all duration-300"
                :class="isPlaying ? 'animate-eq-1' : 'h-1.5'"
              ></span>
              <span
                class="w-0.75 rounded-full bg-amber-400 transition-all duration-300"
                :class="isPlaying ? 'animate-eq-2' : 'h-3'"
              ></span>
              <span
                class="w-0.75 rounded-full bg-amber-400/80 transition-all duration-300"
                :class="isPlaying ? 'animate-eq-3' : 'h-2'"
              ></span>
              <span
                class="w-0.75 rounded-full bg-amber-300 transition-all duration-300"
                :class="isPlaying ? 'animate-eq-4' : 'h-4'"
              ></span>
            </div>
          </div>

          <p class="text-xs text-mist-400">
            {{ statusLabel }}
          </p>
        </div>
      </div>

      <!-- Right: Voice & Sentence Indicator -->
      <div class="flex items-center gap-2">
        <span
          class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-mist-300"
        >
          Satz
          <strong class="text-amber-300">{{ totalCount > 0 ? currentIndex + 1 : 0 }}</strong> von
          {{ totalCount }}
        </span>
        <div
          class="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-mist-400 mobile:flex"
        >
          <Volume2 class="size-3.5 text-amber-300" />
          <span>Deutsch (DE)</span>
        </div>
      </div>
    </div>

    <!-- Controls Row: Play/Pause, Navigation, Speed -->
    <div class="flex flex-wrap items-center justify-between gap-4 pt-3.5">
      <!-- Playback Buttons -->
      <div class="flex items-center gap-2">
        <!-- Prev Sentence Button -->
        <button
          type="button"
          class="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-mist-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white active:scale-95 disabled:pointer-events-none disabled:opacity-30"
          :disabled="currentIndex <= 0 || !isSupported"
          aria-label="Vorheriger Satz"
          title="Vorheriger Satz"
          @click="prevSentence"
        >
          <SkipBack class="size-4" />
        </button>

        <!-- Main Play/Pause Button -->
        <button
          type="button"
          class="group relative flex size-10 items-center justify-center rounded-full bg-linear-to-r from-amber-400 via-amber-300 to-yellow-400 text-neutral-950 shadow-lg shadow-amber-400/25 transition-all hover:scale-105 hover:shadow-amber-400/40 active:scale-95 disabled:pointer-events-none disabled:opacity-50"
          :disabled="!isSupported || totalCount === 0"
          :aria-label="isPlaying ? 'Pause' : 'Vorlesen'"
          :title="isPlaying ? 'Pause' : (isPaused ? 'Fortsetzen' : 'Vorlesen')"
          @click="togglePlay"
        >
          <Pause v-if="isPlaying" class="size-4.5 fill-current transition-transform group-hover:scale-110" />
          <Play v-else class="ml-0.5 size-4.5 fill-current transition-transform group-hover:scale-110" />
        </button>

        <!-- Next Sentence Button -->
        <button
          type="button"
          class="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-mist-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white active:scale-95 disabled:pointer-events-none disabled:opacity-30"
          :disabled="currentIndex >= totalCount - 1 || !isSupported"
          aria-label="Nächster Satz"
          title="Nächster Satz"
          @click="nextSentence"
        >
          <SkipForward class="size-4" />
        </button>

        <!-- Stop Button -->
        <button
          type="button"
          class="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-mist-300 transition-all hover:border-rose-400/40 hover:bg-rose-400/10 hover:text-rose-300 active:scale-95 disabled:pointer-events-none disabled:opacity-30"
          :disabled="!isPlaying && !isPaused"
          aria-label="Wiedergabe stoppen"
          title="Zurücksetzen & Stoppen"
          @click="stop"
        >
          <Square class="size-3.5 fill-current" />
        </button>
      </div>

      <!-- Speed / Tempo Selector -->
      <div class="flex items-center gap-1.5">
        <span class="mr-1 hidden text-xs font-medium text-mist-400 tablet:inline"
          >Geschwindigkeit:</span
        >
        <div class="flex rounded-full border border-white/10 bg-black/40 p-0.5 text-xs font-semibold">
          <button
            type="button"
            class="rounded-full px-2.5 py-1 transition-all"
            :class="
              currentRate === 0.75 ?
                'bg-amber-400 text-neutral-950 shadow-sm'
              : 'text-mist-400 hover:text-white'
            "
            title="0.75x: Langsames Lerntempo"
            @click="setRate(0.75)"
          >
            0.75x
          </button>
          <button
            type="button"
            class="rounded-full px-2.5 py-1 transition-all"
            :class="
              currentRate === 0.9 ?
                'bg-amber-400 text-neutral-950 shadow-sm'
              : 'text-mist-400 hover:text-white'
            "
            title="0.9x: Optimales Sprachlerntempo (Empfohlen)"
            @click="setRate(0.9)"
          >
            0.9x
          </button>
          <button
            type="button"
            class="rounded-full px-2.5 py-1 transition-all"
            :class="
              currentRate === 1.0 ?
                'bg-amber-400 text-neutral-950 shadow-sm'
              : 'text-mist-400 hover:text-white'
            "
            title="1.0x: Normale Sprechgeschwindigkeit"
            @click="setRate(1.0)"
          >
            1.0x
          </button>
          <button
            type="button"
            class="rounded-full px-2.5 py-1 transition-all"
            :class="
              currentRate === 1.2 ?
                'bg-amber-400 text-neutral-950 shadow-sm'
              : 'text-mist-400 hover:text-white'
            "
            title="1.2x: Schnelles Tempo"
            @click="setRate(1.2)"
          >
            1.2x
          </button>
        </div>
      </div>
    </div>

    <!-- Progress Track & Live Sentence Preview -->
    <div class="mt-3.5 space-y-1.5">
      <button
        type="button"
        class="relative block h-1.5 w-full cursor-pointer overflow-hidden rounded-full bg-white/10 p-0 transition-colors hover:bg-white/15 focus:ring-1 focus:ring-amber-400/50 focus:outline-none"
        aria-label="Wiedergabefortschritt"
        title="Klicken zum Springen im Text"
        @click="seekByClick"
        @keydown.enter="seekByClick"
        @keydown.space.prevent="togglePlay"
      >
        <span
          class="block h-full rounded-full bg-linear-to-r from-amber-400 to-yellow-300 transition-all duration-300"
          :style="{ width: `${progressPercent.toString()}%` }"
        ></span>
      </button>

      <div class="flex items-center justify-between text-[11px] text-mist-400">
        <div class="truncate pr-4 text-mist-300 italic">
          <span v-if="currentSentenceText">„{{ cleanTextForSpeech(currentSentenceText) }}“</span>
          <span v-else>Klicke auf Vorlesen, um die Sprachausgabe zu starten.</span>
        </div>
        <span class="shrink-0 font-mono font-medium text-amber-300/80">{{ progressPercent }}%</span>
      </div>
    </div>
  </div>
</template>
