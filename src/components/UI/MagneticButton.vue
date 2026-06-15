<script setup>
import { ref } from 'vue'

const props = defineProps({
  href: { type: String, default: null },
  target: { type: String, default: '_blank' },
  wrapperClass: { type: String, default: '' },
  variant: { type: String, default: 'primary' }, // primary | secondary | ghost
})

const btnRef = ref(null)
const offsetX = ref(0)
const offsetY = ref(0)

function handleMouse(e) {
  if (!btnRef.value) return
  const rect = btnRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2
  offsetX.value = x * 0.3
  offsetY.value = y * 0.3
}

function handleLeave() {
  offsetX.value = 0
  offsetY.value = 0
}
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :ref="(el) => (btnRef = el)"
    :href="href"
    :target="href ? target : undefined"
    :rel="href && target === '_blank' ? 'noopener noreferrer' : undefined"
    :class="[
      'inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer select-none',
      variant === 'primary' && 'bg-white text-dark-950 hover:bg-white/90 shadow-lg shadow-white/10',
      variant === 'secondary' && 'glass-strong text-white hover:bg-white/10',
      variant === 'ghost' && 'text-white/60 hover:text-white hover:bg-white/5',
      wrapperClass,
    ]"
    :style="{
      transform: `translate(${offsetX}px, ${offsetY}px)`,
    }"
    @mousemove="handleMouse"
    @mouseleave="handleLeave"
  >
    <slot />
  </component>
</template>
