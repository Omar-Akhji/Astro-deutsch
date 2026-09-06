<script setup lang="ts">
import { computed } from "vue";

interface Props {
  text: string;
}
const props = defineProps<Props>();

const parts = computed(() => {
  return props.text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
});
</script>

<template>
  <span>
    <template
      v-for="(part, i) in parts"
      :key="i"
    >
      <strong
        v-if="part.startsWith('**') && part.endsWith('**')"
        class="font-bold text-yellow"
      >
        {{ part.slice(2, -2) }}
      </strong>
      <span
        v-else-if="part.startsWith('*') && part.endsWith('*')"
        class="font-medium text-yellow"
      >
        {{ part.slice(1, -1) }}
      </span>
      <template v-else>
        {{ part }}
      </template>
    </template>
  </span>
</template>
