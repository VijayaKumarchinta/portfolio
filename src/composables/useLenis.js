import Lenis from 'lenis'

const state = {
  instance: null,
  rafId: null,
  isReady: false,
}

export function useLenis() {
  function scrollTo(target, options = {}) {
    if (state.instance) {
      state.instance.scrollTo(target, {
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        ...options,
      })
    }
  }

  function initLenis() {
    if (state.instance) return

    state.instance = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.1,
    })

    function raf(time) {
      if (!state.instance) return
      state.instance.raf(time)
      state.rafId = requestAnimationFrame(raf)
    }
    state.rafId = requestAnimationFrame(raf)
    state.isReady = true
  }

  function destroyLenis() {
    if (state.rafId) {
      cancelAnimationFrame(state.rafId)
      state.rafId = null
    }
    if (state.instance) {
      state.instance.destroy()
      state.instance = null
    }
    state.isReady = false
  }

  return { scrollTo, initLenis, destroyLenis, lenis: state.instance, isReady: state.isReady }
}
