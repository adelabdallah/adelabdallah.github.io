<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { subtitlePhrases } from '../content/resume'
import { useTypewriter } from '../composables/useTypewriter'

const currentPhrase = ref(subtitlePhrases[0] ?? '')
const { displayedText, isReady, typeText } = useTypewriter(currentPhrase.value, {
  typeDelayMs: 30,
  spaceDelayMs: 50,
})

function pickRandomPhrase(exclude?: string): string {
  if (subtitlePhrases.length === 0) return ''
  if (subtitlePhrases.length === 1) return subtitlePhrases[0] ?? ''

  let next = exclude ?? subtitlePhrases[0] ?? ''
  while (next === exclude) {
    const index = Math.floor(Math.random() * subtitlePhrases.length)
    next = subtitlePhrases[index] ?? next
  }
  return next
}

function showPhrase(phrase: string) {
  currentPhrase.value = phrase
  typeText(phrase)
}

onMounted(() => {
  showPhrase(pickRandomPhrase(currentPhrase.value))
})

function onSubtitleClick() {
  showPhrase(pickRandomPhrase(currentPhrase.value))
}
</script>

<template>
  <section class="section subtitle-section" aria-label="Subtitle">
    <button
      type="button"
      class="subtitle"
      :aria-label="`Show another subtitle. Current: ${currentPhrase}`"
      @click="onSubtitleClick"
    >
      <span class="subtitle-prompt" aria-hidden="true">&gt;</span>
      <span class="subtitle-line" :class="{ 'is-ready': isReady }">
        <span class="subtitle-text">{{ displayedText }}</span>
      </span>
    </button>
  </section>
</template>

<style scoped>
.subtitle-section {
  margin-top: 0.75rem;
}

.subtitle {
  display: inline-flex;
  align-items: baseline;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  font-size: 1rem;
  text-align: left;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.subtitle-prompt {
  color: var(--accent-pink);
  flex-shrink: 0;
}

.subtitle-line {
  display: inline-flex;
  align-items: baseline;
  opacity: 0;
  transition: opacity 150ms ease;
}

.subtitle-line.is-ready {
  opacity: 1;
}

.subtitle-text {
  color: var(--accent-cyan);
  opacity: 0.9;
  transition: color 0.2s ease;
}

.subtitle:hover .subtitle-text {
  opacity: 1;
  color: var(--accent-pink);
}

.subtitle:focus-visible {
  outline: 2px solid var(--accent-cyan);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .subtitle-line {
    opacity: 1;
    transition: none;
  }
}
</style>
