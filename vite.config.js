import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/vue-vite-project/',  // your repo name
  plugins: [vue()],
})
