// Esta página ordena el relato vertical con secciones reutilizables y contenido simulado.
import FinalSection from '../components/FinalSection.jsx'
import HeroSection from '../components/HeroSection.jsx'
import StorySection from '../components/StorySection.jsx'
import TimelineSection from '../components/TimelineSection.jsx'
import { useEffect } from 'react'
import {
  additionalSections,
  finalSection,
  heroSection,
  storySections,
  timelineEntries,
} from '../utils/storyContent.js'

function HomePage() {
  useEffect(() => {
    // Aseguramos que el contenedor `.page-shell` arranque en la portada.
    // Algunos navegadores aplican automáticamente el 'hash' de la URL
    // y desplazan el scroll al ancla correspondiente antes de que React monte.
    // Para evitar que la app se muestre en la Página 2, limpiamos el hash
    // y forzamos el scroll al top desactivando temporalmente el scroll-snap.
    const shell = document.querySelector('.page-shell')
    if (!shell) return

    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search)
    }

    const prevSnap = shell.style.scrollSnapType
    // Desactivar snap momentáneamente para que scrollTo(0) no sea corregido.
    shell.style.scrollSnapType = 'none'
    shell.scrollTo({ top: 0 })

    // Restaurar en el siguiente frame y asegurar posición por si hay reflows.
    requestAnimationFrame(() => {
      shell.style.scrollSnapType = prevSnap || 'y mandatory'
      shell.scrollTo(0, 0)
    })

    const t = setTimeout(() => shell.scrollTo(0, 0), 60)
    return () => clearTimeout(t)
  }, [])
  return (
    <main className="page-shell">
      <HeroSection {...heroSection} />

      <div className="section-stack" id="story-start">
        {storySections.map((section, index) => (
          <StorySection
            key={section.id}
            {...section}
            sectionId={index === 0 ? 'story-start-section' : undefined}
          />
        ))}

        <TimelineSection entries={timelineEntries} />

        {additionalSections.map((section) => (
          <StorySection key={section.id} {...section} />
        ))}
      </div>

      <FinalSection {...finalSection} />
    </main>
  )
}

export default HomePage