<script setup lang="ts">
import { ref, computed } from 'vue'
import { siteMeta } from '../content/resume'

const nameEl = ref<HTMLElement | null>(null)
const spotX = ref(0)
const spotY = ref(0)

const SPOT_RADIUS = 100

function onMouseMove(event: MouseEvent) {
  if (!nameEl.value) return
  const rect = nameEl.value.getBoundingClientRect()
  spotX.value = event.clientX - rect.left
  spotY.value = event.clientY - rect.top
}

const highlightStyle = computed(() => ({
  '--x': `${spotX.value}px`,
  '--y': `${spotY.value}px`,
  '--spot-radius': `${SPOT_RADIUS}px`,
}))
</script>

<template>
  <header class="header">
    <h1 class="title">
      <span class="title-line">
        <span ref="nameEl" class="name" @mousemove="onMouseMove">
          <span class="name-base">{{ siteMeta.name }}</span>
          <span class="name-highlight" aria-hidden="true" :style="highlightStyle">
            {{ siteMeta.name }}
          </span>
        </span>
        <span class="cursor" aria-hidden="true">_</span>
      </span>
    </h1>
    <slot />
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.title {
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  font-weight: 600;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.title-line {
  display: inline-flex;
  align-items: baseline;
  line-height: 1;
}

.name {
  position: relative;
  display: inline-block;
}

.name-base {
  color: var(--text);
}

.name-highlight {
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(90deg, var(--accent-cyan), var(--accent-pink));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  pointer-events: none;
  opacity: 0;
  transition: opacity 500ms ease;
  mask-image: radial-gradient(
    circle var(--spot-radius) at var(--x) var(--y),
    #000 0%,
    transparent 100%
  );
  -webkit-mask-image: radial-gradient(
    circle var(--spot-radius) at var(--x) var(--y),
    #000 0%,
    transparent 100%
  );
}

@media (hover: hover) {
  .name:hover .name-highlight {
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .name-highlight {
    display: none;
    transition: none;
  }
}

.title-line .cursor {
  margin-left: 0.02em;
  font-weight: 400;
}
</style>
