<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { UserCheck, UserPlus } from "lucide-vue-next";
import SignInForm from "./SignInForm.vue";
import SignUpForm from "./SignUpForm.vue";
import { cn } from "@/shared/lib";

interface Props {
  defaultView: "signin" | "signup";
}

const props = defineProps<Props>();

const view = ref<"signin" | "signup">(props.defaultView);
const isPending = ref(false);

const toggleView = (target: "signin" | "signup") => {
  view.value = target;
};

watch(view, (newView) => {
  if (typeof history !== "undefined") {
    history.replaceState(null, "", newView === "signin" ? "/login" : "/register");
  }
});

onMounted(() => {
  if (typeof history !== "undefined") {
    history.replaceState(null, "", view.value === "signin" ? "/login" : "/register");
  }
});
</script>

<template>
  <div class="relative flex w-full min-w-0 animate-fade-in items-center justify-center">
    <!-- Decorative ambient glows using theme colors -->
    <div
      class="pointer-events-none absolute top-1/4 left-1/4 -z-10 size-72 animate-glow-slow rounded-full bg-yellow/10 blur-[120px]"
    />
    <div
      class="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 size-72 animate-glow-reverse rounded-full bg-orange/10 blur-[120px]"
    />

    <div
      class="relative flex w-full min-w-0 animate-scale-in flex-col overflow-hidden rounded-3xl border-2 border-white/10 bg-card shadow-2xl shadow-orange/5 backdrop-blur-(--glass-blur) tablet:max-w-2xl tablet:flex-row laptop:max-w-4xl desktop:max-w-5xl"
    >
      <!-- PANEL 1: Left navigation menu (desktop/tablet) -->
      <nav
        aria-label="Auth Ansichtsauswahl"
        class="relative hidden w-32 shrink-0 flex-col items-center justify-between border-r border-slate-800/50 bg-slate-950/10 py-8 tablet:flex laptop:w-36"
      >
        <!-- Logo -->
        <div class="relative size-12 transition-transform duration-500 select-none hover:rotate-12">
          <img
            src="/logo.svg"
            alt="Elite Regewelt Logo"
            class="size-full object-contain"
          />
        </div>

        <!-- Vertical tabs with sliding accent indicator -->
        <div class="relative w-full">
          <div
            aria-hidden="true"
            class="ease-out-back absolute left-0 h-20 w-1 rounded-r-md bg-linear-to-b from-yellow to-orange transition-transform duration-400"
            :style="{ transform: view === 'signin' ? 'translateY(0px)' : 'translateY(96px)' }"
          />

          <ul class="m-0 flex w-full list-none flex-col gap-4 p-0">
            <li>
              <button
                type="button"
                :disabled="isPending"
                :aria-pressed="view === 'signin'"
                :class="
                  cn(
                    'flex h-20 w-full cursor-pointer flex-col items-center justify-center gap-2 border-0 bg-transparent text-[11px] font-bold tracking-widest uppercase transition-colors duration-300 focus:outline-hidden disabled:cursor-not-allowed',
                    view === 'signin' ? 'text-orange' : 'text-text-muted hover:text-white',
                  )
                "
                @click="toggleView('signin')"
              >
                <UserCheck class="size-5" />
                <span>Anmelden</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                :disabled="isPending"
                :aria-pressed="view === 'signup'"
                :class="
                  cn(
                    'flex h-20 w-full cursor-pointer flex-col items-center justify-center gap-2 border-0 bg-transparent text-[11px] font-bold tracking-widest uppercase transition-colors duration-300 focus:outline-hidden disabled:cursor-not-allowed',
                    view === 'signup' ? 'text-orange' : 'text-text-muted hover:text-white',
                  )
                "
                @click="toggleView('signup')"
              >
                <UserPlus class="size-5" />
                <span>Registrieren</span>
              </button>
            </li>
          </ul>
        </div>

        <div class="text-[10px] font-semibold tracking-wider text-text-muted/50 select-none">
          v1.0.0
        </div>
      </nav>

      <!-- PANEL 2: Central showcase banner (laptop & desktop) -->
      <div
        class="relative z-10 -my-6 hidden w-75 shrink-0 flex-col overflow-hidden rounded-2xl bg-linear-to-br from-yellow to-orange text-slate-950 shadow-xl shadow-orange/15 laptop:flex desktop:w-85"
      >
        <div
          aria-hidden="true"
          class="pointer-events-none absolute -top-12 -right-12 size-48 rounded-full bg-white/10 blur-xl"
        />
        <div
          aria-hidden="true"
          class="pointer-events-none absolute -bottom-12 -left-12 size-56 rounded-full bg-white/15 blur-2xl"
        />

        <div
          class="ease-out-back absolute inset-0 flex flex-col transition-transform duration-500"
          :style="{ transform: view === 'signin' ? 'translateY(0)' : 'translateY(-100%)' }"
        >
          <!-- Sign-in art -->
          <div
            class="flex h-full w-full shrink-0 flex-col justify-between px-8 pt-12 pb-10 text-left"
          >
            <div>
              <span class="text-[10px] font-extrabold tracking-[0.2em] text-slate-800 uppercase">
                Elite Regewelt
              </span>
              <h2
                class="font-display mt-2 text-2xl leading-tight font-extrabold tracking-tight text-slate-950"
              >
                Willkommen zurück.
              </h2>
              <p class="mt-2 text-xs leading-relaxed font-semibold text-slate-900">
                Meistere die deutsche Sprache. Übe Vokabeln, verstehe Grammatik und bereite dich
                erfolgreich auf Zertifikate vor.
              </p>
            </div>
            <div
              class="relative mx-auto w-full max-w-65 transition-transform duration-500 select-none hover:scale-105"
            >
              <img
                src="/signin.svg"
                alt="Anmelden Illustration"
                width="260"
                height="195"
                class="w-full object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>

          <!-- Sign-up art -->
          <div
            class="flex h-full w-full shrink-0 flex-col justify-between px-8 pt-12 pb-10 text-left"
          >
            <div>
              <span class="text-[10px] font-extrabold tracking-[0.2em] text-slate-800 uppercase">
                Jetzt starten
              </span>
              <h2
                class="font-display mt-2 text-2xl leading-tight font-extrabold tracking-tight text-slate-950"
              >
                Lerne mit Erfolg.
              </h2>
              <p class="mt-2 text-xs leading-relaxed font-semibold text-slate-900">
                Erstelle ein kostenloses Konto, um deinen Lernfortschritt zu speichern und
                personalisierte Übungen freizuschalten.
              </p>
            </div>
            <div
              class="relative mx-auto w-full max-w-65 transition-transform duration-500 select-none hover:scale-105"
            >
              <img
                src="/signup.svg"
                alt="Registrieren Illustration"
                width="260"
                height="195"
                class="w-full object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- PANEL 3: Active form -->
      <div
        class="relative flex min-w-0 flex-1 flex-col justify-start px-4 py-6 mobile:px-6 mobile:py-7 tablet:p-8 laptop:p-10"
      >
        <!-- Mobile header (visible below tablet) -->
        <div class="mb-6 flex flex-col items-center text-center tablet:hidden">
          <div class="relative mb-3 size-12 transition-transform duration-500 hover:rotate-12">
            <img
              src="/logo.svg"
              alt="Elite Regewelt logo"
              class="size-full object-contain"
            />
          </div>
          <h1 class="font-display text-xl font-bold text-white">Elite Regewelt</h1>
          <p class="mt-1 text-xs text-text-muted">Deine umfassende Deutsch-Lernplattform.</p>

          <!-- Pill switcher -->
          <div
            class="mt-6 flex w-full max-w-70 rounded-full border border-slate-800/60 bg-slate-950/30 p-1"
          >
            <button
              type="button"
              :disabled="isPending"
              :class="
                cn(
                  'flex-1 cursor-pointer rounded-full border-none py-2 text-xs font-bold transition-all duration-300 focus:outline-hidden disabled:opacity-60',
                  view === 'signin' ?
                    'bg-linear-to-r from-yellow to-orange text-black shadow-xs'
                  : 'bg-transparent text-text-muted hover:text-white',
                )
              "
              @click="toggleView('signin')"
            >
              Anmelden
            </button>
            <button
              type="button"
              :disabled="isPending"
              :class="
                cn(
                  'flex-1 cursor-pointer rounded-full border-none py-2 text-xs font-bold transition-all duration-300 focus:outline-hidden disabled:opacity-60',
                  view === 'signup' ?
                    'bg-linear-to-r from-yellow to-orange text-black shadow-xs'
                  : 'bg-transparent text-text-muted hover:text-white',
                )
              "
              @click="toggleView('signup')"
            >
              Registrieren
            </button>
          </div>
        </div>

        <!-- Form switcher -->
        <div class="relative w-full min-w-0">
          <!-- SIGN IN VIEW -->
          <div
            :class="
              cn(
                'ease-out-back w-full transition-all duration-400',
                view === 'signin' ?
                  'pointer-events-auto relative scale-100 opacity-100'
                : 'pointer-events-none absolute inset-0 scale-95 opacity-0 select-none',
              )
            "
            :aria-hidden="view !== 'signin'"
          >
            <SignInForm @toggle-view="toggleView" />
          </div>

          <!-- SIGN UP VIEW -->
          <div
            :class="
              cn(
                'ease-out-back w-full transition-all duration-400',
                view === 'signup' ?
                  'pointer-events-auto relative scale-100 opacity-100'
                : 'pointer-events-none absolute inset-0 scale-95 opacity-0 select-none',
              )
            "
            :aria-hidden="view !== 'signup'"
          >
            <SignUpForm @toggle-view="toggleView" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
