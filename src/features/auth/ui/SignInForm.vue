<script setup lang="ts">
import { ref } from "vue";
import { Eye, EyeOff, Mail } from "lucide-vue-next";
import SocialButton from "./SocialButton.vue";

const emit = defineEmits<{ (e: "toggle-view", target: "signin" | "signup"): void }>();

const DEMO_EMAIL = "lerner@deutschlernen.de";
const DEMO_PASSWORD = "passwort123";

const formData = ref({ email: "", password: "", rememberMe: false });
const showPassword = ref(false);
const error = ref<string | null>(null);
const isPending = ref(false);

const notConfigured = (provider: string) => {
  alert(`${provider} Anmeldung wird in der Laravel-Integration konfiguriert.`);
};

const handleSignIn = async () => {
  error.value = null;
  isPending.value = true;
  try {
    // Simulate authentication pending state
    await new Promise((resolve) => setTimeout(resolve, 1200));
    alert(`Erfolgreich angemeldet als ${formData.value.email}! (Simulierte Anmeldung)`);
    if (typeof window !== "undefined") {
      globalThis.location.assign("/");
    }
  } finally {
    isPending.value = false;
  }
};

const handleDemoLogin = async () => {
  formData.value.email = DEMO_EMAIL;
  formData.value.password = DEMO_PASSWORD;
  formData.value.rememberMe = false;
  error.value = null;
  isPending.value = true;
  try {
    await new Promise((resolve) => setTimeout(resolve, 800));
    alert("Erfolgreich mit dem Demo-Konto angemeldet!");
    if (typeof window !== "undefined") {
      globalThis.location.assign("/");
    }
  } finally {
    isPending.value = false;
  }
};
</script>

