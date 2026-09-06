<script setup lang="ts">
interface Props {
  teil?: number;
  teilTitle?: string;
  teilInstruction?: string;
}
const props = defineProps<Props>();
</script>

<template>
  <header class="mb-6 border-b-2 border-white/10 pb-2">
    <div class="flex items-baseline gap-2">
      <span class="text-base font-bold text-yellow tablet:text-lg">Teil {{ props.teil }}</span>
      <h2 class="text-xs font-semibold tracking-wide text-white/90 uppercase tablet:text-sm">
        {{ props.teilTitle ?? "Modul Lesen" }}
      </h2>
    </div>
    <p
      v-if="props.teilInstruction"
      class="mt-1 text-xs leading-tight font-medium text-white/40 italic"
    >
      {{ props.teilInstruction }}
    </p>
  </header>
</template>
