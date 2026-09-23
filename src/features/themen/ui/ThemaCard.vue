<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from "vue";
import { gsap } from "@/shared/lib";
import { getCategoryClasses } from "../lib/category-config.ts";
import type { Thema } from "../model/types.ts";

interface Props {
  thema: Thema;
}

const props = defineProps<Props>();

const categoryClass = computed(() => getCategoryClasses(props.thema.cat));

const activeTab = ref<"pro" | "con" | "text">(props.thema.isTextOnly ? "text" : "pro");

const cardRootRef = ref<HTMLDivElement | null>(null);
const tabsRef = ref<HTMLDivElement | null>(null);
const indicatorRef = ref<HTMLDivElement | null>(null);
const contentRef = ref<HTMLDivElement | null>(null);

const TAB_COLORS = {
  pro: "#10b981",
  con: "#ef4444",
} as const;

let ctx: gsap.Context | null = null;

const updateIndicator = (immediate = false) => {
  if (props.thema.isTextOnly) return;

  nextTick(() => {
    const tabs = tabsRef.value;
    const indicator = indicatorRef.value;
    if (!tabs || !indicator) return;

    const activeButton = tabs.querySelector('button[data-active="true"]');
    if (!(activeButton instanceof HTMLElement)) return;

    const targetState = {
      x: activeButton.offsetLeft,
      width: activeButton.offsetWidth,
      backgroundColor: activeTab.value === "pro" ? TAB_COLORS.pro : TAB_COLORS.con,
      autoAlpha: 1,
    };

    if (immediate) {
      gsap.set(indicator, targetState);
    } else {
      gsap.to(indicator, {
        ...targetState,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  });
};

const runGsapTabAnimation = () => {
  if (props.thema.isTextOnly) return;

  updateIndicator(false);

  nextTick(() => {
    const content = contentRef.value;
    if (!content) return;

    const listItems = content.querySelectorAll("li");
    if (listItems.length > 0) {
      gsap.fromTo(
        listItems,
        { autoAlpha: 0, x: -12 },
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.05,
          duration: 0.35,
          ease: "power2.out",
          clearProps: "all",
          overwrite: "auto",
        },
      );
    } else {
      gsap.fromTo(
        content,
        { autoAlpha: 0, y: 8 },
        { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out", overwrite: "auto" },
      );
    }
  });
};

onMounted(() => {
  if (cardRootRef.value) {
    ctx = gsap.context(() => {
      updateIndicator(true);
    }, cardRootRef.value);
  } else {
    updateIndicator(true);
  }
});

onUnmounted(() => {
  ctx?.revert();
  ctx = null;
});

watch(activeTab, () => {
  runGsapTabAnimation();
});
</script>

<template>
  <div
    ref="cardRootRef"
    class="group relative overflow-hidden rounded-2xl border-2 border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-[background-color,box-shadow] hover:bg-white/10 hover:shadow-2xl hover:shadow-white/5 tablet:p-6"
  >
    <div class="mbe-3.5 flex items-start justify-between">
      <div>
        <span
          :class="[
            'mbe-1.5 inline-block rounded-full px-2.5 pbs-0.5 pbe-0.5 text-xs font-semibold tracking-wider uppercase',
            categoryClass,
          ]"
        >
          {{ props.thema.cat }}
        </span>
        <h3
          class="text-sm font-semibold text-white transition-colors group-hover:text-amber-400 tablet:text-base"
        >
          {{ props.thema.label }}
        </h3>
      </div>
    </div>

    <div
      ref="tabsRef"
      class="relative mb-3.5 flex gap-1 rounded-full bg-black/20 p-1"
    >
      <template v-if="!props.thema.isTextOnly">
        <!-- Sliding Indicator -->
        <div
          ref="indicatorRef"
          class="absolute inset-y-1 left-0 z-0 rounded-full opacity-0 shadow-lg"
          style="pointer-events: none"
        />

        <button
          type="button"
          :data-active="activeTab === 'pro'"
          :class="[
            'relative z-10 flex-1 cursor-pointer rounded-full border-none bg-transparent px-3 py-1.5 text-xs font-medium transition-colors duration-300 tablet:text-sm',
            activeTab === 'pro' ? 'font-bold text-white' : 'text-zinc-400 hover:text-white',
          ]"
          @click="activeTab = 'pro'"
        >
          Vorteile
        </button>
        <button
          type="button"
          :data-active="activeTab === 'con'"
          :class="[
            'relative z-10 flex-1 cursor-pointer rounded-full border-none bg-transparent px-3 py-1.5 text-xs font-medium transition-colors duration-300 tablet:text-sm',
            activeTab === 'con' ? 'font-bold text-white' : 'text-zinc-400 hover:text-white',
          ]"
          @click="activeTab = 'con'"
        >
          Nachteile
        </button>
      </template>
      <button
        v-if="props.thema.isTextOnly"
        type="button"
        class="flex-1 cursor-default rounded-full border-none bg-amber-500 px-3 py-1.5 text-xs font-medium text-white tablet:text-sm"
      >
        Mustertext
      </button>
    </div>

    <div
      ref="contentRef"
      class="min-h-30"
    >
      <ul
        v-if="activeTab === 'pro' && props.thema.pro"
        class="m-0 list-none space-y-2.5 p-0"
      >
        <li
          v-for="point in props.thema.pro"
          :key="point"
          class="flex gap-2.5 text-xs leading-relaxed text-zinc-300 tablet:text-sm"
        >
          <span class="mt-1 size-1.5 shrink-0 rounded-full bg-emerald-500" />
          {{ point }}
        </li>
      </ul>
      <ul
        v-if="activeTab === 'con' && props.thema.con"
        class="m-0 list-none space-y-2.5 p-0"
      >
        <li
          v-for="point in props.thema.con"
          :key="point"
          class="flex gap-2.5 text-xs leading-relaxed text-zinc-300 tablet:text-sm"
        >
          <span class="mt-1 size-1.5 shrink-0 rounded-full bg-red-500" />
          {{ point }}
        </li>
      </ul>
      <p
        v-if="(activeTab === 'text' || props.thema.isTextOnly) && props.thema.text"
        class="border-l-2 border-amber-500/30 py-1 pl-4 text-xs leading-relaxed text-zinc-300 italic tablet:text-sm"
      >
        &quot;{{ props.thema.text }}&quot;
      </p>
    </div>

    <div
      class="mbs-4 flex justify-end border-bs border-white/5 pbs-3 opacity-0 transition-opacity group-hover:opacity-100 tablet:mbs-5 tablet:pbs-3.5"
    >
      <span class="font-mono text-[10px] text-zinc-500 uppercase">
        Zertifikat B1 Topic #{{ props.thema.id }}
      </span>
    </div>
  </div>
</template>
