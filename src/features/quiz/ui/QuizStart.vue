<script setup lang="ts">
import { ClipboardList } from "lucide-vue-next";
import AnimateOnScroll from "@/shared/ui/AnimateOnScroll.vue";

interface Props {
  title: string;
  description: string;
  questionCount: number;
  duration: number;
}

const props = defineProps<Props>();

const emit = defineEmits<{ (e: "start"): void }>();
</script>

<template>
  <section class="mx-auto p-8 text-center max-inline-lg">
    <!-- Exam badge -->
    <AnimateOnScroll animation="fade-up">
      <div
        class="mx-auto mbe-6 inline-flex items-center gap-2 rounded-full border border-yellow/30 bg-yellow/10 px-4 py-1.5 text-sm font-medium text-yellow"
      >
        <ClipboardList :size="16" /> Goethe / ÖSD Zertifikat
      </div>
    </AnimateOnScroll>

    <AnimateOnScroll
      animation="fade-up"
      :delay="100"
    >
      <h2 class="mbe-3 text-3xl font-semibold text-white text-shadow-sm">
        {{ props.title }}
      </h2>
    </AnimateOnScroll>

    <AnimateOnScroll
      animation="fade-up"
      :delay="200"
    >
      <p class="mbe-8 text-base leading-relaxed text-mist-500">
        {{ props.description }}
      </p>
    </AnimateOnScroll>

    <!-- Exam info cards -->
    <dl class="mbe-8 grid grid-cols-2 gap-4">
      <AnimateOnScroll
        animation="zoom-in"
        :delay="300"
        class="h-full"
      >
        <div class="h-full rounded-xl border border-white/10 bg-mist-900/50 p-4 shadow-sm">
          <dd class="m-0 text-2xl font-bold text-yellow">
            {{ props.questionCount }}
          </dd>
          <dt class="text-xs tracking-wider text-mist-500 uppercase">Fragen (Gesamt)</dt>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll
        animation="zoom-in"
        :delay="400"
        class="h-full"
      >
        <div class="h-full rounded-xl border border-white/10 bg-mist-900/50 p-4 shadow-sm">
          <dd class="m-0 text-2xl font-bold text-yellow">
            {{ props.duration }}
          </dd>
          <dt class="text-xs tracking-wider text-mist-500 uppercase">Minuten (Prüfung)</dt>
        </div>
      </AnimateOnScroll>
    </dl>

    <AnimateOnScroll
      animation="fade-up"
      :delay="500"
    >
      <button
        type="button"
        class="cursor-pointer rounded-full border-none bg-linear-to-r from-yellow to-orange px-8 py-4 text-lg font-bold text-black shadow-xl shadow-yellow/20 transition-[scale,filter] inline-full hover:scale-[1.02] hover:brightness-110"
        @click="emit('start')"
      >
        Prüfung Starten
      </button>
    </AnimateOnScroll>
  </section>
</template>
