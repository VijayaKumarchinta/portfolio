<script setup>
import GlassCard from '@/components/UI/GlassCard.vue'
import RevealText from '@/components/UI/RevealText.vue'

const categories = [
  {
    title: 'Languages',
    span: 'lg:col-span-4',
    skills: ['Python', 'SQL'],
    icon: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6-1.6 1.6a1 1 0 0 0 1.4 1.4l2.3-2.3a1 1 0 0 0 0-1.4l-2.3-2.3a1 1 0 0 0-1.4 0zm-5.4 0a1 1 0 0 0-1.4 0L5.6 8.6a1 1 0 0 0 0 1.4l2.3 2.3a1 1 0 0 0 1.4-1.4L7.7 9.3l1.6-1.6a1 1 0 0 0 0-1.4zM11 5a1 1 0 0 1 1.4.4l3 5a1 1 0 0 1-.4 1.4 1 1 0 0 1-1.4-.4l-3-5A1 1 0 0 1 11 5z',
  },
  {
    title: 'Data & BI Tools',
    span: 'lg:col-span-4',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI', 'Tableau'],
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    title: 'Databases',
    span: 'lg:col-span-4',
    skills: ['PostgreSQL'],
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
  },
  {
    title: 'Dev Tools',
    span: 'lg:col-span-6',
    skills: ['Git', 'GitHub', 'Docker'],
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
  {
    title: 'Frameworks',
    span: 'lg:col-span-6',
    skills: ['Vue.js', 'FastAPI', 'Flask'],
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
  },
]
</script>

<template>
  <section
    id="skills"
    class="relative py-32 md:py-40"
  >
    <div class="section-container">
      <!-- Header -->
      <div class="text-center mb-16">
        <p class="text-xs font-mono tracking-widest uppercase text-white/30 mb-4">
          Skills &amp; Expertise
        </p>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          <RevealText
            text="What I Bring to the Table"
            mode="word"
          />
        </h2>
        <p class="text-white/40 max-w-xl mx-auto font-light">
          A comprehensive toolkit spanning the entire data analytics and development lifecycle.
        </p>
      </div>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 auto-rows-auto">
        <GlassCard
          v-for="(cat, i) in categories"
          :key="i"
          :wrapper-class="`${cat.span} col-span-1 lg:row-span-1 flex flex-col`"
          :glow-color="[
            'rgba(96, 165, 250, 0.15)',
            'rgba(52, 211, 153, 0.15)',
            'rgba(167, 139, 250, 0.15)',
            'rgba(251, 146, 60, 0.15)',
            'rgba(96, 165, 250, 0.15)',
            'rgba(244, 114, 182, 0.15)',
          ][i]"
          :style="{ transitionDelay: `${i * 100}ms` }"
        >
          <div class="flex items-center gap-3 mb-4">
            <svg
              class="w-5 h-5 text-white/40 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path :d="cat.icon" />
            </svg>
            <h3 class="text-white font-semibold text-sm">{{ cat.title }}</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in cat.skills"
              :key="skill"
              class="px-3 py-1.5 text-xs rounded-lg glass text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-default"
            >
              {{ skill }}
            </span>
          </div>
        </GlassCard>
      </div>
    </div>
  </section>
</template>
