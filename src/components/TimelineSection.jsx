// Esta sección agrega interacción puntual con una línea de tiempo de cinco hitos.
import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

function TimelineSection({ entries }) {
  const [activeYear, setActiveYear] = useState(entries[0]?.year)
  const [sectionRef, { isVisible, scrollDirection }] = useScrollReveal({ threshold: 0.25 })
  const activeEntry = entries.find((entry) => entry.year === activeYear) ?? entries[0]

  return (
    <section
      ref={sectionRef}
      className={`timeline-section ${isVisible ? 'is-visible' : ''}`}
      data-scroll-direction={scrollDirection}
    >
      <div className="timeline-section__backdrop" aria-hidden="true" />

      <div className="timeline-section__content">
        <Reveal as="p" className="timeline-section__eyebrow" variant="left">
          Línea de tiempo
        </Reveal>
        <Reveal as="h2" className="timeline-section__title" delay={100} variant="sweep">
          Lorem ipsum temporal sit amet
        </Reveal>
        <Reveal as="p" className="timeline-section__summary" delay={180} variant="right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis.
        </Reveal>

        <div className="timeline-section__buttons" role="tablist" aria-label="Hitos del relato">
          {entries.map((entry, index) => (
            <button
              key={entry.year}
              type="button"
              className={`timeline-button ${entry.year === activeYear ? 'is-active' : ''}`}
              onClick={() => setActiveYear(entry.year)}
              role="tab"
              aria-selected={entry.year === activeYear}
              style={{ '--button-delay': `${220 + index * 70}ms` }}
            >
              {entry.year}
            </button>
          ))}
        </div>

        <Reveal as="article" className="timeline-panel" key={activeEntry.year} role="tabpanel" variant="scale">
          <span className="timeline-panel__year">{activeEntry.year}</span>
          <p>{activeEntry.copy}</p>
        </Reveal>
      </div>
    </section>
  )
}

export default TimelineSection