import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names conditionally and merges Tailwind CSS classes to prevent conflicts.
 *
 * @param inputs - An array of class values which can be strings, objects, or arrays.
 * @returns A consolidated class name string.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Retrieves a CSS linear gradient from an array based on the index. Falls back to a standard
 * default purple gradient if the array is empty or undefined.
 *
 * @param index - The active index to map to a gradient.
 * @param gradients - The array of custom gradient string definitions.
 * @returns A CSS linear gradient string.
 */
export const getGradient = (index: number, gradients?: string[] | null): string => {
  if (!gradients || gradients.length === 0) {
    return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
  }
  return (
    gradients[index % gradients.length]
    ?? gradients[0]
    ?? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  );
};

/**
 * Extracts and capitalizes the first letter of a given text.
 *
 * @param text - The string to extract the first letter from.
 * @returns A single capitalized letter.
 */
export const getFirstLetter = (text: string): string => {
  return text.charAt(0).toUpperCase();
};

/**
 * Groups items of an array by a callback selector using native ES2024 Object.groupBy when
 * available.
 *
 * @param items - Iterable list of items.
 * @param keySelector - Function returning the group key for an item.
 * @returns Object mapping keys to arrays of items.
 */
export function groupByKey<T, K extends PropertyKey>(
  items: Iterable<T>,
  keySelector: (item: T) => K,
): Partial<Record<K, T[]>> {
  return Object.groupBy(items, keySelector);
}
