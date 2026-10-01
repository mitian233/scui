import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: { entries: ['index.html'], exclude: ['shiny-colors-ui'] },
  build: { outDir: 'dist-demo' },
})
