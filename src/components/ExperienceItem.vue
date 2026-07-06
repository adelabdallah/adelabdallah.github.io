<script setup lang="ts">
import { ref } from 'vue'
import type { ExperienceEntry } from '../content/resume'
import { useGlowSpotlight } from '../composables/useGlowSpotlight'
import GlowPill from './GlowPill.vue'

defineProps<{
  entry: ExperienceEntry
  expanded: boolean
}>()

const emit = defineEmits<{
  toggle: []
}>()

const headerEl = ref<HTMLElement | null>(null)
const { onMouseMove, glowStyle } = useGlowSpotlight(headerEl, 100)
</script>

<template>
  <div class="experience-item" :class="{ 'experience-item--expanded': expanded }">
    <div
      ref="headerEl"
      class="experience-header-surface glow-surface"
      @mousemove="onMouseMove"
    >
      <span class="glow-surface__glow" aria-hidden="true" :style="glowStyle"></span>
      <button
        :id="`exp-header-${entry.id}`"
        class="experience-header glow-surface__content"
        type="button"
        :aria-expanded="expanded"
        :aria-controls="`exp-panel-${entry.id}`"
        @click="emit('toggle')"
      >
        <span class="experience-summary">
          <span class="experience-role">{{ entry.title }}</span>
          <span class="experience-separator" aria-hidden="true">·</span>
          <span class="experience-company">{{ entry.company }}</span>
        </span>
        <span class="experience-dates">{{ entry.startDate }} – {{ entry.endDate }}</span>
        <svg
          class="chevron"
          :class="{ 'chevron--open': expanded }"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </div>
    <div
      :id="`exp-panel-${entry.id}`"
      class="experience-panel-wrapper"
      :class="{ 'experience-panel-wrapper--expanded': expanded }"
      role="region"
      :aria-labelledby="`exp-header-${entry.id}`"
      :aria-hidden="!expanded"
      :inert="!expanded"
    >
      <div class="experience-panel">
        <ul class="experience-bullets">
          <li v-for="(bullet, index) in entry.bullets" :key="index">{{ bullet }}</li>
        </ul>
        <ul v-if="entry.tech?.length" class="experience-tech">
          <GlowPill v-for="tech in entry.tech" :key="tech" :label="tech" />
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-item {
  border: 1px solid color-mix(in srgb, var(--accent-pink) 30%, var(--border));
  border-radius: var(--radius);
  background: var(--bg-elevated);
  overflow: hidden;
  transition: border-color 500ms ease;
}

.experience-item--expanded {
  border-color: var(--accent-cyan);
}

.experience-item:not(.experience-item--expanded):has(.experience-header-surface:hover) {
  border-color: var(--accent-cyan);
}

.experience-header-surface {
  border-bottom: 1px solid transparent;
  transition: border-color 500ms ease;
}

.experience-item--expanded .experience-header-surface,
.experience-item--expanded .experience-header-surface:hover {
  border-bottom-color: transparent;
}

.experience-header {
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem 1.125rem;
  border: none;
  background: transparent;
  color: var(--text);
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.experience-header:focus-visible {
  outline: 2px solid var(--accent-cyan);
  outline-offset: -2px;
}

.experience-summary {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.35rem;
  min-width: 0;
}

.experience-role {
  font-weight: 600;
}

.experience-separator {
  color: var(--text-muted);
}

.experience-company {
  color: var(--text-muted);
}

.experience-dates {
  font-size: 0.875rem;
  color: var(--text-muted);
  white-space: nowrap;
}

.chevron {
  flex-shrink: 0;
  color: var(--text-muted);
  transition: transform 0.2s ease;
}

.chevron--open {
  transform: rotate(180deg);
}

.experience-panel-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 300ms ease;
}

.experience-panel-wrapper--expanded {
  grid-template-rows: 1fr;
}

.experience-panel {
  overflow: hidden;
  padding: 0 1.125rem;
  transition: padding 300ms ease;
}

.experience-panel-wrapper--expanded .experience-panel {
  padding: 0 1.125rem 1.125rem;
  border-top: 1px solid var(--border);
}

.experience-bullets {
  margin: 1rem 0 0;
  padding-left: 1.25rem;
  color: var(--text);
}

.experience-bullets li {
  margin-bottom: 0.375rem;
}

.experience-bullets li:last-child {
  margin-bottom: 0;
}

.experience-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}

@media (max-width: 600px) {
  .experience-header {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
  }

  .experience-dates {
    grid-column: 1;
    grid-row: 2;
    font-size: 0.8125rem;
  }

  .chevron {
    grid-column: 2;
    grid-row: 1 / 3;
    align-self: center;
  }
}
</style>
