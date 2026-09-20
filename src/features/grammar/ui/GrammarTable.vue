<script setup lang="ts">
import AnimateOnScroll from "../../../shared/ui/AnimateOnScroll.vue";
import GlassCard from "../../../shared/ui/GlassCard.vue";
import ContentItem from "./ContentItem.vue";

interface GrammarTableProperties {
  caption?: string;
  headers: string[];
  rows: (string | { text: string; highlight?: boolean })[][];
}

const props = defineProps<{ data: GrammarTableProperties }>();

const getRowKey = (row: (string | { text: string; highlight?: boolean })[]) => {
  return row.map((c) => (typeof c === "string" ? c : c.text)).join("|");
};
</script>

<template>
  <AnimateOnScroll animation="fade-up">
    <GlassCard>
      <div
        v-if="props.data.caption"
        class="border-be border-white/10 bg-white/5 px-6 py-4"
      >
        <h3 class="text-base font-medium text-yellow text-shadow-sm tablet:text-lg">
          {{ props.data.caption }}
        </h3>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm tablet:text-base">
          <thead class="bg-white/5 text-[10px] text-white/60 uppercase tablet:text-xs">
            <tr>
              <th
                v-for="header in props.data.headers"
                :key="header"
                class="px-3 py-2.5 font-semibold tracking-wider text-orange/80 mobile:px-4 mobile:py-3 tablet:px-6 tablet:py-4"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5">
            <tr
              v-for="row in props.data.rows"
              :key="getRowKey(row)"
              class="transition-colors hover:bg-white/5"
            >
              <td
                v-for="(cell, index) in row"
                :key="typeof cell === 'string' ? cell : cell.text"
                :class="[
                  'px-3 py-2.5 mobile:px-4 mobile:py-3 tablet:px-6 tablet:py-4',
                  index === 0 ? 'font-medium text-orange' : 'text-white/90',
                ]"
              >
                <ContentItem :content="cell" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </GlassCard>
  </AnimateOnScroll>
</template>
