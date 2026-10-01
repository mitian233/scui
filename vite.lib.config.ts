import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [vue(), dts({ entryRoot: 'src', include: ['src/components/**/*.vue', 'src/index.ts', 'src/assets.ts', 'src/types.ts'] })],
  build: {
    lib: { entry: 'src/index.ts', formats: ['es'], fileName: 'shiny-colors-ui', cssFileName: 'shiny-colors-ui' },
    rollupOptions: { external: ['vue', 'reka-ui'] },
  },
})
