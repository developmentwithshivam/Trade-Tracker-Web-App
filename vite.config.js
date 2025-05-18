import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig(({mode})=>{return {
  base: mode === 'production' ? '/Trade-Tracker-Web-App/':'/',
  plugins: [
    tailwindcss(),
  ],
}})
