<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from "vue";
import { Play, Pause, Square, SkipBack, SkipForward, Volume2, Headphones } from "lucide-vue-next";
import gsap from "@/shared/lib/gsap.ts";

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
const instanceId = Math.random().toString(36).slice(2);
const selectedVoice = ref<"de-DE-ConradNeural" | "de-DE-KatjaNeural">("de-DE-ConradNeural");
const equalizerBars = new Map<number, HTMLElement>();
const progressBar = ref<HTMLElement | null>(null);
const setEqualizerBar = (element: Element | null, index: number) => {
  if (element instanceof HTMLElement) equalizerBars.set(index, element);
  else equalizerBars.delete(index);
};

watch(isPlaying, (playing) => {
  for (const [index, bar] of equalizerBars) {
    gsap.killTweensOf(bar);
    gsap.set(bar, { scaleY: 1, transformOrigin: "bottom" });
    if (playing && !globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.to(bar, {
        scaleY: index % 2 === 0 ? 1.45 : 0.5,
        duration: 0.35 + index * 0.06,
        repeat: -1,
        repeatDelay: index * 0.04,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }
});

const toggleVoice = () => {
  selectedVoice.value =
    selectedVoice.value === "de-DE-ConradNeural" ? "de-DE-KatjaNeural" : "de-DE-ConradNeural";
  if (isPlaying.value) {
    void speakCurrentSentence();
  }
};

let currentAudio: HTMLAudioElement | null = null;
let activeUtterance: SpeechSynthesisUtterance | null = null;
let advanceTimer: ReturnType<typeof setTimeout> | null = null;
let germanVoice: SpeechSynthesisVoice | null = null;

const cleanTextForSpeech = (raw: string): string =>
  raw
    .replaceAll(/[„“”"«»]/g, "")
    .replaceAll(/\s+/g, " ")
    .trim();

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

watch(progressPercent, (percent) => {
  if (!progressBar.value) return;
  gsap.to(progressBar.value, {
    scaleX: percent / 100,
    duration: globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 0.3,
    ease: "power2.out",
    overwrite: "auto",
  });
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
        v.lang.startsWith("de") &&
        (v.name.includes("Natural") ||
          v.name.includes("Google") ||
          v.name.includes("Katja") ||
          v.name.includes("Conrad") ||
          v.localService),
    ) ??
    voices.find((v) => v.lang.startsWith("de")) ??
    null;
};

const syncDomHighlight = () => {
  if (domSentenceElements.value.length === 0) return;

  for (const [idx, el] of domSentenceElements.value.entries()) {
    if (idx === currentIndex.value && (isPlaying.value || isPaused.value)) {
      el.classList.add("bg-white/15", "text-white");
      if (!el.classList.contains(props.activeClass)) {
        el.classList.add(props.activeClass);
        el.setAttribute("aria-current", "true");
        gsap.fromTo(el, { opacity: 0.8 }, { opacity: 1, duration: 0.22, ease: "power2.out" });
      }
    } else {
      el.classList.remove(props.activeClass, "bg-white/15", "text-white");
      el.removeAttribute("aria-current");
    }
  }

  if (!props.autoScroll || !(isPlaying.value || isPaused.value)) return;

  const activeEl = domSentenceElements.value[currentIndex.value];
  if (activeEl) {
    activeEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
};

const clearDomHighlight = () => {
  for (const el of domSentenceElements.value) {
    el.classList.remove(props.activeClass, "bg-white/15", "text-white");
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

  if (typeof globalThis !== "undefined") {
    globalThis.dispatchEvent(new CustomEvent("text-audio-play", { detail: { id: instanceId } }));
  }

  // Professional Studio German Neural voice via on-demand Edge TTS API
  const audioUrl = `/api/tts/?text=${encodeURIComponent(clean)}&rate=${currentRate.value.toString()}&voice=${selectedVoice.value}`;
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
  } catch (error: unknown) {
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

const rates = [
  { value: 0.75, label: "0.75x", title: "0.75x: Langsames Lerntempo" },
  { value: 0.9, label: "0.9x", title: "0.9x: Optimales Sprachlerntempo (Empfohlen)" },
  { value: 1, label: "1.0x", title: "1.0x: Normale Sprechgeschwindigkeit" },
  { value: 1.2, label: "1.2x", title: "1.2x: Schnelles Tempo" },
];

const speedContainerRef = ref<HTMLElement | null>(null);
const speedIndicatorRef = ref<HTMLElement | null>(null);
const speedButtonsRef = new Map<number, HTMLElement>();
let speedResizeObserver: ResizeObserver | null = null;

const setSpeedButtonRef = (val: number, el: unknown) => {
  if (el instanceof HTMLElement) {
    speedButtonsRef.set(val, el);
  } else {
    speedButtonsRef.delete(val);
  }
};

const updateSpeedIndicator = (immediate = false) => {
  if (!speedIndicatorRef.value) return;
  const activeBtn = speedButtonsRef.get(currentRate.value);
  if (!activeBtn || activeBtn.offsetWidth === 0) return;

  if (immediate) {
    gsap.set(speedIndicatorRef.value, {
      x: activeBtn.offsetLeft,
      width: activeBtn.offsetWidth,
      autoAlpha: 1,
    });
  } else {
    gsap.to(speedIndicatorRef.value, {
      x: activeBtn.offsetLeft,
      width: activeBtn.offsetWidth,
      duration: 0.4,
      ease: "power3.out",
      autoAlpha: 1,
      overwrite: "auto",
    });
  }
};

watch(currentRate, () => {
  void nextTick(() => updateSpeedIndicator(false));
});

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
  const target = event.currentTarget;
  if (!(target instanceof HTMLElement) || totalCount.value === 0) return;
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

const handleOtherPlayerPlay = (event: Event) => {
  if (!(event instanceof CustomEvent)) return;
  const detail: unknown = event.detail;
  if (
    typeof detail === "object" &&
    detail !== null &&
    "id" in detail &&
    detail.id !== instanceId &&
    (isPlaying.value || isPaused.value)
  ) {
    pause();
  }
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
  globalThis.addEventListener("beforeunload", handleBeforeSwap);
  globalThis.addEventListener("text-audio-play", handleOtherPlayerPlay);

  void nextTick(() => {
    updateSpeedIndicator(true);
  });

  if (typeof ResizeObserver === "undefined") {
    return;
  }

  speedResizeObserver = new ResizeObserver(() => {
    updateSpeedIndicator(true);
  });
  if (speedContainerRef.value) {
    speedResizeObserver.observe(speedContainerRef.value);
  }
});

onBeforeUnmount(() => {
  stopAllAudio();
  for (const bar of equalizerBars.values()) gsap.killTweensOf(bar);
  if (progressBar.value) gsap.killTweensOf(progressBar.value);
  if (speedResizeObserver) {
    speedResizeObserver.disconnect();
    speedResizeObserver = null;
  }
  if (typeof document !== "undefined") {
    document.removeEventListener("astro:before-swap", handleBeforeSwap);
    document.removeEventListener("astro:page-load", discoverSentences);
  }
  if (typeof globalThis === "undefined") {
    return;
  }

  globalThis.removeEventListener("beforeunload", handleBeforeSwap);
  globalThis.removeEventListener("text-audio-play", handleOtherPlayerPlay);
});
</script>

<template>
  <section
    class="w-full rounded-2xl border-[1.5px] bg-linear-to-b from-white/5 to-white/2 p-4 shadow-xl backdrop-blur-xl transition-colors duration-300 tablet:p-5"
    :class="isPlaying ? 'border-yellow/30 shadow-yellow/5' : 'border-white/15'"
    :aria-label="title"
  >
    <!-- Header Row: Title, Live Status, Equalizer, Counter -->
    <div class="flex flex-wrap items-center justify-between gap-3 border-b border-white/8 pb-3.5">
      <div class="flex items-center gap-3">
        <div
          class="flex size-10 items-center justify-center rounded-full border-[1.5px] border-yellow/30 bg-yellow/10 text-yellow shadow-md shadow-yellow/10"
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
                :ref="(element) => setEqualizerBar(element, 0)"
                class="h-1.5 w-0.75 rounded-full bg-yellow/60"
              ></span>
              <span
                :ref="(element) => setEqualizerBar(element, 1)"
                class="h-3 w-0.75 rounded-full bg-yellow"
              ></span>
              <span
                :ref="(element) => setEqualizerBar(element, 2)"
                class="h-2 w-0.75 rounded-full bg-yellow/80"
              ></span>
              <span
                :ref="(element) => setEqualizerBar(element, 3)"
                class="h-4 w-0.75 rounded-full bg-yellow"
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
          class="rounded-full border-[1.5px] border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-mist-300"
        >
          Satz
          <strong class="text-yellow">{{ totalCount > 0 ? currentIndex + 1 : 0 }}</strong> von
          {{ totalCount }}
        </span>
        <button
          type="button"
          class="flex items-center gap-1.5 rounded-full border-[1.5px] border-white/10 bg-white/5 px-2.5 py-1 text-xs text-mist-300 transition-colors outline-none hover:border-yellow/30 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:outline-none"
          title="Klicken zum Umschalten zwischen Conrad (Männlich) und Katja (Weiblich)"
          @click="toggleVoice"
        >
          <Volume2 class="size-3.5 text-yellow" />
          <span>{{
            selectedVoice === "de-DE-ConradNeural" ? "Conrad (Studio)" : "Katja (Studio)"
          }}</span>
        </button>
      </div>
    </div>

    <!-- Controls Row: Play/Pause, Navigation, Speed -->
    <div class="flex flex-wrap items-center justify-between gap-4 pt-3.5">
      <!-- Playback Buttons -->
      <div class="flex items-center gap-2">
        <!-- Prev Sentence Button -->
        <button
          type="button"
          class="flex size-9 items-center justify-center rounded-full border-[1.5px] border-white/10 bg-white/5 text-mist-300 transition-all outline-none hover:border-white/20 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:outline-none active:scale-95 disabled:pointer-events-none disabled:opacity-30"
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
          class="relative flex size-10 items-center justify-center rounded-full border-[1.5px] border-yellow bg-transparent text-yellow transition-colors outline-none focus:outline-none focus-visible:outline-none active:scale-95 disabled:pointer-events-none disabled:opacity-50"
          :disabled="!isSupported || totalCount === 0"
          :aria-label="isPlaying ? 'Pause' : 'Vorlesen'"
          :title="
            isPlaying ? 'Pause'
            : isPaused ? 'Fortsetzen'
            : 'Vorlesen'
          "
          @click="togglePlay"
        >
          <Pause
            v-if="isPlaying"
            class="size-4.5 fill-current"
          />
          <Play
            v-else
            class="ml-0.5 size-4.5 fill-current"
          />
        </button>

        <!-- Next Sentence Button -->
        <button
          type="button"
          class="flex size-9 items-center justify-center rounded-full border-[1.5px] border-white/10 bg-white/5 text-mist-300 transition-all outline-none hover:border-white/20 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:outline-none active:scale-95 disabled:pointer-events-none disabled:opacity-30"
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
          class="flex size-9 items-center justify-center rounded-full border-[1.5px] border-white/10 bg-white/5 text-mist-300 transition-all outline-none hover:border-rose-400/40 hover:bg-rose-400/10 hover:text-rose-300 focus:outline-none focus-visible:outline-none active:scale-95 disabled:pointer-events-none disabled:opacity-30"
          :disabled="!isPlaying && !isPaused"
          aria-label="Wiedergabe stoppen"
          title="Zurücksetzen & Stoppen"
          @click="stop"
        >
          <Square class="size-3.5 fill-current" />
        </button>
      </div>

      <!-- Speed / Tempo Selector matching Desktop Navbar -->
      <div class="flex items-center gap-1.5">
        <span class="mr-1 hidden text-xs font-medium text-mist-400 tablet:inline"
          >Geschwindigkeit:</span
        >
        <div
          ref="speedContainerRef"
          class="relative flex items-center overflow-hidden rounded-full border-[1.5px] border-white/10 bg-card/75 p-1 shadow-[0_4px_20px_rgba(0,0,0,0.35)] backdrop-blur-(--glass-blur)"
        >
          <!-- Sliding Indicator matching Desktop Navbar -->
          <div
            ref="speedIndicatorRef"
            class="pointer-events-none absolute inset-y-1 left-0 z-0 rounded-full bg-linear-to-br from-yellow to-orange opacity-0 shadow-lg shadow-yellow/25"
          ></div>

          <button
            v-for="rate in rates"
            :key="rate.value"
            :ref="(el) => setSpeedButtonRef(rate.value, el)"
            type="button"
            :aria-pressed="currentRate === rate.value"
            class="relative z-10 rounded-full px-3 py-1 text-xs font-semibold transition-colors duration-200 outline-none focus:outline-none focus-visible:outline-none"
            :class="
              currentRate === rate.value ? 'font-bold text-black' : 'text-mist-400 hover:text-white'
            "
            :title="rate.title"
            @click="setRate(rate.value)"
          >
            {{ rate.label }}
          </button>
        </div>
      </div>
    </div>

    <!-- Progress Track & Live Sentence Preview -->
    <div class="mt-3.5 space-y-1.5">
      <label
        :for="`audio-progress-${instanceId}`"
        class="sr-only"
      >
        Wiedergabefortschritt
      </label>
      <progress
        :id="`audio-progress-${instanceId}`"
        class="sr-only"
        max="100"
        :value="progressPercent"
      >
        {{ progressPercent }}%
      </progress>
      <button
        type="button"
        class="relative block h-1.5 w-full cursor-pointer overflow-hidden rounded-full bg-white/10 p-0 ring-0 transition-colors outline-none hover:bg-white/15 focus:ring-0 focus:outline-none focus-visible:outline-none"
        aria-label="Wiedergabefortschritt"
        title="Klicken zum Springen im Text"
        @click="seekByClick"
        @keydown.enter="seekByClick"
        @keydown.space.prevent="togglePlay"
      >
        <span
          ref="progressBar"
          class="block h-full w-full origin-left scale-x-0 rounded-full bg-linear-to-r from-yellow to-orange shadow-[0_0_12px_rgba(241,196,15,0.35)]"
        ></span>
      </button>

      <div class="flex items-center justify-between text-[11px] text-mist-400">
        <div class="truncate pr-4 text-mist-300 italic">
          <span v-if="currentSentenceText">„{{ cleanTextForSpeech(currentSentenceText) }}“</span>
          <span v-else>Klicke auf Vorlesen, um die Sprachausgabe zu starten.</span>
        </div>
        <span class="shrink-0 font-mono font-medium text-yellow/90">{{ progressPercent }}%</span>
      </div>
    </div>
  </section>
</template>
