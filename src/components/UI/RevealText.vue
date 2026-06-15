<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
  mode: { type: String, default: 'word' }, // word | char
  delay: { type: Number, default: 0 },
  class: { type: String, default: '' },
  as: { type: String, default: 'span' },
})

const elRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.1 }
  )
  if (elRef.value) observer.observe(elRef.value)
})

const words = props.text.split(' ')
const chars = props.text.split('')
</script>

<template>
  <component :is="as" ref="elRef" :class="['inline', props.class]">
    <template v-if="mode === 'word'">
      <span
        v-for="(word, i) in words"
        :key="i"
        class="inline-block overflow-hidden"
      >
        <span
          class="inline-block transition-all duration-700 ease-out"
          :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'"
          :style="{
            transitionDelay: `${delay + i * 40}ms`,
          }"
        >{{ word }}&nbsp;</span>
      </span>
    </template>
    <template v-else>
      <span
        v-for="(char, i) in chars"
        :key="i"
        class="inline-block overflow-hidden"
      >
        <span
          class="inline-block transition-all duration-500 ease-out"
          :class="isVisible ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-4 opacity-0 rotate-6'"
          :style="{
            transitionDelay: `${delay + i * 20}ms`,
          }"
        >{{ char === ' ' ? '&nbsp;' : char }}</span>
      </span>
    </template>
  </component>
</template>
