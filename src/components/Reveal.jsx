// Reveal encapsula la lógica de entrada para textos y tarjetas al aparecer en pantalla.
import { createElement } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

function Reveal({
  as = 'div',
  className = '',
  children,
  delay = 0,
  threshold = 0.25,
  variant = 'up',
}) {
  const [ref, { isVisible, scrollDirection }] = useScrollReveal({ threshold })

  return createElement(
    as,
    {
      ref,
      className: `reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim(),
      style: { '--reveal-delay': `${delay}ms` },
      'data-variant': variant,
      'data-scroll-direction': scrollDirection,
    },
    children,
  )
}

export default Reveal