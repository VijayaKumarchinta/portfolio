<script setup>
import { useLenis } from '@/composables/useLenis'
const { scrollTo } = useLenis()
</script>

<template>
  <footer class="relative border-t border-white/5 py-12">
    <div class="section-container">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="text-center md:text-left">
          <p class="text-white/20 text-sm">
            &copy; {{ new Date().getFullYear() }} Chinta Vijaya Kumar
          </p>
          <p class="text-white/10 text-xs font-mono mt-1">
            Built with Vue.js, Three.js &amp; Lenis
          </p>
        </div>

        <button
          class="flex items-center gap-2 text-white/30 hover:text-white/70 transition-all duration-300 text-sm group cursor-pointer"
          @click="scrollTo('#top')"
        >
          Back to top
          <svg
            class="w-4 h-4 group-hover:-translate-y-1 transition-transform"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  </footer>
</template>
