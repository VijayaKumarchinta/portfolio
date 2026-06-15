<script setup>
import { useLenis } from '@/composables/useLenis'
const { scrollTo: smoothScroll } = useLenis()

function handleScrollTo(id) {
  smoothScroll(id)
}
</script>

<template>
  <button
    class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-300 cursor-pointer group"
    @click="handleScrollTo('#about')"
  >
    <span class="text-xs font-mono tracking-widest uppercase">Scroll</span>
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="animate-bounce"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  </button>
</template>
