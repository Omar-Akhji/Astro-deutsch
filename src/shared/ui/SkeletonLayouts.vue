<script setup lang="ts">
import Skeleton from "./Skeleton.vue";

interface Props {
  layout:
    | "card"
    | "thema-card"
    | "grammar-overview"
    | "grammar-detail"
    | "vocabulary-overview"
    | "vocabulary-level"
    | "vocabulary-detail"
    | "family-tree"
    | "pruefung-overview"
    | "pruefung-level"
    | "pruefung-modelltests"
    | "pruefung-module-study"
    | "quiz"
    | "hero"
    | "section-header"
    | "table"
    | "section-card"
    | "themen"
    | "page-header"
    | "home"
    | "auth"
    | "default-pending";
  variant?: "default" | "large";
  columns?: number;
  rows?: number;
  noWrapper?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  columns: 4,
  rows: 5,
  noWrapper: false,
});

const ROW_IDS = ["r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8", "r9", "r10"];
const COL_IDS = ["c1", "c2", "c3", "c4", "c5", "c6"];
</script>

<template>
  <!-- 1. Card Skeleton -->
  <article
    v-if="props.layout === 'card'"
    class="h-full"
  >
    <div
      class="relative z-1 flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 text-left shadow-xl"
    >
      <div class="aspect-video w-full overflow-hidden rounded-2xl">
        <Skeleton class="h-full w-full rounded-2xl bg-white/5" />
      </div>
      <div class="flex flex-1 flex-col px-2 pt-5 pb-2">
        <div class="mbe-3 flex items-center gap-2">
          <Skeleton class="h-6 w-16 rounded-full bg-white/10" />
          <Skeleton class="h-4 w-20 rounded-full bg-white/5" />
        </div>
        <Skeleton
          :class="[
            'mb-2 rounded-md bg-white/10',
            props.variant === 'large' ? 'h-8 w-4/5' : 'h-7 w-3/4',
          ]"
        />
        <Skeleton class="mbe-1 h-4 w-full rounded-md bg-white/5" />
        <Skeleton class="mbe-4 h-4 w-2/3 rounded-md bg-white/5" />
        <div
          v-if="props.variant === 'large'"
          class="mbs-auto flex gap-8 border-bs border-white/10 pbs-4"
        >
          <div class="flex flex-col gap-1">
            <Skeleton class="h-7 w-12 rounded-md bg-white/10" />
            <Skeleton class="h-3 w-16 rounded-md bg-white/5" />
          </div>
          <div class="flex flex-col gap-1">
            <Skeleton class="h-7 w-12 rounded-md bg-white/10" />
            <Skeleton class="h-3 w-16 rounded-md bg-white/5" />
          </div>
        </div>
      </div>
    </div>
  </article>

  <!-- 2. Thema Card Skeleton -->
  <div
    v-else-if="props.layout === 'thema-card'"
    class="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
  >
    <div class="mbe-4 flex items-start justify-between">
      <div class="w-full space-y-2">
        <Skeleton class="h-5 w-20 rounded-full bg-white/10" />
        <Skeleton class="h-5 w-3/4 rounded-md bg-white/10" />
      </div>
    </div>
    <div class="relative mb-4 flex gap-1 rounded-full bg-black/20 p-1">
      <Skeleton class="h-7 flex-1 rounded-full bg-white/10" />
      <Skeleton class="h-7 flex-1 rounded-full bg-white/5" />
    </div>
    <div class="min-h-30 space-y-3">
      <div class="flex gap-3">
        <Skeleton class="mt-1 size-1.5 shrink-0 rounded-full bg-white/10" />
        <Skeleton class="h-4 w-full rounded-md bg-white/5" />
      </div>
      <div class="flex gap-3">
        <Skeleton class="mt-1 size-1.5 shrink-0 rounded-full bg-white/10" />
        <Skeleton class="h-4 w-5/6 rounded-md bg-white/5" />
      </div>
      <div class="flex gap-3">
        <Skeleton class="mt-1 size-1.5 shrink-0 rounded-full bg-white/10" />
        <Skeleton class="h-4 w-4/5 rounded-md bg-white/5" />
      </div>
    </div>
    <div class="mbs-6 flex justify-end border-bs border-white/5 pbs-4">
      <Skeleton class="h-3.5 w-32 rounded-md bg-white/5" />
    </div>
  </div>

  <!-- 3. Hero Skeleton -->
  <div
    v-else-if="props.layout === 'hero'"
    class="relative mbe-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm tablet:p-12"
  >
    <div class="flex flex-col items-center text-center">
      <div class="mbe-4 flex flex-wrap items-center justify-center gap-3">
        <Skeleton class="h-9 w-28 rounded-full bg-white/10" />
        <Skeleton class="h-7 w-20 rounded-lg bg-white/5" />
      </div>
      <Skeleton
        class="mx-auto -my-2 mbe-2 h-10 w-3/4 rounded-md bg-white/15 tablet:h-12 laptop:h-14"
      />
      <Skeleton class="mx-auto h-6 w-full rounded-md bg-white/5 tablet:w-2/3" />
      <div class="mbs-8 flex flex-wrap justify-center gap-8">
        <div class="flex items-center gap-2">
          <Skeleton class="size-5 shrink-0 rounded-full bg-white/10 tablet:size-6" />
          <Skeleton class="h-5 w-24 rounded-md bg-white/10 tablet:h-6 tablet:w-28" />
        </div>
        <div class="flex items-center gap-2">
          <Skeleton class="size-5 shrink-0 rounded-full bg-white/10 tablet:size-6" />
          <Skeleton class="h-5 w-20 rounded-md bg-white/10 tablet:h-6 tablet:w-24" />
        </div>
        <div class="flex items-center gap-2">
          <Skeleton class="size-5 shrink-0 rounded-full bg-white/10 tablet:size-6" />
          <Skeleton class="h-5 w-28 rounded-md bg-white/10 tablet:h-6 tablet:w-32" />
        </div>
      </div>
    </div>
  </div>

  <!-- 4. Section Header Skeleton -->
  <div
    v-else-if="props.layout === 'section-header'"
    class="mbe-8 flex items-center gap-3 tablet:gap-4"
  >
    <Skeleton
      class="size-10 shrink-0 rounded-full border-[3px] border-white/10 bg-white/5 tablet:size-12"
    />
    <Skeleton class="h-8 w-52 rounded-md bg-white/10" />
  </div>

  <!-- 5. Page Header Skeleton -->
  <header
    v-else-if="props.layout === 'page-header'"
    class="mbe-12 text-center"
  >
    <div class="mbe-4 flex flex-col items-center justify-center gap-3 tablet:flex-row tablet:gap-4">
      <Skeleton
        class="size-12 shrink-0 rounded-full border-[3px] border-white/10 bg-white/5 tablet:size-14"
      />
      <Skeleton class="h-9 w-64 rounded-md bg-white/15 tablet:h-12 tablet:w-80" />
    </div>
    <div class="mx-auto mbe-6 h-1 w-24 overflow-hidden rounded-full bg-white/10" />
    <div class="flex justify-center">
      <Skeleton
        class="h-10 w-full max-w-[320px] rounded-full border-2 border-white/10 bg-white/5 tablet:max-w-120"
      />
    </div>
  </header>

  <!-- 6. Home Skeleton -->
  <div
    v-else-if="props.layout === 'home'"
    class="container mx-auto px-4 py-8"
  >
    <header class="mbe-16">
      <div
        class="relative mbe-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm tablet:p-12"
      >
        <div class="flex flex-col items-center text-center">
          <div class="mbe-4 flex items-center justify-center gap-3">
            <Skeleton class="h-9 w-28 rounded-full bg-white/10" />
          </div>
          <Skeleton
            class="mx-auto -my-2 mbe-2 h-10 w-3/4 max-w-2xl rounded-md bg-white/15 tablet:h-12 laptop:h-14"
          />
          <Skeleton class="mx-auto h-6 w-full max-w-xl rounded-md bg-white/5 tablet:w-2/3" />
          <div class="mbs-8 flex flex-wrap justify-center gap-8">
            <div class="flex items-center gap-2">
              <Skeleton class="size-5 shrink-0 rounded-full bg-white/10 tablet:size-6" />
              <Skeleton class="h-5 w-24 rounded-md bg-white/10 tablet:h-6 tablet:w-28" />
            </div>
            <div class="flex items-center gap-2">
              <Skeleton class="size-5 shrink-0 rounded-full bg-white/10 tablet:size-6" />
              <Skeleton class="h-5 w-20 rounded-md bg-white/10 tablet:h-6 tablet:w-24" />
            </div>
            <div class="flex items-center gap-2">
              <Skeleton class="size-5 shrink-0 rounded-full bg-white/10 tablet:size-6" />
              <Skeleton class="h-5 w-28 rounded-md bg-white/10 tablet:h-6 tablet:w-32" />
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="grid grid-cols-1 gap-6 mobile:grid-cols-2 mobile:gap-8 laptop:grid-cols-3">
      <article
        v-for="id in ['card-1', 'card-2', 'card-3']"
        :key="id"
        class="h-full"
      >
        <div
          class="relative z-1 flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl"
        >
          <div class="aspect-video w-full overflow-hidden rounded-2xl">
            <Skeleton class="h-full w-full rounded-2xl bg-white/5" />
          </div>
          <div class="flex flex-1 flex-col px-2 pt-5 pb-2">
            <div class="mbe-3 flex items-center gap-2">
              <Skeleton class="h-6 w-16 rounded-full bg-white/10" />
              <Skeleton class="h-4 w-20 rounded-full bg-white/5" />
            </div>
            <Skeleton class="mb-2 h-7 w-3/4 rounded-md bg-white/10" />
            <Skeleton class="mbe-1 h-4 w-full rounded-md bg-white/5" />
            <Skeleton class="mbe-4 h-4 w-2/3 rounded-md bg-white/5" />
          </div>
        </div>
      </article>
    </div>
    <section class="mbs-20">
      <div
        class="relative mbe-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm tablet:p-12"
      >
        <div class="flex flex-col items-center text-center">
          <Skeleton
            class="mx-auto -my-2 mbe-2 h-9 w-3/4 max-w-xl rounded-md bg-white/15 tablet:h-11 laptop:h-13"
          />
          <Skeleton class="mx-auto h-6 w-full max-w-2xl rounded-md bg-white/5 tablet:h-7" />
          <div class="mbs-8 flex flex-wrap justify-center gap-8">
            <div class="flex items-center gap-2">
              <Skeleton class="size-5 shrink-0 rounded-full bg-white/10 tablet:size-6" />
              <Skeleton class="h-5 w-24 rounded-md bg-white/10 tablet:h-6 tablet:w-28" />
            </div>
            <div class="flex items-center gap-2">
              <Skeleton class="size-5 shrink-0 rounded-full bg-white/10 tablet:size-6" />
              <Skeleton class="h-5 w-24 rounded-md bg-white/10 tablet:h-6 tablet:w-28" />
            </div>
            <div class="flex items-center gap-2">
              <Skeleton class="size-5 shrink-0 rounded-full bg-white/10 tablet:size-6" />
              <Skeleton class="h-5 w-32 rounded-md bg-white/10 tablet:h-6 tablet:w-36" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mbs-24 space-y-4 text-center">
      <Skeleton
        class="mx-auto h-9 w-2/3 max-w-md rounded-md bg-white/10 tablet:h-11 md:h-12 md:w-1/2"
      />
      <Skeleton class="mx-auto h-5 w-full max-w-2xl rounded-md bg-white/5 tablet:h-6" />
    </section>
  </div>

  <!-- 7. Themen Skeleton -->
  <main
    v-else-if="props.layout === 'themen'"
    class="min-h-dvh space-y-16 py-8"
  >
    <header class="mx-auto max-w-2xl space-y-4 text-center">
      <Skeleton class="mx-auto h-10 w-72 max-w-full rounded-md bg-white/15" />
      <Skeleton class="mx-auto h-8 w-full max-w-lg rounded-md bg-white/5" />
    </header>
    <nav class="rounded-2xl border border-white/5 bg-white/5 p-4 shadow-xl backdrop-blur-md">
      <div class="mx-auto flex max-w-7xl flex-wrap justify-center gap-2">
        <Skeleton
          v-for="id in ['n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9']"
          :key="id"
          class="h-9 w-28 rounded-full bg-white/10"
        />
      </div>
    </nav>
    <section
      v-for="sid in ['s1', 's2', 's3']"
      :key="sid"
      class="mb-16"
    >
      <div class="mb-10 flex items-center gap-4">
        <Skeleton
          class="size-12 shrink-0 rounded-full border-[3px] border-white/10 bg-white/5 tablet:size-14"
        />
        <div class="space-y-2">
          <Skeleton class="h-7 w-48 rounded-md bg-white/10" />
          <Skeleton class="h-4 w-32 rounded-md bg-white/5" />
        </div>
      </div>
      <div class="grid grid-cols-1 gap-6 mobile:grid-cols-2 mobile:gap-8 laptop:grid-cols-3">
        <div
          v-for="cid in ['c1', 'c2', 'c3']"
          :key="cid"
          class="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
        >
          <div class="mbe-4 flex items-start justify-between">
            <div class="w-full space-y-2">
              <Skeleton class="h-5 w-20 rounded-full bg-white/10" />
              <Skeleton class="h-5 w-3/4 rounded-md bg-white/10" />
            </div>
          </div>
          <div class="relative mb-4 flex gap-1 rounded-full bg-black/20 p-1">
            <Skeleton class="h-7 flex-1 rounded-full bg-white/10" />
            <Skeleton class="h-7 flex-1 rounded-full bg-white/5" />
          </div>
          <div class="min-h-30 space-y-3">
            <div class="flex gap-3">
              <Skeleton class="mt-1 size-1.5 shrink-0 rounded-full bg-white/10" />
              <Skeleton class="h-4 w-full rounded-md bg-white/5" />
            </div>
            <div class="flex gap-3">
              <Skeleton class="mt-1 size-1.5 shrink-0 rounded-full bg-white/10" />
              <Skeleton class="h-4 w-5/6 rounded-md bg-white/5" />
            </div>
            <div class="flex gap-3">
              <Skeleton class="mt-1 size-1.5 shrink-0 rounded-full bg-white/10" />
              <Skeleton class="h-4 w-4/5 rounded-md bg-white/5" />
            </div>
          </div>
          <div class="mbs-6 flex justify-end border-bs border-white/5 pbs-4">
            <Skeleton class="h-3.5 w-32 rounded-md bg-white/5" />
          </div>
        </div>
      </div>
    </section>
    <aside class="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
      <div class="mb-4 flex items-center gap-3">
        <Skeleton
          class="size-9 shrink-0 rounded-full border-[3px] border-white/10 bg-white/5 tablet:size-10"
        />
        <Skeleton class="h-7 w-64 rounded-md bg-white/10" />
      </div>
      <ul class="m-0 grid list-none gap-4 p-0 md:grid-cols-2">
        <li
          v-for="id in ['t1', 't2', 't3', 't4', 't5', 't6']"
          :key="id"
          class="flex gap-3"
        >
          <Skeleton class="size-4 shrink-0 rounded-full bg-white/10" />
          <Skeleton class="h-4 w-full rounded-md bg-white/5" />
        </li>
      </ul>
    </aside>
  </main>

  <!-- 8. Grammar Overview Skeleton -->
  <div
    v-else-if="props.layout === 'grammar-overview'"
    class="min-h-dvh space-y-12 py-8"
  >
    <header class="mbe-12 text-center">
      <div
        class="mbe-4 flex flex-col items-center justify-center gap-3 tablet:flex-row tablet:gap-4"
      >
        <Skeleton
          class="size-12 shrink-0 rounded-full border-[3px] border-white/10 bg-white/5 tablet:size-14"
        />
        <Skeleton class="h-9 w-64 rounded-md bg-white/15 tablet:h-12 tablet:w-80" />
      </div>
      <div class="mx-auto mbe-6 h-1 w-24 overflow-hidden rounded-full bg-white/10" />
      <div class="flex justify-center">
        <Skeleton
          class="h-10 w-full max-w-[320px] rounded-full border-2 border-white/10 bg-white/5 tablet:max-w-120"
        />
      </div>
    </header>

    <div
      v-for="sec in ['sec1', 'sec2', 'sec3']"
      :key="sec"
      class="mbe-16"
    >
      <div class="mbe-8 flex items-center gap-3 tablet:gap-4">
        <Skeleton
          class="size-10 shrink-0 rounded-full border-[3px] border-white/10 bg-white/5 tablet:size-12"
        />
        <Skeleton class="h-8 w-52 rounded-md bg-white/10" />
      </div>

      <div class="grid grid-cols-1 gap-6 mobile:grid-cols-2 mobile:gap-8 laptop:grid-cols-3">
        <article
          v-for="id in ['g1', 'g2', 'g3']"
          :key="id"
          class="h-full"
        >
          <div
            class="relative z-1 flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl"
          >
            <div class="aspect-video w-full overflow-hidden rounded-2xl">
              <Skeleton class="h-full w-full rounded-2xl bg-white/5" />
            </div>
            <div class="flex flex-1 flex-col px-2 pt-5 pb-2">
              <div class="mbe-3 flex items-center gap-2">
                <Skeleton class="h-6 w-16 rounded-full bg-white/10" />
                <Skeleton class="h-4 w-20 rounded-full bg-white/5" />
              </div>
              <Skeleton class="mb-2 h-7 w-3/4 rounded-md bg-white/10" />
              <Skeleton class="mbe-1 h-4 w-full rounded-md bg-white/5" />
              <Skeleton class="mbe-4 h-4 w-2/3 rounded-md bg-white/5" />
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>

  <!-- 9. Grammar Detail Skeleton -->
  <div
    v-else-if="props.layout === 'grammar-detail'"
    class="relative min-h-dvh space-y-12 py-8"
  >
    <!-- Hero section -->
    <div
      class="relative mbe-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm tablet:p-12"
    >
      <div class="flex flex-col items-center text-center">
        <div class="mbe-4 flex flex-wrap items-center justify-center gap-3">
          <Skeleton class="h-7 w-24 rounded-full bg-white/10" />
        </div>
        <Skeleton
          class="mx-auto -my-2 mbe-2 h-10 w-3/4 max-w-2xl rounded-md bg-white/15 tablet:h-12 laptop:h-14"
        />
        <Skeleton class="mx-auto h-6 w-full max-w-xl rounded-md bg-white/5 tablet:w-2/3" />
        <div class="mbs-8 flex flex-wrap justify-center gap-8">
          <div class="flex items-center gap-2">
            <Skeleton class="size-5 shrink-0 rounded-full bg-white/10 tablet:size-6" />
            <Skeleton class="h-5 w-24 rounded-md bg-white/10 tablet:h-6" />
          </div>
          <div class="flex items-center gap-2">
            <Skeleton class="size-5 shrink-0 rounded-full bg-white/10 tablet:size-6" />
            <Skeleton class="h-5 w-20 rounded-md bg-white/10 tablet:h-6" />
          </div>
        </div>
      </div>
    </div>

    <!-- Grammar Table section -->
    <section class="space-y-4">
      <div
        class="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm backdrop-blur-sm"
      >
        <div class="border-b border-white/10 bg-white/5 px-6 py-4">
          <Skeleton class="h-6 w-48 rounded-md bg-white/10" />
        </div>
        <div class="p-6">
          <div class="flex border-b border-white/10 pb-4">
            <Skeleton class="h-5 w-1/3 rounded-md bg-white/10" />
            <Skeleton class="ml-4 h-5 w-1/3 rounded-md bg-white/10" />
            <Skeleton class="ml-4 h-5 w-1/3 rounded-md bg-white/10" />
          </div>
          <div
            v-for="r in ['r1', 'r2', 'r3', 'r4']"
            :key="r"
            class="flex border-b border-white/5 py-4"
          >
            <Skeleton class="h-6 w-1/3 rounded-md bg-white/5" />
            <Skeleton class="ml-4 h-6 w-1/3 rounded-md bg-white/5" />
            <Skeleton class="ml-4 h-6 w-1/3 rounded-md bg-white/5" />
          </div>
        </div>
      </div>
    </section>

    <!-- Usage dialogue section -->
    <section class="space-y-4">
      <Skeleton class="h-6 w-28 rounded-md bg-white/10" />
      <div class="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
        <div
          v-for="d in ['d1', 'd2']"
          :key="d"
          class="flex gap-4"
        >
          <Skeleton class="size-8 shrink-0 rounded-full bg-white/15 tablet:size-10" />
          <Skeleton class="h-10 w-2/3 rounded-2xl rounded-ss-none bg-white/5" />
        </div>
      </div>
    </section>

    <!-- Grammar Content Blocks section -->
    <section class="space-y-6">
      <Skeleton class="h-6 w-32 rounded-md bg-white/10" />
      <div class="grid gap-3">
        <div
          v-for="b in ['b1', 'b2', 'b3']"
          :key="b"
          class="rounded-e-xl border-s-[6px] border-white/10 bg-white/5 p-4"
          style="border-start-start-radius: 0; border-end-start-radius: 0"
        >
          <Skeleton class="h-4 w-full rounded-md bg-white/5" />
        </div>
      </div>
    </section>

    <!-- Tips section -->
    <section class="space-y-4">
      <Skeleton class="h-6 w-20 rounded-md bg-white/10" />
      <div class="grid gap-4 sm:grid-cols-2">
        <div
          v-for="tip in ['tip1', 'tip2']"
          :key="tip"
          class="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
        >
          <Skeleton class="size-4 shrink-0 rounded-full bg-white/10 tablet:size-5" />
          <Skeleton class="h-4 w-full rounded-md bg-white/5" />
        </div>
      </div>
    </section>

    <!-- Subtopics Section -->
    <section class="space-y-8">
      <div class="flex items-center gap-3">
        <Skeleton class="size-10 rounded-full border-[3px] border-white/10 bg-white/5" />
        <Skeleton class="h-7 w-36 rounded-md bg-white/10" />
      </div>
      <div class="grid gap-10">
        <article
          v-for="id in ['sub-1', 'sub-2']"
          :key="id"
        >
          <div
            class="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm backdrop-blur-sm"
          >
            <header class="flex flex-row items-center gap-4 bg-white/10 p-5">
              <Skeleton class="h-6 w-8 rounded-md bg-white/20" />
              <Skeleton class="h-6 w-48 rounded-md bg-white/15" />
            </header>
            <div class="space-y-4 p-6">
              <Skeleton class="h-4 w-full rounded-md bg-white/5" />
              <Skeleton class="h-4 w-5/6 rounded-md bg-white/5" />
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>

  <!-- 10. Vocabulary Overview Skeleton -->
  <div
    v-else-if="props.layout === 'vocabulary-overview'"
    class="min-h-dvh space-y-12 py-8"
  >
    <header class="mbe-12 text-center">
      <div class="mbe-4 flex items-center justify-center gap-3 tablet:gap-4">
        <Skeleton
          class="size-12 shrink-0 rounded-full border-[3px] border-white/10 bg-white/5 tablet:size-14"
        />
        <Skeleton class="h-9 w-64 rounded-md bg-white/15 tablet:h-12 tablet:w-80" />
      </div>
      <div class="mx-auto mbe-6 h-1 w-24 overflow-hidden rounded-full bg-white/10" />
      <div class="flex justify-center">
        <Skeleton
          class="h-10 w-full max-w-[320px] rounded-full border-2 border-white/10 bg-white/5 tablet:max-w-120"
        />
      </div>
    </header>

    <div class="grid grid-cols-1 gap-6 py-4 mobile:grid-cols-2 mobile:gap-8 laptop:grid-cols-3">
      <div
        v-for="id in ['v1', 'v2', 'v3', 'v4', 'v5', 'v6']"
        :key="id"
        class="h-full"
      >
        <div
          class="relative z-1 flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl"
        >
          <div class="aspect-video w-full overflow-hidden rounded-2xl">
            <Skeleton class="h-full w-full rounded-2xl bg-white/5" />
          </div>
          <div class="flex flex-1 flex-col px-2 pt-5 pb-2">
            <div class="mbe-3 flex items-center gap-2">
              <Skeleton class="h-6 w-16 rounded-full bg-white/10" />
              <Skeleton class="h-4 w-20 rounded-full bg-white/5" />
            </div>
            <Skeleton class="mb-2 h-7 w-3/4 rounded-md bg-white/10" />
            <Skeleton class="mbe-1 h-4 w-full rounded-md bg-white/5" />
            <Skeleton class="mbe-4 h-4 w-2/3 rounded-md bg-white/5" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 11. Vocabulary Level Skeleton -->
  <div
    v-else-if="props.layout === 'vocabulary-level'"
    class="min-h-dvh space-y-8 py-8"
  >
    <!-- Hero section -->
    <div
      class="relative mbe-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm tablet:p-12"
    >
      <div class="flex flex-col items-center text-center">
        <div class="mbe-4 flex flex-wrap items-center justify-center gap-3">
          <Skeleton class="h-7 w-28 rounded-full bg-white/10" />
        </div>
        <Skeleton
          class="mx-auto -my-2 mbe-2 h-10 w-3/4 max-w-2xl rounded-md bg-white/15 tablet:h-12 laptop:h-14"
        />
        <Skeleton class="mx-auto h-6 w-full max-w-xl rounded-md bg-white/5 tablet:w-2/3" />
        <div class="mbs-8 flex flex-wrap justify-center gap-8">
          <div class="flex items-center gap-2">
            <Skeleton class="size-5 shrink-0 rounded-full bg-white/10 tablet:size-6" />
            <Skeleton class="h-5 w-24 rounded-md bg-white/10 tablet:h-6 tablet:w-28" />
          </div>
          <div class="flex items-center gap-2">
            <Skeleton class="size-5 shrink-0 rounded-full bg-white/10 tablet:size-6" />
            <Skeleton class="h-5 w-20 rounded-md bg-white/10 tablet:h-6 tablet:w-24" />
          </div>
        </div>
      </div>
    </div>

    <!-- Sections with headers and cards -->
    <div class="grid gap-12">
      <div
        v-for="id in ['sec1', 'sec2']"
        :key="id"
        class="space-y-6"
      >
        <div
          class="flex flex-col items-start gap-4 rounded-2xl bg-white/10 p-6 md:flex-row md:items-center md:justify-between"
        >
          <Skeleton class="h-7 w-48 rounded-md bg-white/15" />
          <Skeleton class="h-6 w-24 rounded-full bg-white/20" />
        </div>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="cardId in ['c1', 'c2', 'c3']"
            :key="cardId"
            class="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur-sm"
          >
            <Skeleton class="mb-2 h-6 w-3/4 rounded-md bg-white/10" />
            <div class="flex items-center gap-2 text-sm">
              <Skeleton class="size-3.5 rounded-full bg-white/10" />
              <Skeleton class="h-4 w-28 rounded-md bg-white/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 12. Vocabulary Detail Skeleton -->
  <div
    v-else-if="props.layout === 'vocabulary-detail'"
    class="relative min-h-dvh space-y-8 py-8"
  >
    <div
      class="relative mbe-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm tablet:p-12"
    >
      <div class="flex flex-col items-center text-center">
        <Skeleton class="mbe-4 h-7 w-24 rounded-full bg-white/10" />
        <Skeleton class="mbe-4 h-10 w-3/4 rounded-md bg-white/15 md:h-12" />
        <Skeleton class="h-6 w-full rounded-md bg-white/5 md:w-2/3" />
      </div>
    </div>

    <!-- Vocabulary Table Skeleton -->
    <div class="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur-sm">
      <div class="overflow-x-auto p-4">
        <div class="flex border-b border-white/10 pb-4">
          <Skeleton class="h-5 flex-1 rounded-md bg-white/10" />
          <Skeleton class="ml-4 h-5 flex-1 rounded-md bg-white/10" />
          <Skeleton class="ml-4 h-5 flex-1 rounded-md bg-white/10" />
        </div>
        <div
          v-for="r in ['r1', 'r2', 'r3', 'r4', 'r5', 'r6']"
          :key="r"
          class="flex border-b border-white/5 py-4"
        >
          <Skeleton class="h-6 flex-1 rounded-md bg-white/10" />
          <Skeleton class="ml-4 h-6 flex-1 rounded-md bg-white/10" />
          <Skeleton class="ml-4 h-6 flex-1 rounded-md bg-white/5" />
        </div>
      </div>
    </div>
  </div>

  <!-- 13. Family Tree Skeleton (Tree + Vocabulary Table) -->
  <div
    v-else-if="props.layout === 'family-tree'"
    class="min-h-dvh space-y-8 py-8"
  >
    <div
      class="relative mbe-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm tablet:p-12"
    >
      <div class="flex flex-col items-center text-center">
        <Skeleton class="mbe-4 h-7 w-24 rounded-full bg-white/10" />
        <Skeleton class="mbe-4 h-10 w-3/4 rounded-md bg-white/15 md:h-12" />
      </div>
    </div>

    <!-- Family Tree Nodes -->
    <div
      class="flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
    >
      <!-- Generation 1 -->
      <div class="flex flex-col items-center gap-3">
        <Skeleton class="h-4 w-28 rounded-md bg-white/10" />
        <div class="flex items-center gap-2">
          <Skeleton
            class="h-24 w-28 rounded-xl border-2 border-white/10 bg-white/5 @md:h-28 @md:w-36"
          />
          <Skeleton class="size-4 rounded-full bg-white/10" />
          <Skeleton
            class="h-24 w-28 rounded-xl border-2 border-white/10 bg-white/5 @md:h-28 @md:w-36"
          />
        </div>
      </div>
      <div class="h-10 w-px bg-white/10" />

      <!-- Generation 2 -->
      <div class="flex flex-col items-center gap-3">
        <Skeleton class="h-4 w-24 rounded-md bg-white/10" />
        <div class="flex items-center gap-2">
          <Skeleton
            class="h-24 w-28 rounded-xl border-2 border-white/10 bg-white/5 @md:h-28 @md:w-36"
          />
          <Skeleton class="size-4 rounded-full bg-white/10" />
          <Skeleton
            class="h-24 w-28 rounded-xl border-2 border-white/10 bg-white/5 @md:h-28 @md:w-36"
          />
        </div>
      </div>
      <div class="h-10 w-px bg-white/10" />

      <!-- Generation 3 -->
      <div class="flex flex-col items-center gap-3">
        <Skeleton class="h-4 w-24 rounded-md bg-white/10" />
        <div class="flex items-center gap-2">
          <Skeleton
            class="h-24 w-28 rounded-xl border-2 border-white/20 bg-white/10 @md:h-28 @md:w-36"
          />
          <Skeleton
            class="h-24 w-28 rounded-xl border-2 border-amber-400/30 bg-amber-500/10 @md:h-28 @md:w-36"
          />
          <Skeleton
            class="h-24 w-28 rounded-xl border-2 border-white/10 bg-white/5 @md:h-28 @md:w-36"
          />
        </div>
      </div>
      <div class="h-10 w-px bg-white/10" />

      <!-- Generation 4 -->
      <div class="flex flex-col items-center gap-3">
        <Skeleton class="h-4 w-24 rounded-md bg-white/10" />
        <div class="flex items-center gap-2">
          <Skeleton
            class="h-24 w-28 rounded-xl border-2 border-white/10 bg-white/5 @md:h-28 @md:w-36"
          />
          <Skeleton
            class="h-24 w-28 rounded-xl border-2 border-white/10 bg-white/5 @md:h-28 @md:w-36"
          />
        </div>
      </div>
    </div>

    <!-- Vocabulary Table Below Family Tree -->
    <div class="mt-8 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur-sm">
      <div class="overflow-x-auto p-4">
        <div class="flex border-b border-white/10 pb-4">
          <Skeleton class="h-5 flex-1 rounded-md bg-white/10" />
          <Skeleton class="ml-4 h-5 flex-1 rounded-md bg-white/10" />
          <Skeleton class="ml-4 h-5 flex-1 rounded-md bg-white/10" />
        </div>
        <div
          v-for="r in ['r1', 'r2', 'r3', 'r4', 'r5']"
          :key="r"
          class="flex border-b border-white/5 py-4"
        >
          <Skeleton class="h-6 flex-1 rounded-md bg-white/10" />
          <Skeleton class="ml-4 h-6 flex-1 rounded-md bg-white/10" />
          <Skeleton class="ml-4 h-6 flex-1 rounded-md bg-white/5" />
        </div>
      </div>
    </div>
  </div>

  <!-- 14. Prüfung Overview Skeleton -->
  <div
    v-else-if="props.layout === 'pruefung-overview'"
    class="min-h-dvh space-y-12 py-8"
  >
    <header class="mbe-12 text-center">
      <div class="mbe-4 flex items-center justify-center gap-3 tablet:gap-4">
        <Skeleton
          class="size-12 shrink-0 rounded-full border-[3px] border-white/10 bg-white/5 tablet:size-14"
        />
        <Skeleton class="h-9 w-64 rounded-md bg-white/15 tablet:h-12 tablet:w-80" />
      </div>
      <div class="mx-auto mbe-6 h-1 w-24 overflow-hidden rounded-full bg-white/10" />
      <div class="flex justify-center">
        <Skeleton
          class="h-10 w-full max-w-[320px] rounded-full border-2 border-white/10 bg-white/5 tablet:max-w-140"
        />
      </div>
    </header>

    <div class="grid grid-cols-1 gap-8 laptop:grid-cols-2">
      <div
        v-for="id in ['po1', 'po2']"
        :key="id"
        class="h-full"
      >
        <div
          class="relative z-1 flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl"
        >
          <div class="aspect-video w-full overflow-hidden rounded-2xl">
            <Skeleton class="h-full w-full rounded-2xl bg-white/5" />
          </div>
          <div class="flex flex-1 flex-col px-2 pt-5 pb-2">
            <div class="mbe-3 flex items-center gap-2">
              <Skeleton class="h-6 w-28 rounded-full bg-white/10" />
              <Skeleton class="h-4 w-24 rounded-full bg-white/5" />
            </div>
            <Skeleton class="mb-2 h-7 w-4/5 rounded-md bg-white/10 tablet:h-8" />
            <Skeleton class="mbe-1 h-4 w-full rounded-md bg-white/5" />
            <Skeleton class="mbe-4 h-4 w-2/3 rounded-md bg-white/5" />
            <div class="mbs-auto flex gap-8 border-bs border-white/10 pbs-4">
              <div class="flex flex-col gap-1">
                <Skeleton class="h-7 w-8 rounded-md bg-white/10" />
                <Skeleton class="h-3 w-12 rounded-md bg-white/5" />
              </div>
              <div class="flex flex-col gap-1">
                <Skeleton class="h-7 w-12 rounded-md bg-white/10" />
                <Skeleton class="h-3 w-14 rounded-md bg-white/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 15. Prüfung Level Skeleton -->
  <div
    v-else-if="props.layout === 'pruefung-level'"
    class="min-h-dvh space-y-12 py-8"
  >
    <div
      class="relative mbe-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm tablet:p-12"
    >
      <div class="flex flex-col items-center text-center">
        <!-- Level Category Badge -->
        <Skeleton class="mbe-4 h-10 w-20 rounded-full bg-white/15 tablet:h-11 tablet:w-24" />
        <!-- Title -->
        <Skeleton
          class="mx-auto -my-2 mbe-2 h-9 w-3/4 max-w-xl rounded-md bg-white/15 tablet:h-11 laptop:h-13"
        />
        <!-- Description -->
        <Skeleton class="mx-auto h-6 w-full max-w-2xl rounded-md bg-white/5 tablet:h-7" />
        <!-- Stats -->
        <div class="mbs-8 flex flex-wrap justify-center gap-8">
          <div class="flex items-center gap-2">
            <Skeleton class="size-5 shrink-0 rounded-full bg-white/10 tablet:size-6" />
            <Skeleton class="h-5 w-28 rounded-md bg-white/10 tablet:h-6 tablet:w-32" />
          </div>
          <div class="flex items-center gap-2">
            <Skeleton class="size-5 shrink-0 rounded-full bg-white/10 tablet:size-6" />
            <Skeleton class="h-5 w-60 rounded-md bg-white/10 tablet:h-6 tablet:w-68" />
          </div>
        </div>
      </div>
    </div>

    <!-- Modelltests Starten CTA Button -->
    <div class="mb-12 flex justify-center">
      <Skeleton
        class="h-15 w-72 rounded-full border border-white/10 bg-white/5 tablet:h-16 tablet:w-80"
      />
    </div>

    <!-- Prüfungsstruktur Section -->
    <section class="mb-12">
      <div class="mbe-8 flex items-center gap-3 tablet:gap-4">
        <Skeleton
          class="size-10 shrink-0 rounded-full border-[3px] border-white/10 bg-white/5 tablet:size-12"
        />
        <Skeleton class="h-7 w-48 rounded-md bg-white/10 tablet:h-8 tablet:w-56" />
      </div>
      <div class="grid gap-6">
        <div
          v-for="mod in ['Lesen', 'Hören', 'Schreiben', 'Sprechen']"
          :key="mod"
          class="overflow-hidden rounded-2xl border border-white/5 bg-card"
        >
          <!-- Section Card Header -->
          <div
            class="flex flex-col items-start gap-4 bg-white/10 p-5 md:flex-row md:items-center md:justify-between"
          >
            <Skeleton class="h-7 w-28 rounded-md bg-white/15" />
            <div class="flex gap-4">
              <Skeleton class="h-5 w-20 rounded-md bg-white/10" />
              <Skeleton class="h-5 w-20 rounded-md bg-white/10" />
            </div>
          </div>
          <!-- Section Card Body -->
          <div class="p-6">
            <Skeleton class="mb-4 h-5 w-3/4 rounded-md bg-white/5" />
            <!-- Table Skeleton -->
            <div class="mb-4 w-full">
              <div class="flex border-b border-white/10 p-2 md:p-3">
                <Skeleton class="h-4 w-12 rounded-md bg-white/10" />
                <Skeleton class="ml-8 h-4 w-28 rounded-md bg-white/10" />
                <Skeleton class="ml-auto h-4 w-12 rounded-md bg-white/10" />
                <Skeleton class="ml-8 h-4 w-16 rounded-md bg-white/10" />
              </div>
              <div
                v-for="r in ['r1', 'r2', 'r3', 'r4']"
                :key="r"
                class="flex border-b border-white/5 p-2 md:p-3"
              >
                <Skeleton class="h-4 w-14 rounded-md bg-white/5" />
                <Skeleton class="ml-8 h-4 w-36 rounded-md bg-white/5" />
                <Skeleton class="ml-auto h-4 w-8 rounded-md bg-white/5" />
                <Skeleton class="ml-8 h-4 w-12 rounded-md bg-white/5" />
              </div>
            </div>
            <!-- Tips Box Skeleton -->
            <div class="mt-6 flex flex-col gap-6">
              <div class="rounded-xl border border-white/10 bg-white/5 p-4">
                <div class="mb-3 flex items-center gap-2">
                  <Skeleton class="size-4 rounded-full bg-white/10" />
                  <Skeleton class="h-4 w-16 rounded-md bg-white/10" />
                </div>
                <div class="space-y-2 pl-5">
                  <Skeleton class="h-4 w-full rounded-md bg-white/5" />
                  <Skeleton class="h-4 w-4/5 rounded-md bg-white/5" />
                </div>
              </div>
              <Skeleton
                v-if="mod === 'Schreiben' || mod === 'Sprechen'"
                class="h-12 w-52 rounded-full bg-white/10 md:self-start"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- 16. Prüfung Modelltests Skeleton -->
  <div
    v-else-if="props.layout === 'pruefung-modelltests'"
    class="min-h-dvh space-y-8 py-8"
  >
    <div
      class="relative mbe-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm tablet:p-12"
    >
      <div class="flex flex-col items-center text-center">
        <Skeleton class="mbe-4 h-10 w-44 rounded-full bg-white/15 tablet:h-11 tablet:w-48" />
        <Skeleton
          class="mx-auto -my-2 mbe-2 h-9 w-3/4 max-w-lg rounded-md bg-white/15 tablet:h-11 laptop:h-13"
        />
        <Skeleton class="mx-auto h-6 w-full max-w-xl rounded-md bg-white/5 tablet:h-7" />
        <div class="mbs-8 flex flex-wrap justify-center gap-8">
          <div class="flex items-center gap-2">
            <Skeleton class="size-5 shrink-0 rounded-full bg-white/10 tablet:size-6" />
            <Skeleton class="h-5 w-16 rounded-md bg-white/10 tablet:h-6 tablet:w-20" />
          </div>
          <div class="flex items-center gap-2">
            <Skeleton class="size-5 shrink-0 rounded-full bg-white/10 tablet:size-6" />
            <Skeleton class="h-5 w-16 rounded-md bg-white/10 tablet:h-6 tablet:w-20" />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8 mb-12 flex justify-center">
      <Skeleton class="h-10 w-48 rounded-full border border-white/20 bg-white/5" />
    </div>

    <div class="grid gap-12">
      <section
        v-for="skill in ['Lesen', 'Hören', 'Schreiben', 'Sprechen']"
        :key="skill"
      >
        <div class="mbe-6 flex items-center gap-3 tablet:gap-4">
          <Skeleton
            class="size-10 shrink-0 rounded-full border-[3px] border-white/10 bg-white/5 tablet:size-12"
          />
          <Skeleton class="h-7 w-32 rounded-md bg-white/10" />
        </div>
        <div class="grid grid-cols-1 gap-6 mobile:grid-cols-2 mobile:gap-8 laptop:grid-cols-3">
          <div
            v-for="id in ['mt1', 'mt2', 'mt3']"
            :key="id"
            class="h-full"
          >
            <div
              class="relative z-1 flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl"
            >
              <div class="aspect-video w-full overflow-hidden rounded-2xl">
                <Skeleton class="h-full w-full rounded-2xl bg-white/5" />
              </div>
              <div class="flex flex-1 flex-col px-2 pt-5 pb-2">
                <Skeleton class="mb-2 h-7 w-3/4 rounded-md bg-white/10" />
                <Skeleton class="mbe-1 h-4 w-full rounded-md bg-white/5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  <!-- 17. Prüfung Module Study Skeleton (Struktur-Checkliste + Email Frame + Topics) -->
  <div
    v-else-if="props.layout === 'pruefung-module-study'"
    class="relative min-h-dvh space-y-12 py-8"
  >
    <!-- Hero section -->
    <div
      class="relative mbe-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm tablet:p-12"
    >
      <div class="flex flex-col items-center text-center">
        <Skeleton class="mbe-4 h-10 w-24 rounded-full bg-white/15 tablet:h-11 tablet:w-28" />
        <Skeleton
          class="mx-auto -my-2 mbe-2 h-9 w-3/4 max-w-lg rounded-md bg-white/15 tablet:h-11 laptop:h-13"
        />
        <Skeleton class="mx-auto h-6 w-full max-w-2xl rounded-md bg-white/5 tablet:h-7" />
        <div class="mbs-8 flex flex-wrap justify-center gap-8">
          <div class="flex items-center gap-2">
            <Skeleton class="size-5 shrink-0 rounded-full bg-white/10 tablet:size-6" />
            <Skeleton class="h-5 w-28 rounded-md bg-white/10 tablet:h-6 tablet:w-32" />
          </div>
          <div class="flex items-center gap-2">
            <Skeleton class="size-5 shrink-0 rounded-full bg-white/10 tablet:size-6" />
            <Skeleton class="h-5 w-20 rounded-md bg-white/10 tablet:h-6 tablet:w-24" />
          </div>
        </div>
      </div>
    </div>

    <!-- Parts List -->
    <div class="space-y-16">
      <section
        v-for="part in ['Part 1', 'Part 2']"
        :key="part"
        class="relative space-y-8"
      >
        <!-- Part Header -->
        <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div class="space-y-2">
            <div class="flex items-center gap-3">
              <Skeleton class="h-6 w-16 rounded-lg bg-white/10" />
              <Skeleton class="h-8 w-48 rounded-md bg-white/15" />
            </div>
            <Skeleton class="h-4 w-3/4 rounded-md bg-white/5" />
          </div>
          <Skeleton class="h-9 w-24 rounded-full bg-white/10" />
        </div>

        <!-- Category Separator -->
        <div class="space-y-6">
          <div class="flex items-center gap-6">
            <div class="h-0.75 flex-1 rounded-full bg-white/10" />
            <Skeleton class="h-4 w-32 rounded-md bg-white/10" />
            <div class="h-0.75 flex-1 rounded-full bg-white/10" />
          </div>

          <!-- Checklist Box -->
          <div
            class="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <div class="border-b border-white/10 bg-white/5 px-6 py-3">
              <Skeleton class="h-5 w-44 rounded-md bg-white/10" />
            </div>
            <div class="divide-y divide-white/10">
              <div
                v-for="item in ['i1', 'i2', 'i3']"
                :key="item"
                class="flex items-center justify-between p-4"
              >
                <div class="flex items-center gap-3">
                  <Skeleton class="size-6 shrink-0 rounded-full bg-white/10" />
                  <Skeleton class="h-5 w-40 rounded-md bg-white/10" />
                </div>
                <Skeleton class="size-4 rounded-md bg-white/5" />
              </div>
            </div>
          </div>

          <!-- Email Visual Frame Skeleton -->
          <div
            class="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl"
          >
            <!-- Browser Header with 3 dots -->
            <div
              class="flex items-center gap-3 border-b border-white/10 bg-white/5 px-3 py-2.5 mobile:px-4 mobile:py-3"
            >
              <div class="flex shrink-0 gap-1.5">
                <Skeleton class="size-3 rounded-full bg-white/20" />
                <Skeleton class="size-3 rounded-full bg-white/20" />
                <Skeleton class="size-3 rounded-full bg-white/20" />
              </div>
              <div class="flex min-w-0 flex-1 justify-center">
                <Skeleton class="h-6 w-32 max-w-full rounded-lg bg-white/10 mobile:w-48" />
              </div>
            </div>
            <!-- Email Fields Header -->
            <div
              class="space-y-3 border-b border-white/10 bg-white/2 px-4 py-2.5 mobile:px-6 mobile:py-3"
            >
              <div class="flex items-center gap-2.5 mobile:gap-3">
                <Skeleton class="h-4 w-8 shrink-0 rounded-md bg-white/10" />
                <Skeleton class="h-6 w-24 rounded-full bg-white/10 mobile:w-32" />
              </div>
              <div class="flex items-center gap-2.5 mobile:gap-3">
                <Skeleton class="h-4 w-14 shrink-0 rounded-md bg-white/10" />
                <Skeleton
                  class="h-5 w-44 max-w-[calc(100%-4.5rem)] rounded-md bg-white/10 mobile:w-64"
                />
              </div>
            </div>
            <!-- Email Body Blocks -->
            <div class="space-y-4 p-4 mobile:p-6 tablet:p-8">
              <div
                v-for="sec in ['s1', 's2', 's3', 's4']"
                :key="sec"
                class="space-y-2 rounded-xl border border-white/10 bg-white/5 p-3.5 mobile:p-4"
              >
                <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <Skeleton class="h-3.5 w-24 rounded-md bg-white/10" />
                  <Skeleton class="h-3.5 w-32 rounded-md bg-white/5" />
                </div>
                <Skeleton class="h-5 w-full rounded-md bg-white/5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Topics Integration Section -->
    <section class="border-t border-white/10 pt-12">
      <div class="mb-10 space-y-2">
        <Skeleton class="h-8 w-64 rounded-md bg-white/15" />
        <Skeleton class="h-5 w-full max-w-2xl rounded-md bg-white/5" />
      </div>
      <div class="grid grid-cols-1 gap-6 mobile:grid-cols-2 mobile:gap-8 laptop:grid-cols-3">
        <div
          v-for="cid in ['tc1', 'tc2', 'tc3']"
          :key="cid"
          class="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
        >
          <div class="mbe-4 flex items-start justify-between">
            <div class="w-full space-y-2">
              <Skeleton class="h-5 w-20 rounded-full bg-white/10" />
              <Skeleton class="h-5 w-3/4 rounded-md bg-white/10" />
            </div>
          </div>
          <div class="relative mb-4 flex gap-1 rounded-full bg-black/20 p-1">
            <Skeleton class="h-7 flex-1 rounded-full bg-white/10" />
            <Skeleton class="h-7 flex-1 rounded-full bg-white/5" />
          </div>
          <div class="min-h-30 space-y-3">
            <div class="flex gap-3">
              <Skeleton class="mt-1 size-1.5 shrink-0 rounded-full bg-white/10" />
              <Skeleton class="h-4 w-full rounded-md bg-white/5" />
            </div>
            <div class="flex gap-3">
              <Skeleton class="mt-1 size-1.5 shrink-0 rounded-full bg-white/10" />
              <Skeleton class="h-4 w-5/6 rounded-md bg-white/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- 18. Quiz Skeleton (Matches QuizStart.vue 1:1) -->
  <div
    v-else-if="props.layout === 'quiz'"
    class="min-h-dvh space-y-8 py-4"
  >
    <article
      class="relative z-10 flex w-full flex-col rounded-2xl border border-white/10 bg-card px-4 py-6 shadow-2xl backdrop-blur-xl"
    >
      <header
        class="mb-4 flex items-center justify-between border-b border-white/10 pb-2 text-white"
      >
        <Skeleton class="h-5 w-48 rounded-md bg-white/15" />
        <Skeleton class="h-4 w-20 rounded-md bg-white/10" />
      </header>

      <!-- QuizStart Initial View -->
      <section class="mx-auto w-full max-w-lg p-8 text-center">
        <!-- Exam badge -->
        <Skeleton class="mx-auto mbe-6 h-8 w-48 rounded-full border border-white/20 bg-white/10" />

        <!-- Title -->
        <Skeleton class="mx-auto mbe-3 h-9 w-3/4 max-w-md rounded-md bg-white/15" />

        <!-- Description -->
        <Skeleton class="mx-auto mbe-8 h-5 w-full max-w-lg rounded-md bg-white/5" />

        <!-- Exam info cards -->
        <div class="mbe-8 grid grid-cols-2 gap-4">
          <div class="h-full space-y-2 rounded-xl border border-white/10 bg-white/5 p-4 shadow-sm">
            <Skeleton class="mx-auto h-8 w-12 rounded-md bg-white/15" />
            <Skeleton class="mx-auto h-3 w-20 rounded-md bg-white/5" />
          </div>
          <div class="h-full space-y-2 rounded-xl border border-white/10 bg-white/5 p-4 shadow-sm">
            <Skeleton class="mx-auto h-8 w-12 rounded-md bg-white/15" />
            <Skeleton class="mx-auto h-3 w-24 rounded-md bg-white/5" />
          </div>
        </div>

        <!-- Start Button -->
        <Skeleton class="h-14 w-full rounded-full bg-white/15 shadow-xl" />
      </section>
    </article>
  </div>

  <!-- 19. Table Skeleton -->
  <div v-else-if="props.layout === 'table'">
    <div
      v-if="props.noWrapper"
      class="overflow-x-auto"
    >
      <div class="w-full border-collapse">
        <div class="flex border-b border-white/10 p-2 @md:px-4 @md:py-3">
          <Skeleton
            v-for="(id, i) in COL_IDS.slice(0, props.columns)"
            :key="id"
            class="h-4 flex-1 rounded-md bg-white/10"
            :style="{ marginLeft: i === 0 ? 0 : '1rem' }"
          />
        </div>
        <div
          v-for="rowId in ROW_IDS.slice(0, props.rows)"
          :key="rowId"
          class="flex border-b border-white/5 px-2 py-3 @md:px-4 @md:py-4"
        >
          <Skeleton
            v-for="(colId, i) in COL_IDS.slice(0, props.columns)"
            :key="colId"
            class="h-6 flex-1 rounded-md bg-white/5"
            :style="{ marginLeft: i === 0 ? 0 : '1rem' }"
          />
        </div>
      </div>
    </div>
    <div
      v-else
      class="@container relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm"
    >
      <div class="overflow-x-auto">
        <div class="w-full border-collapse">
          <div class="flex border-b border-white/10 p-2 @md:px-4 @md:py-3">
            <Skeleton
              v-for="(id, i) in COL_IDS.slice(0, props.columns)"
              :key="id"
              class="h-4 flex-1 rounded-md bg-white/10"
              :style="{ marginLeft: i === 0 ? 0 : '1rem' }"
            />
          </div>
          <div
            v-for="rowId in ROW_IDS.slice(0, props.rows)"
            :key="rowId"
            class="flex border-b border-white/5 px-2 py-3 @md:px-4 @md:py-4"
          >
            <Skeleton
              v-for="(colId, i) in COL_IDS.slice(0, props.columns)"
              :key="colId"
              class="h-6 flex-1 rounded-md bg-white/5"
              :style="{ marginLeft: i === 0 ? 0 : '1rem' }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 20. Section Card Skeleton -->
  <div
    v-else-if="props.layout === 'section-card'"
    class="mbe-16"
  >
    <div class="mbe-8 flex items-center gap-3 tablet:gap-4">
      <Skeleton
        class="size-10 shrink-0 rounded-full border-[3px] border-white/10 bg-white/5 tablet:size-12"
      />
      <Skeleton class="h-8 w-52 rounded-md bg-white/10" />
    </div>
    <div class="grid grid-cols-1 gap-6 mobile:grid-cols-2 mobile:gap-8 laptop:grid-cols-3">
      <article
        v-for="id in ['sc1', 'sc2', 'sc3']"
        :key="id"
        class="h-full"
      >
        <div
          class="relative z-1 flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl"
        >
          <div class="aspect-video w-full overflow-hidden rounded-2xl">
            <Skeleton class="h-full w-full rounded-2xl bg-white/5" />
          </div>
          <div class="flex flex-1 flex-col px-2 pt-5 pb-2">
            <div class="mbe-3 flex items-center gap-2">
              <Skeleton class="h-6 w-16 rounded-full bg-white/10" />
              <Skeleton class="h-4 w-20 rounded-full bg-white/5" />
            </div>
            <Skeleton class="mb-2 h-7 w-3/4 rounded-md bg-white/10" />
            <Skeleton class="mbe-1 h-4 w-full rounded-md bg-white/5" />
            <Skeleton class="mbe-4 h-4 w-2/3 rounded-md bg-white/5" />
          </div>
        </div>
      </article>
    </div>
  </div>

  <!-- 21. Auth Skeleton (Matches AuthCard.vue + SignInForm.vue 1:1) -->
  <div
    v-else-if="props.layout === 'auth'"
    class="relative flex min-h-dvh items-center justify-center px-4 py-6 md:px-6 md:py-0"
  >
    <div
      class="absolute top-6 left-6 z-50 flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 backdrop-blur-md"
    >
      <Skeleton class="size-4 rounded-full bg-white/10" />
    </div>

    <div
      class="relative flex w-full max-w-md flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md tablet:max-w-2xl tablet:flex-row laptop:max-w-4xl desktop:max-w-5xl"
    >
      <!-- Panel 1: Left Navigation Sidebar (Tablet & Desktop) -->
      <div
        class="hidden w-32 shrink-0 flex-col items-center justify-between border-r border-white/10 bg-white/5 py-8 tablet:flex laptop:w-36"
      >
        <Skeleton class="size-12 rounded-full bg-white/10" />
        <div class="w-full space-y-4 px-4">
          <Skeleton class="h-16 w-full rounded-xl bg-white/10" />
          <Skeleton class="h-16 w-full rounded-xl bg-white/5" />
        </div>
        <Skeleton class="h-3 w-10 rounded-md bg-white/5" />
      </div>

      <!-- Panel 2: Showcase Banner (Laptop & Desktop) -->
      <div
        class="hidden w-75 shrink-0 flex-col border-r border-white/10 bg-white/5 p-8 laptop:flex desktop:w-85"
      >
        <Skeleton class="h-4 w-24 rounded-md bg-white/10" />
        <Skeleton class="mt-4 h-8 w-3/4 rounded-md bg-white/15" />
        <Skeleton class="mt-2 h-4 w-full rounded-md bg-white/5" />
        <Skeleton class="mt-2 h-4 w-5/6 rounded-md bg-white/5" />
        <div class="mx-auto mt-auto size-36 rounded-2xl bg-white/5" />
      </div>

      <!-- Panel 3: Active Form Area -->
      <div
        class="flex flex-1 flex-col justify-start px-6 pt-5 pb-9 md:px-8 md:pt-6 md:pb-10 lg:px-10"
      >
        <!-- Form Header -->
        <Skeleton class="mb-2 h-7 w-28 rounded-md bg-white/15" />
        <Skeleton class="mb-6 h-4 w-48 rounded-md bg-white/5" />

        <!-- Form Inputs -->
        <div class="space-y-4">
          <!-- Email Input -->
          <div class="space-y-1.5">
            <Skeleton class="h-3.5 w-24 rounded-md bg-white/10" />
            <Skeleton class="h-11 w-full rounded-xl bg-white/5" />
          </div>

          <!-- Password Input -->
          <div class="space-y-1.5">
            <div class="flex items-center justify-between">
              <Skeleton class="h-3.5 w-16 rounded-md bg-white/10" />
              <Skeleton class="h-3.5 w-16 rounded-md bg-white/5" />
            </div>
            <Skeleton class="h-11 w-full rounded-xl bg-white/5" />
          </div>

          <!-- Remember me & Demo -->
          <div class="flex items-center justify-between pt-1">
            <div class="flex items-center gap-2">
              <Skeleton class="size-4 rounded-sm bg-white/10" />
              <Skeleton class="h-3.5 w-28 rounded-md bg-white/5" />
            </div>
            <Skeleton class="h-3.5 w-20 rounded-md bg-white/5" />
          </div>

          <!-- Submit Button -->
          <Skeleton class="mt-2 h-11 w-full rounded-xl bg-white/15" />

          <!-- Social Divider -->
          <div class="my-2 flex items-center justify-center">
            <Skeleton class="h-3 w-28 rounded-md bg-white/10" />
          </div>

          <!-- Social Buttons -->
          <div class="grid grid-cols-2 gap-3">
            <Skeleton class="h-11 w-full rounded-xl bg-white/5" />
            <Skeleton class="h-11 w-full rounded-xl bg-white/5" />
          </div>

          <!-- Terms disclaimer -->
          <Skeleton class="mx-auto mt-2 h-3 w-3/4 max-w-sm rounded-md bg-white/5" />
        </div>
      </div>
    </div>
  </div>

  <!-- 22. Default Pending Skeleton -->
  <main
    v-else
    class="min-h-dvh py-8"
  >
    <header class="mbe-12 text-center">
      <div class="mbe-4 flex items-center justify-center gap-3 tablet:gap-4">
        <Skeleton
          class="size-12 shrink-0 rounded-full border-[3px] border-white/10 bg-white/5 tablet:size-14"
        />
        <Skeleton class="h-9 w-64 rounded-md bg-white/15 tablet:h-12 tablet:w-80" />
      </div>
      <div class="mx-auto mbe-6 h-1 w-24 overflow-hidden rounded-full bg-white/10" />
    </header>
    <section class="py-4">
      <div class="grid grid-cols-1 gap-6 py-4 mobile:grid-cols-2 mobile:gap-8 laptop:grid-cols-3">
        <div
          v-for="id in ['s1', 's2', 's3', 's4', 's5', 's6']"
          :key="id"
          class="h-full"
        >
          <div
            class="relative z-1 flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl"
          >
            <div class="aspect-video w-full overflow-hidden rounded-2xl">
              <Skeleton class="h-full w-full rounded-2xl bg-white/5" />
            </div>
            <div class="flex flex-1 flex-col px-2 pt-5 pb-2">
              <div class="mbe-3 flex items-center gap-2">
                <Skeleton class="h-6 w-16 rounded-full bg-white/10" />
                <Skeleton class="h-4 w-20 rounded-full bg-white/5" />
              </div>
              <Skeleton class="mb-2 h-7 w-3/4 rounded-md bg-white/10" />
              <Skeleton class="mbe-4 h-4 w-full rounded-md bg-white/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
