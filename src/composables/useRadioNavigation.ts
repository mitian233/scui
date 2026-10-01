/** Select synchronously on arrow-driven focus, including a quick keydown/keyup pair. */
export function useRadioNavigation(select: (value: string) => void) {
  let navigating = false
  return {
    onKeydown(event: KeyboardEvent) { navigating = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key) },
    onKeyup() { navigating = false },
    onFocus(value: string) { if (navigating) select(value) },
  }
}
