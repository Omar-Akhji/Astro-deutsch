<script setup lang="ts">
import { computed } from "vue";
import type { Component } from "vue";
import AnimateOnScroll from "./AnimateOnScroll.vue";

interface StatItem {
  label: string;
  value: string;
  icon?: Component | object; // Component or VNode
}

interface Props {
  title: string;
  description: string;
  category?: string;
  example?: string;
  badge?: string;
  gradient?: string;
  variant?: "default" | "glass" | "compact";
  stats?: StatItem[];
}

const props = withDefaults(defineProps<Props>(), { variant: "default" });

const isGlassBorder = computed(() => {
  return !props.gradient || props.variant === "glass" || props.variant === "compact";
});
</script>

<template>
  <AnimateOnScroll
    animation="fade-in"
    :duration="800"
    :class="[
      'relative overflow-hidden rounded-3xl shadow-2xl transition-all',
      props.variant === 'compact' ?
        'mbe-6 p-4 mobile:p-6 tablet:p-8'
      : 'mbe-8 p-5 mobile:mbe-12 mobile:p-8 tablet:p-10 laptop:p-12',
      isGlassBorder ? 'border-2 border-(--glass-border) bg-card' : '',
    ]"
    :style="
      props.gradient && props.variant !== 'glass' && props.variant !== 'compact' ?
        { background: props.gradient }
      : {}
    "
  >
    <div :class="props.gradient && props.variant !== 'compact' ? 'max-inline-3xl' : 'text-center'">
      <AnimateOnScroll
        animation="fade-up"
        :delay="100"
      >
        <div
          :class="[
            'mbe-4 flex flex-wrap items-center gap-3',
            props.gradient ? '' : 'justify-center',
          ]"
        >
          <span
            v-if="props.category"
            :class="[
              'inline-block rounded-full px-6 py-2 font-bold',
              props.gradient ?
                'bg-black/20 text-xs text-white tablet:text-sm'
              : 'bg-linear-to-br from-yellow to-orange text-lg text-black shadow-lg shadow-yellow/20 tablet:text-xl',
            ]"
          >
            {{ props.category }}
          </span>
          <span
            v-if="props.badge"
            :class="[
              'inline-block rounded-lg px-3 py-1.5 text-xs font-bold shadow-sm tablet:text-sm',
              props.gradient ? 'bg-white/20 text-white' : 'bg-mist-900/50 text-mist-500',
            ]"
          >
            {{ props.badge }}
          </span>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll
        animation="blur-in"
        :delay="300"
        :duration="1000"
      >
        <h1
          :class="[
            'm-0 mbe-4 text-2xl font-bold tracking-tight text-shadow-sm mobile:text-3xl tablet:text-4xl laptop:text-5xl desktop:text-6xl',
            props.gradient ?
              'text-white drop-shadow-[0_2px_10px_black/20]'
            : 'bg-linear-to-br from-white to-slate-200 bg-clip-text text-transparent',
          ]"
        >
          {{ props.title }}
        </h1>
      </AnimateOnScroll>

      <AnimateOnScroll
        animation="fade-up"
        :delay="500"
      >
        <p
          :class="[
            'm-0 mx-auto max-w-2xl text-base leading-relaxed tablet:text-lg laptop:text-xl',
            props.gradient ? 'text-white/90' : 'text-mist-500',
          ]"
        >
          {{ props.description }}
        </p>
      </AnimateOnScroll>

      <AnimateOnScroll
        v-if="props.example"
        animation="fade-in"
        :delay="500"
      >
        <p class="mbs-4 text-base text-white/80">
          <em>{{ props.example }}</em>
        </p>
      </AnimateOnScroll>

      <AnimateOnScroll
        v-if="props.stats"
        animation="fade-up"
        :delay="700"
      >
        <dl class="mbs-8 flex flex-wrap justify-center gap-4 mobile:gap-6 tablet:gap-8">
          <div
            v-for="stat in props.stats"
            :key="stat.label"
            class="flex items-center gap-2"
          >
            <dt class="sr-only">{{ stat.label }}</dt>
            <dd class="m-0 flex items-center gap-2 text-sm text-mist-500 tablet:text-base">
              <span
                v-if="stat.icon"
                class="flex size-5 items-center justify-center text-yellow tablet:size-6"
              >
                <component
                  :is="stat.icon"
                  class="size-full"
                />
              </span>
              {{ stat.value }}
            </dd>
          </div>
        </dl>
      </AnimateOnScroll>
    </div>
  </AnimateOnScroll>
</template>
