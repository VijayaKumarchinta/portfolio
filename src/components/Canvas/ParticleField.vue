<script setup>
import { useParticles } from '@/composables/useParticles'

const { containerRef } = useParticles()
</script>

<template>
  <div
    ref="containerRef"
    class="fixed inset-0 -z-10 pointer-events-none"
  />
</template>
