import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './AiSpeed.module.css'

interface WorkflowCategory {
  step: string
  title: string
  category: string
  statusBadge: string
  tagline: string
  bullets: string[]
  technologies: string[]
}

const CATEGORIES: WorkflowCategory[] = [
  {
    step: '01',
    category: 'DEVELOPMENT WORKFLOW',
    statusBadge: 'ACTIVE PRACTICE',
    title: 'AI-Assisted Development',
    tagline: 'Prompt-driven development, rapid iteration, and assisted code refinement.',
    bullets: [
      'AI coding assistants and agentic IDEs (Antigravity IDE, Claude, Cursor)',
      'Prompt-driven development and iterative coding',
      'Code refinement, test writing and AI-assisted debugging',
    ],
    technologies: ['Antigravity IDE', 'Claude', 'Cursor', 'TypeScript'],
  },
  {
    step: '02',
    category: 'FULL-STACK DELIVERY',
    statusBadge: 'IMPLEMENTED IN BUILDS',
    title: 'Websites & Application Building',
    tagline: 'Turning concepts into responsive web interfaces and functional applications.',
    bullets: [
      'Rapid prototyping and MVP development',
      'Responsive web interfaces and practical application workflows',
      'API and database integration where implemented',
    ],
    technologies: ['React', 'Next.js App Router', 'Vite', 'Tailwind CSS', 'Supabase'],
  },
  {
    step: '03',
    category: 'CONNECTED SYSTEMS',
    statusBadge: 'EXPLORATION & PROTOTYPING',
    title: 'MCP & Connected Tools',
    tagline: 'Investigating standard schemas and safe integration boundaries for AI tools.',
    bullets: [
      'Exploring Model Context Protocol (MCP)',
      'Connecting AI applications with external tools and services',
      'Understanding tool schemas, permissions and integration boundaries',
    ],
    technologies: ['Model Context Protocol', 'JSON-RPC', 'Prisma MCP Prototype'],
  },
]

export default function AiSpeed() {
  const headingRef = useReveal()
  const [selectedCategory, setSelectedCategory] = useState(0)

  const active = CATEGORIES[selectedCategory]

  return (
    <section id="ai-speed" className={`section ${styles.aiSpeed}`} aria-labelledby="ai-speed-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-meta reveal">
          <span>03 / AI &amp; PROTOTYPING · WORKFLOWS</span>
        </div>

        <div className="reveal" ref={headingRef as React.RefObject<HTMLDivElement>}>
          <h2 id="ai-speed-heading" className={`section-heading ${styles.heading}`}>
            Building at <span className="gradient-text">AI Speed.</span>
          </h2>
          <p className="section-subheading">
            I use AI-assisted development to turn ideas into working websites, applications and prototypes. My workflow combines prompt-driven development, rapid iteration, code refinement and practical debugging to build and improve software faster.
          </p>
        </div>

        {/* Workflow Showcase */}
        <div className={styles.workflowGrid}>
          {/* Step Selector Column */}
          <div className={styles.stepsNav}>
            {CATEGORIES.map((cat, idx) => (
              <div
                key={cat.step}
                className={`${styles.stepNavCard} ${selectedCategory === idx ? styles.stepNavActive : ''}`}
                onClick={() => setSelectedCategory(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setSelectedCategory(idx) }}
              >
                <div className={styles.stepNavHeader}>
                  <span className={styles.stepBadge}>{cat.step}</span>
                  <span className={styles.stepCategory}>{cat.category}</span>
                </div>
                <h3 className={styles.stepNavTitle}>{cat.title}</h3>
                <p className={styles.stepNavTagline}>{cat.tagline}</p>
              </div>
            ))}
          </div>

          {/* Detailed Inspector Panel */}
          <div className={styles.detailPanel}>
            <div className={styles.panelHeader}>
              <div className={styles.panelTitleWrap}>
                <span className={styles.panelDot} />
                <h3 className={styles.panelTitle}>
                  {active.step} · {active.title}
                </h3>
              </div>
              <span className={styles.panelStatus}>{active.statusBadge}</span>
            </div>

            <div className={styles.panelBody}>
              <p className={styles.detailTagline}>
                {active.tagline}
              </p>

              <div className={styles.bulletList}>
                <span className={styles.bulletTitle}>KEY PRACTICES &amp; WORKFLOWS:</span>
                <ul>
                  {active.bullets.map((bullet, i) => (
                    <li key={i} className={styles.bulletItem}>
                      <span className={styles.bulletArrow}>→</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.toolStackWrap}>
                <span className={styles.toolTitle}>TECHNOLOGIES &amp; TOOLS:</span>
                <div className={styles.toolChipRow}>
                  {active.technologies.map((tech) => (
                    <span key={tech} className={styles.toolChip}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
