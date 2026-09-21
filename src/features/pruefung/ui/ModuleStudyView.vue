<script setup lang="ts">
import { computed } from "vue";
import { CheckCircle2, Clock } from "lucide-vue-next";
import AnimateOnScroll from "@/shared/ui/AnimateOnScroll.vue";
import Hero from "@/shared/ui/Hero.vue";
import { type Thema, ThemenSection } from "@/features/themen";
import type { ExamLevel, PhraseGroup, RedemittelCategory } from "../model/types.ts";
import EmailVisualFrame from "./EmailVisualFrame.vue";
import PhraseGroupCard from "./PhraseGroupCard.vue";

interface Props {
  level: string;
  module: "sprechen" | "schreiben";
  examData: ExamLevel;
  redemittel: RedemittelCategory;
  initialThemen: Thema[];
}

const props = defineProps<Props>();

const section = computed(() => {
  return props.examData.sections.find(
    (s) => s.id === `${props.level.toLowerCase()}-${props.module}`,
  );
});

// Filter redemittel for this module
const filteredRedemittel = computed(() => {
  return Object.entries(props.redemittel).filter(([category]) => {
    const cat = category.toLowerCase();
    const isVocab =
      cat.includes("konnektoren") || cat.includes("zeitausdrücke") || cat.includes("wortschatz");

    return props.module === "sprechen" ?
        cat.includes("sprechen") || isVocab
      : cat.includes("schreiben") || isVocab;
  });
});

const getPartNumber = (partName: string) => {
  return partName.match(/\d+/)?.[0] ?? "";
};

interface EnrichedRedemittelCategory {
  category: string;
  categoryLabel: string;
  processedGroups: PhraseGroup[];
}

interface EnrichedPart {
  name: string;
  taskType: string;
  description?: string;
  points: number | string;
  isEmail: boolean;
  redemittelCategories: EnrichedRedemittelCategory[];
}

function isPhraseGroup(item: unknown): item is PhraseGroup {
  return typeof item === "object" && item !== null && "label" in item;
}

const getProcessedGroups = (group: PhraseGroup): PhraseGroup[] => {
  if (group.phrases.some((p) => typeof p !== "string")) {
    return group.phrases.flatMap((p) => {
      if (!isPhraseGroup(p)) return [];
      return [{ ...p, label: `${group.label}: ${p.label}` }];
    });
  }
  return [group];
};

const isEmailTask = (taskType: string) => {
  const t = taskType.toLowerCase();
  return props.module === "schreiben" && (t.includes("e-mail") || t.includes("schreiben"));
};

const enrichedParts = computed<EnrichedPart[]>(() => {
  if (!section.value) return [];
  const secTitle = section.value.title.toLowerCase();

  return section.value.parts.map((part) => {
    const partNumber = getPartNumber(part.name);
    const matchingCategories = filteredRedemittel.value.filter(([category]) =>
      category.toLowerCase().includes(`${secTitle} ${partNumber}`),
    );

    const redemittelCategories: EnrichedRedemittelCategory[] = matchingCategories.map(
      ([category, groups]) => {
        const processedGroups = groups.flatMap((group) => getProcessedGroups(group));
        return {
          category,
          categoryLabel: category.split(":").pop()?.trim() ?? category,
          processedGroups,
        };
      },
    );

    return {
      name: part.name,
      taskType: part.taskType,
      description: part.description,
      points: part.points,
      isEmail: isEmailTask(part.taskType),
      redemittelCategories,
    };
  });
});
</script>

