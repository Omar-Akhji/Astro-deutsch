import { ref, computed, type ComputedRef, type Ref } from "vue";
import type { Question } from "../model/types.ts";

export interface UseQuizReturn {
  currentQuestionIndex: Ref<number>;
  score: ComputedRef<number>;
  isFinished: Ref<boolean>;
  isStarted: Ref<boolean>;
  currentQuestion: ComputedRef<Question | undefined>;
  progress: ComputedRef<number>;
  userAnswers: Ref<(string | string[] | null)[]>;
  startQuiz: () => void;
  handleAnswer: (answer: string | string[], index?: number) => void;
  jumpToQuestion: (index: number) => void;
  handleFinishQuiz: () => void;
}

export function useQuiz(questions: Question[]): UseQuizReturn {
  const isStarted = ref(false);
  const isFinished = ref(false);
  const userAnswers = ref<(string | string[] | null)[]>(
    Array.from({ length: questions.length }, (): string | string[] | null => null),
  );
  const currentQuestionIndex = ref(0);

  const currentQuestion = computed(() => questions[currentQuestionIndex.value] ?? questions[0]);

  const progress = computed(() => {
    if (isFinished.value) return 100;
    const answeredCount = userAnswers.value.filter((a) => a !== null).length;
    return (answeredCount / questions.length) * 100;
  });

  const score = computed(() => {
    let currentScore = 0;
    for (const [index, answer] of userAnswers.value.entries()) {
      if (answer === null) continue;
      const question = questions.at(index);
      if (!question) continue;

      const correct = question.correctAnswer;
      let isCorrect = false;

      isCorrect =
        Array.isArray(answer) && Array.isArray(correct)
          ? JSON.stringify(answer) === JSON.stringify(correct)
          : answer === correct;

      if (isCorrect) {
        currentScore++;
      }
    }
    return currentScore;
  });

  const startQuiz = () => {
    isStarted.value = true;
    isFinished.value = false;
    userAnswers.value = Array.from(
      { length: questions.length },
      (): string | string[] | null => null,
    );
    currentQuestionIndex.value = 0;
  };

  const handleAnswer = (answer: string | string[], index?: number) => {
    const targetIndex = index ?? currentQuestionIndex.value;
    if (!Number.isSafeInteger(targetIndex) || targetIndex < 0 || targetIndex >= questions.length) {
      return;
    }
    userAnswers.value = userAnswers.value.with(targetIndex, answer);

    // For sequential mode, auto-advance if no index was provided
    if (index === undefined && targetIndex < questions.length - 1) {
      currentQuestionIndex.value = targetIndex + 1;
    } else if (index === undefined && targetIndex === questions.length - 1) {
      isFinished.value = true;
    }
  };

  const jumpToQuestion = (index: number) => {
    if (index >= 0 && index < questions.length) {
      currentQuestionIndex.value = index;
    }
  };

  const handleFinishQuiz = () => {
    isFinished.value = true;
  };

  return {
    currentQuestionIndex,
    score,
    isFinished,
    isStarted,
    currentQuestion,
    progress,
    userAnswers,
    startQuiz,
    handleAnswer,
    jumpToQuestion,
    handleFinishQuiz,
  };
}
