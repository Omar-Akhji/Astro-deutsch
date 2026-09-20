<script setup lang="ts">
import type { Component } from "vue";
import AnimateOnScroll from "./AnimateOnScroll.vue";

interface Props {
  icon: Component | object; // Lucide icon component
  title: string;
  subtitle?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <header class="mb-12 text-center">
    <AnimateOnScroll animation="fade-up">
      <h1 class="mb-4 flex items-center justify-center gap-3 text-3xl tablet:gap-4 tablet:text-4xl">
        <span
          class="flex size-12 shrink-0 items-center justify-center rounded-full border-[3px] border-solid border-yellow bg-mist-900/50 text-yellow shadow-sm tablet:size-14"
        >
          <component
            :is="props.icon"
            class="size-6 tablet:size-7"
            :stroke-width="2"
          />
        </span>
        <span class="title-gradient">{{ props.title }}</span>
      </h1>
    </AnimateOnScroll>
    <AnimateOnScroll
      animation="zoom-in"
      :delay="150"
    >
      <div
        class="mx-auto mb-6 h-1 w-24 rounded-full bg-linear-to-r from-yellow to-orange shadow-lg shadow-yellow/20"
      />
    </AnimateOnScroll>
    <AnimateOnScroll
      v-if="props.subtitle"
      animation="fade-up"
      :delay="100"
    >
      <div class="flex justify-center px-2">
        <p
          class="mx-auto w-fit max-w-full rounded-full border-2 border-solid border-white/10 bg-white/5 px-3.5 py-1 text-[11px] font-medium text-text-muted whitespace-nowrap shadow-sm min-[380px]:text-xs min-[480px]:px-4 min-[480px]:py-1.5 min-[480px]:text-sm tablet:px-6 tablet:py-2 tablet:text-base laptop:text-lg"
        >
          {{ props.subtitle }}
        </p>
      </div>
    </AnimateOnScroll>
  </header>
</template>
