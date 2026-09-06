<script setup lang="ts">
import AnimateOnScroll from "../../../shared/ui/AnimateOnScroll.vue";
import GlassCard from "../../../shared/ui/GlassCard.vue";
import type { Word } from "../model/types.ts";

interface Props {
  words: Word[];
  englishLabel?: string;
}

const props = withDefaults(defineProps<Props>(), { englishLabel: "English" });
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
                class="border-be border-(--glass-border) px-2 pbs-2 font-semibold text-mist-500 @md:px-4 @md:pbs-4"
              >
                Deutsch
              </th>
              <th
                scope="col"
                class="border-be border-(--glass-border) px-2 pbs-2 font-semibold text-mist-500 @md:px-4 @md:pbs-4"
              >
                {{ props.englishLabel }}
              </th>
              <th
                scope="col"
                class="font-arabic border-be border-(--glass-border) px-2 pbs-2 font-semibold text-mist-500 @md:px-4 @md:pbs-4"
              >
                العربية
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="word in props.words"
              :key="`${word.german}-${word.arabic}`"
              class="border-be border-white/5 last:border-0"
            >
              <td class="px-2 pbs-2 font-semibold text-orange @md:px-4 @md:pbs-4">
                {{ word.german }}
              </td>
              <td class="px-2 pbs-2 @md:px-4 @md:pbs-4">
                <data
                  class="font-mono text-base font-bold text-yellow @md:text-lg"
                  :value="word.english ?? word.example"
                >
                  {{ word.english ?? word.example }}
                </data>
              </td>
              <td
                class="font-arabic px-2 pbs-2 text-base text-mist-500 @md:px-4 @md:pbs-4 @md:text-lg"
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
