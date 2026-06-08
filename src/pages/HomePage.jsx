// Esta página ordena el relato vertical con secciones reutilizables y contenido simulado.
import FinalSection from '../components/FinalSection.jsx'
import HeroSection from '../components/HeroSection.jsx'
import StorySection from '../components/StorySection.jsx'
import TimelineSection from '../components/TimelineSection.jsx'
import {
  additionalSections,
  finalSection,
  heroSection,
  storySections,
  timelineEntries,
} from '../utils/storyContent.js'

function HomePage() {
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