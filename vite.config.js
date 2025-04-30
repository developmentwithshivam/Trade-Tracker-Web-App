import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/Trade-Tracker-Web-App/',
  plugins: [
    tailwindcss(),
  ],
})
