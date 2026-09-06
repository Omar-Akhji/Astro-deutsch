<script setup lang="ts">
interface Props {
  options?: string[];
  selectedAnswer?: string | string[] | null;
  currentStep: number;
  questionText: string;
  questionType?: string;
  isCompact: boolean;
  isTableRow?: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{ (e: "answer", val: string | string[]): void }>();
</script>

<template>
  <div
    v-if="props.isCompact"
    class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
  >
    <div class="flex flex-1 items-baseline gap-3">
      <span
        class="text-xs font-bold text-yellow drop-shadow-[0_0_10px_rgba(255,191,0,0.3)] tablet:text-sm"
      >
        {{ props.currentStep }}.
      </span>
      <h3 class="text-xs leading-tight font-semibold text-white/90 tablet:text-sm">
        {{ props.questionText }}
      </h3>
    </div>
    <div class="flex flex-none gap-2">
      <button
        v-for="option in props.options"
        :key="option"
        type="button"
        :class="[
          props.isTableRow ? 'min-w-16 py-1.5 text-[9px]' : 'min-w-17.5 py-2 text-[10px]',
          'cursor-pointer rounded-full border font-bold tracking-tighter uppercase transition-all',
          props.selectedAnswer === option ?
            'border-yellow bg-linear-to-br from-yellow to-orange text-black shadow-lg shadow-yellow/20'
          : 'border-white/10 bg-white/5 text-white/40 hover:border-white/30 hover:bg-white/10',
        ]"
        @click="emit('answer', option)"
      >
        {{ option }}
      </button>
    </div>
  </div>

  <div
    v-else-if="props.questionType === 'matching'"
    class="space-y-4"
  >
    <div class="flex items-baseline gap-3">
      <span class="text-sm font-bold text-yellow drop-shadow-[0_0_10px_rgba(255,191,0,0.3)]">
        {{ props.currentStep }}.
      </span>
      <h3 class="text-sm leading-tight font-semibold text-white/90">
        {{ props.questionText }}
      </h3>
    </div>
    <div
      class="grid grid-cols-6 gap-px overflow-hidden rounded-lg border border-white/10 bg-zinc-950/50 backdrop-blur-sm sm:grid-cols-11"
    >
      <button
        v-for="option in props.options"
        :key="option"
        type="button"
        :class="[
          'flex h-10 cursor-pointer items-center justify-center border-none text-xs font-black transition-all',
          props.selectedAnswer === option ?
            'bg-linear-to-br from-yellow to-orange text-black shadow-inner'
          : 'bg-zinc-950/80 text-white/30 hover:bg-zinc-800 hover:text-white/80',
        ]"
        @click="emit('answer', option)"
      >
        {{ option }}
      </button>
    </div>
  </div>

  <div
    v-else
    class="space-y-4"
  >
    <div class="flex items-baseline gap-3">
      <span class="text-sm font-bold text-yellow drop-shadow-[0_0_10px_rgba(255,191,0,0.3)]">
        {{ props.currentStep }}.
      </span>
      <h3 class="text-xs leading-snug font-semibold text-white/90 tablet:text-sm">
        {{ props.questionText }}
      </h3>
    </div>
    <div class="grid gap-2">
      <button
        v-for="option in props.options"
        :key="option"
        type="button"
        :class="[
          'group flex cursor-pointer items-center rounded-lg border bg-transparent p-3 text-left transition-all',
          props.selectedAnswer === option ?
            'border-yellow/40 bg-linear-to-br from-yellow/10 to-orange/10 font-bold text-yellow shadow-md'
          : 'border-white/10 bg-white/5 font-medium text-white/70 hover:border-white/30 hover:bg-white/10',
        ]"
        @click="emit('answer', option)"
      >
        <span class="text-xs tablet:text-sm">
          {{ option.replace(/^[a-c]\)\s+/i, "") }}
        </span>
      </button>
    </div>
  </div>
</template>
