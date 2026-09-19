<script setup lang="ts">
import { ref, computed } from "vue";
import { ChevronDown, Copy, Check, Volume2 } from "lucide-vue-next";
import { speakGerman } from "../../../shared/lib/audio.ts";
import type { PhraseGroup } from "../model/types.ts";

interface Props {
  group: PhraseGroup;
  isChecklistItem?: boolean;
}

const props = withDefaults(defineProps<Props>(), { isChecklistItem: false });

const isOpen = ref(false);
const copiedPhrase = ref<string | null>(null);
const speakingPhrase = ref<string | null>(null);

const copyText = async (text: string) => {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      copiedPhrase.value = text;
      setTimeout(() => {
        if (copiedPhrase.value === text) copiedPhrase.value = null;
      }, 1500);
    }
  } catch (err) {
    console.warn("Clipboard copy failed", err);
  }
};

const playPhrase = (text: string) => {
  speakingPhrase.value = text;
  speakGerman(text, 0.88);
  setTimeout(() => {
    if (speakingPhrase.value === text) speakingPhrase.value = null;
  }, 1800);
};

const processedPhrases = computed(() => {
  const strings = props.group.phrases.filter((p): p is string => typeof p === "string");
  if (strings.length === 0) return [];

  const groups: { title: string | null; items: string[] }[] = [];
  let currentGroup: { title: string | null; items: string[] } = { title: null, items: [] };

  for (const string_ of strings) {
    if (string_.startsWith("---") && string_.endsWith("---")) {
      if (currentGroup.items.length > 0 || currentGroup.title) {
        groups.push(currentGroup);
      }
      currentGroup = { title: string_.replaceAll("---", "").trim(), items: [] };
    } else {
      currentGroup.items.push(string_);
    }
  }
  if (currentGroup.items.length > 0 || currentGroup.title) {
    groups.push(currentGroup);
  }
  return groups;
});
</script>

<template>
  <div
    :class="[
      'group transition-all duration-300',
      props.isChecklistItem
        ? 'bg-transparent'
        : 'overflow-hidden rounded-2xl border-2 border-white/10 bg-surface-raised/70 backdrop-blur-md hover:border-yellow/30 hover:bg-surface-raised/90 shadow-sm',
    ]"
  >
    <!-- Header - Always Visible -->
    <button
      type="button"
      class="flex w-full cursor-pointer items-center justify-between border-none bg-transparent px-6 py-4 text-left transition-colors select-none hover:bg-white/5 focus:outline-none focus-visible:bg-white/10"
      @click="isOpen = !isOpen"
      @keydown.enter.prevent="isOpen = !isOpen"
      @keydown.space.prevent="isOpen = !isOpen"
    >
      <div class="flex items-center gap-4">
        <span
          v-if="/\d+/.test(props.group.label)"
          class="flex size-7 shrink-0 items-center justify-center rounded-xl border border-yellow/30 bg-yellow/15 text-xs font-black text-yellow backdrop-blur-md"
        >
          {{ props.group.label.match(/\d+/)?.[0] }}
        </span>
        <h4
          :class="[
            'text-sm font-bold transition-colors tablet:text-[15px]',
            props.isChecklistItem ? 'text-zinc-200 group-hover:text-yellow' : 'text-white group-hover:text-yellow',
          ]"
        >
          {{ props.group.label.replace(/^.*?\d+\s*[·–:]\s*/, "") }}
        </h4>
        <span
          v-if="props.group.badge"
          class="rounded-full border border-yellow/30 bg-yellow/15 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-yellow uppercase"
        >
          {{ props.group.badge }}
        </span>
      </div>
      <div class="flex items-center gap-4">
        <div :class="['transition-transform duration-300', isOpen ? 'rotate-180' : '']">
          <ChevronDown
            :class="[
              'size-4.5 tablet:size-5 transition-colors',
              isOpen ? 'text-yellow' : props.isChecklistItem ? 'text-amber-400/50' : 'text-mist-400',
            ]"
          />
        </div>
      </div>
    </button>

    <!-- Expandable Content -->
    <div
      :class="[
        'overflow-hidden transition-all duration-300 ease-in-out',
        isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0',
      ]"
    >
      <div
        :class="[
          'p-6',
          props.isChecklistItem ? 'border-t border-white/10 bg-white/2' : 'border-t border-white/5 bg-black/20',
        ]"
      >
        <div
          v-if="processedPhrases.length > 0"
          class="space-y-6"
        >
          <div
            v-for="(phraseGroup, gIndex) in processedPhrases"
            :key="phraseGroup.title ?? gIndex"
            class="space-y-3"
          >
            <h5
              v-if="phraseGroup.title"
              class="px-1 text-[11px] font-bold tracking-widest text-mist-400 uppercase"
            >
              {{ phraseGroup.title }}
            </h5>
            <div class="rounded-xl border border-white/5 bg-surface-overlay/40 p-3.5 backdrop-blur-sm">
              <div class="space-y-2.5">
                <div
                  v-for="item in phraseGroup.items"
                  :key="item"
                  class="group/item flex items-center justify-between gap-3 rounded-lg p-2 transition-colors hover:bg-white/5"
                >
                  <div class="flex items-start gap-3 flex-1 min-w-0">
                    <div class="size-1.5 rounded-full bg-yellow/60 mt-2 shrink-0" />
                    <p class="text-sm leading-relaxed whitespace-pre-line text-white/90 tablet:text-[15px]">
                      {{ item }}
                    </p>
                  </div>

                  <!-- Action Buttons: Audio & Copy -->
                  <div class="flex items-center gap-1 shrink-0 opacity-80 group-hover/item:opacity-100 transition-opacity">
                    <!-- Listen Button -->
                    <button
                      type="button"
                      class="flex size-7 items-center justify-center rounded-md border border-white/10 bg-white/5 text-mist-400 hover:border-yellow/40 hover:bg-yellow/10 hover:text-yellow transition-all"
                      :class="{ 'border-yellow text-yellow bg-yellow/20 animate-pulse': speakingPhrase === item }"
                      title="Aussprechen"
                      aria-label="Aussprache anhören"
                      @click="playPhrase(item)"
                    >
                      <Volume2 class="size-3.5" />
                    </button>

                    <!-- Copy Button -->
                    <button
                      type="button"
                      class="flex size-7 items-center justify-center rounded-md border border-white/10 bg-white/5 text-mist-400 hover:border-yellow/40 hover:bg-yellow/10 hover:text-yellow transition-all"
                      :class="{ 'border-emerald-500/50 text-emerald-400 bg-emerald-500/20': copiedPhrase === item }"
                      title="In die Zwischenablage kopieren"
                      aria-label="Ausdruck kopieren"
                      @click="copyText(item)"
                    >
                      <Check
                        v-if="copiedPhrase === item"
                        class="size-3.5 text-emerald-400"
                      />
                      <Copy
                        v-else
                        class="size-3.5"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
