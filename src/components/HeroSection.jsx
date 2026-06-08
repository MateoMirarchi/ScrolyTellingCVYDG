// La cabecera abre el recorrido con video de fondo y llamada a la acción.
import Reveal from './Reveal.jsx'

function HeroSection({ title, subtitle, creator, video }) {
  return (
    <section className="hero-section">
      <video
        className="hero-section__video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src={video.webm} type="video/webm" />
        <source src={video.mp4} type="video/mp4" />
      </video>

      <div className="hero-section__overlay" />
      <div className="hero-section__glow hero-section__glow--left" aria-hidden="true" />
      <div className="hero-section__glow hero-section__glow--right" aria-hidden="true" />

      <div className="hero-section__content">
        <Reveal as="p" className="hero-section__eyebrow" variant="left">
          Storytelling Visual
        </Reveal>
        <Reveal as="h1" className="hero-section__title" delay={90} variant="sweep">
          {title}
        </Reveal>
        <Reveal as="p" className="hero-section__subtitle" delay={180} variant="right">
          {subtitle}
        </Reveal>

        <Reveal as="div" className="hero-section__meta" delay={240} variant="scale">
          <span className="hero-section__creator-label">Creado por</span>
          <strong>{creator}</strong>
        </Reveal>

        <Reveal as="div" className="hero-section__actions" delay={320} variant="up">
          <a className="hero-button" href="#story-start-section">
            Explorar relato
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export default HeroSection