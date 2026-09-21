<script setup lang="ts">
import { ref, watch, nextTick, onUnmounted } from "vue";
import gsap from "../lib/gsap.ts";

interface Props {
  isOpen: boolean;
  title: string;
  subtitle?: string;
  description?: string;
  href: string;
  previewTitles?: string[];
}

const props = withDefaults(defineProps<Props>(), { previewTitles: () => [] });

const emit = defineEmits<{ (e: "close"): void }>();

const dialogRef = ref<HTMLDialogElement | null>(null);
const backdropRef = ref<HTMLButtonElement | null>(null);
const modalBoxRef = ref<HTMLDivElement | null>(null);

let originalOverflow = "";
let isClosing = false;

const close = () => {
  if (isClosing) return;
  isClosing = true;

  const backdrop = backdropRef.value;
  const modalBox = modalBoxRef.value;
  const dialog = dialogRef.value;

  if (backdrop && modalBox) {
    const tl = gsap.timeline({
      onComplete: () => {
        isClosing = false;
        emit("close");
        if (dialog && dialog.open) {
          try {
            dialog.close();
          } catch {
            // Ignore
          }
        }
        document.body.style.overflow = originalOverflow || "";
      },
    });

    tl.to(modalBox, { autoAlpha: 0, scale: 0.95, y: 10, duration: 0.2, ease: "power2.in" }).to(
      backdrop,
      { autoAlpha: 0, duration: 0.2, ease: "power2.in" },
      "<",
    );
  } else {
    isClosing = false;
    emit("close");
    if (dialog && dialog.open) {
      try {
        dialog.close();
      } catch {
        // Ignore
      }
    }
    document.body.style.overflow = originalOverflow || "";
  }
};

const handleCancel = (e: Event) => {
  e.preventDefault();
  close();
};

watch(
  () => props.isOpen,
  async (newVal) => {
    if (typeof document === "undefined") return;

    if (newVal) {
      isClosing = false;
      await nextTick();
      const dialog = dialogRef.value;
      if (!dialog) return;
      if (!dialog.open) {
        try {
          dialog.showModal();
        } catch {
          // Fallback if already open
        }
      }
      originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      dialog.addEventListener("cancel", handleCancel);

      const backdrop = backdropRef.value;
      const modalBox = modalBoxRef.value;
      if (backdrop && modalBox) {
        const tl = gsap.timeline();
        tl.fromTo(
          backdrop,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.25, ease: "power2.out" },
        ).fromTo(
          modalBox,
          { autoAlpha: 0, scale: 0.94, y: 16 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 0.35, ease: "power3.out" },
          "<0.05",
        );
      }
    } else {
      const dialog = dialogRef.value;
      if (dialog) {
        dialog.removeEventListener("cancel", handleCancel);
        try {
          if (dialog.open) {
            dialog.close();
          }
        } catch {
          // Ignore
        }
      }
      document.body.style.overflow = originalOverflow || "";
    }
  },
  { immediate: true },
);

onUnmounted(() => {
  if (typeof document !== "undefined") {
    document.body.style.overflow = originalOverflow || "";
  }
});
</script>

<template>
  <Teleport to="body">
    <dialog
      v-if="props.isOpen"
      ref="dialogRef"
      aria-labelledby="modal-title"
      class="fixed inset-0 z-100 m-0 flex items-center justify-center border-none bg-transparent p-4 outline-none block-full inline-full max-block-full max-inline-full backdrop:bg-transparent"
    >
      <!-- Backdrop -->
      <button
        ref="backdropRef"
        type="button"
        class="absolute inset-0 cursor-default border-none bg-black/80 backdrop-blur-sm"
        aria-label="Dialog schließen"
        @click="close"
      />

      <!-- Modal Content -->
      <div
        ref="modalBoxRef"
        role="document"
        aria-labelledby="modal-title"
        class="relative z-10 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e11] shadow-2xl backdrop-blur-xl inline-full max-block-[90vh] max-inline-lg sm:max-block-[85vh]"
        @click.stop
        @keydown.stop
      >
        <!-- Header Content -->
        <div class="shrink-0 border-b border-white/10 p-4 sm:p-6">
          <div class="mbe-3 flex items-center gap-2">
            <span
              v-if="props.subtitle"
              class="rounded-full border border-yellow/30 bg-yellow/20 px-3 py-1 text-xs font-bold text-yellow"
            >
              {{ props.subtitle }}
            </span>
          </div>
          <h2
            id="modal-title"
            class="text-xl font-bold text-white text-shadow-sm sm:text-2xl"
          >
            {{ props.title }}
          </h2>
          <p
            v-if="props.description"
            class="mt-2 text-sm leading-relaxed text-zinc-400"
          >
            {{ props.description }}
          </p>
        </div>

        <!-- Scrollable Content -->
        <div class="modal-scroll flex-1 space-y-3 overflow-y-auto p-4 sm:space-y-4 sm:p-6">
          <template v-if="props.previewTitles.length > 0">
            <div
              v-for="(previewTitle, index) in props.previewTitles"
              :key="previewTitle"
              class="overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
            >
              <div class="flex items-center gap-3 p-3 sm:p-4">
                <span
                  class="rounded-full border border-amber-400/30 bg-amber-400/20 px-2.5 py-0.5 text-xs font-bold text-amber-400"
                >
                  Kapitel {{ index + 1 }}
                </span>
                <span class="text-sm font-medium text-white sm:text-base">
                  {{ previewTitle }}
                </span>
              </div>
            </div>
          </template>
          <div
            v-else
            class="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-zinc-400"
          >
            Keine Vorschau verfügbar
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="shrink-0 border-t border-white/10 p-4 sm:p-6">
          <div class="flex gap-3">
            <button
              type="button"
              class="flex-1 cursor-pointer rounded-full border border-white/10 bg-white/5 px-4 py-2.5 font-semibold text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
              @click="close"
            >
              Schließen
            </button>
            <a
              :href="props.href"
              class="flex-1 cursor-pointer rounded-full bg-linear-to-br from-yellow to-orange px-4 py-2.5 text-center font-semibold text-black no-underline transition-[filter] hover:brightness-110"
              @click="close"
            >
              Öffnen
            </a>
          </div>
        </div>
      </div>
    </dialog>
  </Teleport>
</template>
