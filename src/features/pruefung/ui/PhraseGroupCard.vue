<script setup lang="ts">
import { ref, computed } from "vue";
import { ChevronDown } from "lucide-vue-next";
import type { PhraseGroup } from "../model/types.ts";

interface Props {
  group: PhraseGroup;
  isChecklistItem?: boolean;
}

const props = withDefaults(defineProps<Props>(), { isChecklistItem: false });

const isOpen = ref(false);

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
      props.isChecklistItem ? 'bg-transparent' : (
        'overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]'
      ),
    ]"
  >
    <!-- Header - Always Visible -->
    <button
      type="button"
      class="flex w-full cursor-pointer items-center justify-between border-none bg-transparent px-6 py-3.5 text-left transition-colors select-none hover:bg-white/5 focus:outline-none focus-visible:bg-white/10"
      @click="isOpen = !isOpen"
      @keydown.enter.prevent="isOpen = !isOpen"
      @keydown.space.prevent="isOpen = !isOpen"
    >
      <div class="flex items-center gap-4">
        <span
          v-if="/\d+/.test(props.group.label)"
          class="flex size-6 shrink-0 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/20 text-[10px] font-black text-amber-400 backdrop-blur-md"
        >
          {{ props.group.label.match(/\d+/)?.[0] }}
        </span>
        <h4
          :class="[
            'text-sm font-bold transition-colors tablet:text-[15px]',
            props.isChecklistItem ?
              'text-zinc-200 group-hover:text-amber-400'
            : 'text-white group-hover:text-amber-400',
          ]"
        >
          {{ props.group.label.replace(/^.*?\d+\s*[·–:]\s*/, "") }}
        </h4>
        <span
          v-if="props.group.badge"
          class="rounded-full bg-amber-400/20 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-amber-400 uppercase"
        >
          {{ props.group.badge }}
        </span>
      </div>
      <div class="flex items-center gap-4">
        <div :class="['transition-transform duration-500', isOpen ? 'rotate-180' : '']">
          <ChevronDown
            :class="[
              'size-4 tablet:size-5',
              props.isChecklistItem ? 'text-amber-400/50' : 'text-white/30',
            ]"
          />
        </div>
      </div>
    </button>

    <!-- Expandable Content -->
    <div
      :class="[
        'overflow-hidden transition-all duration-500 ease-in-out',
        isOpen ? 'max-h-250 opacity-100' : 'max-h-0 opacity-0',
      ]"
    >
      <div
        :class="[
          'p-6',
          props.isChecklistItem ?
            'border-t border-white/10 bg-white/2'
          : 'border-t border-white/5 bg-black/20',
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
              class="px-1 text-[11px] font-semibold tracking-widest text-zinc-500 uppercase"
            >
              {{ phraseGroup.title }}
            </h5>
            <div class="rounded-xl border border-white/5 bg-black/20 p-4">
              <div class="space-y-4">
                <div
                  v-for="item in phraseGroup.items"
                  :key="item"
                  class="flex items-start gap-4"
                >
                  <div class="flex size-6 shrink-0 items-center justify-center">
                    <div class="size-1.5 rounded-full bg-amber-400/30" />
                  </div>
                  <p
                    class="text-sm leading-relaxed whitespace-pre-line text-zinc-300 tablet:text-[15px]"
                  >
                    {{ item }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
