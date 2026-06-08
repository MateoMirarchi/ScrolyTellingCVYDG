// El hook detecta entrada y salida del viewport para repetir animaciones según la dirección del scroll.
import { useEffect, useRef, useState } from 'react'

export function useScrollReveal(options = {}) {
  const elementRef = useRef(null)
  const lastScrollY = useRef(0)
  const [revealState, setRevealState] = useState({
    isVisible: false,
    scrollDirection: 'down',
  })

  useEffect(() => {
    const element = elementRef.current

    if (!element) {
      return undefined
    }

    lastScrollY.current = window.scrollY

    const observer = new IntersectionObserver(
      ([entry]) => {
        const nextScrollY = window.scrollY
        const scrollDirection = nextScrollY >= lastScrollY.current ? 'down' : 'up'

        lastScrollY.current = nextScrollY
        setRevealState({
          isVisible: entry.isIntersecting,
          scrollDirection,
        })
      },
      {
        threshold: options.threshold ?? 0.2,
        rootMargin: options.rootMargin ?? '0px 0px -10% 0px',
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [options.rootMargin, options.threshold])

  return [elementRef, revealState]
}