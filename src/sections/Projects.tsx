import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Projects.module.css'

interface CaseStudy {
  id: string
  title: string
  category: string
  problem: string
  approach: string
  stack: string[]
  status: string
  highlights: string[]
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'appex-tea',
    title: 'Appex Tea — Inventory PWA',
    category: 'INTERNAL BUSINESS APP',
    problem: 'Manual paper stock registers caused discrepancies in raw leaf intake, bulk conversion, and store dispatches across distributed tea trading operations.',
    approach: "A mobile-first inventory application built for my family's tea business. It aims to replace paper stock registers with digital inventory tracking, stock movement records, delivery discrepancy verification and bulk-to-packet tea conversion.",
    stack: ['React 19', 'TypeScript', 'Vite', 'Supabase', 'PWA Manifest', 'Tailwind CSS'],
    status: 'Operational Internal Business App',
    highlights: [
      'Digital inventory tracking replacing fragile paper ledgers',
      'Stock movement records and delivery discrepancy verification',
      'Bulk tea intake to packaged packet tea conversion tracking',
      'Mobile-first progressive web app interface for on-site staff',
    ],
  },
  {
    id: 'travelmate',
    title: 'TravelMate — Regional Travel Platform',
    category: 'FULL-STACK PROTOTYPE',
    problem: 'Regional tour agencies and travellers in Kerala lacked an integrated platform combining custom package management, automated itinerary synthesis, and checkout payments.',
    approach: 'A regional travel platform concept for Kerala, bringing together traveller bookings, tour agency package administration, itinerary planning and payment integration.',
    stack: ['Next.js', 'React', 'Prisma', 'PostgreSQL', 'Gemini AI', 'Razorpay SDK'],
    status: 'Full-Stack Prototype',
    highlights: [
      'Multi-role access for travellers and tour agency administrators',
      'AI-assisted itinerary planning exploring Google Gemini API',
      'Integrated Razorpay Standard Checkout for booking deposits',
      'Relational package and booking data schema managed with Prisma ORM',
    ],
  },
  {
    id: 'mcp-database-agent',
    title: 'MCP Database Agent Prototype',
    category: 'EXPERIMENTAL PROTOTYPE',
    problem: 'Connecting AI coding assistants directly to operational databases introduces prompt injection risks, unexpected data mutations, and lack of strict query boundaries.',
    approach: 'An exploratory Model Context Protocol server providing structured, schema-bounded tools for interacting with Prisma models, with a focus on understanding safer ways to connect AI assistants to operational data.',
    stack: ['Node.js', 'Model Context Protocol', 'Prisma', 'PostgreSQL', 'Docker'],
    status: 'Exploratory Prototype',
    highlights: [
      'Standardised MCP tool schema restricting queries to defined models',
      'Investigation of read-only boundaries and parameter validation',
      'Dockerized container setup for isolated local experimentation',
      'Exploration of JSON-RPC protocol messages between agent and database',
    ],
  },
  {
    id: 'gmail-assistant',
    title: 'AI Gmail Assistant',
    category: 'AUTOMATION PROTOTYPE',
    problem: 'High email volumes create communication bottlenecks and delayed responses to critical customer inquiries and operational notifications.',
    approach: 'An AI-assisted email workflow concept focused on organising incoming messages and supporting email triage.',
    stack: ['React', 'TypeScript', 'Google Workspace APIs', 'Node.js'],
    status: 'Concept & Prototype',
    highlights: [
      'Inbox triage pipeline exploring email categorization and clustering',
      'Context extraction to highlight urgent action items',
      'Assisted response drafting for repetitive customer queries',
      'Exploration of Google Workspace API authentication and webhooks',
    ],
  },
]

export default function Projects() {
  const [selectedCase, setSelectedCase] = useState<string>('appex-tea')
  const headingRef = useReveal()

  const currentCase = CASE_STUDIES.find((c) => c.id === selectedCase) || CASE_STUDIES[0]

  return (
    <section id="projects" className={`section ${styles.projects}`} aria-labelledby="projects-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-meta reveal">
          <span>04 / INDEPENDENT WORK · SELECTED PROJECTS</span>
        </div>

        <div className="reveal" ref={headingRef as React.RefObject<HTMLDivElement>}>
          <h2 id="projects-heading" className={`section-heading ${styles.heading}`}>
            Selected <span className="gradient-text">Projects.</span>
          </h2>
          <p className="section-subheading">
            Outside enterprise payment integrations, I build full-stack software from scratch. Each project represents translating practical requirements into functional code, clean interfaces and connected tooling.
          </p>
        </div>

        {/* Case Studies Container */}
        <div className={styles.caseStudyGrid}>
          {/* Left Column: Selector Cards */}
          <div className={styles.caseSelectorList}>
            {CASE_STUDIES.map((cs) => {
              const isSelected = cs.id === selectedCase
              return (
                <div
                  key={cs.id}
                  className={`${styles.caseSelectorCard} ${isSelected ? styles.caseCardActive : ''}`}
                  onClick={() => setSelectedCase(cs.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') setSelectedCase(cs.id) }}
                >
                  <div className={styles.caseCardHeader}>
                    <span className={styles.caseCategory}>{cs.category}</span>
                    <span className={`${styles.caseBadge} ${isSelected ? styles.caseBadgeActive : ''}`}>
                      {cs.status}
                    </span>
                  </div>
                  <h3 className={styles.caseTitle}>{cs.title}</h3>
                  <p className={styles.caseBrief}>{cs.approach}</p>
                </div>
              )
            })}
          </div>

          {/* Right Column: In-Depth Editorial Case Dossier */}
          <div className={styles.caseDossierPanel}>
            <div className={styles.dossierHeader}>
              <div className={styles.dossierTitleWrap}>
                <span className={styles.dossierDot} />
                <h3 className={styles.dossierMainTitle}>{currentCase.title}</h3>
              </div>
              <span className={styles.dossierMetrics}>{currentCase.status}</span>
            </div>

            <div className={styles.dossierContent}>
              <div className={styles.problemSolutionRow}>
                <div className={styles.dossierBlock}>
                  <span className={styles.dossierBlockLabel}>PROBLEM CONTEXT</span>
                  <p className={styles.dossierBlockText}>{currentCase.problem}</p>
                </div>

                <div className={styles.dossierBlock}>
                  <span className={styles.dossierBlockLabel}>PRACTICAL APPROACH</span>
                  <p className={styles.dossierBlockText}>{currentCase.approach}</p>
                </div>
              </div>

              {/* Verified Stack */}
              <div className={styles.techStackRow}>
                <span className={styles.techLabel}>TECHNOLOGY STACK:</span>
                <div className={styles.techList}>
                  {currentCase.stack.map((tech) => (
                    <span key={tech} className={styles.techChip}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* Implementation Highlights */}
              <div className={styles.highlightsContainer}>
                <span className={styles.highlightsLabel}>KEY IMPLEMENTATION DETAILS:</span>
                <ul className={styles.highlightsList}>
                  {currentCase.highlights.map((item, idx) => (
                    <li key={idx} className={styles.highlightItem}>
                      <span className={styles.highlightDot}>◆</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
