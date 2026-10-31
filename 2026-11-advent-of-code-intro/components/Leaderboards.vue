<script setup lang="ts">
// Private leaderboards come from the git-ignored `leaderboards.local.json`
// (see README). Without it, the slide shows how to create one instead.
interface Leaderboard { title: string, code: string }

const files = import.meta.glob<Leaderboard[]>('../leaderboards.local.json', { eager: true, import: 'default' })
const boards: Leaderboard[] = Object.values(files)[0] ?? []
</script>

<template>
  <div v-if="boards.length" class="boards" :class="{ single: boards.length === 1 }">
    <div v-for="board in boards" :key="board.code" class="board box">
      <div class="title">{{ board.title }}</div>
      <div class="code"><code>{{ board.code }}</code></div>
    </div>
  </div>
  <div v-if="boards.length" class="dim text-center mt-6">
    Leaderboard → Private Leaderboard → Join
  </div>
  <div v-else class="text-center">
    <div class="text-xl">Create a <strong>private leaderboard</strong> for your team</div>
    <div class="dim mt-6">Leaderboard → Private Leaderboard → Create</div>
  </div>
</template>

<style scoped>
.boards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
.boards.single {
  grid-template-columns: 1fr;
  max-width: 32rem;
  margin: 0 auto;
}
.board {
  text-align: center;
}
.title {
  font-size: 1.2rem;
}
.code {
  margin-top: 0.8rem;
  font-size: 1.6rem;
  color: var(--aoc-star);
  text-shadow: 0 0 5px var(--aoc-star);
}
.code code {
  background: none;
  border: none;
  color: inherit;
}
</style>
