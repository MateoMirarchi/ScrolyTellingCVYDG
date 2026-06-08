// StorySection reutiliza la misma estructura para escenas intermedias y bloques adicionales.
import Reveal from './Reveal.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

function StorySection({
  eyebrow,
  title,
  paragraphs,
  backgroundImage,
  accent,
  align = 'left',
  sectionId,
}) {
  const [sectionRef, { isVisible, scrollDirection }] = useScrollReveal({ threshold: 0.2 })
  const introVariant = align === 'left' ? 'left' : 'right'
  const cardVariant = align === 'left' ? 'right' : 'left'

  return (
    <section
      id={sectionId}
      ref={sectionRef}
      className={`story-section story-section--${align} ${isVisible ? 'is-visible' : ''}`}
      style={{ '--story-accent': accent }}
      data-scroll-direction={scrollDirection}
    >
      <div className="story-section__visual" style={{ backgroundImage }} aria-hidden="true" />
      <div className="story-section__veil" aria-hidden="true" />

      <div className="story-section__inner">
        <div className="story-section__intro">
          <Reveal as="p" className="story-section__eyebrow" variant={introVariant}>
            {eyebrow}
          </Reveal>
          <Reveal as="h2" className="story-section__title" delay={100} variant="sweep">
            {title}
          </Reveal>
        </div>

        <div className="story-section__cards">
          {paragraphs.map((paragraph, index) => (
            <Reveal
              as="article"
              className="story-card"
              delay={160 + index * 120}
              key={`${title}-${index}`}
              variant={index % 2 === 0 ? cardVariant : 'up'}
            >
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StorySection