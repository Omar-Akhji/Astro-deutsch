export interface GrammarThemePalette {
  badgeClass: string;
  cardBorderClass: string;
  headerBorderClass: string;
  headerBgClass: string;
  accentText: string;
  lightBg: string;
  borderAccent: string;
}

export const GRAMMAR_THEME_PALETTES: GrammarThemePalette[] = [
  {
    badgeClass: "border-sky-500/30 bg-sky-500/10 text-sky-400",
    cardBorderClass: "border-2 border-sky-500/30 hover:border-sky-500/50 shadow-sky-500/5",
    headerBorderClass: "border-sky-500/20",
    headerBgClass: "bg-sky-500/[0.04]",
    accentText: "text-sky-300",
    lightBg: "bg-sky-500/10",
    borderAccent: "border-sky-500/30",
  },
  {
    badgeClass: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    cardBorderClass:
      "border-2 border-emerald-500/30 hover:border-emerald-500/50 shadow-emerald-500/5",
    headerBorderClass: "border-emerald-500/20",
    headerBgClass: "bg-emerald-500/[0.04]",
    accentText: "text-emerald-300",
    lightBg: "bg-emerald-500/10",
    borderAccent: "border-emerald-500/30",
  },
  {
    badgeClass: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    cardBorderClass: "border-2 border-amber-500/30 hover:border-amber-500/50 shadow-amber-500/5",
    headerBorderClass: "border-amber-500/20",
    headerBgClass: "bg-amber-500/[0.04]",
    accentText: "text-amber-300",
    lightBg: "bg-amber-500/10",
    borderAccent: "border-amber-500/30",
  },
  {
    badgeClass: "border-purple-500/30 bg-purple-500/10 text-purple-400",
    cardBorderClass:
      "border-2 border-purple-500/30 hover:border-purple-500/50 shadow-purple-500/5",
    headerBorderClass: "border-purple-500/20",
    headerBgClass: "bg-purple-500/[0.04]",
    accentText: "text-purple-300",
    lightBg: "bg-purple-500/10",
    borderAccent: "border-purple-500/30",
  },
];

export function getGrammarTheme(index: number): GrammarThemePalette {
  const safeIndex = Math.abs(index) % GRAMMAR_THEME_PALETTES.length;
  return (
    GRAMMAR_THEME_PALETTES[safeIndex] ?? {
      badgeClass: "border-sky-500/30 bg-sky-500/10 text-sky-400",
      cardBorderClass: "border-2 border-sky-500/30 hover:border-sky-500/50 shadow-sky-500/5",
      headerBorderClass: "border-sky-500/20",
      headerBgClass: "bg-sky-500/[0.04]",
      accentText: "text-sky-300",
      lightBg: "bg-sky-500/10",
      borderAccent: "border-sky-500/30",
    }
  );
}
