export type QuestionType =
  | "multiple-choice"
  | "matching"
  | "fill-in"
  | "drag-drop"
  | "fill-gap";

export interface Question {
  id: number;
  question: string;
  options?: string[] | undefined;
  correctAnswer: string | string[]; // string for single choice, string[] for drag-drop
  type?: QuestionType | undefined;
  context?: string | undefined;
  gapText?: string | undefined;
  userAnswer?: string | string[] | undefined;
  explanation?: string | undefined;
  /** Which Teil this question belongs to (e.g. 1, 2, 3, 4, 5) */
  teil?: number | undefined;
  /** Display title for the Teil (e.g. "Teil 1 – Richtig oder Falsch") */
  teilTitle?: string | undefined;
  /** Exam instruction for the Teil (e.g. "Lesen Sie den Text und die Aufgaben 1 bis 6...") */
  teilInstruction?: string | undefined;
  /** URL for audio playback in listening tasks */
  audioUrl?: string | undefined;
}

export type QuizData = Map<string, Map<string, Map<number, Question[]>>>;
