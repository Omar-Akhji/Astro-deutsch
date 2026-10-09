<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { twMerge } from "tailwind-merge";
import { gsap } from "@/shared/lib";

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
  duration: 600,
  as: "div",
  repeat: false,
});

const elementRef = ref<HTMLElement | null>(null);
let ctx: gsap.Context | null = null;

function getAnimationConfig(animation: AnimationType) {
  switch (animation) {
    case "fade-up": {
      return { from: { y: 32 }, to: { y: 0 } };
    }
    case "fade-down": {
      return { from: { y: -32 }, to: { y: 0 } };
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
      return { from: { x: 32 }, to: { x: 0 } };
    }
    case "fade-right": {
      return { from: { x: -32 }, to: { x: 0 } };
    }
    case "blur-in": {
      return { from: { scale: 0.96 }, to: { scale: 1 } };
    }
  }
}

onMounted(() => {
  const element = elementRef.value;
  if (!element || typeof window === "undefined") return;

  // Use gsap.context for scoped execution and clean lifecycle teardown
  ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(element, { autoAlpha: 1, clearProps: "all" });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const { from: configFrom, to: configTo } = getAnimationConfig(props.animation);

      gsap.set(element, { autoAlpha: 0, ...configFrom });

      gsap.to(element, {
        ...configTo,
        autoAlpha: 1,
        duration: props.duration / 1000,
        delay: props.delay / 1000,
        ease: "power2.out",
        overwrite: "auto",
        onStart: () => {
          gsap.set(element, { willChange: "transform, opacity" });
        },
        onComplete: () => {
          gsap.set(element, { clearProps: "willChange" });
        },
        scrollTrigger: {
          trigger: element,
          start: "top 92%",
          toggleActions: props.repeat ? "play none none reverse" : "play none none none",
          once: !props.repeat,
        },
      });
    });
  }, element);
});

onUnmounted(() => {
  // Revert all animations and kill ScrollTriggers created in this component
  ctx?.revert();
  ctx = null;
});
</script>

<template>
  <component
    :is="props.as"
    ref="elementRef"
    data-vue-managed="true"
    :class="twMerge('animate-on-scroll', props.className)"
  >
    <slot />
  </component>
</template>
