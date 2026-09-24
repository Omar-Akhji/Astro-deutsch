<script setup lang="ts">
import { computed } from "vue";
import type { Question } from "../model/types.ts";

interface Props {
  context: string;
  contextLabel: string;
  question: Question;
  skill?: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{ (e: "selectAd", ad: { letter: string; content: string }): void }>();

const ads = computed(() => {
  if (props.skill === "lesen" && props.question.teil === 3) {
    return props.context
      .split(/\n(?=[a-j]\))/)
      .slice(1)
      .map((ad) => {
        const letter = ad.match(/^([a-j])\)/)?.[1];
        if (!letter) return null;
        const content = ad.replace(/^[a-j]\)\s*/, "");
        return { letter, content };
      })
      .filter((x): x is { letter: string; content: string } => x !== null);
  }
  return [];
});
</script>

<template>
  <div
    v-if="props.skill === 'lesen' && props.question.teil === 3"
    class="space-y-6"
  >
    <div class="grid grid-cols-1 gap-4 mobile:grid-cols-2 laptop:grid-cols-3">
      <button
        v-for="ad in ads"
        :key="ad.letter"
        type="button"
        class="group relative min-h-30 cursor-pointer rounded-lg border border-white/10 bg-zinc-950/60 p-5 pt-9 text-left text-white/90 shadow-lg backdrop-blur-md transition-[color,background-color,border-color,scale,translate,rotate] duration-200 hover:bg-zinc-900/80 focus:ring-2 focus:ring-yellow/50 focus:outline-hidden active:scale-95"
        @click="emit('selectAd', ad)"
      >
        <div
          class="absolute top-0 left-0 rounded-tl-lg rounded-br-lg border-r border-b border-white/10 bg-zinc-900/90 px-2.5 py-1 text-[10px] font-black text-yellow uppercase shadow-sm"
        >
          {{ ad.letter }}
        </div>
        <p class="font-serif text-xs leading-relaxed text-white/80 tablet:text-sm">
          {{ ad.content }}
        </p>
        <div
          class="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/felt.png')] opacity-[0.03]"
        />
      </button>
    </div>
  </div>

  <div
    v-else
    class="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/40 shadow-lg backdrop-blur-md"
  >
    <div
      class="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[24px_24px] opacity-[0.02]"
    />
    <div class="relative p-5">
      <div class="mb-3 flex items-center gap-3">
        <h4 class="text-[9px] font-semibold tracking-[0.3em] text-yellow/60 uppercase">
          {{ props.contextLabel }}
        </h4>
        <div class="h-px flex-1 bg-white/5" />
      </div>
      <p
        class="mb-4 font-serif text-xs leading-relaxed whitespace-pre-line text-white/80 tablet:text-sm"
      >
        {{ props.context }}
      </p>
      <div
        v-if="props.question.audioUrl"
        class="flex justify-center"
      >
        <audio
          controls
          class="h-10 w-full max-w-md rounded-full bg-zinc-800/50 accent-yellow"
        >
          <source
            :src="props.question.audioUrl"
            type="audio/mpeg"
          />
          <track
            kind="captions"
            srcLang="de"
            label="Deutsche Untertitel"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  </div>
</template>
