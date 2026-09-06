<script setup lang="ts">
import { PRUEFUNG_GRADIENTS } from "../../../shared/lib/gradients.ts";
import { getGradient } from "../../../shared/lib/utilities.ts";
import AnimateOnScroll from "../../../shared/ui/AnimateOnScroll.vue";
import Card from "../../../shared/ui/Card.vue";
import type { ExamLevel } from "../model/types.ts";

const props = defineProps<{ examLevels: ExamLevel[] }>();
</script>

<template>
  <section class="py-4">
    <ul class="m-0 grid list-none grid-cols-1 gap-8 p-0 py-4 laptop:grid-cols-2">
      <li
        v-for="(exam, index) in props.examLevels"
        :key="exam.id"
        class="h-full"
      >
        <AnimateOnScroll
          animation="fade-up"
          :delay="(index % 2) * 150"
          class="h-full"
        >
          <Card
            :href="`/pruefung/${exam.id}`"
            :title="exam.title"
            :icon="exam.level"
            :category="exam.category"
            :subtitle="exam.totalDuration"
            :description="exam.description"
            :gradient="getGradient(index, PRUEFUNG_GRADIENTS)"
            :stats="[
              { label: 'Module', value: String(exam.sections.length) },
              { label: 'Bestehen', value: exam.passingScore.split(' ', 1)[0] ?? '' },
            ]"
            variant="large"
          />
        </AnimateOnScroll>
      </li>
    </ul>
  </section>
</template>
