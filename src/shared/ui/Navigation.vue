<script setup lang="ts">
import { ArrowLeft, Award, BookOpen, GraduationCap, Home, User } from "lucide-vue-next";
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import { gsap } from "@/shared/lib";

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

const computedNavLinks = computed(() => {
  return navLinks.map((link) => ({ ...link, isActive: isActive(link.to) }));
});

const computedMobileNavLinks = computed(() => {
  return mobileNavLinks.map((link) => ({ ...link, isActive: isActive(link.to) }));
});

const showBackButton = computed(() => {
  const p = props.pathname;
  return p !== "/vokabeln" && p !== "/grammatik" && p !== "/pruefung" && p !== "/";
});

function goBack() {
  if (globalThis.window !== undefined) {
    globalThis.history.back();
  }
}

let ctx: gsap.Context | null = null;

const animateIndicator = () => {
  nextTick(() => {
    const nav = navRef.value;
    const indicator = indicatorRef.value;
    if (!nav || !indicator) return;

    // Skip if desktop nav is hidden in mobile view
    if (nav.offsetParent === null) return;

    const activeLink = nav.querySelector('a[aria-current="page"]');
    if (activeLink instanceof HTMLElement && activeLink.offsetWidth > 0) {
      gsap.to(indicator, {
        x: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
        duration: 0.45,
        ease: "power3.out",
        autoAlpha: 1,
        overwrite: "auto",
      });
    } else {
      gsap.to(indicator, { autoAlpha: 0, duration: 0.25, overwrite: "auto" });
    }
  });
};

onMounted(() => {
  if (navRef.value) {
    ctx = gsap.context(() => {
      animateIndicator();
    }, navRef.value);
  } else {
    animateIndicator();
  }

  if (globalThis.window !== undefined) {
    globalThis.window.addEventListener("resize", animateIndicator);
  }
});

onUnmounted(() => {
  ctx?.revert();
  ctx = null;
  if (globalThis.window !== undefined) {
    globalThis.window.removeEventListener("resize", animateIndicator);
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
      :class="[
        'relative mx-auto flex max-w-7xl items-center px-3 py-3 mobile:px-8 mobile:py-6',
        showBackButton ? 'justify-between' : 'justify-center laptop:justify-between',
      ]"
    >
      <!-- Brand Logo & Optional Back Button -->
      <div class="flex items-center justify-start gap-3.5">
        <!-- Back Button when deep in subpages -->
        <button
          v-if="showBackButton"
          type="button"
          class="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-card/80 px-3.5 py-2 text-sm font-semibold text-text shadow-sm backdrop-blur-(--glass-blur) transition-all duration-200 hover:-translate-x-0.5 hover:border-yellow/30 hover:bg-white/10 active:scale-95 tablet:px-5 tablet:py-2.5"
          aria-label="Zurück"
          @click="goBack"
        >
          <ArrowLeft
            class="size-4.5 text-yellow transition-transform duration-200 group-hover:-translate-x-0.5"
          />
          <span class="text-xs font-semibold text-white/90 tablet:text-sm"
            >Zurück</span
          >
        </button>

        <!-- Brand Mark: Centered on mobile & tablet, left-aligned on laptop & desktop -->
        <a
          v-if="!showBackButton"
          href="/"
          class="flex items-center gap-2.5 rounded-2xl border-2 border-white/10 bg-card/80 p-1.5 pe-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-(--glass-blur) transition-colors duration-200 hover:border-yellow/50 mobile:gap-3.5 mobile:rounded-3xl mobile:p-2 mobile:pe-5"
          aria-label="Elite Regewelt Startseite"
        >
          <span
            class="flex size-11 shrink-0 items-center justify-center mobile:size-13 tablet:size-14"
          >
            <img
              src="/logo.png"
              alt="Elite Regewelt"
              class="size-full object-contain drop-shadow-md"
              width="56"
              height="56"
              loading="eager"
            />
          </span>
          <div class="flex flex-col">
            <span
              class="bg-linear-to-r from-white via-white/95 to-mist-400 bg-clip-text text-sm font-bold tracking-tight text-transparent mobile:text-base tablet:text-lg"
            >
              Elite Regewelt
            </span>
            <span
              class="text-[10px] font-medium tracking-wide text-yellow/85 mobile:text-[11px] tablet:text-xs"
            >
              Deutch Sprache Lernen
            </span>
          </div>
        </a>
      </div>

      <!-- Right Side on Laptop & Desktop: Floating Pill Navigation -->
      <nav
        ref="navRef"
        class="relative hidden flex-wrap justify-center gap-1 overflow-hidden rounded-full border-2 border-white/10 bg-card/75 px-2 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-(--glass-blur) laptop:inline-flex laptop:gap-1.5"
        aria-label="Hauptnavigation"
      >
        <!-- Sliding Indicator -->
        <div
          ref="indicatorRef"
          class="absolute inset-y-1.5 left-0 z-0 rounded-full bg-linear-to-br from-yellow to-orange opacity-0 shadow-lg shadow-yellow/25"
          style="pointer-events: none"
        />

        <a
          v-for="link in computedNavLinks"
          :key="link.to"
          :href="link.to"
          :class="[
            'relative z-10 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 laptop:px-5',
            link.isActive ?
              'font-semibold text-black'
            : 'text-mist-400 hover:bg-white/5 hover:text-white',
          ]"
          :aria-current="link.isActive ? 'page' : undefined"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>

  <!-- Mobile & Tablet Floating Dock (Bottom Navigation Bar) -->
  <nav
    class="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 mx-auto flex max-w-sm items-center justify-around rounded-3xl border-2 border-white/12 bg-bg/85 px-1.5 py-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.65)] backdrop-blur-2xl tablet:max-w-md tablet:px-2 tablet:py-2 laptop:hidden"
    aria-label="Mobile Navigation"
  >
    <a
      v-for="link in computedMobileNavLinks"
      :key="link.to"
      :href="link.to"
      :aria-label="link.label"
      :title="link.label"
      :aria-current="link.isActive ? 'page' : undefined"
      :class="[
        'group relative flex flex-1 flex-col items-center justify-center rounded-2xl px-2 py-1.5 transition-all duration-200',
        link.isActive ?
          'bg-white/10 text-yellow shadow-inner shadow-white/5'
        : 'text-mist-500 hover:text-white active:scale-95',
      ]"
    >
      <!-- Active Top Glow / Indicator -->
      <span
        v-if="link.isActive"
        class="absolute -top-1.5 h-0.5 w-5 rounded-full bg-linear-to-r from-yellow to-orange shadow-[0_0_8px_var(--color-yellow)]"
      />

      <!-- Icon with dynamic styling -->
      <component
        :is="link.icon"
        :class="[
          'size-5 transition-transform duration-200',
          link.isActive ? 'scale-110 text-yellow' : (
            'group-hover:scale-105 group-hover:text-mist-200'
          ),
        ]"
      />

      <!-- Micro Label -->
      <span
        :class="[
          'mt-1 text-[10px] leading-none tracking-tight transition-colors duration-200',
          isActive(link.to) ? 'font-bold text-white' : (
            'font-medium text-mist-500 group-hover:text-mist-300'
          ),
        ]"
      >
        {{ link.label }}
      </span>
    </a>
  </nav>
</template>
