<script setup>
import { onMounted, onUnmounted } from 'vue'
import ParticleField from '@/components/Canvas/ParticleField.vue'
import NavBar from '@/components/UI/NavBar.vue'
import Hero from '@/components/Sections/Hero.vue'
import About from '@/components/Sections/About.vue'
import Skills from '@/components/Sections/Skills.vue'
import Projects from '@/components/Sections/Projects.vue'
import Experience from '@/components/Sections/Experience.vue'
import Certifications from '@/components/Sections/Certifications.vue'
import Contact from '@/components/Sections/Contact.vue'
import Footer from '@/components/Sections/Footer.vue'
import { useLenis } from '@/composables/useLenis'

const { initLenis, destroyLenis } = useLenis()

onMounted(() => {
  initLenis()
})

onUnmounted(() => {
  destroyLenis()
})
</script>

<template>
  <!-- Top anchor for scrolling -->
  <div id="top" />

  <!-- Particle background -->
  <ParticleField />

  <!-- Navigation -->
  <NavBar />

  <!-- Main content -->
  <main>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Certifications />
    <Contact />
    <Footer />
  </main>

  <!-- Noise overlay -->
  <div class="noise-overlay" />
</template>
