// La cabecera abre el recorrido con video de fondo y llamada a la acción.
import Reveal from './Reveal.jsx'
import heroImg from '../assets/IMAGEN PORTADA.jpeg'

function HeroSection({ title, subtitle, creator, video, backgroundImage }) {
  const bg =
    backgroundImage ||
    `linear-gradient(135deg, rgba(10,12,20,0.24), rgba(10,12,20,0.62)), url("${heroImg}")`

  return (
    <section className="hero-section">
      <div
        className="hero-section__video"
        style={{ backgroundImage: bg }}
        aria-hidden="true"
      />

      <div className="hero-section__overlay" />
      <div className="hero-section__glow hero-section__glow--left" aria-hidden="true" />
      <div className="hero-section__glow hero-section__glow--right" aria-hidden="true" />

      <div className="hero-section__content">
        <Reveal as="h1" className="hero-section__title" delay={90} variant="sweep">
          {title}
        </Reveal>
        <Reveal as="p" className="hero-section__subtitle" delay={180} variant="right">
          {subtitle}
        </Reveal>

        <Reveal as="div" className="hero-section__actions" delay={320} variant="up">
        </Reveal>
      </div>
    </section>
  )
}

export default HeroSection