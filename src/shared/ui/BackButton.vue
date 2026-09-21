<script setup lang="ts">
import { ArrowLeft } from "lucide-vue-next";

function goBack() {
  if (globalThis.window !== undefined) {
    globalThis.history.back();
  }
}
</script>

<template>
  <button
    type="button"
    class="inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-(--glass-border) bg-card text-sm font-semibold text-text transition-[transform,background-color] duration-200 hover:-translate-x-1 hover:bg-white/10 tablet:h-auto tablet:w-auto tablet:px-6 tablet:py-2 tablet:text-base"
    aria-label="Zurück"
    @click="goBack"
  >
    <ArrowLeft class="size-5" />
    <span class="mis-1 mbs-0.5 hidden tablet:inline">Zurück</span>
  </button>
</template>
