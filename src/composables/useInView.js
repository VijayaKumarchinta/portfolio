import { ref, onMounted, onUnmounted } from 'vue'

export function useInView(threshold = 0.1) {
  const elRef = ref(null)
  const isVisible = ref(false)

  let observer = null

  onMounted(() => {
    if (!elRef.value) return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )
    observer.observe(elRef.value)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  })

  return { elRef, isVisible }
}
