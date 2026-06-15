<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLenis } from '@/composables/useLenis'

const { scrollTo } = useLenis()
const menuOpen = ref(false)
const scrolled = ref(false)

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

function handleNavClick(href) {
  menuOpen.value = false
  scrollTo(href)
}

function handleEscape(e) {
  if (e.key === 'Escape') menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      scrolled ? 'glass-strong shadow-lg shadow-black/5' : 'bg-transparent',
    ]"
  >
    <nav class="section-container flex items-center justify-between h-16 md:h-20">
      <!-- Logo -->
      <button
        class="text-lg font-semibold tracking-tight cursor-pointer"
        @click="scrollTo('#top')"
      >
        <span class="gradient-text">VK</span>
        <span class="text-white/40 ml-2 font-mono text-xs">.dev</span>
      </button>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-1">
        <li v-for="item in navItems" :key="item.label">
          <button
            class="px-4 py-2 text-sm text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 cursor-pointer"
            @click="handleNavClick(item.href)"
          >
            {{ item.label }}
          </button>
        </li>
      </ul>

      <!-- Hamburger -->
      <button
        class="md:hidden relative w-8 h-8 flex items-center justify-center cursor-pointer z-50"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle menu"
      >
        <span class="sr-only">Menu</span>
        <span
          class="absolute block h-[2px] w-5 bg-white transition-all duration-300"
          :class="menuOpen ? 'rotate-45' : '-translate-y-1.5'"
        />
        <span
          class="absolute block h-[2px] w-5 bg-white transition-all duration-300"
          :class="menuOpen ? 'opacity-0' : ''"
        />
        <span
          class="absolute block h-[2px] w-5 bg-white transition-all duration-300"
          :class="menuOpen ? '-rotate-45' : 'translate-y-1.5'"
        />
      </button>
    </nav>

    <!-- Mobile menu overlay -->
    <Teleport to="body">
      <div
        class="fixed inset-0 z-40 md:hidden"
        :class="menuOpen ? 'pointer-events-auto' : 'pointer-events-none'"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          :class="menuOpen ? 'opacity-100' : 'opacity-0'"
          @click="menuOpen = false"
        />
        <!-- Menu panel -->
        <div
          class="absolute top-0 right-0 h-full w-72 glass-strong transition-transform duration-300"
          :class="menuOpen ? 'translate-x-0' : 'translate-x-full'"
        >
          <div class="flex flex-col gap-2 p-8 pt-24">
            <button
              v-for="item in navItems"
              :key="item.label"
              class="w-full text-left px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 text-lg font-medium"
              @click="handleNavClick(item.href)"
            >
              {{ item.label }}
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </header>
</template>
