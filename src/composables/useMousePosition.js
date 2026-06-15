import { ref, onMounted, onUnmounted } from 'vue'

export function useMousePosition() {
  const x = ref(0)
  const y = ref(0)

  let rafId = null

  function update(e) {
    cancelAnimationFrame(rafId)
    rafId = requestAnimationFrame(() => {
      x.value = e.clientX
      y.value = e.clientY
    })
  }

  onMounted(() => {
    window.addEventListener('mousemove', update, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
    cancelAnimationFrame(rafId)
  })

  return { x, y }
}
