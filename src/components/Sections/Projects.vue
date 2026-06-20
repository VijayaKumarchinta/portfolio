<script setup>
import GlassCard from '@/components/UI/GlassCard.vue'
import MagneticButton from '@/components/UI/MagneticButton.vue'
import RevealText from '@/components/UI/RevealText.vue'

const projects = [
  {
    title: 'Liverseg',
    subtitle: 'Liver Segmentation with Attention U-Net',
    description: 'Advanced deep learning project implementing Attention U-Net architecture for automated liver and tumor segmentation from CT scans. Achieved high Dice scores using PyTorch and MONAI framework.',
    tags: ['PyTorch', 'MONAI', 'Deep Learning', 'Medical Imaging', 'OpenCV'],
    github: 'https://github.com/VijayaKumarchinta/Liver_Segmentation',
    color: 'rgba(96, 165, 250, 0.2)',
  },
  {
    title: 'Haett Partner Portal',
    subtitle: 'Assessment Platform with RBAC',
    description: 'Developed a full-stack assessment partner portal using Vue.js, FastAPI, and PostgreSQL with role-based access control. Features include secure user authentication, assessment management, real-time scoring, and comprehensive reporting dashboards.',
    tags: ['Vue.js', 'FastAPI', 'PostgreSQL', 'JWT Auth', 'Python', 'RBAC'],
    github: 'https://github.com/VijayaKumarchinta/HaettAssessment',
    color: 'rgba(167, 139, 250, 0.2)',
  },
  {
    title: 'Customer Segmentation Dashboard',
    subtitle: '1M+ Transactions Analyzed',
    description: 'Analyzed over 1 million transactions using K-Means clustering with RFM analysis to segment customers. Deployed an interactive dashboard via Streamlit for real-time business insights and data exploration.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'K-Means', 'RFM Analysis'],
    github: null,
    color: 'rgba(52, 211, 153, 0.2)',
  },
]
</script>

<template>
  <section
    id="projects"
    class="relative py-32 md:py-40"
  >
    <div class="section-container">
      <!-- Header -->
      <div class="text-center mb-16">
        <p class="text-xs font-mono tracking-widest uppercase text-white/30 mb-4">
          Featured Work
        </p>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          <RevealText
            text="Projects That Make an Impact"
            mode="word"
          />
        </h2>
        <p class="text-white/40 max-w-xl mx-auto">
          Applying data science and engineering to solve real-world problems.
        </p>
      </div>

      <!-- Project Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard
          v-for="(project, i) in projects"
          :key="i"
          wrapper-class="flex flex-col h-full"
          :glow-color="project.color"
          :style="{ transitionDelay: `${i * 150}ms` }"
        >
          <!-- Card header -->
          <div class="flex items-start justify-between mb-4">
            <div class="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
              <svg class="w-5 h-5 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <span
              v-if="project.github"
              class="text-xs text-white/20 font-mono"
            >public</span>
          </div>

          <h3 class="text-white font-semibold text-lg mb-1">{{ project.title }}</h3>
          <p class="text-xs text-white/40 font-mono mb-3">{{ project.subtitle }}</p>
          <p class="text-white/50 text-sm leading-relaxed mb-6 flex-1 font-light">
            {{ project.description }}
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5 mb-6">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="px-2.5 py-1 text-[10px] rounded-md glass text-white/50"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Action -->
          <div v-if="project.github" class="mt-auto">
            <MagneticButton
              :href="project.github"
              variant="ghost"
              wrapper-class="w-full justify-center text-xs"
            >
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </MagneticButton>
          </div>
        </GlassCard>
      </div>
    </div>
  </section>
</template>
