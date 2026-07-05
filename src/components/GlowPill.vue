<script setup lang="ts">
import { ref } from 'vue'
import { useGlowSpotlight } from '../composables/useGlowSpotlight'

defineProps<{
  label: string
}>()

const pillEl = ref<HTMLElement | null>(null)
const { onMouseMove, glowStyle } = useGlowSpotlight(pillEl, 70)
</script>

<template>
  <li ref="pillEl" class="glow-pill glow-surface" @mousemove="onMouseMove">
    <span class="glow-surface__glow" aria-hidden="true" :style="glowStyle"></span>
    <span class="glow-surface__content glow-pill-text">{{ label }}</span>
  </li>
</template>

<style scoped>
.glow-pill {
  font-size: 0.875rem;
  padding: 0.35rem 0.75rem;
  border-radius: var(--radius);
  border: 1px solid color-mix(in srgb, var(--accent-pink) 30%, var(--border));
  background: var(--bg-elevated);
  cursor: default;
}

@media (hover: hover) {
  .glow-pill:hover {
    border-color: var(--accent-cyan);
  }
}

.glow-pill-text {
  color: var(--text);
}
</style>
