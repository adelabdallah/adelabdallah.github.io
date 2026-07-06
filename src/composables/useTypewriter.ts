import { ref, onMounted, onUnmounted } from 'vue'

export const DEFAULT_TYPE_DELAY_MS = 75
export const DEFAULT_SPACE_DELAY_MS = 120

export interface TypewriterOptions {
  typeDelayMs?: number
  spaceDelayMs?: number
}

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function useTypewriter(initialText = '', options: TypewriterOptions = {}) {
  const typeDelayMs = options.typeDelayMs ?? DEFAULT_TYPE_DELAY_MS
  const spaceDelayMs = options.spaceDelayMs ?? DEFAULT_SPACE_DELAY_MS

  const displayedText = ref(initialText)
  const isReady = ref(false)
  let typeTimer: ReturnType<typeof setTimeout> | undefined

  function clearTypeTimer() {
    if (typeTimer !== undefined) {
      clearTimeout(typeTimer)
      typeTimer = undefined
    }
  }

  function typeText(text: string) {
    clearTypeTimer()

    if (prefersReducedMotion()) {
      displayedText.value = text
      return
    }

    let index = 0
    displayedText.value = ''

    const typeNext = () => {
      if (index >= text.length) return

      index += 1
      displayedText.value = text.slice(0, index)
      const delay = text[index - 1] === ' ' ? spaceDelayMs : typeDelayMs
      typeTimer = setTimeout(typeNext, delay)
    }

    typeNext()
  }

  onMounted(() => {
    isReady.value = true
  })

  onUnmounted(() => {
    clearTypeTimer()
  })

  return {
    displayedText,
    isReady,
    typeText,
  }
}
