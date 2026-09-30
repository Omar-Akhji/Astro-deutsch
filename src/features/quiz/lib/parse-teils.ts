import type { Question } from "../model/types.ts";

export interface TeilQuestionItem {
  question: Question;
  questionIndex: number;
}

export interface ParsedTeil {
  teilNumber: number | undefined;
  isGrouped: boolean;
  headerQuestion: Question;
  firstQuestionStep: number;
  activeContext?: string | undefined;
  exampleQuestion?: Question | undefined;
  groupQuestions: TeilQuestionItem[];
  showSeparator: boolean;
}

function isGroupedTeil(skill: string, teilNumber: number | undefined): boolean {
  if (skill === "lesen") {
    return teilNumber === 1 || teilNumber === 4;
  }
  return teilNumber === 3 || teilNumber === 4;
}

function findActiveContext(
  allQuestions: Question[],
  firstQuestion: Question,
  teilNumber: number | undefined,
): string | undefined {
  if (firstQuestion.context) {
    return firstQuestion.context;
  }

  const firstIndex = allQuestions.indexOf(firstQuestion);
  for (let index = firstIndex - 1; index >= 0; index--) {
    const previousQuestion = allQuestions[index];
    if (previousQuestion && previousQuestion.teil === teilNumber && previousQuestion.context) {
      return previousQuestion.context;
    }
  }

  return undefined;
}

/**
 * Transforms a flat list of quiz questions into structured exam parts (Teile). Handles grouping,
 * example questions, and inherited reading/listening contexts.
 */
export function parseTeils(questions: Question[], skill: string): ParsedTeil[] {
  if (questions.length === 0) return [];

  const uniqueTeils = [...new Set(questions.map((q) => q.teil))];
  const result: ParsedTeil[] = [];

  for (const [teilIndex, teilNumber] of uniqueTeils.entries()) {
    const allInTeil = questions.filter((q) => q.teil === teilNumber);
    const firstQuestion = allInTeil[0];
    if (!firstQuestion) continue;
    const isGrouped = isGroupedTeil(skill, teilNumber);
    const activeContext =
      isGrouped ? findActiveContext(questions, firstQuestion, teilNumber) : undefined;
    const exampleQuestion = allInTeil.find((q) => q.id === 0);
    const group = allInTeil.filter((q) => q.id !== 0);

    const groupQuestions: TeilQuestionItem[] = group.map((q) => ({
      question: q,
      questionIndex: questions.indexOf(q),
    }));

    const lastGroupItem = group.at(-1);
    const showSeparator =
      lastGroupItem !== undefined && questions.indexOf(lastGroupItem) < questions.length - 1;

    result.push({
      teilNumber: teilNumber ?? teilIndex,
      isGrouped,
      headerQuestion: isGrouped ? firstQuestion : { ...firstQuestion, context: "", audioUrl: "" },
      firstQuestionStep: questions.indexOf(firstQuestion) + 1,
      activeContext,
      exampleQuestion,
      groupQuestions,
      showSeparator,
    });
  }

  return result;
}
