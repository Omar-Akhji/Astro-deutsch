<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { PartyPopper, Sparkles, ThumbsUp, Zap } from "lucide-vue-next";
import { gsap } from "@/shared/lib";
import AnimateOnScroll from "@/shared/ui/AnimateOnScroll.vue";

interface Props {
  score: number;
  total: number;
}

const props = defineProps<Props>();

const emit = defineEmits<{ (e: "restart"): void; (e: "exit"): void }>();

const percentage = computed(() => {
  return Math.round((props.score / props.total) * 100);
});

const circleRef = ref<SVGCircleElement | null>(null);
const displayedPercent = ref(0);
let ctx: gsap.Context | null = null;

onMounted(() => {
  ctx = gsap.context(() => {
    const targetOffset = 440 - (440 * percentage.value) / 100;

    const counterObj = { val: 0 };
    gsap.to(counterObj, {
      val: percentage.value,
      duration: 1.2,
      ease: "power2.out",
      onUpdate: () => {
        displayedPercent.value = Math.round(counterObj.val);
      },
    });

    if (circleRef.value) {
      gsap.fromTo(
        circleRef.value,
        { strokeDashoffset: 440 },
        { strokeDashoffset: targetOffset, duration: 1.2, ease: "power2.out" },
      );
    }
  });
});

onUnmounted(() => {
  ctx?.revert();
  ctx = null;
});
</script>

<template>
  <section class="p-8 text-center">
    <AnimateOnScroll animation="fade-up">
      <h2 class="mb-2 text-3xl font-semibold text-white text-shadow-sm">Ergebnis</h2>
    </AnimateOnScroll>

    <AnimateOnScroll
      animation="fade-up"
      :delay="100"
    >
      <div class="mb-8 text-lg text-zinc-300 opacity-90 tablet:text-xl">
        <span
          v-if="percentage === 100"
          class="flex items-center justify-center gap-2"
        >
          Perfekt! <PartyPopper class="size-5 text-yellow tablet:size-6" />
        </span>
        <span
          v-else-if="percentage >= 80"
          class="flex items-center justify-center gap-2"
        >
          Sehr gut gemacht!
          <Sparkles class="size-5 text-yellow tablet:size-6" />
        </span>
        <span
          v-else-if="percentage >= 60"
          class="flex items-center justify-center gap-2"
        >
          Gut! <ThumbsUp class="size-5 text-yellow tablet:size-6" />
        </span>
        <span
          v-else
          class="flex items-center justify-center gap-2"
        >
          Weiter üben! <Zap class="size-5 text-yellow tablet:size-6" />
        </span>
      </div>
    </AnimateOnScroll>

    <!-- Score Circle -->
    <AnimateOnScroll
      animation="zoom-in"
      :delay="200"
    >
      <div class="relative mx-auto mb-8 flex size-40 items-center justify-center">
        <svg class="h-full w-full -rotate-90 transform">
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="rgba(255,255,255,0.1)"
            stroke-width="12"
            fill="none"
          />
          <circle
            ref="circleRef"
            cx="80"
            cy="80"
            r="70"
            stroke="#f1c40f"
            stroke-width="12"
            fill="none"
            stroke-linecap="round"
            stroke-dasharray="440"
            stroke-dashoffset="440"
          />
        </svg>
        <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
          <span class="text-4xl font-bold text-shadow-sm">{{ displayedPercent }}%</span>
          <span class="text-sm opacity-70"> {{ props.score }} / {{ props.total }} </span>
        </div>
      </div>
    </AnimateOnScroll>

    <!-- Actions -->
    <AnimateOnScroll
      animation="fade-up"
      :delay="300"
    >
      <div class="flex justify-center gap-4">
        <button
          type="button"
          class="cursor-pointer rounded-full border border-white/40 bg-transparent px-6 py-2 text-white transition-colors hover:bg-white/10"
          @click="emit('exit')"
        >
          Beenden
        </button>
        <button
          type="button"
          class="cursor-pointer rounded-full border-none bg-linear-to-br from-yellow to-orange px-8 py-3 font-semibold text-black shadow-xl shadow-yellow/20 transition-[scale,filter] hover:scale-105 hover:brightness-110"
          @click="emit('restart')"
        >
          Nochmal
        </button>
      </div>
    </AnimateOnScroll>
  </section>
</template>
