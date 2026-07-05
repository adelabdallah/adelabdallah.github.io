import { ref, computed, type Ref } from 'vue'

export function useGlowSpotlight(
  target: Ref<HTMLElement | null>,
  spotRadius = 70,
) {
  const spotX = ref(0)
  const spotY = ref(0)

  function onMouseMove(event: MouseEvent) {
    if (!target.value) return
    const rect = target.value.getBoundingClientRect()
    spotX.value = event.clientX - rect.left
    spotY.value = event.clientY - rect.top
  }

  const glowStyle = computed(() => ({
    '--x': `${spotX.value}px`,
    '--y': `${spotY.value}px`,
    '--spot-radius': `${spotRadius}px`,
  }))

  return { onMouseMove, glowStyle }
}
