import { useEffect, useRef } from 'react'

const focusableSelector =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function useFocusTrap(isOpen, containerRef, onEscape, restoreRef) {
  const previousFocusRef = useRef(null)

  useEffect(() => {
    if (!isOpen || !containerRef.current) return undefined

    previousFocusRef.current = document.activeElement
    const restoreTarget = restoreRef?.current
    const container = containerRef.current
    const focusable = container.querySelectorAll(focusableSelector)
    focusable[0]?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onEscape?.()
        return
      }
      if (event.key !== 'Tab') return

      const items = container.querySelectorAll(focusableSelector)
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      const target = restoreTarget || previousFocusRef.current
      target?.focus?.()
    }
  }, [containerRef, isOpen, onEscape, restoreRef])
}
