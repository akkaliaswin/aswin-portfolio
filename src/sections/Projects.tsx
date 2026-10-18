import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Projects.module.css'

interface SelectedProject {
  id: string
  title: string
  status: string
  description: string
  technologies: string
  accent: string
}

const CORE_PROJECTS: SelectedProject[] = [
  {
    id: 'appex-tea',
    title: 'Appex Tea — Inventory PWA',
    status: 'Internal Business App',
    description:
      "A tactile, mobile-first inventory application built for my family's tea business. Replaces paper stock registers with an auditable transaction ledger, delivery discrepancy verification, and bulk-to-packet tea conversion.",
    technologies: 'React 19 · TypeScript · Vite · Supabase · PWA Manifest · Tailwind CSS',
    accent: '#34D399',
  },
  {
    id: 'travelmate',
    title: 'TravelMate — Regional Travel Platform',
    status: 'Full-Stack Prototype',
    description:
      'A multi-role travel platform for Kerala tourism, combining traveller bookings, tour agency package administration, AI-assisted itinerary planning via Google Gemini, and Razorpay checkout payments.',
    technologies: 'Next.js 16 (App Router) · React 19 · Prisma · PostgreSQL · Gemini AI · Razorpay SDK',
    accent: '#67E8F9',
  },
  {
    id: 'mcp-database-agent',
    title: 'MCP Database Agent Prototype',
    status: 'Experimental Prototype',
    description:
      'An exploratory Model Context Protocol (MCP) server providing structured, schema-bounded tools for Prisma models. Allows AI assistants to safely query operational database records without raw SQL risks.',
    technologies: 'Node.js · Model Context Protocol (MCP) · Prisma · PostgreSQL · Docker',
    accent: '#A78BFA',
  },
]

const EXTRA_PROJECT: SelectedProject = {
  id: 'gmail-assistant',
  title: 'AI Gmail Assistant & Triage Dashboard',
  status: 'Functional Prototype',
  description:
    'An automated inbox triage prototype combining Python FastAPI, Google OAuth 2.0, and OpenAI to categorize incoming emails, summarize message threads, and draft contextual replies.',
  technologies: 'Python · FastAPI · Google Cloud / Gmail API · OpenAI API · React',
  accent: '#6E8BFF',
}

export default function Projects() {
  const [showExtra, setShowExtra] = useState(false)
  const headingRef = useReveal()
  const introRef = useReveal()
  const gridRef = useReveal()

  const projectsToDisplay = showExtra ? [...CORE_PROJECTS, EXTRA_PROJECT] : CORE_PROJECTS

  return (
    <section id="projects" className={`section ${styles.projects}`} aria-labelledby="projects-heading">
      <div className="grid-bg" aria-hidden="true" />

      <div className="container">
        {/* Section Eyebrow */}
        <p className="section-label reveal" ref={headingRef as React.RefObject<HTMLParagraphElement>}>
          04 / INDEPENDENT WORK · SELECTED PROJECTS
        </p>

        {/* Section Heading & Subtitle */}
        <div className={`${styles.intro} reveal`} ref={introRef as React.RefObject<HTMLDivElement>}>
          <h2 id="projects-heading" className="section-heading">
            Selected <span className="gradient-text">Projects.</span>
          </h2>
          <p className={styles.lead}>
            Websites, prototypes and applications built with modern tools and AI workflows.
          </p>
          <p className={styles.subLead}>
            Outside enterprise payment integrations, I build full-stack software from scratch. Each
            project represents translating practical requirements into functional code, clean interfaces
            and connected tooling.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={`${styles.grid} reveal`} ref={gridRef as React.RefObject<HTMLDivElement>}>
          {projectsToDisplay.map((project) => (
            <article
              key={project.id}
              className={styles.card}
              style={{ '--card-accent': project.accent } as React.CSSProperties}
            >
              <div className={styles.cardTop}>
                <span className={styles.statusBadge}>
                  <span className={styles.statusDot} />
                  {project.status}
                </span>
              </div>

              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>
              <div className={styles.techLine}>{project.technologies}</div>
            </article>
          ))}
        </div>

        {/* Subtle Toggle for 4th Project */}
        <div className={styles.toggleAction}>
          <button
            type="button"
            className={styles.toggleBtn}
            onClick={() => setShowExtra(!showExtra)}
            aria-expanded={showExtra}
          >
            {showExtra ? '− Show fewer projects' : '+ View additional project (AI Gmail Assistant)'}
          </button>
        </div>
      </div>
    </section>
  )
}
