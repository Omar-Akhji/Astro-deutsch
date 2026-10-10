import { z } from "astro/zod";
import { storiesRecordSchema } from "../model/schema.ts";
import type { CefrLevel, StoryDefinition, TopicStoriesRecord } from "../model/types.ts";
import topicStoriesJson from "./topic-stories.json" with { type: "json" };

export type {
  CefrLevel,
  StoryDefinition,
  StoryLevelDefinition,
  TopicStoriesRecord,
} from "../model/types.ts";

const topicStoriesCatalogSchema = z.record(z.string(), storiesRecordSchema);
const parsedTopicStories = topicStoriesCatalogSchema.parse(topicStoriesJson);

/** All curated story contents loaded directly from topic-stories.json. */
export const TOPIC_STORIES = new Map<string, TopicStoriesRecord>(
  Object.entries(parsedTopicStories),
);

export interface StoryToken {
  type: "text" | "word";
  content?: string;
  baseWord?: string;
  display?: string;
}

/**
 * Removes markup tokens like [baseWord|displayText] or [baseWord] and cleans punctuation for German
 * text-to-speech audio.
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
 * Parses sentences containing [baseWord|displayText] or [baseWord] tokens into structured chunks
 * for Astro rendering with interactive tooltips.
 */
export function parseSentenceTokens(sentence: string): StoryToken[] {
  const tokens: StoryToken[] = [];
  const regex = /\[([^\]]+)\]/g;
  let lastIndex = 0;

  for (const match of sentence.matchAll(regex)) {
    const matchIndex = match.index;
    if (matchIndex > lastIndex) {
      tokens.push({ type: "text", content: sentence.slice(lastIndex, matchIndex) });
    }

    const inner = match[1]?.trim() ?? "";
    const pipeIndex = inner.indexOf("|");
    const baseWord = pipeIndex === -1 ? inner : inner.slice(0, pipeIndex).trim();
    const display = pipeIndex === -1 ? inner : inner.slice(pipeIndex + 1).trim();

    tokens.push({ type: "word", baseWord, display });

    lastIndex = matchIndex + match[0].length;
  }

  if (lastIndex < sentence.length) {
    tokens.push({ type: "text", content: sentence.slice(lastIndex) });
  }

  return tokens;
}

/**
 * Retrieves the curated 4-level CEFR stories (A1, A2, B1, B2) for a topic, or synthesizes fallback
 * stories from the word list if not yet defined.
 */
export function getTopicStories(
  topicId: string,
  fallbackTopic?: {
    title: string;
    words?: { german: string; example?: string | undefined }[] | undefined;
  },
  categoryTitle = "Themenwortschatz",
): TopicStoriesRecord {
  const existing = TOPIC_STORIES.get(topicId);
  if (existing) {
    return existing;
  }

  const baseStory = getTopicStory(topicId, fallbackTopic, categoryTitle, "A1");
  return {
    A1: {
      level: "A1",
      badge: "A1 – Grundstufe",
      title: `${baseStory.title} (A1)`,
      intro: "Einfache Sätze für den Einstieg (A1).",
      paragraphs: baseStory.paragraphs,
    },
    A2: {
      level: "A2",
      badge: "A2 – Alltag & Praxis",
      title: `${baseStory.title} (A2)`,
      intro: "Alltägliche Situationen und zusammenhängende Sätze (A2).",
      paragraphs: baseStory.paragraphs,
    },
    B1: {
      level: "B1",
      badge: "B1 – Ausführliche Erzählung",
      title: `${baseStory.title} (B1)`,
      intro: "Ausführliche Beschreibungen mit Begründungen (B1).",
      paragraphs: baseStory.paragraphs,
    },
    B2: {
      level: "B2",
      badge: "B2 – Differenziert & Komplex",
      title: `${baseStory.title} (B2)`,
      intro: "Anspruchsvolle Texte mit stilistischen Nuancen (B2).",
      paragraphs: baseStory.paragraphs,
    },
  };
}

/** Retrieves a single story definition for a topic and CEFR level. */
export function getTopicStory(
  topicId: string,
  fallbackTopic?: {
    title: string;
    words?: { german: string; example?: string | undefined }[] | undefined;
  },
  categoryTitle = "Themenwortschatz",
  level: CefrLevel = "A1",
): StoryDefinition {
  const existingGroup = TOPIC_STORIES.get(topicId);
  const levelStory =
    existingGroup && Object.entries(existingGroup).find(([key]) => key === level)?.[1];
  if (levelStory !== undefined) {
    return levelStory;
  }
  if (existingGroup?.A1) {
    return existingGroup.A1;
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

  return { badge, title: topicTitle, paragraphs };
}
