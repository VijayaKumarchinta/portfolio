/**
 * Native smooth scrolling (replaces Lenis)
 * Uses scrollIntoView for instant, reliable scrolling.
 */
export function useLenis() {
  function scrollTo(target, options = {}) {
    if (typeof target === 'number') {
      window.scrollTo({
        top: target,
        behavior: 'smooth',
        ...options,
      })
      return
    }

    // Extract id from hash, e.g. "#about" -> "about"
    const id = target.startsWith('#') ? target.slice(1) : target
    const el = document.getElementById(id)

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        ...options,
      })
    }
  }

  // No-op functions to keep the same API
  function initLenis() {}
  function destroyLenis() {}

  return { scrollTo, initLenis, destroyLenis, isReady: true }
}
