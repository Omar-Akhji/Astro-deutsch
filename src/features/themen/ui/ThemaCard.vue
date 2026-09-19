<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from "vue";
import gsap from "../../../shared/lib/gsap.ts";
import { getCategoryClasses } from "../lib/category-config.ts";
import type { Thema } from "../model/types.ts";

interface Props {
  thema: Thema;
}

const props = defineProps<Props>();

const activeTab = ref<"pro" | "con" | "text">(props.thema.isTextOnly ? "text" : "pro");

const tabsRef = ref<HTMLDivElement | null>(null);
const indicatorRef = ref<HTMLDivElement | null>(null);
const contentRef = ref<HTMLDivElement | null>(null);

const runGsapTabAnimation = () => {
  if (props.thema.isTextOnly) return;

  nextTick(() => {
    const tabs = tabsRef.value;
    const indicator = indicatorRef.value;
    if (!tabs || !indicator) return;

    const activeButton = tabs.querySelector(`button[data-active="true"]`) as HTMLElement | null;
    if (activeButton) {
      gsap.to(indicator, {
        x: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
        backgroundColor: activeTab.value === "pro" ? "#10b981" : "#ef4444", // emerald-500, red-500
        duration: 0.4,
        ease: "power2.out",
        opacity: 1,
      });
    }

    const content = contentRef.value;
    if (content) {
      const listItems = content.querySelectorAll("li");
      if (listItems.length > 0) {
        gsap.fromTo(
          listItems,
          { opacity: 0, x: -15 },
          { opacity: 1, x: 0, stagger: 0.1, duration: 0.4, ease: "power2.out", clearProps: "all" },
        );
      } else {
        gsap.fromTo(
          content,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        );
      }
    }
  });
};

onMounted(() => {
  runGsapTabAnimation();
});

watch(activeTab, () => {
  runGsapTabAnimation();
});
</script>

<template>
  <div
    class="group relative overflow-hidden rounded-2xl border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-[background-color,box-shadow] hover:bg-white/10 hover:shadow-2xl hover:shadow-white/5"
  >
    <div class="mbe-4 flex items-start justify-between">
      <div>
        <span
          :class="[
            'mbe-2 inline-block rounded-full px-2.5 pbs-0.5 pbe-0.5 text-xs font-semibold tracking-wider uppercase',
            getCategoryClasses(props.thema.cat),
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
      class="relative mb-4 flex gap-1 rounded-full bg-black/20 p-1"
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
        class="m-0 list-none space-y-3 p-0"
      >
        <li
          v-for="point in props.thema.pro"
          :key="point"
          class="flex gap-3 text-xs leading-relaxed text-zinc-300 tablet:text-sm"
        >
          <span class="mt-1 size-1.5 shrink-0 rounded-full bg-emerald-500" />
          {{ point }}
        </li>
      </ul>
      <ul
        v-if="activeTab === 'con' && props.thema.con"
        class="m-0 list-none space-y-3 p-0"
      >
        <li
          v-for="point in props.thema.con"
          :key="point"
          class="flex gap-3 text-xs leading-relaxed text-zinc-300 tablet:text-sm"
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
      class="mbs-6 flex justify-end border-bs border-white/5 pbs-4 opacity-0 transition-opacity group-hover:opacity-100"
    >
      <span class="font-mono text-[10px] text-zinc-500 uppercase">
        Zertifikat B1 Topic #{{ props.thema.id }}
      </span>
    </div>
  </div>
</template>
