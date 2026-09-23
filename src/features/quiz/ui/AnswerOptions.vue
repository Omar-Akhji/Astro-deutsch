<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { Check } from "lucide-vue-next";

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

// Keyboard shortcuts for rapid quizzing (1-9, A-D, R/F)
const handleKeydown = (event: KeyboardEvent) => {
  // Ignore if user is typing in an input/textarea
  if (
    event.target instanceof HTMLInputElement
    || event.target instanceof HTMLTextAreaElement
    || !props.options
    || props.options.length === 0
  ) {
    return;
  }

  const key = event.key.toLowerCase();

  // Numeric selection (1 for option 0, 2 for option 1...)
  const num = Number.parseInt(key);
  if (!Number.isNaN(num) && num >= 1 && num <= props.options.length) {
    const targetOpt = props.options[num - 1];
    if (targetOpt) {
      emit("answer", targetOpt);
      return;
    }
  }

  // Alpha shortcuts (a -> 0, b -> 1, c -> 2, d -> 3)
  const alphaIndex = ["a", "b", "c", "d", "e"].indexOf(key);
  if (alphaIndex !== -1 && alphaIndex < props.options.length) {
    const targetOpt = props.options[alphaIndex];
    if (targetOpt) {
      emit("answer", targetOpt);
      return;
    }
  }

  // R/F shortcuts for Richtig / Falsch
  if (key === "r") {
    const richtigOpt = props.options.find((o) => o.toLowerCase().startsWith("richtig"));
    if (richtigOpt) emit("answer", richtigOpt);
  } else if (key === "f") {
    const falschOpt = props.options.find((o) => o.toLowerCase().startsWith("falsch"));
    if (falschOpt) emit("answer", falschOpt);
  }
};

onMounted(() => {
  if (typeof window !== "undefined") {
    globalThis.addEventListener("keydown", handleKeydown);
  }
});

onUnmounted(() => {
  if (typeof window !== "undefined") {
    globalThis.removeEventListener("keydown", handleKeydown);
  }
});
</script>

<template>
  <!-- Compact / Binary Question Layout (e.g. Richtig/Falsch or Ja/Nein) -->
  <div
    v-if="props.isCompact"
    class="flex flex-col gap-3 mobile:flex-row mobile:items-center mobile:justify-between"
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
        v-for="(option, idx) in props.options"
        :key="option"
        type="button"
        :class="[
          props.isTableRow ? 'min-w-16 px-2 py-1.5 text-[10px]' : 'min-w-20 px-2.5 py-2 text-xs',
          'group relative flex cursor-pointer items-center justify-center gap-1.5 rounded-lg border font-bold tracking-tight uppercase transition-all duration-200 active:scale-95',
          props.selectedAnswer === option ?
            'border-yellow bg-linear-to-br from-yellow to-orange text-black shadow-lg ring-2 shadow-yellow/25 ring-yellow/30'
          : 'border-white/10 bg-white/5 text-mist-400 hover:border-white/30 hover:bg-white/10 hover:text-white',
        ]"
        @click="emit('answer', option)"
      >
        <span
          class="flex size-4 items-center justify-center rounded-md text-[9px] font-black"
          :class="
            props.selectedAnswer === option ?
              'bg-black/20 text-black'
            : 'bg-white/10 text-mist-400 group-hover:text-white'
          "
        >
          {{ idx === 0 ? "A" : "B" }}
        </span>
        <span>{{ option }}</span>
      </button>
    </div>
  </div>

  <!-- Matching Layout (Grid of letters/keys) -->
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
      class="grid grid-cols-5 gap-1 overflow-hidden rounded-xl border border-white/10 bg-surface-raised p-1 backdrop-blur-sm mobile:grid-cols-6 tablet:grid-cols-11"
    >
      <button
        v-for="option in props.options"
        :key="option"
        type="button"
        :class="[
          'flex h-10 cursor-pointer items-center justify-center rounded-lg text-xs font-black transition-all active:scale-95',
          props.selectedAnswer === option ?
            'bg-linear-to-br from-yellow to-orange text-black shadow-md shadow-yellow/20'
          : 'bg-white/5 text-mist-400 hover:bg-white/10 hover:text-white',
        ]"
        @click="emit('answer', option)"
      >
        {{ option }}
      </button>
    </div>
  </div>

  <!-- Standard Multiple Choice Options (A, B, C...) -->
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
    <div class="grid gap-2.5">
      <button
        v-for="(option, idx) in props.options"
        :key="option"
        type="button"
        :class="[
          'group flex cursor-pointer items-center justify-between rounded-xl border p-3.5 text-left transition-all duration-200 active:scale-[0.99]',
          props.selectedAnswer === option ?
            'border-yellow/50 bg-linear-to-r from-yellow/15 to-orange/15 font-semibold text-white shadow-md ring-1 shadow-yellow/10 ring-yellow/30'
          : 'border-white/10 bg-white/5 font-medium text-mist-200 hover:border-white/25 hover:bg-white/10 hover:text-white',
        ]"
        @click="emit('answer', option)"
      >
        <div class="flex items-center gap-3">
          <!-- Letter badge (A, B, C...) -->
          <span
            class="flex size-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors"
            :class="
              props.selectedAnswer === option ?
                'bg-yellow text-black'
              : 'border border-white/10 bg-white/5 text-mist-400 group-hover:border-white/30 group-hover:text-white'
            "
          >
            {{ String.fromCharCode(65 + idx) }}
          </span>

          <span class="text-xs tablet:text-sm">
            {{ option.replace(/^[a-c]\)\s+/i, "") }}
          </span>
        </div>

        <!-- Checked Indicator Icon -->
        <span
          v-if="props.selectedAnswer === option"
          class="flex size-5 shrink-0 items-center justify-center rounded-full bg-yellow text-black"
        >
          <Check class="size-3 stroke-3" />
        </span>
      </button>
    </div>
  </div>
</template>
