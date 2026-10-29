<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $slidev, $frontmatter } = useSlideContext()

const DATE = 'November 2026'

const hideFooter = computed(() => ['cover', 'section', 'end'].includes($frontmatter.layout))
</script>

<template>
  <div v-if="!hideFooter" class="slide-footer">
    <span class="stars">*</span>
    <span class="meta">{{ $slidev.configs.author }} · {{ $slidev.configs.title }} · {{ DATE }}</span>
  </div>
</template>

<style>
.slide-footer {
  position: absolute;
  left: 1.5rem;
  right: 1.5rem;
  bottom: 0.6rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  letter-spacing: 0.05em;
  pointer-events: none;
  font-family: 'Source Code Pro', monospace;
}
.slide-footer .stars {
  color: var(--aoc-star);
  text-shadow: 0 0 5px var(--aoc-star);
}
.slide-footer .meta {
  color: var(--aoc-dim);
  opacity: 0.6;
}
</style>
