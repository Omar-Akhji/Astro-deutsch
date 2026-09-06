<script setup lang="ts">
import { ref, computed, nextTick } from "vue";
import {
  Activity,
  ArrowUp,
  Briefcase,
  Cpu,
  GraduationCap,
  LayoutGrid,
  Leaf,
  Lightbulb,
  Palmtree,
  Users,
  Utensils,
} from "lucide-vue-next";
import { cn } from "../../../shared/lib/utilities.ts";
import AnimateOnScroll from "../../../shared/ui/AnimateOnScroll.vue";
import { getCategoryClasses, THEMEN_CATEGORY_COLORS } from "../lib/category-config.ts";
import type { Thema } from "../model/types.ts";
import ThemaCard from "./ThemaCard.vue";

interface Props {
  isEmbedded?: boolean;
  initialThemen: Thema[];
}

const props = withDefaults(defineProps<Props>(), { isEmbedded: false });

const activeCategory = ref<string | null>(null);
const isPending = ref(false);

const categoryConfig = {
  essen: { label: "Essen & Trinken", icon: Utensils, color: THEMEN_CATEGORY_COLORS["essen"] ?? "" },
  tech: { label: "Technik & Medien", icon: Cpu, color: THEMEN_CATEGORY_COLORS["tech"] ?? "" },
  gesellschaft: {
    label: "Gesellschaft",
    icon: Users,
    color: THEMEN_CATEGORY_COLORS["gesellschaft"] ?? "",
  },
  bildung: {
    label: "Bildung & Beruf",
    icon: GraduationCap,
    color: THEMEN_CATEGORY_COLORS["bildung"] ?? "",
  },
  gesundheit: {
    label: "Gesundheit",
    icon: Activity,
    color: THEMEN_CATEGORY_COLORS["gesundheit"] ?? "",
  },
  freizeit: {
    label: "Freizeit & Reisen",
    icon: Palmtree,
    color: THEMEN_CATEGORY_COLORS["freizeit"] ?? "",
  },
  umwelt: { label: "Umwelt", icon: Leaf, color: THEMEN_CATEGORY_COLORS["umwelt"] ?? "" },
  arbeit: { label: "Arbeitswelt", icon: Briefcase, color: THEMEN_CATEGORY_COLORS["arbeit"] ?? "" },
};

const groupedThemen = computed(() => {
  const map = new Map<string, Thema[]>();
  for (const cat of Object.keys(categoryConfig)) {
    const themes = props.initialThemen.filter((t) => t.cat === cat);
    if (themes.length > 0) {
      map.set(cat, themes);
    }
  }
  return map;
});

const filteredGroups = computed(() => {
  if (activeCategory.value) {
    const themesForCat = groupedThemen.value.get(activeCategory.value) ?? [];
    return new Map([[activeCategory.value, themesForCat]]);
  }
  return groupedThemen.value;
});

const handleCategoryChange = (id: string | null) => {
  isPending.value = true;
  activeCategory.value = id;
  nextTick(() => {
    isPending.value = false;
  });
};

const scrollToTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
</script>