<template>
  <div
    v-if="!section"
    class="flex min-h-90 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
  >
    <div
      class="mb-4 flex size-14 items-center justify-center rounded-full bg-amber-400/10 text-amber-400"
    >
      <Clock class="size-7" />
    </div>
    <h2 class="mb-2 text-2xl font-bold text-white">Modul nicht gefunden</h2>
    <p class="max-w-md text-sm text-zinc-400">
      Das gewünschte Prüfungsmodul existiert nicht oder konnte nicht geladen werden.
    </p>
  </div>
  <div
    v-else
    class="space-y-12 pbe-20"
  >
    <Hero
      :title="`${props.examData.level} ${section.title}`"
      :description="section.description"
      category="Lernmodus"
      variant="glass"
      :stats="[
        { label: 'Dauer', value: section.duration, icon: Clock },
        { label: 'Punkte', value: `${section.points} Pkt.`, icon: CheckCircle2 },
      ]"
    />

    <div class="space-y-16">
      <section
        v-for="part in enrichedParts"
        :key="part.name"
        class="relative space-y-8"
      >
        <AnimateOnScroll animation="fade-right">
          <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div class="space-y-2">
              <div class="flex items-center gap-3">
                <span
                  class="rounded-lg bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-400 backdrop-blur-md"
                >
                  {{ part.name }}
                </span>
                <h2 class="text-2xl font-semibold text-white">
                  {{ part.taskType }}
                </h2>
              </div>
              <p
                v-if="part.description"
                class="text-zinc-400"
              >
                {{ part.description }}
              </p>
            </div>
            <div class="flex items-center gap-4">
              <div
                class="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 backdrop-blur-sm"
              >
                <CheckCircle2
                  :size="16"
                  class="text-amber-400"
                />
                {{ part.points }} Pkt.
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <div class="space-y-12">
          <AnimateOnScroll
            v-for="(redemittelItem, index) in part.redemittelCategories"
            :key="redemittelItem.category"
            animation="fade-up"
            :delay="index * 100"
          >
            <div class="space-y-6">
              <div class="flex items-center gap-6">
                <div class="h-0.75 flex-1 rounded-full bg-white/10" />
                <h3 class="text-sm font-semibold tracking-[0.2em] text-zinc-500 uppercase">
                  {{ redemittelItem.categoryLabel }}
                </h3>
                <div class="h-0.75 flex-1 rounded-full bg-white/10" />
              </div>

              <div
                class="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <div class="border-b border-white/10 bg-white/5 px-6 py-3">
                  <h3
                    class="flex items-center gap-2 text-sm font-semibold tracking-widest text-amber-400 uppercase"
                  >
                    <CheckCircle2
                      :size="16"
                      class="text-amber-400"
                    />
                    Struktur-Checkliste
                  </h3>
                </div>
                <div class="divide-y divide-white/10">
                  <PhraseGroupCard
                    v-for="processedGroup in redemittelItem.processedGroups"
                    :key="processedGroup.label"
                    :group="processedGroup"
                    is-checklist-item
                  />
                </div>
              </div>

              <!-- Email Visual Structure Frame -->
              <AnimateOnScroll
                v-if="part.isEmail"
                animation="fade-up"
                :delay="200"
              >
                <div class="mt-8">
                  <EmailVisualFrame
                    :type="
                      part.taskType.toLowerCase().includes('informell') ? 'informal' : 'formal'
                    "
                    :recipient="
                      part.taskType.toLowerCase().includes('informell') ?
                        'Jan (Freund)'
                      : 'Frau Müller (Vermieterin)'
                    "
                    :subject="
                      part.taskType.toLowerCase().includes('informell') ?
                        'Unser Treffen am Wochenende'
                      : 'Wichtige Nachricht bezüglich meiner Wohnung'
                    "
                    :sections="
                      part.taskType.toLowerCase().includes('informell') ?
                        [
                          {
                            label: 'Anrede',
                            text: 'Lieber Jan,',
                            description: 'Vorname + Komma',
                            color: 'text-amber-400',
                          },
                          {
                            label: 'Einleitung',
                            text: 'wie geht es dir? Ich hoffe, bei dir ist alles okay.',
                            description: 'Kleingeschrieben nach Komma',
                            color: 'text-blue-400',
                          },
                          {
                            label: 'Hauptteil',
                            text: 'Ich schreibe dir, weil ich unser Treffen am Samstag leider verschieben muss...',
                            description: 'Grund des Schreibens',
                            color: 'text-fuchsia-400',
                          },
                          {
                            label: 'Schluss',
                            text: 'Hast du vielleicht am Sonntag Zeit? Melde dich bitte bald!',
                            description: 'Vorschlag/Frage',
                            color: 'text-emerald-400',
                          },
                          {
                            label: 'Grußformel',
                            text: 'Viele Grüße,\nOmar',
                            description: 'Kein Satzzeichen am Ende',
                            color: 'text-pink-400',
                          },
                        ]
                      : [
                          {
                            label: 'Anrede',
                            text: 'Sehr geehrte Frau Müller,',
                            description: 'Nachname + Komma',
                            color: 'text-amber-400',
                          },
                          {
                            label: 'Einleitung',
                            text: 'ich schreibe Ihnen, da es in meiner Wohnung ein Problem gibt.',
                            description: 'Höfliche Einleitung',
                            color: 'text-blue-400',
                          },
                          {
                            label: 'Hauptteil',
                            text: 'Seit zwei Tagen funktioniert die Heizung im Wohnzimmer nicht mehr...',
                            description: 'Sachliche Beschreibung',
                            color: 'text-fuchsia-400',
                          },
                          {
                            label: 'Schluss',
                            text: 'Ich wäre Ihnen dankbar, wenn Sie bald einen Handwerker schicken könnten.',
                            description: 'Bitte um Antwort/Aktion',
                            color: 'text-emerald-400',
                          },
                          {
                            label: 'Grußformel',
                            text: 'Mit freundlichen Grüßen,\nOmar Akhji',
                            description: 'Formeller Abschluss',
                            color: 'text-pink-400',
                          },
                        ]
                    "
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>

    <!-- Topics Integration -->
    <section class="border-t border-white/10 pt-12">
      <div class="mb-10">
        <AnimateOnScroll animation="fade-up">
          <h2
            class="mb-2 bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-semibold text-transparent"
          >
            Prüfungsthemen (Teil 2)
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll
          animation="fade-up"
          :delay="100"
        >
          <p class="max-w-2xl text-lg text-zinc-400">
            Meistere die 58 wichtigsten Prüfungsthemen mit pro/kontra Argumenten und gezieltem
            Wortschatz.
          </p>
        </AnimateOnScroll>
      </div>
      <ThemenSection
        is-embedded
        :initial-themen="props.initialThemen"
      />
    </section>
  </div>
</template>
