// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Evaluador-Corales/',   // 👈 nombre EXACTO del repo en GitHub
  build: { outDir: 'docs' }      // 👈 GitHub Pages servirá desde /docs
})
