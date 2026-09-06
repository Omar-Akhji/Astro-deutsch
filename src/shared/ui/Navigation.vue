<script setup lang="ts">
import { ArrowLeft } from "lucide-vue-next";
import { computed, nextTick, onMounted, ref, watch } from "vue";
import gsap from "../lib/gsap.ts";

interface Props {
  pathname: string;
}

const props = defineProps<Props>();

const navRef = ref<HTMLElement | null>(null);
const indicatorRef = ref<HTMLDivElement | null>(null);

const navLinks = [
  { to: "/vokabeln", label: "Vokabeln" },
  { to: "/grammatik", label: "Grammatik" },
  { to: "/pruefung", label: "Prüfung" },
  { to: "/login", label: "Anmelden" },
];

const isActive = (path: string) => {
  if (path === "/") return props.pathname === "/";
  return props.pathname === path || props.pathname.startsWith(path + "/");
};

const showBackButton = computed(() => {
  const p = props.pathname;
  return p !== "/vokabeln" && p !== "/grammatik" && p !== "/pruefung" && p !== "/";
});

function goBack() {
  if (typeof window !== "undefined") {
    globalThis.history.back();
  }
}

const animateIndicator = () => {
  nextTick(() => {
    const nav = navRef.value;
    const indicator = indicatorRef.value;
    if (!nav || !indicator) return;

    const activeLink = nav.querySelector('a[aria-current="page"]') as HTMLElement | null;
    if (activeLink) {
      gsap.to(indicator, {
        x: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
        duration: 0.5,
        ease: "power3.inOut",
        opacity: 1,
      });
    } else {
      gsap.to(indicator, { opacity: 0, duration: 0.3 });
    }
  });
};

onMounted(() => {
  animateIndicator();
});

watch(
  () => props.pathname,
  () => {
    animateIndicator();
  },
);
</script>

<template>
  <header class="relative mbe-4">
    <div
      class="relative mx-auto flex max-w-7xl items-center justify-between px-2 pbs-2 pbe-2 min-block-17.5 mobile:px-8 mobile:pbs-8 mobile:pbe-8 mobile:min-block-25"
    >
      <!-- Left Side: Back Button -->
      <div class="shrink-0">
        <button
          v-if="showBackButton"
          type="button"
          class="inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-(--glass-border) bg-card text-sm font-semibold text-text transition-[transform,background-color] duration-200 hover:-translate-x-1 hover:bg-white/10 tablet:h-auto tablet:w-auto tablet:px-6 tablet:py-2 tablet:text-base"
          aria-label="Zurück"
          @click="goBack"
        >
          <ArrowLeft class="size-5" />
          <span class="mis-1 mbs-0.5 hidden tablet:inline">Zurück</span>
        </button>
      </div>

      <!-- Right Side: Navigation Menu -->
      <nav
        ref="navRef"
        class="relative inline-flex flex-wrap justify-center gap-1 overflow-hidden rounded-full border border-(--glass-border) bg-card px-1.5 pbs-1.5 pbe-1.5 shadow-sm backdrop-blur-(--glass-blur) mobile:gap-2 mobile:px-2 mobile:pbs-2 mobile:pbe-2"
        aria-label="Main navigation"
      >
        <!-- Sliding Indicator -->
        <div
          ref="indicatorRef"
          class="absolute inset-y-1.5 left-0 z-0 rounded-full bg-linear-to-br from-yellow to-orange opacity-0 shadow-lg shadow-yellow/20 mobile:inset-y-2"
          style="pointer-events: none"
        />

        <a
          v-for="link in navLinks"
          :key="link.to"
          :href="link.to"
          :class="[
            'relative z-10 rounded-full px-4 pbs-1.5 pbe-1.5 text-sm font-semibold transition-colors duration-200 tablet:px-6 tablet:pbs-2 tablet:pbe-2 tablet:text-base',
            isActive(link.to) ? 'text-black' : 'text-mist-500 hover:text-white',
          ]"
          :aria-current="isActive(link.to) ? 'page' : undefined"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>
</template>
