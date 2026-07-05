<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { subtitlePhrases } from '../content/resume'

const phrase = ref(subtitlePhrases[0] ?? '')

function pickRandomPhrase(exclude?: string) {
  if (subtitlePhrases.length === 0) return
  if (subtitlePhrases.length === 1) {
    phrase.value = subtitlePhrases[0] ?? ''
    return
  }

  let next = phrase.value
  while (next === exclude) {
    const index = Math.floor(Math.random() * subtitlePhrases.length)
    next = subtitlePhrases[index] ?? next
  }
  phrase.value = next
}

onMounted(() => {
  pickRandomPhrase(phrase.value)
})

function onSubtitleClick() {
  pickRandomPhrase(phrase.value)
}
</script>

<template>
  <section class="section subtitle-section" aria-label="Subtitle">
    <button
      type="button"
      class="subtitle"
      aria-label="Show another subtitle"
      @click="onSubtitleClick"
    >
      <span class="subtitle-prompt" aria-hidden="true">&gt;</span>
      <span class="subtitle-text">{{ phrase }}</span>
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

.subtitle-text {
  color: var(--accent-cyan);
  opacity: 0.9;
  transition: opacity 0.2s ease, color 0.2s ease;
}

.subtitle:hover .subtitle-text {
  opacity: 1;
  color: var(--accent-pink);
}

.subtitle:focus-visible {
  outline: 2px solid var(--accent-cyan);
  outline-offset: 2px;
}
</style>
