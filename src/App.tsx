import { useRevealAll } from './hooks/useReveal'
import Navbar from './components/Navbar'
import CursorGlow from './components/CursorGlow'
import Hero from './sections/Hero'
import TechStrip from './sections/TechStrip'
import About from './sections/About'
import Experience from './sections/Experience'
import AiSpeed from './sections/AiSpeed'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Contact from './sections/Contact'

export default function App() {
  useRevealAll('.reveal')

  return (
    <>
      <CursorGlow />
      <Navbar />
      <main id="main-content">
        <Hero />
        <TechStrip />
        <About />
        <Experience />
        <AiSpeed />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  )
}
