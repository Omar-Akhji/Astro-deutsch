<script setup lang="ts">
import CardBody from "./CardBody.vue";

interface Props {
  href: string;
  title: string;
  subtitle?: string;
  description?: string;
  category?: string;
  badge?: string;
  gradient: string;
  icon?: string;
  stats?: Array<{ label: string; value: string }>;
  variant?: "default" | "large";
}

const props = withDefaults(defineProps<Props>(), { variant: "default" });
</script>

<template>
  <a
    :href="props.href"
    class="block h-full no-underline"
  >
    <CardBody v-bind="props" />
  </a>
</template>
