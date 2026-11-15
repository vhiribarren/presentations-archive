<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $page, $nav } = useSlideContext()

// Section number = how many `layout: section` slides come at or before this one.
const number = computed(() => {
  const count = $nav.value.slides
    .filter(route => route.no <= $page.value && route.meta.slide.frontmatter.layout === 'section')
    .length
  return String(count).padStart(2, '0')
})
</script>

<template>
  <div class="slidev-layout section-divider w-full h-full">
    <div class="number">{{ number }}</div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style>
.section-divider {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;
  color: #fff;
  background: linear-gradient(135deg, #1b1512 0%, #3d1a10 55%, #8a2c17 100%);
}
.section-divider .number {
  font-size: 5rem;
  font-weight: 700;
  line-height: 1;
  color: #f4a261;
  opacity: 0.9;
}
.section-divider h1 {
  color: #fff;
  font-size: 2.6rem;
  margin: 0.5rem 0 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.25);
}
.section-divider p,
.section-divider li {
  color: rgba(255, 255, 255, 0.8);
}
.section-divider.cols-2 ul {
  columns: 2;
  column-gap: 3rem;
}
/* Must beat Slidev's `.slidev-layout :not(pre) > code`, whose light-mode background is near white */
.slidev-layout.section-divider :not(pre) > code {
  color: #fff;
  background: rgba(255, 255, 255, 0.12);
}
</style>
