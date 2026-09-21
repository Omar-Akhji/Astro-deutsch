<script setup lang="ts">
import { computed } from "vue";
import { useQuiz } from "../lib/useQuiz.ts";
import type { Question } from "../model/types.ts";
import QuizQuestion from "./QuizQuestion.vue";
import QuizResult from "./QuizResult.vue";
import QuizStart from "./QuizStart.vue";

interface Props {
  level: string;
  skill: string;
  testId: string;
  initialQuestions: Question[];
}

const props = defineProps<Props>();

const SKILL_TITLES = new Map([
  ["lesen", "Lesen"],
  ["hoeren", "Hören"],
  ["schreiben", "Schreiben"],
  ["sprechen", "Sprechen"],
]);

const skillTitle = computed(() => {
  return SKILL_TITLES.get(props.skill) ?? props.skill;
});

const {
  currentQuestionIndex,
  score,
  isFinished,
  isStarted,
  currentQuestion,
  userAnswers,
  startQuiz,
  handleAnswer,
  finishQuiz,
} = useQuiz(props.initialQuestions);

const uniqueTeils = computed(() => {
  return [...new Set(props.initialQuestions.map((q) => q.teil))];
});

const getTeilQuestions = (teilNumber: number | undefined) => {
  return props.initialQuestions.filter((q) => q.teil === teilNumber);
};

const getExample = (allInTeil: Question[]) => {
  return allInTeil.find((q) => q.id === 0);
};

const getGroup = (allInTeil: Question[]) => {
  return allInTeil.filter((q) => q.id !== 0);
};

const isGroupedTeil = (teilNumber: number | undefined) => {
  if (props.skill === "lesen") {
    return teilNumber === 1 || teilNumber === 4;
  }
  return teilNumber === 3 || teilNumber === 4;
};

const getActiveContext = (
  allInTeil: Question[],
  firstQuestion: Question,
  teilNumber: number | undefined,
) => {
  let activeContext = firstQuestion.context;
  if (!activeContext) {
    const firstIndex = props.initialQuestions.indexOf(firstQuestion);
    for (let index = firstIndex - 1; index >= 0; index--) {
      const previousQ = props.initialQuestions[index];
      if (previousQ && previousQ.teil === teilNumber && previousQ.context) {
        activeContext = previousQ.context;
        break;
      }
    }
  }
  return activeContext;
};

const getQuestionIndex = (q: Question) => {
  return props.initialQuestions.indexOf(q);
};

interface TeilQuestionItem {
  question: Question;
  questionIndex: number;
}

interface ParsedTeil {
  teilNumber: number | undefined;
  isGrouped: boolean;
  headerQuestion: Question;
  firstQuestionStep: number;
  activeContext?: string;
  exampleQuestion?: Question;
  groupQuestions: TeilQuestionItem[];
  showSeparator: boolean;
}

const parsedTeils = computed<ParsedTeil[]>(() => {
  const result: ParsedTeil[] = [];

  for (const [teilIndex, teilNumber] of uniqueTeils.value.entries()) {
    const allInTeil = getTeilQuestions(teilNumber);
    if (allInTeil.length === 0) continue;

    const firstQuestion = allInTeil[0]!;
    const isGrouped = isGroupedTeil(teilNumber);
    const activeContext =
      isGrouped ? getActiveContext(allInTeil, firstQuestion, teilNumber) : undefined;
    const exampleQuestion = getExample(allInTeil);
    const group = getGroup(allInTeil);

    const groupQuestions: TeilQuestionItem[] = group.map((q) => ({
      question: q,
      questionIndex: getQuestionIndex(q),
    }));

    const lastGroupItem = group.at(-1);
    const showSeparator =
      lastGroupItem !== undefined
      && getQuestionIndex(lastGroupItem) < props.initialQuestions.length - 1;

    result.push({
      teilNumber: teilNumber ?? teilIndex,
      isGrouped,
      headerQuestion: isGrouped ? firstQuestion : { ...firstQuestion, context: "", audioUrl: "" },
      firstQuestionStep: getQuestionIndex(firstQuestion) + 1,
      activeContext,
      exampleQuestion,
      groupQuestions,
      showSeparator,
    });
  }

  return result;
});

const goBackUrl = computed(() => {
  return `/pruefung/${props.level}/modelltests`;
});
</script>

