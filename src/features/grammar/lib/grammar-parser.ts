export interface ParsedGrammarItem {
  badge?: string | undefined;
  explanation?: string | undefined;
  examples: string[];
  rawText: string;
}

const BADGE_REGEX = /^\*\*(.*?)\*\*:\s*(.*)$/s;
const PAREN_REGEX = /^(.*?)\s*\((.*?)\)$/s;

export function parseGrammarItem(text: string): ParsedGrammarItem {
  const trimmed = text.trim();
  const match = BADGE_REGEX.exec(trimmed);
  if (!match) {
    return { rawText: trimmed, examples: [] };
  }

  const badge = match[1]?.trim();
  const rest = match[2]?.trim() ?? "";

  // Check pattern: "explanation (example 1. example 2.)"
  const parenMatch = PAREN_REGEX.exec(rest);
  const explanation = parenMatch?.[1]?.trim();
  const exampleStr = parenMatch?.[2]?.trim();

  if (explanation && exampleStr) {
    // Check if the content inside parens is just a grammatical note rather than an example sentence
    const isNote =
      exampleStr.startsWith("stilistisch besser") ||
      exampleStr.startsWith("Konj. II") ||
      exampleStr.startsWith("Ausnahme:") ||
      exampleStr.startsWith("Ausnahmen:") ||
      exampleStr.startsWith("Diminutiv");

    if (isNote) {
      return {
        badge,
        explanation: `${explanation} (${exampleStr})`,
        examples: [],
        rawText: trimmed,
      };
    }

    return { badge, explanation, examples: [exampleStr], rawText: trimmed };
  }

  // Check if rest is directly an example sentence (has quotes, or starts with capital and ends with . ? !)
  const isDirectExample = rest.includes("„") || rest.includes('"') || /[.?!]$/.test(rest);

  if (isDirectExample) {
    return { badge, examples: [rest], rawText: trimmed };
  }

  return { badge, explanation: rest, examples: [], rawText: trimmed };
}
