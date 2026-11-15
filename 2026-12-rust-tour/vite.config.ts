import { defineConfig } from 'vite'

// Publish the licenses of the bundled dependencies (Slidev, Vue...) with the deck.
export default defineConfig({
  build: { license: { fileName: 'THIRD-PARTY-LICENSES.txt' } },
})