<template>
  <form
    class="flex h-125 flex-col justify-between md:h-118.75"
    @submit.prevent="handleSignIn"
  >
    <div class="flex flex-col gap-4">
      <div class="hidden flex-col md:flex">
        <h3 class="font-display text-lg font-bold tracking-tight text-white">Anmelden</h3>
        <p class="mt-1 text-[12px] text-text-muted">
          Noch kein Konto?{{ " " }}
          <button
            type="button"
            :disabled="isPending"
            class="cursor-pointer border-none bg-transparent p-0 font-bold text-orange transition-colors hover:text-yellow hover:underline focus:outline-hidden"
            @click="emit('toggle-view', 'signup')"
          >
            Konto erstellen
          </button>
        </p>
      </div>

      <div
        v-if="error"
        role="alert"
        class="animate-fade-in rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-2 text-xs leading-normal font-bold text-red-500"
      >
        {{ error }}
      </div>

      <!-- Email -->
      <div class="group flex flex-col gap-1 text-left">
        <label
          for="signin-email"
          class="text-xs font-bold tracking-wider text-text-muted uppercase select-none"
        >
          E-Mail-Adresse
        </label>
        <div class="relative mt-1">
          <input
            id="signin-email"
            v-model="formData.email"
            name="email"
            type="email"
            required
            autocomplete="email"
            placeholder="beispiel@domain.de"
            :disabled="isPending"
            class="h-11 w-full rounded-xl border border-slate-800 bg-slate-950/25 px-4 pr-10 font-sans text-sm text-white placeholder-text-muted/50 transition-colors duration-300 hover:border-slate-700/85 hover:bg-slate-950/30 focus:border-orange focus:bg-slate-950/45 focus:ring-4 focus:ring-orange/10 focus:outline-hidden"
          />
          <Mail
            class="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-text-muted transition-colors duration-300 group-focus-within:text-orange"
          />
        </div>
      </div>

      <!-- Password -->
      <div class="group flex flex-col gap-1 text-left">
        <div class="flex items-center justify-between">
          <label
            for="signin-password"
            class="text-xs font-bold tracking-wider text-text-muted uppercase select-none"
          >
            Passwort
          </label>
          <button
            type="button"
            tabindex="-1"
            class="cursor-pointer border-none bg-transparent p-0 text-xs font-bold text-orange/80 transition-colors hover:text-orange focus:outline-hidden"
            @click="notConfigured('Passwort zurücksetzen')"
          >
            Vergessen?
          </button>
        </div>
        <div class="relative mt-1">
          <input
            id="signin-password"
            v-model="formData.password"
            name="password"
            :type="showPassword ? 'text' : 'password'"
            required
            autocomplete="current-password"
            placeholder="••••••••••••"
            :disabled="isPending"
            class="h-11 w-full rounded-xl border border-slate-800 bg-slate-950/25 px-4 pr-10 font-sans text-sm tracking-widest text-white placeholder-text-muted/50 transition-colors duration-300 placeholder:tracking-normal hover:border-slate-700/85 hover:bg-slate-950/30 focus:border-orange focus:bg-slate-950/45 focus:ring-4 focus:ring-orange/10 focus:outline-hidden"
          />
          <button
            type="button"
            tabindex="-1"
            :disabled="isPending"
            :aria-label="showPassword ? 'Passwort verbergen' : 'Passwort anzeigen'"
            class="absolute top-1/2 right-3.5 -translate-y-1/2 cursor-pointer border-none bg-transparent p-0 text-text-muted transition-colors duration-300 hover:text-orange focus:outline-hidden"
            @click="showPassword = !showPassword"
          >
            <EyeOff
              v-if="showPassword"
              class="size-4"
            />
            <Eye
              v-else
              class="size-4"
            />
          </button>
        </div>
      </div>

      <!-- Remember Me + Try Demo -->
      <div class="flex items-center justify-between pt-1">
        <label class="flex cursor-pointer items-center gap-2 select-none">
          <input
            v-model="formData.rememberMe"
            type="checkbox"
            :disabled="isPending"
            class="peer size-4 cursor-pointer rounded-sm border-slate-800 bg-slate-950/20 accent-orange checked:border-orange checked:bg-orange"
          />
          <span
            class="text-xs font-medium text-text-muted transition-colors peer-checked:text-white"
          >
            Angemeldet bleiben
          </span>
        </label>
        <button
          type="button"
          :disabled="isPending"
          class="cursor-pointer border-none bg-transparent p-0 text-xs font-bold text-orange transition-colors hover:text-yellow focus:outline-hidden disabled:opacity-60"
          @click="handleDemoLogin"
        >
          Demo testen
        </button>
      </div>
    </div>

    <!-- Bottom: submit + divider + social -->
    <div class="mt-4 flex flex-col gap-3">
      <button
        type="submit"
        :disabled="isPending"
        class="h-11 w-full cursor-pointer rounded-xl bg-linear-to-r from-yellow to-orange text-sm font-extrabold tracking-widest text-black uppercase shadow-lg shadow-orange/10 transition-[translate,scale,box-shadow,filter] duration-300 hover:-translate-y-0.5 hover:shadow-orange/25 hover:brightness-110 focus:ring-2 focus:ring-orange focus:outline-hidden active:scale-[0.98]"
      >
        {{ isPending ? "Melde an..." : "Anmelden" }}
      </button>

      <div class="relative my-0.5 flex items-center justify-center">
        <div
          class="absolute inset-0 flex items-center"
          aria-hidden="true"
        >
          <div class="w-full border-t border-slate-800/60" />
        </div>
        <span
          class="relative bg-[#1a1c29] px-3 text-[10px] font-bold tracking-widest text-text-muted/70 uppercase select-none"
        >
          oder weiter mit
        </span>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <SocialButton
          provider="Google"
          :disabled="isPending"
          @click="notConfigured('Google')"
        />
        <SocialButton
          provider="Microsoft"
          :disabled="isPending"
          @click="notConfigured('Microsoft')"
        />
      </div>

      <p class="text-center text-[10px] leading-relaxed text-text-muted/70 select-none">
        Mit deiner Anmeldung stimmst du unseren Nutzungsbedingungen und Datenschutzbestimmungen zu.
      </p>
    </div>
  </form>
</template>
