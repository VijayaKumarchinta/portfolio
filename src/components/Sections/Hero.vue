<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useMousePosition } from '@/composables/useMousePosition'
import { useReducedMotion } from '@/composables/useReducedMotion'
import { useLenis } from '@/composables/useLenis'
import MagneticButton from '@/components/UI/MagneticButton.vue'
import ScrollIndicator from '@/components/UI/ScrollIndicator.vue'

const { x, y } = useMousePosition()
const { prefersReducedMotion } = useReducedMotion()
const { scrollTo: smoothScroll } = useLenis()
const isVisible = ref(false)

function handleScrollTo(id) {
  smoothScroll(id)
}

// ── Smoothed orb positions with lerp ──
const orbPositions = ref({ x1: 50, y1: 50, x2: 50, y2: 50 })
const targetOrb = { x1: 50, y1: 50, x2: 50, y2: 50 }
const currentOrb = { x1: 50, y1: 50, x2: 50, y2: 50 }

// ── Content parallax tilt ──
const tiltX = ref(0)
const tiltY = ref(0)
const targetTilt = { x: 0, y: 0 }
const currentTilt = { x: 0, y: 0 }

let rafId = null
let hasMouseMoved = false

function lerp(start, end, factor) {
  return start + (end - start) * factor
}

function animate() {
  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2
  const nx = hasMouseMoved ? (x.value - centerX) / centerX : 0
  const ny = hasMouseMoved ? (y.value - centerY) / centerY : 0

  // Update targets
  targetOrb.x1 = 50 + (nx * 15)
  targetOrb.y1 = 50 + (ny * 15)
  targetOrb.x2 = 50 - (nx * 12)
  targetOrb.y2 = 50 - (ny * 12)

  targetTilt.x = ny * -4
  targetTilt.y = nx * 4

  // Smooth lerp towards target
  currentOrb.x1 = lerp(currentOrb.x1, targetOrb.x1, 0.08)
  currentOrb.y1 = lerp(currentOrb.y1, targetOrb.y1, 0.08)
  currentOrb.x2 = lerp(currentOrb.x2, targetOrb.x2, 0.06)
  currentOrb.y2 = lerp(currentOrb.y2, targetOrb.y2, 0.06)

  currentTilt.x = lerp(currentTilt.x, targetTilt.x, 0.06)
  currentTilt.y = lerp(currentTilt.y, targetTilt.y, 0.06)

  orbPositions.value = {
    x1: currentOrb.x1,
    y1: currentOrb.y1,
    x2: currentOrb.x2,
    y2: currentOrb.y2,
  }

  tiltX.value = currentTilt.x
  tiltY.value = currentTilt.y

  rafId = requestAnimationFrame(animate)
}

function handleFirstMouse() {
  hasMouseMoved = true
}

onMounted(() => {
  isVisible.value = true
  if (!prefersReducedMotion.value) {
    rafId = requestAnimationFrame(animate)
    window.addEventListener('mousemove', handleFirstMouse, { once: true })
  }
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
})

const socials = [
  { label: 'GitHub', url: 'https://github.com/VijayaKumarchinta', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/vijaya-kumar-chinta-4a9551251/', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { label: 'Instagram', url: 'https://www.instagram.com/_vijayakumar.chinta_/', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
]
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Gradient Orbs (smoothed with lerp) -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        class="gradient-orb gradient-orb--blue w-[600px] h-[600px] animate-glow"
        :style="{
          left: `${orbPositions.x1}%`,
          top: `${orbPositions.y1}%`,
          transform: 'translate(-50%, -50%)',
        }"
      />
      <div
        class="gradient-orb gradient-orb--purple w-[500px] h-[500px] animate-glow"
        :style="{
          left: `${orbPositions.x2}%`,
          top: `${orbPositions.y2}%`,
          transform: 'translate(-50%, -50%)',
          animationDelay: '-2s',
        }"
      />
      <div
        class="gradient-orb gradient-orb--pink w-[400px] h-[400px] animate-glow"
        :style="{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          animationDelay: '-4s',
        }"
      />
    </div>

    <!-- Content with 3D parallax tilt -->
    <div
      class="relative z-10 section-container text-center"
      :style="{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }"
    >
      <div
        :style="prefersReducedMotion ? {} : {
          transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        }"
      >
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-white/60 mb-8 transition-all duration-700"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          style="transition-delay: 200ms"
        >
          <span class="w-2 h-2 rounded-full bg-emerald-400" :class="{ 'animate-pulse': !prefersReducedMotion }" />
          Data Analyst &amp; BI Analyst
        </div>

        <!-- Name with word stagger reveal -->
        <h1
          class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
        >
          <span class="inline-block overflow-hidden">
            <span
              class="inline-block text-white/20 transition-all duration-1000 ease-out"
              :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'"
              style="transition-delay: 300ms"
            >Chinta</span>
          </span>
          <br />
          <span class="inline-block overflow-hidden mt-1">
            <span
              class="inline-block gradient-text transition-all duration-1000 ease-out"
              :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'"
              style="transition-delay: 500ms"
            >Vijaya Kumar</span>
          </span>
        </h1>

        <!-- Description -->
        <p
          class="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-10 leading-relaxed font-light transition-all duration-700"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          style="transition-delay: 600ms"
        >
          Crafting data-driven stories with
          <span class="text-white/70">Python, SQL, and BI tools</span>.
          Turning raw data into actionable insights through
          <span class="text-white/70">machine learning</span>
          and beautiful visualizations.
        </p>

        <!-- CTAs -->
        <div
          class="flex flex-wrap items-center justify-center gap-4 transition-all duration-700"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          style="transition-delay: 800ms"
        >
          <MagneticButton
            variant="primary"
            @click="handleScrollTo('#projects')"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            View Projects
          </MagneticButton>
          <MagneticButton
            variant="secondary"
            @click="handleScrollTo('#contact')"
          >
            Get in Touch
          </MagneticButton>
          <MagneticButton
            href="https://drive.google.com/file/d/1gfHSp5gCW0PlSTfAniIyXKBGgpc_bUCd/view?usp=sharing"
            variant="ghost"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Resume
          </MagneticButton>
        </div>

        <!-- Social Links -->
        <div
          class="flex items-center justify-center gap-6 mt-12 transition-all duration-700"
          :class="isVisible ? 'opacity-100' : 'opacity-0'"
          style="transition-delay: 1000ms"
        >
          <a
            v-for="(social, i) in socials"
            :key="i"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white/30 hover:text-white/80 transition-all duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-accent-400"
            :style="prefersReducedMotion ? {} : {
              animation: `float 6s ease-in-out ${i * 0.6}s infinite`,
            }"
          >
            <svg
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path :d="social.icon" />
            </svg>
            <span class="sr-only">{{ social.label }}</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <ScrollIndicator />
  </section>
</template>
