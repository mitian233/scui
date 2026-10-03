import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [vue(), dts({ entryRoot: 'src', include: ['src/components/**/*.vue', 'src/composables/**/*.ts', 'src/index.ts', 'src/assets.ts', 'src/types.ts'] })],
  build: {
    lib: { entry: 'src/index.ts', formats: ['es'], fileName: 'scui', cssFileName: 'scui' },
    rollupOptions: { external: ['vue', 'reka-ui'] },
  },
})
