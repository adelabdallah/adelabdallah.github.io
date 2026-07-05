import { ref, onMounted } from 'vue'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme)
}

export function useTheme() {
  const theme = ref<Theme>('light')

  onMounted(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
    theme.value = stored ?? getSystemTheme()
    applyTheme(theme.value)

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    media.addEventListener('change', (event) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        theme.value = event.matches ? 'dark' : 'light'
        applyTheme(theme.value)
      }
    })
  })

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    localStorage.setItem(STORAGE_KEY, theme.value)
    applyTheme(theme.value)
  }

  return { theme, toggleTheme }
}
