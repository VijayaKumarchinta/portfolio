<script setup>
import { ref } from 'vue'
import { useInView } from '@/composables/useInView'

const props = defineProps({
  wrapperClass: { type: String, default: '' },
  glowColor: { type: String, default: 'rgba(96, 165, 250, 0.15)' },
})

const { elRef: cardRef, isVisible } = useInView()
const isHovered = ref(false)

function handleMouse(e) {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  cardRef.value.style.setProperty('--spotlight-x', `${((e.clientX - rect.left) / rect.width) * 100}%`)
  cardRef.value.style.setProperty('--spotlight-y', `${((e.clientY - rect.top) / rect.height) * 100}%`)
}
</script>

<template>
  <div
    ref="cardRef"
    :class="[
      'glass rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-500',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
      isHovered ? 'scale-[1.02]' : 'scale-100',
      wrapperClass,
    ]"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @mousemove="handleMouse"
  >
    <!-- Spotlight overlay -->
    <div
      class="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300"
      :class="{ 'opacity-100': isHovered }"
      :style="{
        background: `radial-gradient(600px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), ${glowColor}, transparent 60%)`,
      }"
    />
    <!-- Border glow -->
    <div
      class="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 rounded-2xl"
      :class="{ 'opacity-100': isHovered }"
      :style="{
        border: `1px solid ${glowColor.replace('0.15', '0.3').replace('0.25', '0.4')}`,
      }"
    />
    <!-- Content -->
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>
