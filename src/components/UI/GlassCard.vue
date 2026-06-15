<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  class: { type: String, default: '' },
  glowColor: { type: String, default: 'rgba(96, 165, 250, 0.15)' },
})

const emit = defineEmits(['spotlight'])

const cardRef = ref(null)
const spotlight = ref({ x: 50, y: 50 })
const isVisible = ref(false)
const isHovered = ref(false)

function handleMouse(e) {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  spotlight.value = {
    x: ((e.clientX - rect.left) / rect.width) * 100,
    y: ((e.clientY - rect.top) / rect.height) * 100,
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.1 }
  )
  if (cardRef.value) observer.observe(cardRef.value)
})
</script>

<template>
  <div
    ref="cardRef"
    :class="[
      'glass rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-500',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
      isHovered ? 'scale-[1.02]' : 'scale-100',
      props.class,
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
        background: `radial-gradient(600px circle at ${spotlight.x}% ${spotlight.y}%, ${glowColor}, transparent 60%)`,
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
