// El cierre sintetiza el recorrido y muestra el crédito final solicitado.
import Reveal from './Reveal.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

function FinalSection({ title, copy, credits, backgroundImage }) {
  const [sectionRef, { isVisible, scrollDirection }] = useScrollReveal({ threshold: 0.25 })

  return (
    <section
      ref={sectionRef}
      className={`final-section ${isVisible ? 'is-visible' : ''}`}
      data-scroll-direction={scrollDirection}
    >
      <div className="final-section__background" style={{ backgroundImage }} aria-hidden="true" />
      <div className="final-section__overlay" aria-hidden="true" />

      <div className="final-section__content">
        <Reveal as="p" className="final-section__eyebrow" variant="left">
          Cierre visual
        </Reveal>
        <Reveal as="h2" className="final-section__title" delay={100} variant="sweep">
          {title}
        </Reveal>
        <Reveal as="p" className="final-section__copy" delay={180} variant="right">
          {copy}
        </Reveal>
        <Reveal as="p" className="final-section__credits" delay={260} variant="scale">
          {credits}
        </Reveal>
      </div>
    </section>
  )
}

export default FinalSection