<script setup lang="ts">
import { ref, computed } from "vue";
import type { Question } from "../model/types.ts";
import TeilHeader from "./TeilHeader.vue";
import ContextCard from "./ContextCard.vue";
import AnswerOptions from "./AnswerOptions.vue";
import AdDetailDialog from "./AdDetailDialog.vue";

type QuizQuestionVariant = "standard" | "table-row" | "header" | "example" | "example-row";

interface Props {
  question: Question;
  currentStep: number;
  selectedAnswer?: string | string[] | null;
  activeContext?: string;
  skill?: string;
  variant?: QuizQuestionVariant;
}

const props = withDefaults(defineProps<Props>(), { variant: "standard" });

const emit = defineEmits<{ (e: "answer", val: string | string[]): void }>();

const isHeader = computed(() => props.variant === "header");
const isTableRow = computed(
  () => props.variant === "table-row" || props.variant === "example-row",
);
const isExample = computed(() => props.variant === "example" || props.variant === "example-row");
const isHideQuestionBody = computed(() => isHeader.value);
const isShowTeilHeader = computed(() => isHeader.value);

const selectedAd = ref<{ letter: string; content: string } | null>(null);

const handleSelectAd = (ad: { letter: string; content: string }) => {
  selectedAd.value = ad;
};

const handleCloseAd = () => {
  selectedAd.value = null;
};

const displayContext = computed(() => props.question.context ?? props.activeContext);

const contextLabel = computed(() => {
  if (props.skill === "hoeren") return "Sie hören:";
  if (props.skill === "lesen") return "Lesen Sie den Text:";
  return "Text:";
});

const isRichtigFalsch = computed(() => {
  return (
    props.question.options?.length === 2
    && props.question.options[0] === "Richtig"
    && props.question.options[1] === "Falsch"
  );
});

const isJaNein = computed(() => {
  return (
    props.question.options?.length === 2
    && props.question.options[0] === "Ja"
    && props.question.options[1] === "Nein"
  );
});

const isABC = computed(() => {
  return (
    props.question.options?.length === 3
    && props.question.options[0] === "a"
    && props.question.options[1] === "b"
    && props.question.options[2] === "c"
  );
});

const isCompactRow = computed(() => {
  return isRichtigFalsch.value || isJaNein.value || (isTableRow.value && isABC.value);
});

const cleanedQuestionText = computed(() => {
  return props.question.question.replace(/^\d+\.\s*/, "");
});
</script>

<template>
  <article :class="['mx-auto w-full animate-fade-in', isTableRow ? '' : 'space-y-6']">
    <TeilHeader
      v-if="isShowTeilHeader && !isTableRow"
      :teil="props.question.teil"
      :teil-title="props.question.teilTitle"
      :teil-instruction="props.question.teilInstruction"
    />

    <div
      v-if="displayContext && !isTableRow"
      class="relative"
    >
      <ContextCard
        :context="displayContext"
        :context-label="contextLabel"
        :question="props.question"
        :skill="props.skill"
        @select-ad="handleSelectAd"
      />
    </div>

    <div
      v-if="!isHideQuestionBody"
      :class="[
        isTableRow ? 'w-full' : (
          'group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-950/40 backdrop-blur-md transition-colors hover:bg-zinc-900/60'
        ),
      ]"
    >
      <div :class="[isTableRow ? 'px-4 py-3 lg:px-5' : 'p-4 lg:p-5']">
        <div
          v-if="isExample"
          class="mb-4 flex items-center justify-between border-b border-yellow/10 pb-3"
        >
          <span class="text-[10px] font-bold tracking-widest text-yellow uppercase tablet:text-xs">
            Beispiel
          </span>
          <span
            v-if="!isTableRow"
            class="text-[10px] text-yellow/50 italic"
            >Vorgegebenes Beispiel</span
          >
        </div>
        <AnswerOptions
          :options="props.question.options"
          :selected-answer="props.selectedAnswer"
          :current-step="props.currentStep"
          :question-text="cleanedQuestionText"
          :question-type="props.question.type"
          :is-compact="isCompactRow"
          :is-table-row="isTableRow"
          @answer="emit('answer', $event)"
        />
      </div>
    </div>

    <AdDetailDialog
      :selected-ad="selectedAd"
      @close="handleCloseAd"
    />
  </article>
</template>
