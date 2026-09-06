<script setup lang="ts">
import { ref, watch } from "vue";
import { X } from "lucide-vue-next";

interface Props {
  selectedAd: { letter: string; content: string } | null;
}

const props = defineProps<Props>();

const emit = defineEmits<{ (e: "close"): void }>();

const dialogRef = ref<HTMLDialogElement | null>(null);

watch(
  () => props.selectedAd,
  (newVal) => {
    if (dialogRef.value) {
      if (newVal) {
        if (!dialogRef.value.open) {
          dialogRef.value.showModal();
        }
      } else {
        if (dialogRef.value.open) {
          dialogRef.value.close();
        }
      }
    }
  },
);

const handleCancel = (e: Event) => {
  e.preventDefault();
  emit("close");
};
</script>

<template>
  <dialog
    ref="dialogRef"
    aria-label="Erklärung"
    class="fixed inset-0 m-auto flex h-max max-h-[90vh] w-max max-w-[min(90vw,32rem)] scale-95 scrollbar-none flex-col overflow-hidden rounded-2xl border-2 border-white/10 bg-zinc-950 p-0 text-white opacity-0 shadow-2xl transition-[opacity,transform,overlay,display] duration-250 ease-in-out backdrop:bg-black/80 backdrop:backdrop-blur-sm backdrop:transition-[background-color,backdrop-filter,overlay,display] backdrop:duration-250 open:scale-100 open:opacity-100 starting:open:scale-95 starting:open:opacity-0"
    @cancel="handleCancel"
    @close="emit('close')"
  >
    <div
      v-if="props.selectedAd"
      class="relative p-6 md:p-8"
    >
      <button
        type="button"
        aria-label="Schließen"
        class="absolute top-4 right-4 flex size-8 cursor-pointer items-center justify-center rounded-full border-2 border-white/10 bg-zinc-900 text-white/40 transition-colors hover:text-yellow"
        @click="emit('close')"
      >
        <X class="size-4" />
      </button>

      <div class="mb-6 flex justify-start">
        <div
          class="flex size-12 items-center justify-center rounded-full border-2 border-white/10 bg-linear-to-br from-yellow/10 to-orange/10 shadow-lg shadow-yellow/5"
        >
          <span
            class="bg-linear-to-br from-yellow to-orange bg-clip-text text-xl font-black text-transparent uppercase"
          >
            {{ props.selectedAd.letter }}
          </span>
        </div>
      </div>

      <p class="font-serif text-base leading-relaxed font-light text-white/90 tablet:text-lg">
        {{ props.selectedAd.content }}
      </p>

      <div class="mt-8 flex justify-center">
        <button
          type="button"
          class="w-full cursor-pointer rounded-full border-none bg-linear-to-br from-yellow to-orange py-3 text-sm font-bold text-black transition-[filter,transform] duration-200 hover:brightness-110 active:scale-95"
          @click="emit('close')"
        >
          Verstanden
        </button>
      </div>

      <div
        class="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/felt.png')] opacity-[0.03]"
      />
    </div>
  </dialog>
</template>
