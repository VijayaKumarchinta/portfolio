<script setup>
import GlassCard from '@/components/UI/GlassCard.vue'
import RevealText from '@/components/UI/RevealText.vue'

const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    description: 'Foundational certification validating cloud knowledge with AWS services, architecture, security, and pricing.',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    color: 'rgba(255, 153, 0, 0.15)',
  },
  {
    title: 'Salesforce AI Associate',
    issuer: 'Salesforce',
    description: 'Certification in AI fundamentals within the Salesforce ecosystem, including Einstein AI and ethical AI practices.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    color: 'rgba(0, 168, 255, 0.15)',
  },
  {
    title: 'RPA Essential (Automation Anywhere)',
    issuer: 'Automation Anywhere',
    description: 'Foundational robotic process automation certification covering bot creation, automation workflows, and deployment.',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
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
