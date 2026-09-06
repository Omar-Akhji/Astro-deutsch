import { ref, computed } from "vue";
import type { Question } from "../model/types.ts";

export function useQuiz(questions: Question[]) {
  const isStarted = ref(false);
  const isFinished = ref(false);
  const userAnswers = ref<(string | string[] | null)[]>(
    Array.from({ length: questions.length }, (): string | string[] | null => null),
  );
  const currentQuestionIndex = ref(0);

  const currentQuestion = computed(() => {
    return questions[currentQuestionIndex.value] ?? questions[0];
  });

  const progress = computed(() => {
    if (isFinished.value) return 100;
    const answeredCount = userAnswers.value.filter((a) => a !== null).length;
    return (answeredCount / questions.length) * 100;
  });

  const score = computed(() => {
    let currentScore = 0;
    for (const [index, answer] of userAnswers.value.entries()) {
      if (answer === null) continue;
      const question = questions[index];
      if (!question) continue;

      const correct = question.correctAnswer;
      let isCorrect = false;

      isCorrect =
        Array.isArray(answer) && Array.isArray(correct) ?
          JSON.stringify(answer) === JSON.stringify(correct)
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
    userAnswers.value[targetIndex] = answer;

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

  const finishQuiz = () => {
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
    finishQuiz,
  };
}
