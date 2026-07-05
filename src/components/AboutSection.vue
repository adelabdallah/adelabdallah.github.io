<script setup lang="ts">
import { about } from '../content/resume'
</script>

<template>
  <section class="section" aria-labelledby="about-heading">
    <p class="about-text">{{ about }}</p>
  </section>
</template>

<style scoped>
.about-text {
  margin: 0;
  font-size: 1.0625rem;
  color: var(--text);
}
</style>
