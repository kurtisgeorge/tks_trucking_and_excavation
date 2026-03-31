import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/tks_trucking_and_excavation/',
  plugins: [
    tailwindcss(),
    react()
  ],
})
