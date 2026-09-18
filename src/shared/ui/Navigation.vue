<script setup lang="ts">
import {
  ArrowLeft,
  Award,
  BookOpen,
  GraduationCap,
  Home,
  Sparkles,
  User,
} from "lucide-vue-next";
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from "vue";
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

const mobileNavLinks = [
  { to: "/", label: "Start", icon: Home },
  { to: "/vokabeln", label: "Vokabeln", icon: BookOpen },
  { to: "/grammatik", label: "Grammatik", icon: GraduationCap },
  { to: "/pruefung", label: "Prüfung", icon: Award },
  { to: "/login", label: "Profil", icon: User },
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

    // Skip if desktop nav is hidden in mobile view
    if (nav.offsetParent === null) return;

    const activeLink = nav.querySelector('a[aria-current="page"]') as HTMLElement | null;
    if (activeLink && activeLink.offsetWidth > 0) {
      gsap.to(indicator, {
        x: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
        duration: 0.45,
        ease: "power3.out",
        opacity: 1,
      });
    } else {
      gsap.to(indicator, { opacity: 0, duration: 0.25 });
    }
  });
};

onMounted(() => {
  animateIndicator();
  if (typeof window !== "undefined") {
    window.addEventListener("resize", animateIndicator);
  }
});

onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", animateIndicator);
  }
});

watch(
  () => props.pathname,
  () => {
    animateIndicator();
  },
);
</script>

<template>
  <!-- Top Navigation Header -->
  <header class="relative mbe-2 mobile:mbe-6">
    <div
      class="relative mx-auto flex max-w-7xl items-center justify-between px-3 py-3 mobile:px-8 mobile:py-6"
    >
      <!-- Left Side: Brand Logo or Back Button -->
      <div class="flex items-center">
        <!-- Back Button when deep in subpages -->
        <button
          v-if="showBackButton"
          type="button"
          class="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-card/80 px-3.5 py-2 text-sm font-semibold text-text shadow-sm backdrop-blur-(--glass-blur) transition-all duration-200 hover:-translate-x-0.5 hover:border-yellow/30 hover:bg-white/10 active:scale-95 tablet:px-5 tablet:py-2.5"
          aria-label="Zurück"
          @click="goBack"
        >
          <ArrowLeft class="size-4.5 text-yellow transition-transform duration-200 group-hover:-translate-x-0.5" />
          <span class="text-xs font-semibold text-white/90 tablet:text-sm">Zurück</span>
        </button>

        <!-- Brand Mark when on root / main sections -->
        <a
          v-else
          href="/"
          class="group flex items-center gap-2.5 transition-opacity hover:opacity-90"
          aria-label="Deutsch Lernen Startseite"
        >
          <span
            class="flex size-9 items-center justify-center rounded-xl border border-yellow/40 bg-linear-to-br from-yellow/20 to-orange/20 text-yellow shadow-sm shadow-yellow/10 transition-transform duration-200 group-hover:scale-105 mobile:size-10"
          >
            <GraduationCap class="size-5 mobile:size-5.5" />
          </span>
          <div class="flex flex-col">
            <span
              class="bg-linear-to-r from-white via-white/95 to-mist-400 bg-clip-text text-sm font-bold tracking-tight text-transparent mobile:text-base"
            >
              Deutsch Lernen
            </span>
            <span class="hidden text-[10px] font-medium tracking-wide text-yellow/80 mobile:inline">
              B1 &amp; B2 Zertifikat
            </span>
          </div>
        </a>
      </div>

      <!-- Right Side on Mobile: Minimalist Level Badge -->
      <div class="flex items-center mobile:hidden">
        <span
          class="inline-flex items-center gap-1.5 rounded-full border border-yellow/25 bg-yellow/10 px-3 py-1 text-[11px] font-semibold text-yellow shadow-xs"
        >
          <Sparkles class="size-3" />
          B1 &amp; B2
        </span>
      </div>

      <!-- Right Side on Desktop: Floating Pill Navigation -->
      <nav
        ref="navRef"
        class="relative hidden flex-wrap justify-center gap-1 overflow-hidden rounded-full border border-white/10 bg-card/75 px-2 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.12)] backdrop-blur-(--glass-blur) mobile:inline-flex mobile:gap-1.5"
        aria-label="Hauptnavigation"
      >
        <!-- Sliding Indicator -->
        <div
          ref="indicatorRef"
          class="absolute inset-y-1.5 left-0 z-0 rounded-full bg-linear-to-br from-yellow to-orange opacity-0 shadow-lg shadow-yellow/25"
          style="pointer-events: none"
        />

        <a
          v-for="link in navLinks"
          :key="link.to"
          :href="link.to"
          :class="[
            'relative z-10 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200',
            isActive(link.to)
              ? 'text-black font-semibold'
              : 'text-mist-400 hover:text-white hover:bg-white/5',
          ]"
          :aria-current="isActive(link.to) ? 'page' : undefined"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>

  <!-- Mobile Floating Dock (Bottom Navigation Bar) -->
  <nav
    class="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 mx-auto flex max-w-sm items-center justify-around rounded-3xl border border-white/12 bg-bg/85 px-1.5 py-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.16)] backdrop-blur-2xl mobile:hidden"
    aria-label="Mobile Navigation"
  >
    <a
      v-for="link in mobileNavLinks"
      :key="link.to"
      :href="link.to"
      :aria-label="link.label"
      :title="link.label"
      :aria-current="isActive(link.to) ? 'page' : undefined"
      :class="[
        'group relative flex flex-1 flex-col items-center justify-center rounded-2xl px-2 py-1.5 transition-all duration-200',
        isActive(link.to)
          ? 'bg-white/10 text-yellow shadow-inner shadow-white/5'
          : 'text-mist-500 hover:text-white active:scale-95',
      ]"
    >
      <!-- Active Top Glow / Indicator -->
      <span
        v-if="isActive(link.to)"
        class="absolute -top-1.5 h-0.5 w-5 rounded-full bg-linear-to-r from-yellow to-orange shadow-[0_0_8px_var(--color-yellow)]"
      />

      <!-- Icon with dynamic styling -->
      <component
        :is="link.icon"
        :class="[
          'size-5 transition-transform duration-200',
          isActive(link.to)
            ? 'scale-110 text-yellow'
            : 'group-hover:scale-105 group-hover:text-mist-200',
        ]"
      />

      <!-- Micro Label -->
      <span
        :class="[
          'mt-1 text-[10px] leading-none tracking-tight transition-colors duration-200',
          isActive(link.to)
            ? 'font-bold text-white'
            : 'font-medium text-mist-500 group-hover:text-mist-300',
        ]"
      >
        {{ link.label }}
      </span>
    </a>
  </nav>
</template>
