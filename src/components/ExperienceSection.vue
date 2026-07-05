<script setup lang="ts">
import { ref } from 'vue'
import { experience } from '../content/resume'
import ExperienceItem from './ExperienceItem.vue'

const openId = ref<string | null>(null)

function toggle(id: string) {
  openId.value = openId.value === id ? null : id
}
</script>

<template>
  <section class="section" aria-labelledby="experience-heading">
    <h2 id="experience-heading" class="section-title">Professional Experience</h2>
    <div class="experience-list">
      <ExperienceItem
        v-for="entry in experience"
        :key="entry.id"
        :entry="entry"
        :expanded="openId === entry.id"
        @toggle="toggle(entry.id)"
      />
    </div>
  </section>
</template>

<style scoped>
.experience-list {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}
</style>
