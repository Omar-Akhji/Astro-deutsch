<script setup lang="ts">
import { ref } from "vue";
import CardBody from "./CardBody.vue";
import CardModal from "./CardModal.vue";

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
  previewTitles?: string[];
}

const props = withDefaults(defineProps<Props>(), { previewTitles: () => [] });

const isModalOpen = ref(false);

const handleOpenModal = () => {
  isModalOpen.value = true;
};
</script>

<template>
  <button
    type="button"
    class="h-full w-full cursor-pointer border-none bg-transparent p-0 text-left"
    :aria-label="`${props.title} öffnen`"
    @click="handleOpenModal"
  >
    <CardBody v-bind="props" />
  </button>

  <CardModal
    :is-open="isModalOpen"
    :title="props.title"
    :subtitle="props.category"
    :description="props.description"
    :href="props.href"
    :preview-titles="props.previewTitles"
    @close="isModalOpen = false"
  />
</template>
