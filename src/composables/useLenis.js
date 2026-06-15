import { ref, onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'

const lenis = ref(null)
const isReady = ref(false)

export function useLenis() {
  onMounted(() => {
    if (!lenis.value) {
      lenis.value = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        lerp: 0.1,
      })

      function raf(time) {
        lenis.value.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
      isReady.value = true
    }
  })

  onUnmounted(() => {
    if (lenis.value) {
      lenis.value.destroy()
      lenis.value = null
      isReady.value = false
    }
  })

  function scrollTo(target, options = {}) {
    if (lenis.value) {
      lenis.value.scrollTo(target, {
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        ...options,
      })
    }
  }

  return { lenis, isReady, scrollTo }
}
