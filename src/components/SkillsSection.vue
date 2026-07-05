<script setup lang="ts">
import { skills } from '../content/resume'
import GlowPill from './GlowPill.vue'
</script>

<template>
  <section class="section" aria-labelledby="skills-heading">
    <h2 id="skills-heading" class="section-title">Skills</h2>
    <ul class="skills-list">
      <GlowPill v-for="skill in skills" :key="skill" :label="skill" />
    </ul>
  </section>
</template>

<style scoped>
.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
