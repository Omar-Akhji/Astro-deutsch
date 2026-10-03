import type { StoryDefinition } from "../model/types.ts";
import topicStoriesJson from "./topic-stories.json";

export type { StoryDefinition } from "../model/types.ts";

/**
 * All curated story contents loaded directly from topic-stories.json.
 */
export const TOPIC_STORIES: Record<string, StoryDefinition> = topicStoriesJson;


export interface StoryToken {
  type: "text" | "word";
  content?: string;
  baseWord?: string;
  display?: string;
}

/**
 * Removes markup tokens like [baseWord|displayText] or [baseWord]
 * and cleans punctuation for German text-to-speech audio.
 */
export function cleanTextForSpeech(text: string): string {
  return text
    .replaceAll(/\[([^\]]+)\]/g, (_, inner: string) => {
      const pipeIndex = inner.indexOf("|");
      return pipeIndex === -1 ? inner.trim() : inner.slice(pipeIndex + 1).trim();
    })
    .replaceAll(/[„“”"«»]/g, "")
    .trim();
}

/**
 * Parses sentences containing [baseWord|displayText] or [baseWord] tokens
 * into structured chunks for Astro rendering with interactive tooltips.
 */
export function parseSentenceTokens(sentence: string): StoryToken[] {
  const tokens: StoryToken[] = [];
  const regex = /\[([^\]]+)\]/g;
  let lastIndex = 0;

  for (const match of sentence.matchAll(regex)) {
    const matchIndex = match.index;
    if (matchIndex > lastIndex) {
      tokens.push({
        type: "text",
        content: sentence.slice(lastIndex, matchIndex),
      });
    }

    const inner = match[1]?.trim() ?? "";
    const pipeIndex = inner.indexOf("|");
    const baseWord = pipeIndex === -1 ? inner : inner.slice(0, pipeIndex).trim();
    const display = pipeIndex === -1 ? inner : inner.slice(pipeIndex + 1).trim();

    tokens.push({
      type: "word",
      baseWord,
      display,
    });

    lastIndex = matchIndex + match[0].length;
  }

  if (lastIndex < sentence.length) {
    tokens.push({
      type: "text",
      content: sentence.slice(lastIndex),
    });
  }

  return tokens;
}

/**
 * Retrieves the curated story definition for a topic, or synthesizes
 * a coherent learning story from the topic's word list if not yet defined.
 */
export function getTopicStory(
  topicId: string,
  fallbackTopic?: {
    title: string;
    words?: { german: string; example?: string | undefined }[] | undefined;
  },
  categoryTitle = "Themenwortschatz",
): StoryDefinition {
  const existing = TOPIC_STORIES[topicId];
  if (existing) {
    return existing;
  }

  const topicTitle = fallbackTopic?.title ?? "Themenwortschatz";
  const badge = categoryTitle;
  const words = fallbackTopic?.words ?? [];

  const sentences: string[] = [];
  for (const w of words) {
    if (w.example && w.example.trim().length > 0) {
      sentences.push(w.example.trim());
    } else {
      sentences.push(`Wir lernen heute das wichtige Wort [${w.german}|${w.german}].`);
    }
  }

  const paragraphs: string[][] = [];
  for (let i = 0; i < sentences.length; i += 3) {
    paragraphs.push(sentences.slice(i, i + 3));
  }

  if (paragraphs.length === 0) {
    paragraphs.push([`In dieser Lektion lernen wir die zentralen Vokabeln zu ${topicTitle}.`]);
  }

  return {
    badge,
    title: topicTitle,
    paragraphs,
  };
}
