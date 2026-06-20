<script setup>
import { ref } from 'vue'
import GlassCard from '@/components/UI/GlassCard.vue'
import MagneticButton from '@/components/UI/MagneticButton.vue'
import RevealText from '@/components/UI/RevealText.vue'

const contactInfo = [
  {
    label: 'Email',
    value: 'vijayakumar.chinta15@gmail.com',
    href: 'mailto:vijayakumar.chinta15@gmail.com',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    label: 'Phone',
    value: '+91 8187023747',
    href: 'tel:+918187023747',
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
  },
]

const socialLinks = [
  { label: 'GitHub', url: 'https://github.com/VijayaKumarchinta', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/vijaya-kumar-chinta-4a9551251/', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { label: 'Instagram', url: 'https://www.instagram.com/_vijayakumar.chinta_/', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
  { label: 'Discord', url: 'https://discord.com/users/__j_s__', icon: 'M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z' },
]

// ── Form state ──
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const formState = ref('idle') // idle | loading | success | error
const errorMessage = ref('')
const successMessage = ref('')

const errors = ref({})

function validate() {
  const errs = {}
  if (!formData.value.name.trim()) errs.name = 'Name is required'
  if (!formData.value.email.trim()) {
    errs.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errs.email = 'Please enter a valid email'
  }
  if (!formData.value.message.trim()) errs.message = 'Message is required'
  errors.value = errs
  return Object.keys(errs).length === 0
}

async function handleSubmit() {
  if (!validate()) return

  formState.value = 'loading'
  errorMessage.value = ''
  successMessage.value = ''

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData.value),
    })

    const data = await res.json()

    if (res.ok) {
      formState.value = 'success'
      successMessage.value = data.message || 'Message sent successfully!'
      formData.value = { name: '', email: '', subject: '', message: '' }
      errors.value = {}
    } else {
      formState.value = 'error'
      errorMessage.value = data.error || 'Something went wrong. Please try again.'
    }
  } catch {
    formState.value = 'error'
    errorMessage.value = 'Network error. Please check your connection and try again.'
  }
}
</script>

<template>
  <section
    id="contact"
    class="relative py-32 md:py-40"
  >
    <div class="section-container">
      <!-- Header -->
      <div class="text-center mb-16">
        <p class="text-xs font-mono tracking-widest uppercase text-white/30 mb-4">
          Connect
        </p>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          <RevealText
            text="Let's Work Together"
            mode="word"
          />
        </h2>
        <p class="text-white/40 max-w-xl mx-auto font-light">
          Have a project, question, or just want to connect? I'm always open to new opportunities.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <!-- Contact Info & Social -->
        <div class="lg:col-span-2 space-y-4">
          <GlassCard
            v-for="(info, i) in contactInfo"
            :key="i"
          >
            <a
              :href="info.href"
              class="flex items-center gap-4 group"
            >
              <div class="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <svg
                  class="w-5 h-5 text-white/40 group-hover:text-white/70 transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path :d="info.icon" />
                </svg>
              </div>
              <div>
                <p class="text-xs text-white/30 font-mono">{{ info.label }}</p>
                <p class="text-white/70 group-hover:text-white transition-colors text-sm">{{ info.value }}</p>
              </div>
            </a>
          </GlassCard>

          <!-- Social Links (compact) -->
          <GlassCard>
            <div class="flex flex-wrap gap-2">
              <a
                v-for="(social, i) in socialLinks"
                :key="i"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 px-3 py-2 rounded-lg glass hover:bg-white/5 transition-all duration-200 group"
              >
                <svg
                  class="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path :d="social.icon" />
                </svg>
                <span class="text-xs text-white/40 group-hover:text-white/70 transition-colors">{{ social.label }}</span>
              </a>
            </div>
          </GlassCard>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-3">
          <GlassCard>
            <p class="text-xs font-mono tracking-widest uppercase text-white/30 mb-6">
              Send a message
            </p>

            <form @submit.prevent="handleSubmit" novalidate>
              <div class="space-y-4">
                <!-- Name -->
                <div>
                  <input
                    v-model="formData.name"
                    type="text"
                    placeholder="Your name *"
                    class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 outline-none transition-all duration-200 focus:border-blue-500/50 focus:bg-white/[0.07]"
                    :class="errors.name ? 'border-red-500/50' : ''"
                    :disabled="formState === 'loading'"
                  />
                  <p v-if="errors.name" class="text-red-400 text-xs mt-1.5 px-1">{{ errors.name }}</p>
                </div>

                <!-- Email -->
                <div>
                  <input
                    v-model="formData.email"
                    type="email"
                    placeholder="Your email *"
                    class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 outline-none transition-all duration-200 focus:border-blue-500/50 focus:bg-white/[0.07]"
                    :class="errors.email ? 'border-red-500/50' : ''"
                    :disabled="formState === 'loading'"
                  />
                  <p v-if="errors.email" class="text-red-400 text-xs mt-1.5 px-1">{{ errors.email }}</p>
                </div>

                <!-- Subject -->
                <div>
                  <input
                    v-model="formData.subject"
                    type="text"
                    placeholder="Subject (optional)"
                    class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 outline-none transition-all duration-200 focus:border-blue-500/50 focus:bg-white/[0.07]"
                    :disabled="formState === 'loading'"
                  />
                </div>

                <!-- Message -->
                <div>
                  <textarea
                    v-model="formData.message"
                    rows="4"
                    placeholder="Your message *"
                    class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 outline-none transition-all duration-200 focus:border-blue-500/50 focus:bg-white/[0.07] resize-none"
                    :class="errors.message ? 'border-red-500/50' : ''"
                    :disabled="formState === 'loading'"
                  />
                  <p v-if="errors.message" class="text-red-400 text-xs mt-1.5 px-1">{{ errors.message }}</p>
                </div>

                <!-- Error banner -->
                <div
                  v-if="formState === 'error' && errorMessage"
                  class="flex items-start gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20"
                >
                  <svg class="w-4 h-4 text-red-400 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <p class="text-red-300 text-xs">{{ errorMessage }}</p>
                </div>

                <!-- Success banner -->
                <div
                  v-if="formState === 'success' && successMessage"
                  class="flex items-start gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
                >
                  <svg class="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <p class="text-emerald-300 text-xs">{{ successMessage }}</p>
                </div>

                <!-- Submit -->
                <button
                  type="submit"
                  :disabled="formState === 'loading'"
                  class="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 bg-white text-dark-950 hover:bg-white/90 shadow-lg shadow-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg
                    v-if="formState === 'loading'"
                    class="w-4 h-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 12a9 9 0 11-6.219-8.56" />
                  </svg>
                  <svg
                    v-else
                    class="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" /><polyline points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  {{ formState === 'loading' ? 'Sending...' : 'Send Message' }}
                </button>
              </div>
            </form>
          </GlassCard>
        </div>
      </div>
    </div>
  </section>
</template>
