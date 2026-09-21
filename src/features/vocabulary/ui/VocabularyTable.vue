<script setup lang="ts">
import { computed, ref } from "vue";
import { Volume2 } from "lucide-vue-next";
import { parseNounGender, speakGerman, type GenderInfo } from "../../../shared/lib/audio.ts";
import AnimateOnScroll from "../../../shared/ui/AnimateOnScroll.vue";
import GlassCard from "../../../shared/ui/GlassCard.vue";
import type { Word } from "../model/types.ts";

interface Props {
  words: Word[];
  englishLabel?: string;
}

const props = withDefaults(defineProps<Props>(), { englishLabel: "English" });

interface EnrichedWord extends Word {
  genderInfo: GenderInfo;
}

const enrichedWords = computed<EnrichedWord[]>(() => {
  return props.words.map((word) => ({
    ...word,
    genderInfo: parseNounGender(word.german),
  }));
});

const playingWord = ref<string | null>(null);

const playAudio = (text: string) => {
  playingWord.value = text;
  speakGerman(text);
  setTimeout(() => {
    if (playingWord.value === text) {
      playingWord.value = null;
    }
  }, 1200);
};
</script>

<template>
  <AnimateOnScroll
    v-if="props.words.length > 0"
    animation="fade-up"
  >
    <GlassCard class="@container">
      <div class="scrollbar-thin overflow-x-auto px-4 pb-4">
        <table class="border-collapse text-left inline-full">
          <caption class="sr-only">
            Vokabelliste
          </caption>
          <thead>
            <tr>
              <th
                scope="col"
                class="border-be border-(--glass-border) px-3 pbs-3 text-xs font-semibold tracking-wider text-mist-400 uppercase @md:px-4 @md:pbs-4 @md:text-sm"
              >
                Deutsch
              </th>
              <th
                scope="col"
                class="border-be border-(--glass-border) px-3 pbs-3 text-xs font-semibold tracking-wider text-mist-400 uppercase @md:px-4 @md:pbs-4 @md:text-sm"
              >
                {{ props.englishLabel }}
              </th>
              <th
                scope="col"
                class="border-be border-(--glass-border) px-3 pbs-3 text-right font-arabic text-xs font-semibold tracking-wider text-mist-400 uppercase @md:px-4 @md:pbs-4 @md:text-sm"
                dir="rtl"
              >
                العربية
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="word in enrichedWords"
              :key="`${word.german}-${word.arabic}`"
              class="group/row border-be border-white/5 transition-colors last:border-0 hover:bg-white/3"
            >
              <!-- German Word Column with Pronunciation & Gender Affordance -->
              <td class="px-3 py-3 font-medium @md:px-4 @md:py-3.5">
                <div class="flex items-center gap-2.5">
                  <!-- Audio Pronunciation Button -->
                  <button
                    type="button"
                    class="group/btn flex size-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-mist-400 transition-all hover:scale-105 hover:border-yellow/40 hover:bg-yellow/10 hover:text-yellow focus:ring-2 focus:ring-yellow/40 focus:outline-none"
                    :class="{
                      'animate-pulse border-yellow bg-yellow/20 text-yellow':
                        playingWord === word.german,
                    }"
                    :aria-label="`Aussprache anhören für ${word.german}`"
                    :title="`Aussprache anhören`"
                    @click="playAudio(word.german)"
                  >
                    <Volume2 class="size-3.5 transition-transform group-hover/btn:scale-110" />
                  </button>

                  <!-- German Word with Article Badge -->
                  <div class="flex flex-wrap items-baseline gap-1.5 text-sm @md:text-base">
                    <span
                      v-if="word.genderInfo.article"
                      class="inline-flex items-center rounded-md border px-1.5 py-0.5 text-[11px] font-bold tracking-tight uppercase"
                      :class="word.genderInfo.badgeClass"
                    >
                      {{ word.genderInfo.article }}
                    </span>
                    <span
                      class="font-semibold"
                      :class="
                        word.genderInfo.article ?
                          word.genderInfo.textClass
                        : 'font-semibold text-orange'
                      "
                    >
                      {{ word.genderInfo.baseWord }}
                    </span>
                  </div>
                </div>
              </td>

              <!-- English / Example Column -->
              <td class="px-3 py-3 text-sm text-mist-200 @md:px-4 @md:py-3.5 @md:text-base">
                <span>{{ word.english ?? word.example }}</span>
              </td>

              <!-- Arabic Column -->
              <td
                class="px-3 py-3 text-right font-arabic text-base font-medium text-mist-300 @md:px-4 @md:py-3.5 @md:text-lg"
                dir="rtl"
              >
                {{ word.arabic }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </GlassCard>
  </AnimateOnScroll>
</template>
