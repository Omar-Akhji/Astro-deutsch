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
  variant?: "default" | "glass";
  stats?: StatItem[];
}

const props = withDefaults(defineProps<Props>(), { variant: "default" });

const isGlassBorder = computed(() => {
  return !props.gradient || props.variant === "glass";
});
</script>

<template>
  <AnimateOnScroll
    animation="fade-in"
    :duration="1000"
    :class="[
      'relative mbe-12 overflow-hidden rounded-3xl p-8 shadow-2xl tablet:p-12',
      isGlassBorder ? 'border border-(--glass-border) bg-card' : '',
    ]"
    :style="props.gradient && props.variant !== 'glass' ? { background: props.gradient } : {}"
  >
    <div :class="props.gradient ? 'max-inline-3xl' : 'text-center'">
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
            '-my-2 mbe-2 py-2 text-3xl font-bold text-shadow-sm tablet:text-4xl laptop:text-5xl',
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
            'm-0 text-base tablet:text-lg laptop:text-xl',
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
        <dl class="mbs-8 flex flex-wrap justify-center gap-8">
          <div
            v-for="stat in props.stats"
            :key="stat.label"
            class="flex items-center gap-2"
          >
            <dt class="sr-only">{{ stat.label }}</dt>
            <dd class="m-0 flex items-center gap-2 text-sm text-mist-500 tablet:text-lg">
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
