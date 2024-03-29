import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my_homepage/',
  css: {
  	preprocessorOptions: {
      scss: {
        additionalData: `@import "@/scss/variables.scss";
        `
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)
      )
    }
  }
})
