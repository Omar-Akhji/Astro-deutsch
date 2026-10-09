// Generic Design System Primitives & Components
export {
  Card,
  CardBody,
  CardModal,
  CardSkeleton,
  CardWithModal,
  GlassCard,
  setupCardModalListeners,
} from "./card";
export { BackButton } from "./button";
export { PageHeader, PageHeaderSkeleton } from "./page-header";
export { Skeleton, SkeletonLayouts } from "./skeleton";

// Client-side Islands
export { AnimateOnScroll, TextAudioPlayer } from "./islands";

// Composite Layout Widgets (Re-exported from @/widgets for backward compatibility)
export { Footer, FooterSkeleton } from "@/widgets/footer";
export { Hero, HeroSkeleton } from "@/widgets/hero";
export { Navigation } from "@/widgets/navigation";
