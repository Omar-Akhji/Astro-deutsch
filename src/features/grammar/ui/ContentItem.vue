<script setup lang="ts">
import { computed } from "vue";
import FormattedText from "./FormattedText.vue";

interface Props {
  content: string | { text: string; highlight?: boolean };
}

const props = defineProps<Props>();

const text = computed(() => {
  return typeof props.content === "string" ? props.content : props.content.text;
});

const isHighlighted = computed(() => {
  return typeof props.content !== "string" && props.content.highlight;
});
</script>

<template>
  <span :class="isHighlighted ? 'font-medium text-yellow' : ''">
    <FormattedText :text="text" />
  </span>
</template>
