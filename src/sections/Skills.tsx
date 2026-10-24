import { useReveal } from '../hooks/useReveal'
import styles from './Skills.module.css'

interface SkillCategory {
  id: string
  label: string
  subtitle: string
  color: string
  skills: string[]
}

const CATEGORIES: SkillCategory[] = [
  {
    id: 'ai-dev',
    label: 'AI & Development',
    subtitle: 'Agentic workflows, prompt-driven engineering & modern frontend',
    color: '#FFA033',
    skills: [
      'AI coding assistants: Antigravity IDE, Claude, Cursor',
      'Prompt-driven development',
      'React',
      'TypeScript and JavaScript',
      'Next.js App Router',
      'Model Context Protocol exploration',
    ],
  },
  {
    id: 'backend',
    label: 'APIs & Backend',
    subtitle: 'REST contracts, microservices & reliable data layers',
    color: '#38BDF8',
    skills: [
      'Java and Spring',
      'REST APIs and contract design',
      'Microservices architecture',
      'Webhooks and event callbacks',
      'PostgreSQL and Supabase',
      'MongoDB',
    ],
  },
  {
    id: 'fintech',
    label: 'Payments & Fintech',
    subtitle: 'Enterprise checkout, payment methods & loyalty integrations',
    color: '#FF4B26',
    skills: [
      'Razorpay Payment Gateway integrations',
      'UPI, cards, netbanking and wallets',
      'Refunds and payment troubleshooting',
      'Engage loyalty, gift cards and promotional wallets',
      'Merchant checkout integration workflows',
    ],
  },
  {
    id: 'infra',
    label: 'Infrastructure & Debugging',
    subtitle: 'Cloud services, containerisation & API request diagnostics',
    color: '#10B981',
    skills: [
      'AWS and CloudWatch',
      'Docker and containerisation',
      'Kubernetes fundamentals',
      'Postman',
      'Browser DevTools: Network and Console',
      'API log tracing',
      'Git and Bitbucket',
    ],
  },
]

export default function Skills() {
  const headRef = useReveal()

  return (
    <section id="skills" className={`section ${styles.skills}`} aria-labelledby="skills-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-meta reveal">
          <span>05 / CAPABILITIES · TECHNICAL TOOLKIT</span>
        </div>

        <div className={`reveal ${styles.sectionHead}`} ref={headRef as React.RefObject<HTMLDivElement>}>
          <h2 id="skills-heading" className="section-heading">
            Technical <span className="gradient-text">Toolkit.</span>
          </h2>
          <p className="section-subheading">
            Focused on enterprise integrations, backend systems, and AI-assisted application development.
          </p>
        </div>

        {/* 2x2 Domain Matrix */}
        <div className={styles.grid}>
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.id}
              className={`${styles.domainCard} reveal reveal-delay-${(i % 2) + 1}`}
              style={{ '--domain-accent': cat.color } as React.CSSProperties}
            >
              <div className={styles.domainHeader}>
                <div className={styles.domainTitleBlock}>
                  <h3 className={styles.domainLabel}>{cat.label}</h3>
                </div>
                <span className={styles.domainBeacon} style={{ background: cat.color }} />
              </div>

              <p className={styles.domainSubtitle}>{cat.subtitle}</p>

              <div className={styles.skillList}>
                {cat.skills.map((skill) => (
                  <span key={skill} className={styles.skillChip}>
                    <span className={styles.chipDot} style={{ background: cat.color }} />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
