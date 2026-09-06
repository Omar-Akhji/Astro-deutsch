<script setup lang="ts">
import { Mail, Tag, User } from "lucide-vue-next";

interface Props {
  type: "informal" | "formal";
  subject: string;
  recipient: string;
  sections: { label: string; text: string; description: string; color: string }[];
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 shadow-2xl backdrop-blur-xl"
  >
    <!-- Browser/Email Header -->
    <div class="flex items-center gap-3 border-b border-white/10 bg-white/5 px-4 py-3">
      <div class="flex gap-1.5">
        <div class="size-3 rounded-full bg-red-500/50" />
        <div class="size-3 rounded-full bg-amber-500/50" />
        <div class="size-3 rounded-full bg-emerald-500/50" />
      </div>
      <div class="flex flex-1 justify-center">
        <div class="flex items-center gap-2 rounded-lg bg-black/20 px-4 py-1 text-xs text-zinc-400">
          <Mail :size="12" />
          <span>Neues Dokument - {{ props.type === "informal" ? "Informell" : "Formell" }}</span>
        </div>
      </div>
    </div>

    <!-- Email Fields -->
    <div class="space-y-px border-b border-white/10 bg-white/2">
      <div class="flex items-center gap-3 px-6 py-3">
        <span class="text-xs font-bold tracking-widest text-zinc-500 uppercase">An:</span>
        <div
          class="flex items-center gap-2 rounded-full bg-amber-400/10 px-3 py-1 text-sm font-medium text-amber-400"
        >
          <User :size="14" />
          {{ props.recipient }}
        </div>
      </div>
      <div class="flex items-center gap-3 px-6 py-3">
        <span class="text-xs font-bold tracking-widest text-zinc-500 uppercase"> Betreff: </span>
        <div class="flex items-center gap-2 text-sm font-semibold text-white">
          <Tag
            :size="14"
            class="text-zinc-400"
          />
          {{ props.subject }}
        </div>
      </div>
    </div>

    <!-- Email Content Area -->
    <div class="relative p-8 pt-10">
      <!-- Background Pattern -->
      <div
        class="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[20px_20px] opacity-5"
      />

      <div class="relative space-y-6">
        <div
          v-for="(section, sectionIndex) in props.sections"
          :key="section.label"
          class="group relative"
        >
          <!-- Annotation Label -->
          <div
            class="absolute top-0 -left-4 hidden -translate-x-full pr-4 opacity-0 transition-opacity group-hover:opacity-100 lg:block"
          >
            <div
              :class="[
                'rounded-lg border px-3 py-1.5 text-[10px] font-black tracking-widest uppercase shadow-lg backdrop-blur-md',
                section.color,
              ]"
            >
              {{ section.label }}
            </div>
          </div>

          <!-- Text Block -->
          <div
            :class="[
              'relative rounded-xl border border-solid p-4 transition-all hover:bg-white/5',
              section.color === 'text-amber-400' ? 'border-amber-400/30'
              : section.color === 'text-blue-400' ? 'border-blue-400/30'
              : section.color === 'text-fuchsia-400' ? 'border-fuchsia-400/30'
              : section.color === 'text-emerald-400' ? 'border-emerald-400/30'
              : section.color === 'text-pink-400' ? 'border-pink-400/30'
              : 'border-white/20',
            ]"
          >
            <div class="mb-1 flex items-center justify-between">
              <span :class="['text-[10px] font-bold tracking-[0.2em] uppercase', section.color]">
                {{ sectionIndex + 1 }}. {{ section.label }}
              </span>
              <span class="text-[10px] text-zinc-500 italic">{{ section.description }}</span>
            </div>
            <p class="font-serif text-lg leading-relaxed text-zinc-200">
              {{ section.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
