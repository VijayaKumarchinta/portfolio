import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // Disable sourcemaps in production for smaller bundles
    sourcemap: false,
    // Warn if chunks exceed 800KB (Three.js is inherently large)
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split Three.js into its own chunk
          if (id.includes('node_modules/three')) {
            return 'three'
          }
          // Split Vue core into its own vendor chunk
          if (id.includes('node_modules/vue')) {
            return 'vendor-vue'
          }
        },
      },
    },
  },
})
