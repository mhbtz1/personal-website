import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import cssnano from 'cssnano';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [
        cssnano(), // Enable CSS minification
      ],
    },
  },
  build: {
    minify: 'terser', // Enable minification for both JavaScript and CSS
  },
})
