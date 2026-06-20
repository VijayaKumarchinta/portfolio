<script setup>
import GlassCard from '@/components/UI/GlassCard.vue'
import RevealText from '@/components/UI/RevealText.vue'

const timelineItems = [
  {
    type: 'work',
    title: 'Software Development Intern',
    org: 'BeanInfosystems, Hyderabad',
    period: 'May 2024 — June 2024',
    items: [
      'Optimized database queries to improve application performance and data retrieval efficiency',
      'Debugged application issues and resolved backend data integration problems',
      'Collaborated with the development team on backend data integration and processing',
      'Gained practical exposure to the software development lifecycle and team-based project execution',
    ],
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    color: 'rgba(96, 165, 250, 0.2)',
  },
  {
    type: 'education',
    title: 'B.Tech in Data Science & Big Data Analytics',
    org: 'Koneru Lakshmaiah Education Foundation',
    period: '2022 — 2026',
    items: [
      'Focused on statistical analysis, database management, and BI tools',
      'Built multiple data-driven projects and dashboards',
      'Active participant in hackathons and coding competitions',
    ],
    icon: 'M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5 9-5 9 5-9 5z',
    color: 'rgba(167, 139, 250, 0.2)',
  },
  {
    type: 'education',
    title: 'Intermediate (MPC)',
    org: 'Tirumala Jr College, Rajahmundry',
    period: '2020 — 2022',
    items: [
      'Focused on Mathematics, Physics, and Chemistry',
      'Laid strong foundation in analytical and quantitative skills',
    ],
    icon: 'M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5 9-5 9 5-9 5z',
    color: 'rgba(52, 211, 153, 0.2)',
  },
]
</script>

<template>
  <section
    id="experience"
    class="relative py-32 md:py-40"
  >
    <div class="section-container">
      <!-- Header -->
      <div class="text-center mb-16">
        <p class="text-xs font-mono tracking-widest uppercase text-white/30 mb-4">
          Journey
        </p>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          <RevealText
            text="Experience & Education"
            mode="word"
          />
        </h2>
        <p class="text-white/40 max-w-xl mx-auto">
          The path that shaped my data analytics career.
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-emerald-500/20 md:-translate-x-px" />

        <div class="space-y-12">
          <div
            v-for="(item, i) in timelineItems"
            :key="i"
            class="relative"
          >
            <div class="flex flex-col md:flex-row items-start gap-8"
              :class="i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
            >
              <!-- Content -->
              <div class="flex-1"
                :class="i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'"
              >
                <GlassCard :glow-color="item.color">
                  <div class="flex items-start gap-3"
                    :class="i % 2 === 0 ? 'md:flex-row-reverse' : ''"
                  >
                    <!-- Icon -->
                    <div class="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                      <svg
                        class="w-5 h-5 text-white/50"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path :d="item.icon" />
                      </svg>
                    </div>
                    <div class="flex-1">
                      <span class="text-[10px] font-mono tracking-widest uppercase"
                        :class="item.type === 'work' ? 'text-blue-400' : 'text-purple-400'"
                      >
                        {{ item.type === 'work' ? 'Experience' : 'Education' }}
                      </span>
                      <h3 class="text-white font-semibold text-lg mt-1">{{ item.title }}</h3>
                      <p class="text-white/60 font-mono text-xs">{{ item.org }}</p>
                      <p class="text-white/30 text-xs mt-1">{{ item.period }}</p>
                      <ul class="mt-4 space-y-2" :class="i % 2 === 0 ? 'md:text-right' : ''">
                        <li
                          v-for="(desc, j) in item.items"
                          :key="j"
                          class="text-white/50 text-sm leading-relaxed flex items-start gap-2 font-light"
                          :class="i % 2 === 0 ? 'md:flex-row-reverse' : ''"
                        >
                          <span class="w-1 h-1 rounded-full bg-white/20 mt-2 shrink-0" />
                          {{ desc }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <!-- Timeline dot -->
              <div class="absolute left-6 md:left-1/2 top-6 -translate-x-1/2">
                <div class="w-3 h-3 rounded-full glass-strong ring-4 ring-dark-950"
                  :class="item.type === 'work' ? 'bg-blue-400' : 'bg-purple-400'"
                />
              </div>

              <!-- Spacer (alternating layout) -->
              <div class="flex-1 hidden md:block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
