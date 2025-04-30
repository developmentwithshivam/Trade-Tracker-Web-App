import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/Trade-Tracker-Web-App/',
  plugins: [
    tailwindcss(),
  ],
})

// vite.config.js
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   base: '/Trade-Tracker-Web-App/', // 👈 VERY important
// })
