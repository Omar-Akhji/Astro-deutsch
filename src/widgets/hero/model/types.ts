export type HeroVariant = "default" | "glass" | "compact";

export interface HeroStatItem<TComponent = unknown> {
  label: string;
  value: string;
  icon?: TComponent | undefined;
}

export interface HeroProps<TComponent = unknown> {
  title: string;
  description: string;
  category?: string | undefined;
  example?: string | undefined;
  badge?: string | undefined;
  gradient?: string | undefined;
  variant?: HeroVariant | undefined;
  stats?: HeroStatItem<TComponent>[] | undefined;
  headingLevel?: "h1" | "h2" | undefined;
}
