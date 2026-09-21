<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/shared/lib";

interface Props {
  className?: string;
  as?: "div" | "article" | "section" | "nav";
  noBlur?: boolean;
  rounded?: "2xl" | "3xl";
}

const props = withDefaults(defineProps<Props>(), { as: "div", noBlur: false, rounded: "3xl" });

const componentTag = computed(() => props.as);
</script>

<template>
  <component
    :is="componentTag"
    :class="
      cn(
        'overflow-hidden border-2 border-(--glass-border) bg-card shadow-sm',
        props.rounded === '3xl' ? 'rounded-3xl' : 'rounded-2xl',
        !props.noBlur && 'backdrop-blur-(--glass-blur)',
        props.className,
      )
    "
  >
    <slot />
  </component>
</template>
