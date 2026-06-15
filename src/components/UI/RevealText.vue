<script setup>
import { useInView } from '@/composables/useInView'

const props = defineProps({
  text: { type: String, required: true },
  mode: { type: String, default: 'word' }, // word | char
  delay: { type: Number, default: 0 },
  wrapperClass: { type: String, default: '' },
  as: { type: String, default: 'span' },
})

const { elRef, isVisible } = useInView()

const words = props.text.split(' ')
const chars = props.text.split('')
</script>

<template>
  <component :is="as" ref="elRef" :class="['inline', wrapperClass]">
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
>
            {{ word + '\u00A0' }}</span>
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
        >{{ char === ' ' ? '\u00A0' : char }}</span>
      </span>
    </template>
  </component>
</template>
