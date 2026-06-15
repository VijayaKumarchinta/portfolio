import { ref, onMounted, onUnmounted } from 'vue'

export function useReducedMotion() {
  const prefersReducedMotion = ref(false)

  let mediaQuery = null

  function handleChange(e) {
    prefersReducedMotion.value = e.matches
  }

  onMounted(() => {
    mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReducedMotion.value = mediaQuery.matches
    mediaQuery.addEventListener('change', handleChange)
  })

  onUnmounted(() => {
    if (mediaQuery) {
      mediaQuery.removeEventListener('change', handleChange)
    }
  })

  return { prefersReducedMotion }
}