<template>
  <div
    v-if="props.initialQuestions.length === 0"
    class="py-12 text-center text-white"
  >
    <p>Keine Fragen gefunden.</p>
  </div>
  <main
    v-else
    class="relative min-h-dvh py-4"
  >
    <article
      class="relative z-10 flex w-full flex-col rounded-2xl border border-white/10 bg-card px-4 py-6 shadow-2xl backdrop-blur-xl"
    >
      <header
        class="mb-4 flex items-center justify-between border-b border-white/10 pb-2 text-white"
      >
        <h1 class="text-sm font-semibold tracking-widest text-white/50 uppercase">
          {{ skillTitle }} – Modelltest {{ props.testId }}
        </h1>
        <div class="font-mono text-[10px] text-white/30">
          Level: {{ props.level.toUpperCase() }}
        </div>
      </header>

      <div class="flex flex-1 flex-col">
        <template v-if="isStarted">
          <QuizResult
            v-if="isFinished"
            :score="score"
            :total="props.initialQuestions.length"
            @restart="startQuiz"
            @exit="globalThis.location.href = goBackUrl"
          />

          <div
            v-else
            class="flex flex-col gap-4"
          >
            <template v-if="props.skill === 'lesen' || props.skill === 'hoeren'">
              <div class="flex flex-col gap-6">
                <!-- Grouping Logic for Reading/Listening Table Look -->
                <section
                  v-for="teil in parsedTeils"
                  :key="teil.teilNumber"
                  class="space-y-8"
                >
                  <div :class="[teil.isGrouped ? 'space-y-3' : 'flex flex-col gap-1']">
                    <!-- 1. Header & Context -->
                    <QuizQuestion
                      :key="`header-${teil.teilNumber}`"
                      :question="teil.headerQuestion"
                      :current-step="teil.firstQuestionStep"
                      :skill="props.skill"
                      variant="header"
                      :active-context="teil.activeContext"
                      @answer="() => {}"
                    />

                    <!-- 2. Questions -->
                    <!-- Grouped in ONE TABLE (Card) -->
                    <div
                      v-if="teil.isGrouped"
                      :key="`group-${teil.teilNumber}`"
                      class="overflow-hidden rounded-xl border border-white/10 bg-zinc-900/10"
                    >
                      <div
                        v-if="teil.exampleQuestion"
                        class="border-b border-white/10"
                      >
                        <QuizQuestion
                          :question="teil.exampleQuestion"
                          :current-step="0"
                          :skill="props.skill"
                          variant="example-row"
                          :selected-answer="teil.exampleQuestion.correctAnswer"
                          @answer="() => {}"
                        />
                      </div>
                      <div
                        v-for="(item, index) in teil.groupQuestions"
                        :key="item.question.id"
                        :class="[
                          index < teil.groupQuestions.length - 1 ? 'border-b border-white/5' : '',
                        ]"
                      >
                        <QuizQuestion
                          :question="item.question"
                          :current-step="item.question.id"
                          :selected-answer="userAnswers[item.questionIndex]"
                          variant="table-row"
                          :skill="props.skill"
                          @answer="handleAnswer($event, item.questionIndex)"
                        />
                      </div>
                    </div>

                    <!-- Standard Individual Cards -->
                    <div
                      v-else
                      class="space-y-6"
                    >
                      <QuizQuestion
                        v-if="teil.exampleQuestion"
                        :question="teil.exampleQuestion"
                        :current-step="0"
                        :skill="props.skill"
                        variant="example"
                        :selected-answer="teil.exampleQuestion.correctAnswer"
                        @answer="() => {}"
                      />
                      <QuizQuestion
                        v-for="item in teil.groupQuestions"
                        :key="item.question.id"
                        :question="item.question"
                        :current-step="item.question.id"
                        :selected-answer="userAnswers[item.questionIndex]"
                        :skill="props.skill"
                        @answer="handleAnswer($event, item.questionIndex)"
                      />
                    </div>
                  </div>

                  <!-- Decorative Separator between Teils -->
                  <div
                    v-if="teil.showSeparator"
                    :key="`sep-${teil.teilNumber}`"
                    class="flex justify-center py-10"
                  >
                    <div
                      class="h-1 w-24 rounded-full bg-linear-to-r from-yellow to-orange shadow-lg shadow-yellow/20"
                    />
                  </div>
                </section>
              </div>
              <div class="mt-4 flex justify-center border-t border-white/10 pt-4">
                <button
                  type="button"
                  class="cursor-pointer rounded border border-yellow/50 bg-yellow/10 px-8 py-2 text-sm font-bold text-yellow transition-colors hover:bg-yellow hover:text-black"
                  @click="finishQuiz"
                >
                  Prüfung beenden
                </button>
              </div>
            </template>

            <QuizQuestion
              v-else-if="currentQuestion"
              :question="currentQuestion"
              :current-step="currentQuestionIndex + 1"
              :selected-answer="userAnswers[currentQuestionIndex]"
              @answer="handleAnswer"
            />
          </div>
        </template>

        <QuizStart
          v-else
          :title="`${skillTitle} – Übungsprüfung ${props.testId}`"
          :description="`Bereiten Sie sich auf das Goethe/ÖSD Zertifikat ${props.level.toUpperCase()} vor. Dieses Modul umfasst ${props.initialQuestions.length} Aufgaben.`"
          :question-count="props.initialQuestions.length"
          :duration="props.skill === 'lesen' ? 65 : 40"
          @start="startQuiz"
        />
      </div>
    </article>
  </main>
</template>
