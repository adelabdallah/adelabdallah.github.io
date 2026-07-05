<script setup lang="ts">
import TerminalTitle from './components/TerminalTitle.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import Subtitle from './components/Subtitle.vue'
import SocialLinks from './components/SocialLinks.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import { pdfResumeAvailable } from './content/resume'
</script>

<template>
  <main class="page">
    <TerminalTitle>
      <ThemeToggle />
    </TerminalTitle>
    <Subtitle />
    <SocialLinks />
    <AboutSection />
    <ExperienceSection />
    <SkillsSection />

    <section class="section resume-download" aria-label="Resume download">
      <a
        v-if="pdfResumeAvailable"
        href="/adel_abdallah_resume.pdf"
        class="download-btn"
        download
      >
        Download PDF Resume
      </a>
      <span v-else class="download-unavailable" aria-disabled="true">
        PDF resume coming soon
      </span>
    </section>
  </main>
</template>

<style scoped>
.resume-download {
  margin-top: 3rem;
  padding-top: 0;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.625rem 1.25rem;
  border-radius: var(--radius);
  background: var(--accent-orange);
  color: var(--on-accent);
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.download-btn:hover {
  background: var(--accent-orange-hover);
}

.download-btn:focus-visible {
  outline: 2px solid var(--accent-cyan);
  outline-offset: 2px;
}

.download-unavailable {
  font-size: 0.875rem;
  color: var(--text-muted);
}
</style>
