// El hook detecta entrada y salida del viewport para repetir animaciones según la dirección del scroll.
//PRUEBA CORRECCION SCROLL
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

    // Si el proyecto usa un contenedor de scroll personalizado (p.ej. `.page-shell`),
    // debemos usar ese elemento como `root` del IntersectionObserver para que
    // la detección de intersección funcione con el scroll interno.
    const rootNode = element.closest('.page-shell') || null

    // Inicializamos la posición de scroll según el root utilizado
    lastScrollY.current = rootNode ? rootNode.scrollTop : window.scrollY

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cuando observamos un contenedor de scroll interno (p.ej. `.page-shell`),
        // debemos consultar `scrollTop` sobre ese root. En caso contrario usar `window.scrollY`.
        const nextScrollY = rootNode ? rootNode.scrollTop : window.scrollY
        const scrollDirection = nextScrollY >= lastScrollY.current ? 'down' : 'up'

        lastScrollY.current = nextScrollY
        setRevealState({
          isVisible: entry.isIntersecting,
          scrollDirection,
        })
      },
      {
        root: rootNode,
        threshold: options.threshold ?? 0.2,
        rootMargin: options.rootMargin ?? '0px 0px -10% 0px',
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [options.rootMargin, options.threshold])

  return [elementRef, revealState]
}
