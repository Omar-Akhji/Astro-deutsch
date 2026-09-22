<script setup lang="ts">
import { computed } from "vue";
import { getFirstLetter } from "../lib/utilities.ts";

interface Props {
  title: string;
  subtitle?: string;
  description?: string;
  category?: string;
  badge?: string;
  gradient: string;
  icon?: string;
  stats?: Array<{ label: string; value: string }>;
  variant?: "default" | "large";
}

const props = withDefaults(defineProps<Props>(), { variant: "default" });

const iconText = computed(() => props.icon ?? getFirstLetter(props.title));
</script>

<template>
  <article class="h-full">
    <div
      class="group card-link relative z-1 flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-3xl p-4 text-left no-underline tablet:p-5"
      :aria-label="`${props.title} ${props.subtitle ?? ''}`"
    >
      <figure class="m-0 aspect-video w-full overflow-hidden rounded-2xl">
        <div
          class="flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-110"
          :style="{ background: props.gradient }"
          aria-hidden="true"
        >
          <span
            :class="[
              props.variant === 'large' ? 'text-4xl tablet:text-6xl' : 'text-3xl tablet:text-5xl',
              'font-bold text-white/40 drop-shadow-md drop-shadow-white/20 transition-transform duration-500 group-hover:scale-110',
            ]"
          >
            {{ iconText }}
          </span>
        </div>
      </figure>
      <div class="flex flex-1 flex-col px-1 pt-4 pb-1">
        <div
          v-if="props.category || props.badge"
          class="m-0 mbe-2.5 flex items-center gap-2 text-mist-500"
        >
          <span
            v-if="props.category"
            class="rounded-full border border-yellow/30 bg-yellow/20 px-3 py-1 font-bold text-yellow"
          >
            {{ props.category }}
          </span>
          <span
            v-if="props.badge"
            class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-mist-500"
          >
            {{ props.badge }}
          </span>
          <span
            v-if="props.subtitle"
            class="font-medium"
            >• {{ props.subtitle }}</span
          >
        </div>

        <h3
          :class="[
            props.variant === 'large' ? 'text-xl tablet:text-2xl' : 'text-lg tablet:text-xl',
            'm-0 mbe-2 font-bold leading-snug text-white transition-colors duration-300 text-shadow-sm group-hover:text-yellow',
          ]"
        >
          {{ props.title }}
        </h3>
        <p
          v-if="props.description"
          class="m-0 mbe-4 text-xs leading-relaxed text-mist-500 tablet:text-sm"
        >
          {{ props.description }}
        </p>

        <dl
          v-if="props.stats && props.stats.length > 0"
          class="mbs-auto flex gap-4 border-bs border-(--glass-border) pbs-4 tablet:gap-6"
        >
          <div
            v-for="stat in props.stats"
            :key="stat.label"
            class="flex flex-col"
          >
            <dd class="stat-value m-0 text-xl font-bold text-orange tablet:text-2xl">
              {{ stat.value }}
            </dd>
            <dt class="text-xs text-text-muted">{{ stat.label }}</dt>
          </div>
        </dl>
      </div>
    </div>
  </article>
</template>
