<script setup lang="ts">
import { ref } from "vue";
import { Eye, EyeOff, Lock, Mail } from "lucide-vue-next";
import SocialButton from "./SocialButton.vue";

const emit = defineEmits<{ (e: "toggle-view", target: "signin" | "signup"): void }>();

const formData = ref({ email: "", password: "", confirmPassword: "" });
const showPassword = ref(false);
const error = ref<string | null>(null);
const isPending = ref(false);

const notConfigured = (provider: string) => {
  alert(`${provider} Anmeldung wird in der Laravel-Integration konfiguriert.`);
};

const handleSignUp = async () => {
  error.value = null;

  if (formData.value.password !== formData.value.confirmPassword) {
    error.value = "Die Passwörter stimmen nicht überein.";
    return;
  }

  isPending.value = true;
  try {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    alert(
      `Konto für ${formData.value.email} wurde erfolgreich erstellt! (Simulierte Registrierung)`,
    );
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
    @submit.prevent="handleSignUp"
  >
    <div class="flex flex-col gap-4">
      <div class="hidden flex-col md:flex">
        <h3 class="font-display text-lg font-bold tracking-tight text-white">Registrieren</h3>
        <p class="mt-1 text-[12px] text-text-muted">
          Bereits ein Konto?{{ " " }}
          <button
            type="button"
            :disabled="isPending"
            class="cursor-pointer border-none bg-transparent p-0 font-bold text-orange transition-colors hover:text-yellow hover:underline focus:outline-none"
            @click="emit('toggle-view', 'signin')"
          >
            Anmelden
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
          for="signup-email"
          class="text-xs font-bold tracking-wider text-text-muted uppercase select-none"
        >
          E-Mail-Adresse
        </label>
        <div class="relative mt-1">
          <input
            id="signup-email"
            v-model="formData.email"
            name="email"
            type="email"
            required
            autocomplete="email"
            placeholder="beispiel@domain.de"
            :disabled="isPending"
            class="h-11 w-full rounded-xl border border-slate-800 bg-slate-950/25 px-4 pr-10 font-sans text-sm text-white placeholder-text-muted/50 transition-colors duration-300 hover:border-slate-700/85 hover:bg-slate-950/30 focus:border-orange focus:bg-slate-950/45 focus:ring-4 focus:ring-orange/10 focus:outline-none"
          />
          <Mail
            class="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-text-muted transition-colors duration-300 group-focus-within:text-orange"
          />
        </div>
      </div>

      <!-- Password -->
      <div class="group flex flex-col gap-1 text-left">
        <label
          for="signup-password"
          class="text-xs font-bold tracking-wider text-text-muted uppercase select-none"
        >
          Passwort
        </label>
        <div class="relative mt-1">
          <input
            id="signup-password"
            v-model="formData.password"
            name="password"
            :type="showPassword ? 'text' : 'password'"
            required
            autocomplete="new-password"
            minlength="8"
            placeholder="Mindestens 8 Zeichen"
            :disabled="isPending"
            class="h-11 w-full rounded-xl border border-slate-800 bg-slate-950/25 px-4 pr-10 font-sans text-sm tracking-widest text-white placeholder-text-muted/50 transition-colors duration-300 placeholder:tracking-normal hover:border-slate-700/80 hover:bg-slate-950/30 focus:border-orange focus:bg-slate-950/45 focus:ring-4 focus:ring-orange/10 focus:outline-none"
          />
          <button
            type="button"
            tabindex="-1"
            :disabled="isPending"
            :aria-label="showPassword ? 'Passwort verbergen' : 'Passwort anzeigen'"
            class="absolute top-1/2 right-3.5 -translate-y-1/2 cursor-pointer border-none bg-transparent p-0 text-text-muted transition-colors duration-300 hover:text-orange focus:outline-none"
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

      <!-- Confirm password -->
      <div class="group flex flex-col gap-1 text-left">
        <label
          for="signup-confirm"
          class="text-xs font-bold tracking-wider text-text-muted uppercase select-none"
        >
          Passwort bestätigen
        </label>
        <div class="relative mt-1">
          <input
            id="signup-confirm"
            v-model="formData.confirmPassword"
            name="password_confirmation"
            type="password"
            required
            autocomplete="new-password"
            minlength="8"
            placeholder="Passwort wiederholen"
            :disabled="isPending"
            class="h-11 w-full rounded-xl border border-slate-800 bg-slate-950/25 px-4 pr-10 font-sans text-sm tracking-widest text-white placeholder-text-muted/50 transition-colors duration-300 placeholder:tracking-normal hover:border-slate-700/85 hover:bg-slate-950/30 focus:border-orange focus:bg-slate-950/45 focus:ring-4 focus:ring-orange/10 focus:outline-none"
          />
          <Lock
            class="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-text-muted"
          />
        </div>
      </div>
    </div>

    <!-- Bottom: submit + divider + social -->
    <div class="mt-4 flex flex-col gap-3">
      <button
        type="submit"
        :disabled="isPending"
        class="h-11 w-full cursor-pointer rounded-xl bg-linear-to-r from-yellow to-orange text-sm font-extrabold tracking-widest text-black uppercase shadow-lg shadow-orange/10 transition-[transform,box-shadow,filter] duration-300 hover:-translate-y-0.5 hover:shadow-orange/25 hover:brightness-110 focus:ring-2 focus:ring-orange focus:outline-none active:scale-[0.98]"
      >
        {{ isPending ? "Erstelle..." : "Registrieren" }}
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
        Mit deiner Registrierung stimmst du unseren Nutzungsbedingungen und Datenschutzbestimmungen
        zu.
      </p>
    </div>
  </form>
</template>
