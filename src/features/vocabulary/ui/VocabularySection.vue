<script setup lang="ts">
import { VOCAB_GRADIENTS } from "../../../shared/lib/gradients.ts";
import { getGradient } from "../../../shared/lib/utilities.ts";
import AnimateOnScroll from "../../../shared/ui/AnimateOnScroll.vue";
import Card from "../../../shared/ui/Card.vue";
import type { VocabItem } from "../model/types.ts";

const props = defineProps<{ vocabList: VocabItem[] }>();
</script>

<template>
  <section
    class="py-4"
    aria-labelledby="vocab-heading"
  >
    <h2
      id="vocab-heading"
      class="sr-only"
    >
      Vocabulary Topics
    </h2>
    <ul
      class="m-0 grid list-none grid-cols-1 gap-6 p-0 py-4 mobile:grid-cols-2 mobile:gap-8 laptop:grid-cols-3"
    >
      <li
        v-for="(item, index) in props.vocabList"
        :key="item.id"
        class="h-full"
      >
        <AnimateOnScroll
          animation="fade-up"
          :delay="(index % 4) * 100"
          class="h-full"
        >
          <Card
            :href="`/vokabeln/${item.id}`"
            :title="item.german"
            :category="item.category"
            :description="item.description"
            subtitle="Wortschatz"
            :gradient="getGradient(index, VOCAB_GRADIENTS)"
          />
        </AnimateOnScroll>
      </li>
    </ul>
  </section>
</template>
