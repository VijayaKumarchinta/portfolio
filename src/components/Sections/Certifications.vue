<script setup>
import GlassCard from '@/components/UI/GlassCard.vue'
import RevealText from '@/components/UI/RevealText.vue'

const certifications = [
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google (via Coursera)',
    date: 'May 2026',
    url: 'https://coursera.org/verify/professional-cert/2FGSSB37JB9U',
    description: 'Comprehensive program covering data cleaning, analysis, visualization, and R programming with hands-on case studies and a capstone project.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    color: 'rgba(66, 133, 244, 0.15)',
    textColor: 'text-blue-400',
  },
  {
    title: 'GenAI-Powered Data Analytics Job Simulation',
    issuer: 'Tata Forage',
    date: 'Jun 2026',
    url: 'https://drive.google.com/file/d/1lKBlbzujiUuCkuRLJI3-2-uAIqzEuCyL/view',
    description: 'Hands-on simulation leveraging generative AI tools for real-world data analytics challenges and business insights.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    color: 'rgba(20, 184, 166, 0.15)',
    textColor: 'text-teal-400',
  },
  {
    title: 'Salesforce Certified AI Associate',
    issuer: 'Salesforce',
    date: 'Oct 2024',
    url: null,
    description: 'Professional credential validating expertise in Salesforce AI capabilities, Einstein features, and ethical AI implementation.',
    icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
    color: 'rgba(0, 177, 230, 0.15)',
    textColor: 'text-sky-400',
  },
  {
    title: 'Automation Anywhere Certified Essentials RPA Professional',
    issuer: 'Automation Anywhere',
    date: '2023',
    url: null,
    description: 'Industry-recognized certification in robotic process automation covering bot creation, control room management, and automation best practices.',
    icon: 'M14.5 6.5a3.5 3.5 0 10-5 0L6 10h3v6h2v-4h2v4h2v-6h3l-3.5-3.5z',
    color: 'rgba(16, 185, 129, 0.15)',
    textColor: 'text-emerald-400',
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
          Industry-recognized credentials from Google, Salesforce, and more.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <GlassCard
          v-for="(cert, i) in certifications"
          :key="i"
          wrapper-class="text-center"
          :glow-color="cert.color"
          :style="{ transitionDelay: `${i * 120}ms` }"
        >
          <div
            class="w-14 h-14 rounded-2xl glass flex items-center justify-center mx-auto mb-5"
            :class="cert.textColor"
          >
            <svg
              class="w-7 h-7"
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
          <h3 class="text-white font-semibold text-sm mb-1 leading-snug">
            <a
              v-if="cert.url"
              :href="cert.url"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-blue-300 transition-colors duration-200 underline decoration-white/20 underline-offset-2 hover:decoration-blue-400/60"
            >
              {{ cert.title }}
            </a>
            <span v-else>{{ cert.title }}</span>
          </h3>
          <p class="text-white/40 text-xs font-mono mb-1">{{ cert.issuer }}</p>
          <p class="text-white/30 text-[11px] font-mono mb-3">{{ cert.date }}</p>
          <p class="text-white/50 text-sm leading-relaxed font-light">
            {{ cert.description }}
          </p>
        </GlassCard>
      </div>
    </div>
  </section>
</template>
