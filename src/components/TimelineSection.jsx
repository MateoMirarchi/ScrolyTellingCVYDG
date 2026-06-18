// Esta sección agrega interacción puntual con una línea de tiempo de cinco hitos.
import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

function TimelineSection({ entries }) {
  const [activeYear, setActiveYear] = useState(entries[0]?.year)
  const [sectionRef, { isVisible, scrollDirection }] = useScrollReveal({ threshold: 0.25 })
  const foundIndex = entries.findIndex((entry) => entry.year === activeYear)
  const activeIndex = foundIndex >= 0 ? foundIndex : 0
  const activeEntry = entries[activeIndex]
  const colorWidth = `${Math.round((activeIndex / Math.max(entries.length - 1, 1)) * 100)}%`

  return (
    <section
      ref={sectionRef}
      className={`timeline-section ${isVisible ? 'is-visible' : ''}`}
      data-scroll-direction={scrollDirection}
      style={{ '--timeline-color-width': colorWidth }}
    >
      <div className="timeline-section__backdrop" aria-hidden="true" />

      <div className="timeline-section__content">
        <Reveal as="article" className="timeline-panel" key={activeEntry.year} role="tabpanel" variant="scale">
          <span className="timeline-panel__year">{activeEntry.year}</span>
          {activeEntry.title && <h3 className="timeline-panel__title">{activeEntry.title}</h3>}
          <p>{activeEntry.copy}</p>
        </Reveal>

        <div className="timeline-section__buttons" role="tablist" aria-label="Hitos del relato">
          <div className="timeline-section__track" aria-hidden="true" />

          {entries.map((entry, index) => (
            <button
              key={entry.year}
              type="button"
              className={`timeline-step timeline-step--${index % 2 === 0 ? 'top' : 'bottom'} ${entry.year === activeYear ? 'is-active' : ''}`}
              onClick={() => setActiveYear(entry.year)}
              role="tab"
              aria-selected={entry.year === activeYear}
              style={{ '--button-delay': `${220 + index * 70}ms` }}
            >
              <span className="timeline-step__label">{entry.year}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TimelineSection