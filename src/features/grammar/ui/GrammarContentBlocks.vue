<script setup lang="ts">
import { Lightbulb } from "lucide-vue-next";
import AnimateOnScroll from "@/shared/ui/AnimateOnScroll.vue";
import type { GrammarSectionContent } from "../model/types.ts";
import ContentItem from "./ContentItem.vue";

interface Props {
  blocks: GrammarSectionContent[];
  usage?: { speaker: string; text: string }[] | undefined;
  tips?: string[] | undefined;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex flex-col gap-8">
    <AnimateOnScroll
      v-if="props.usage"
      animation="fade-up"
    >
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-yellow tablet:text-xl">Gebrauch</h3>
        <div class="space-y-4 rounded-3xl border border-yellow/10 bg-white/3 p-6 backdrop-blur-md">
          <div
            v-for="dialogue in props.usage"
            :key="`usage-${dialogue.speaker}-${dialogue.text.slice(0, 20)}`"
            class="flex gap-4"
          >
            <div
              class="flex size-8 shrink-0 items-center justify-center rounded-full bg-yellow/20 text-xs font-bold text-yellow tablet:size-10 tablet:text-sm"
            >
              {{ dialogue.speaker }}
            </div>
            <div class="rounded-2xl rounded-ss-none bg-white/5 px-4 py-2 text-white/90">
              <ContentItem :content="dialogue.text" />
            </div>
          </div>
        </div>
      </div>
    </AnimateOnScroll>

    <AnimateOnScroll
      v-for="block in props.blocks"
      :key="block.title"
      animation="fade-up"
    >
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-yellow tablet:text-xl">
          {{ block.title }}
        </h3>
        <div class="grid gap-3">
          <div
            v-for="item in block.items"
            :key="`${block.title}-${(typeof item === 'string' ? item : item.text).slice(0, 40)}`"
            class="rounded-e-xl border-s-[6px] border-yellow bg-white/5 p-4 text-white/90 backdrop-blur-sm transition-[transform,background-color] duration-200 hover:translate-x-1 hover:bg-white/8"
            style="border-start-start-radius: 0; border-end-start-radius: 0"
          >
            <ContentItem :content="item" />
          </div>
        </div>
      </div>
    </AnimateOnScroll>

    <AnimateOnScroll
      v-if="props.tips"
      animation="zoom-in"
      :delay="200"
    >
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-orange tablet:text-xl">Tipps</h3>
        <div class="grid gap-4 sm:grid-cols-2">
          <div
            v-for="tip in props.tips"
            :key="`tip-${tip.slice(0, 30)}`"
            class="flex items-start gap-2 rounded-xl border border-orange/20 bg-orange/5 p-4 text-orange brightness-125"
          >
            <Lightbulb class="size-4 shrink-0 tablet:size-5" />
            <ContentItem :content="tip" />
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  </div>
</template>
