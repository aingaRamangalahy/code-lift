import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        /**The additionalData option in the scss object tells Vite to include the global.scss file in every SCSS file that it compiles. */
        additionalData: `@import "@/styles/global.scss";`
      }
    }
  }
})
