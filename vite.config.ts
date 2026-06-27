/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    // @ionic/core ships ESM inside a CommonJS package; inline it so Vitest
    // transforms it instead of failing on the bare `export` syntax.
    server: {
      deps: {
        inline: ['@ionic/core'],
      },
    },
  }
})
