<script setup>
import GlassCard from '@/components/UI/GlassCard.vue'
import RevealText from '@/components/UI/RevealText.vue'

const certifications = [
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    description: 'Foundational cloud certification validating knowledge of AWS services, architecture, security, and core cloud concepts.',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    color: 'rgba(255, 153, 0, 0.15)',
  },
  {
    title: 'Data Science for Engineers',
    issuer: 'NPTEL',
    description: 'Comprehensive course covering data science methodologies, statistical modeling, and engineering applications of data-driven decision making.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    color: 'rgba(59, 130, 246, 0.15)',
  },
  {
    title: 'Business Intelligence & Analytics',
    issuer: 'NPTEL',
    description: 'In-depth study of business intelligence frameworks, data warehousing, analytics techniques, and dashboard-driven business strategy.',
    icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z',
    color: 'rgba(167, 139, 250, 0.15)',
  },
]
</script>

<template>
  <section
    id="certifications"
    class="relative py-32 md:py-40"
  >
    <div class="section-container">
      <!-- Header -->
      <div class="text-center mb-16">
        <p class="text-xs font-mono tracking-widest uppercase text-white/30 mb-4">
          Credentials
        </p>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          <RevealText
            text="Certifications"
            mode="word"
          />
        </h2>
        <p class="text-white/40 max-w-xl mx-auto">
          Industry-recognized credentials validating my expertise.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard
          v-for="(cert, i) in certifications"
          :key="i"
          wrapper-class="text-center"
          :glow-color="cert.color"
          :style="{ transitionDelay: `${i * 150}ms` }"
        >
          <div class="w-14 h-14 rounded-2xl glass flex items-center justify-center mx-auto mb-5">
            <svg
              class="w-7 h-7"
              :class="[
                i === 0 ? 'text-orange-400' : '',
                i === 1 ? 'text-blue-400' : '',
                i === 2 ? 'text-purple-400' : '',
              ]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path :d="cert.icon" />
            </svg>
          </div>
          <h3 class="text-white font-semibold text-base mb-1">{{ cert.title }}</h3>
          <p class="text-white/40 text-xs font-mono mb-3">{{ cert.issuer }}</p>
          <p class="text-white/50 text-sm leading-relaxed font-light">
            {{ cert.description }}
          </p>
        </GlassCard>
      </div>
    </div>
  </section>
</template>
