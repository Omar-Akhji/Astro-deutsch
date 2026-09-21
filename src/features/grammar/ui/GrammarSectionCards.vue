<script setup lang="ts">
import { computed, type Component } from "vue";
import { BookOpen, FileText, Link, LayoutList, Clock, MessageCircle } from "lucide-vue-next";
import { getGradient } from "../../../shared/lib/utilities.ts";
import AnimateOnScroll from "../../../shared/ui/AnimateOnScroll.vue";
import Card from "../../../shared/ui/Card.vue";
import type { GrammarSection, GrammarTopic } from "../model/types.ts";

const props = defineProps<{ section: GrammarSection }>();

const ICON_MAP: Record<string, Component | object> = {
  BookOpen,
  FileText,
  Link,
  LayoutList,
  Clock,
  MessageCircle,
};

const sectionIcon = computed(() => {
  return ICON_MAP[props.section.icon] ?? BookOpen;
});

interface EnrichedGrammarTopic extends GrammarTopic {
  gradient: string;
  delay: number;
}

const enrichedTopics = computed<EnrichedGrammarTopic[]>(() => {
  return props.section.topics.map((topic, index) => ({
    ...topic,
    gradient: getGradient(index, props.section.gradients),
    delay: (index % 3) * 100,
  }));
});
</script>

<template>
  <section
    class="mbe-16"
    :aria-labelledby="`${props.section.id}-heading`"
  >
    <AnimateOnScroll animation="fade-right">
      <h2
        :id="`${props.section.id}-heading`"
        class="mbe-8 flex items-center gap-3 text-2xl text-text text-shadow-sm tablet:text-3xl"
      >
        <span
          class="flex size-10 shrink-0 items-center justify-center rounded-full border-[3px] border-solid border-yellow bg-mist-900/50 text-yellow shadow-sm tablet:size-12"
          aria-hidden="true"
        >
          <component
            :is="sectionIcon"
            class="size-5 tablet:size-6"
            :stroke-width="2"
          />
        </span>
        {{ props.section.title }}
      </h2>
    </AnimateOnScroll>

    <ul
      class="m-0 grid list-none grid-cols-1 gap-6 p-0 mobile:grid-cols-2 mobile:gap-8 laptop:grid-cols-3"
    >
      <li
        v-for="topic in enrichedTopics"
        :key="topic.id"
        class="h-full"
      >
        <AnimateOnScroll
          animation="fade-up"
          :delay="topic.delay"
          class="h-full"
        >
          <Card
            :href="`/grammatik/${props.section.id}/${topic.id}`"
            :title="topic.title"
            :category="topic.number"
            :subtitle="topic.category"
            :description="topic.description"
            :gradient="topic.gradient"
          />
        </AnimateOnScroll>
      </li>
    </ul>
  </section>
</template>
