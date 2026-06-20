<script setup>
import GlassCard from '@/components/UI/GlassCard.vue'
import RevealText from '@/components/UI/RevealText.vue'

const stats = [
  { value: '8.8', label: 'CGPA' },
  { value: '3', label: 'Certifications' },
  { value: '3', label: 'Projects' },
  { value: '20+', label: 'Tech Stacks' },
]

const techStack = [
  'Python', 'SQL',
  'Tableau', 'Power BI', 'Excel',
  'Pandas', 'NumPy', 'Scikit-learn',
  'TensorFlow', 'PyTorch', 'OpenCV',
  'Flask', 'FastAPI', 'Vue.js','Node.js',
  'Git', 'Docker', 'PostgreSQL', 'MongoDB',
  'AWS', 'GCP',
]
</script>

<template>
  <section
    id="about"
    class="relative py-32 md:py-40"
  >
    <div class="section-container">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Left: Bio -->
        <div class="lg:col-span-7">
          <GlassCard wrapper-class="h-full">
            <p class="text-xs font-mono tracking-widest uppercase text-white/30 mb-4">
              About
            </p>
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
              <RevealText
                text="Turning Data into Decisions"
                mode="word"
                :delay="100"
              />
            </h2>
            <div class="space-y-4 text-white/50 leading-relaxed text-base md:text-lg font-light">
              <p>
                I'm a recent
                <span class="text-white/80">Data Science & Big Data Analytics</span>
                graduate passionate about turning raw data into actionable business insights.
                Skilled in
                <span class="text-white/80">Python, SQL, statistical reasoning,</span>
                and building interactive dashboards with
                <span class="text-white/80">Power BI, Tableau, and Amazon QuickSight</span>.
              </p>
              <p>
                As an intern at
                <span class="text-white/80">Bean Infosystems, Hyderabad</span>,
                I optimized database queries, debugged application issues, and collaborated
                on backend data integration — gaining real-world experience working within
                a development team.
              </p>
              <p>
                I also enjoy building
                <span class="text-white/80">full-stack web apps</span>
                with Flask, FastAPI, and Vue.js, and I'm always exploring how data science
                and software engineering come together to solve real problems.
              </p>
            </div>
          </GlassCard>
        </div>

        <!-- Right: Stats + Tech -->
        <div class="lg:col-span-5 space-y-8">
          <!-- Stats Grid -->
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="(stat, i) in stats"
              :key="i"
              class="glass rounded-xl p-5 text-center transition-all duration-500 hover:scale-[1.02]"
              :style="{ transitionDelay: `${i * 100}ms` }"
            >
              <div class="text-3xl md:text-4xl font-bold gradient-text mb-1">
                {{ stat.value }}
              </div>
              <div class="text-xs text-white/40 font-mono uppercase tracking-wider">
                {{ stat.label }}
              </div>
            </div>
          </div>

          <!-- Tech Stack Cloud -->
          <GlassCard>
            <p class="text-xs font-mono tracking-widest uppercase text-white/30 mb-4">
              Tech Stack
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(tech, i) in techStack"
                :key="i"
                class="px-3 py-1.5 text-xs rounded-lg glass text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-default"
              >
                {{ tech }}
              </span>
            </div>
          </GlassCard>

          <!-- Education -->
          <GlassCard>
            <p class="text-xs font-mono tracking-widest uppercase text-white/30 mb-4">
              Education
            </p>
            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <div class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                <div>
                  <p class="text-white text-sm font-medium">B.Tech in Data Science & Big Data Analytics</p>
                  <p class="text-white/40 text-xs">Koneru Lakshmaiah Education Foundation — 2022-2026</p>
                  <p class="text-white/30 text-xs mt-0.5">CGPA: 8.8 / 10</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  </section>
</template>
