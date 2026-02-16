import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/*
  📘 VITE BUILD CONFIG — Performance Optimized

  manualChunks splits the JavaScript into separate files:
  - vendor-react.js  → React core (rarely changes, cached long-term)
  - vendor-motion.js → Framer Motion (the biggest dependency)
  - main chunk       → Your app code (small, updates frequently)

  This way, when you update YOUR code, browsers only re-download
  the small main chunk — vendor files stay cached!
*/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion';
          }
          if (id.includes('node_modules/react-icons')) {
            return 'vendor-icons';
          }
        },
      },
    },
  },
})
