<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $slidev, $page, $nav, $frontmatter } = useSlideContext()

const DATE = 'December 2026'

// Cover and section slides have a dark background: only the page number is shown, in white.
const hideFooter = computed(() => ['cover', 'section'].includes($frontmatter.layout))

// Current section = the last `section:` frontmatter declared at or before this slide.
// Hidden on cover/center slides, and when the slide title already says it.
const section = computed(() => {
  if (['cover', 'center', 'section'].includes($frontmatter.layout))
    return null
  let current = null
  let title = null
  for (const route of $nav.value.slides) {
    if (route.no > $page.value)
      break
    const fm = route.meta.slide.frontmatter
    if ('section' in fm)
      current = fm.section || null
    title = route.meta.slide.title
  }
  return current === title ? null : current
})
</script>

<template>
  <div class="slide-footer" :class="{ dark: hideFooter }">
    <span class="section">{{ section }}</span>
    <span>
      <span v-if="!hideFooter" class="meta">{{ $slidev.configs.author }} · {{ $slidev.configs.title }} · {{ DATE }}</span>
      <span class="page">{{ $page }}</span>
    </span>
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
}
.slide-footer .section {
  text-transform: uppercase;
  color: var(--slidev-theme-primary);
  opacity: 0.7;
}
.slide-footer .meta {
  opacity: 0.4;
}
.slide-footer .page {
  margin-left: 1rem;
  font-weight: bold;
  opacity: 0.6;
}
.slide-footer.dark {
  color: #fff;
}
</style>
