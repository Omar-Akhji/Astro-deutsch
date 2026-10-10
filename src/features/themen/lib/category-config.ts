/**
 * Strict category types and single-source-of-truth styling configuration for B1 Themen. Literal
 * Tailwind CSS classes are kept intact for Tailwind v4 compiler scanning.
 */
export type ThemaCategory =
  | "essen"
  | "tech"
  | "gesellschaft"
  | "bildung"
  | "gesundheit"
  | "freizeit"
  | "umwelt"
  | "arbeit";

export interface CategoryThemeStyle {
  color: string;
  text: string;
  bg: string;
  border: string;
  badge: string;
}

export const THEMEN_CATEGORY_CONFIG: Record<ThemaCategory, CategoryThemeStyle> = {
  essen: {
    color: "orange-500",
    text: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500",
    badge: "text-orange-500 bg-orange-500/10 border-orange-500",
  },
  tech: {
    color: "blue-500",
    text: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500",
    badge: "text-blue-500 bg-blue-500/10 border-blue-500",
  },
  gesellschaft: {
    color: "purple-500",
    text: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500",
    badge: "text-purple-500 bg-purple-500/10 border-purple-500",
  },
  bildung: {
    color: "emerald-500",
    text: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500",
    badge: "text-emerald-500 bg-emerald-500/10 border-emerald-500",
  },
  gesundheit: {
    color: "red-500",
    text: "text-red-500",
    bg: "bg-red-500/10",
    border: "border-red-500",
    badge: "text-red-500 bg-red-500/10 border-red-500",
  },
  freizeit: {
    color: "pink-500",
    text: "text-pink-500",
    bg: "bg-pink-500/10",
    border: "border-pink-500",
    badge: "text-pink-500 bg-pink-500/10 border-pink-500",
  },
  umwelt: {
    color: "green-500",
    text: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500",
    badge: "text-green-500 bg-green-500/10 border-green-500",
  },
  arbeit: {
    color: "cyan-500",
    text: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500",
    badge: "text-cyan-500 bg-cyan-500/10 border-cyan-500",
  },
};

const DEFAULT_CATEGORY_STYLE: CategoryThemeStyle = {
  color: "slate-500",
  text: "text-slate-500",
  bg: "bg-slate-500/10",
  border: "border-slate-500",
  badge: "text-slate-500 bg-slate-500/10 border-slate-500",
};

/** Category → color mapping for backward compatibility. */
export const THEMEN_CATEGORY_COLORS: Record<string, string> = Object.fromEntries(
  Object.entries(THEMEN_CATEGORY_CONFIG).map(([k, v]) => [k, v.color]),
);

const THEMA_CATEGORIES = new Set<string>([
  "essen",
  "tech",
  "gesellschaft",
  "bildung",
  "gesundheit",
  "freizeit",
  "umwelt",
  "arbeit",
]);

/** Type guard for ThemaCategory keys */
export function isThemaCategory(category: string): category is ThemaCategory {
  return THEMA_CATEGORIES.has(category);
}

/**
 * Returns pre-split structured styling tokens for a category. Prevents runtime string parsing and
 * split operations in components.
 */
export function getCategoryStyle(category: string): CategoryThemeStyle {
  switch (category) {
    case "essen": {
      return THEMEN_CATEGORY_CONFIG.essen;
    }
    case "tech": {
      return THEMEN_CATEGORY_CONFIG.tech;
    }
    case "gesellschaft": {
      return THEMEN_CATEGORY_CONFIG.gesellschaft;
    }
    case "bildung": {
      return THEMEN_CATEGORY_CONFIG.bildung;
    }
    case "gesundheit": {
      return THEMEN_CATEGORY_CONFIG.gesundheit;
    }
    case "freizeit": {
      return THEMEN_CATEGORY_CONFIG.freizeit;
    }
    case "umwelt": {
      return THEMEN_CATEGORY_CONFIG.umwelt;
    }
    case "arbeit": {
      return THEMEN_CATEGORY_CONFIG.arbeit;
    }
    default: {
      return DEFAULT_CATEGORY_STYLE;
    }
  }
}

/** Returns full tailwind classes for a category badge. */
export function getCategoryClasses(category: string): string {
  return getCategoryStyle(category).badge;
}
