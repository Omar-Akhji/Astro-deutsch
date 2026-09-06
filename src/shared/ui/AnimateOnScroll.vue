<script setup lang="ts">
import { ref, onMounted } from "vue";
import { twMerge } from "tailwind-merge";
import gsap from "../lib/gsap.ts";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-in"
  | "zoom-in"
  | "zoom-out"
  | "fade-left"
  | "fade-right"
  | "blur-in";

interface Props {
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  as?: string;
  repeat?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  animation: "fade-up",
  delay: 0,
  duration: 700,
  as: "div",
  repeat: false,
});

const elementRef = ref<HTMLElement | null>(null);

function getAnimationConfig(animation: AnimationType) {
  switch (animation) {
    case "fade-up": {
      return { from: { y: 48 }, to: { y: 0 } };
    }
    case "fade-down": {
      return { from: { y: -48 }, to: { y: 0 } };
    }
    case "fade-in": {
      return { from: {}, to: {} };
    }
    case "zoom-in": {
      return { from: { scale: 0.95 }, to: { scale: 1 } };
    }
    case "zoom-out": {
      return { from: { scale: 1.05 }, to: { scale: 1 } };
    }
    case "fade-left": {
      return { from: { x: 48 }, to: { x: 0 } };
    }
    case "fade-right": {
      return { from: { x: -48 }, to: { x: 0 } };
    }
    case "blur-in": {
      return { from: { filter: "blur(12px)", scale: 0.95 }, to: { scale: 1 } };
    }
  }
}

onMounted(() => {
  const element = elementRef.value;
  if (!element || typeof window === "undefined") return;

  gsap.set(element, { opacity: 0, visibility: "hidden" });

  const { from: configFrom, to: configTo } = getAnimationConfig(props.animation);

  const baseFrom = { opacity: 0, visibility: "visible", ...configFrom };
  const baseTo = { opacity: 1, clearProps: "filter,willChange", ...configTo };

  gsap.fromTo(element, baseFrom, {
    ...baseTo,
    duration: props.duration / 1000,
    delay: props.delay / 1000,
    ease: "power3.out",
    onStart: () => {
      gsap.set(element, { willChange: "transform, opacity, filter" });
    },
    scrollTrigger: {
      trigger: element,
      start: "top 95%",
      toggleActions: props.repeat ? "play none none reverse" : "play none none none",
      once: !props.repeat,
    },
  });
});
</script>

<template>
  <component
    :is="props.as"
    ref="elementRef"
    :class="twMerge('animate-on-scroll', props.className)"
  >
    <slot />
  </component>
</template>
