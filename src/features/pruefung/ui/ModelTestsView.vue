<script setup lang="ts">
import { computed } from "vue";
import { BookOpen, Headphones, MessageCircle, PenLine, BarChart, Puzzle } from "lucide-vue-next";
import AnimateOnScroll from "@/shared/ui/AnimateOnScroll.vue";
import Card from "@/shared/ui/Card.vue";
import { HeroVue as Hero } from "@/widgets/hero";

interface Props {
  level: string;
  initialModelTests: number[];
}

const props = defineProps<Props>();

const skills = [
  { id: "lesen", title: "Lesen", icon: BookOpen, color: "from-blue-500 to-cyan-400" },
  { id: "hoeren", title: "Hören", icon: Headphones, color: "from-emerald-500 to-green-400" },
  { id: "schreiben", title: "Schreiben", icon: PenLine, color: "from-orange-500 to-red-400" },
  { id: "sprechen", title: "Sprechen", icon: MessageCircle, color: "from-fuchsia-500 to-pink-400" },
];

const SKILL_GRADIENTS: Record<string, string> = {
  lesen: "linear-gradient(135deg, var(--color-blue-500), var(--color-yellow))",
  hoeren: "linear-gradient(135deg, var(--color-green-500), var(--color-yellow))",
  schreiben: "linear-gradient(135deg, var(--color-orange-500), var(--color-yellow))",
  sprechen: "linear-gradient(135deg, var(--color-pink-500), var(--color-yellow))",
};

const stats = computed(() => [
  { label: "Niveau", value: props.level.toUpperCase(), icon: BarChart },
  { label: "Module", value: "4", icon: Puzzle },
]);
</script>

<template>
  <div class="relative min-h-dvh py-8">
    <main>
      <Hero
        :title="`Modelltests ${props.level.toUpperCase()}`"
        description="Wähle einen Fertigkeitsbereich und einen Modelltest aus."
        category="Prüfungsvorbereitung"
        variant="glass"
        :stats="stats"
      />

      <div class="mt-8 mb-12 flex justify-center">
        <AnimateOnScroll
          animation="fade-up"
          :delay="400"
        >
          <a
            :href="`/pruefung/${props.level}`"
            class="flex items-center gap-2 rounded-full border border-white/20 px-6 py-2 text-sm text-white no-underline transition-colors hover:bg-white/10"
          >
            <span>&larr;</span> Zurück zur Übersicht
          </a>
        </AnimateOnScroll>
      </div>

      <div class="grid gap-12">
        <section
          v-for="(skill, skillIndex) in skills"
          :key="skill.id"
        >
          <AnimateOnScroll
            animation="fade-right"
            :delay="skillIndex * 100"
          >
            <h2
              class="mb-6 flex items-center gap-3 text-xl font-semibold text-white tablet:gap-4 tablet:text-2xl"
            >
              <span
                class="flex size-10 items-center justify-center rounded-full border-[3px] border-solid border-yellow bg-mist-900/50 text-yellow shadow-sm tablet:size-12"
              >
                <component
                  :is="skill.icon"
                  class="size-5 tablet:size-6"
                  :stroke-width="2"
                />
              </span>
              <span class="text-white">{{ skill.title }}</span>
            </h2>
          </AnimateOnScroll>

          <div class="grid grid-cols-1 gap-6 mobile:grid-cols-2 mobile:gap-8 laptop:grid-cols-3">
            <AnimateOnScroll
              v-for="(testId, testIndex) in props.initialModelTests"
              :key="`${skill.id}-${testId}`"
              animation="fade-up"
              :delay="(testIndex % 3) * 100"
              class="h-full"
            >
              <Card
                :title="`Modelltest ${testId}`"
                subtitle="Übung"
                :description="`Vollständiger ${skill.title}-Teil für das ${props.level.toUpperCase()}-Zertifikat.`"
                :href="`/quiz/${props.level}/${skill.id}/${testId}`"
                :gradient="SKILL_GRADIENTS[skill.id] ?? SKILL_GRADIENTS.lesen"
                variant="default"
              />
            </AnimateOnScroll>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
