<script setup lang="ts">
defineProps<{ day?: number | string }>()
</script>

<template>
  <div class="slidev-layout section aoc-section">
    <div class="day" v-if="day !== undefined">--- Day {{ day }} ---</div>
    <slot />
  </div>
</template>

<style>
.aoc-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.aoc-section .day {
  color: var(--aoc-star);
  text-shadow: 0 0 5px var(--aoc-star);
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}
.aoc-section h1 {
  font-size: 2.6rem;
}
.aoc-section p {
  color: var(--aoc-dim);
}
</style>