<template>
  <main :class="['space-y-16 py-8', props.isEmbedded ? '' : 'min-h-screen']">
    <header
      v-if="!props.isEmbedded"
      class="mx-auto max-w-2xl space-y-4 text-center"
    >
      <AnimateOnScroll animation="fade-up">
        <h2
          class="bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-semibold text-transparent tablet:text-4xl"
        >
          Sprechen & Schreiben Themen
        </h2>
      </AnimateOnScroll>
      <AnimateOnScroll
        animation="fade-up"
        :delay="100"
      >
        <p class="text-base text-zinc-400 tablet:text-lg">
          Bereite dich auf das Goethe & ÖSD Zertifikat B1 vor. Hier findest du 58 Themen mit Pro-
          und Contra-Argumenten für deine Präsentation oder deinen Diskussionsbeitrag.
        </p>
      </AnimateOnScroll>
    </header>

    <!-- Internal Navigation Bar -->
    <nav
      class="rounded-2xl border border-white/5 bg-zinc-950/50 p-4 shadow-xl backdrop-blur-md"
      aria-label="Themen Kategorien"
    >
      <div class="mx-auto flex max-w-7xl flex-wrap justify-center gap-2">
        <button
          type="button"
          :class="[
            'flex cursor-pointer items-center gap-2 rounded-full border-none px-4 pbs-2 pbe-2 text-sm font-medium transition-all',
            activeCategory === null ?
              'bg-amber-500 text-black shadow-lg shadow-black/20'
            : 'bg-white/5 text-zinc-400 hover:bg-white/10',
          ]"
          @click="handleCategoryChange(null)"
        >
          <span
            :class="[
              'scale-75 transition-transform',
              activeCategory === null ? '' : 'opacity-70 group-hover:opacity-100',
            ]"
          >
            <LayoutGrid :size="24" />
          </span>
          Alle
        </button>

        <button
          v-for="(config, id) in categoryConfig"
          :key="id"
          type="button"
          :class="[
            'flex cursor-pointer items-center gap-2 rounded-full border-none px-4 pbs-2 pbe-2 text-sm font-medium transition-all',
            activeCategory === id ?
              cn(
                'text-black shadow-lg shadow-black/20',
                getCategoryClasses(id)
                  .split(' ')
                  .find((c: string) => c.startsWith('bg-')),
              )
            : 'bg-white/5 text-zinc-400 hover:bg-white/10',
          ]"
          @click="handleCategoryChange(id)"
        >
          <span
            :class="[
              'scale-75 transition-transform group-hover:scale-110',
              activeCategory === id ? 'text-black' : (
                getCategoryClasses(id)
                  .split(' ')
                  .find((c: string) => c.startsWith('text-'))
              ),
            ]"
          >
            <component
              :is="config.icon"
              :size="24"
            />
          </span>
          {{ config.label }}
        </button>
      </div>
    </nav>

    <div
      :class="[
        'space-y-24 transition-opacity duration-300',
        isPending ? 'opacity-40' : 'opacity-100',
      ]"
    >
      <section
        v-for="[catId, themes] in filteredGroups"
        :id="catId"
        :key="catId"
        class="scroll-mbs-32"
      >
        <div class="mb-10 flex items-center gap-4">
          <div
            :class="[
              'flex size-12 shrink-0 items-center justify-center rounded-full border-3 text-yellow shadow-inner tablet:size-14',
              getCategoryClasses(catId)
                .split(' ')
                .find((c: string) => c.startsWith('border-')),
              getCategoryClasses(catId)
                .split(' ')
                .find((c: string) => c.startsWith('text-')),
            ]"
          >
            <span class="flex size-6 items-center justify-center tablet:size-7">
              <component
                :is="categoryConfig[catId as keyof typeof categoryConfig]?.icon"
                class="size-full"
              />
            </span>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-white capitalize tablet:text-2xl">
              {{ categoryConfig[catId as keyof typeof categoryConfig]?.label }}
            </h3>
            <p class="text-xs text-zinc-400 tablet:text-sm">
              {{ themes.length }} Themen zur Vorbereitung
            </p>
          </div>
        </div>

        <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
          <AnimateOnScroll
            v-for="(thema, index) in themes"
            :key="thema.id"
            animation="fade-up"
            :delay="(index % 3) * 100"
          >
            <ThemaCard :thema="thema" />
          </AnimateOnScroll>
        </div>
      </section>
    </div>

    <AnimateOnScroll
      animation="zoom-in"
      :delay="200"
    >
      <aside
        class="mt-20 rounded-3xl border border-amber-500/20 bg-linear-to-br from-yellow/20 to-orange/20 p-8 backdrop-blur-sm"
      >
        <h3 class="mb-4 flex items-center gap-3 text-xl font-semibold text-white tablet:text-2xl">
          <span
            class="flex size-9 shrink-0 items-center justify-center rounded-full border-3 border-amber-400 text-amber-400 tablet:size-10"
          >
            <Lightbulb class="size-5 tablet:size-6" />
          </span>
          Prüfungstipp für Sprechen Teil 2
        </h3>
        <ul class="m-0 grid list-none gap-4 p-0 text-zinc-300 md:grid-cols-2">
          <li class="flex gap-3">
            <span class="font-bold text-amber-400">1.</span>
            Stell das Thema kurz vor und begründe deine Wahl.
          </li>
          <li class="flex gap-3">
            <span class="font-bold text-amber-400">2.</span>
            Berichte von deinen persönlichen Erfahrungen (Ich-Perspektive).
          </li>
          <li class="flex gap-3">
            <span class="font-bold text-amber-400">3.</span>
            Beschreibe die Situation in deinem Heimatland.
          </li>
          <li class="flex gap-3">
            <span class="font-bold text-amber-400">4.</span>
            Nenne mindestens zwei Vorteile und zwei Nachteile.
          </li>
          <li class="flex gap-3">
            <span class="font-bold text-amber-400">5.</span>
            Äußere deine eigene Meinung klar am Ende.
          </li>
          <li class="flex gap-3">
            <span class="font-bold text-amber-400">6.</span>
            Bedanke dich am Ende und bitte um Fragen.
          </li>
        </ul>
      </aside>
    </AnimateOnScroll>

    <!-- Scroll to Top -->
    <button
      v-if="!props.isEmbedded"
      type="button"
      aria-label="Nach oben scrollen"
      class="fixed right-8 bottom-8 z-50 flex size-14 cursor-pointer items-center justify-center rounded-full border-none bg-amber-500 text-black shadow-2xl transition-transform hover:scale-110 active:scale-95"
      @click="scrollToTop"
    >
      <ArrowUp :size="28" />
    </button>
  </main>
</template>
