<script setup lang="ts">
import { useAttrs, computed } from "vue";
import { cn } from "../lib/utilities.ts";

defineOptions({ inheritAttrs: false });

const attrs = useAttrs();

const combinedClasses = computed(() => {
  return cn(
    "relative overflow-hidden rounded-md bg-white/5 before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-linear-to-r before:from-transparent before:via-white/8 before:to-transparent",
    typeof attrs.class === "string" ? attrs.class : undefined,
  );
});
</script>

<template>
  <div
    data-slot="skeleton"
    v-bind="attrs"
    :class="combinedClasses"
  />
</template>
