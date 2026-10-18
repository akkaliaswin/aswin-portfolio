import { useReveal } from '../hooks/useReveal'
import styles from './Skills.module.css'

interface SkillCategory {
  label: string
  subtitle: string
  icon: string
  accent: string
  skills: string[]
}

const SKILL_GROUPS: SkillCategory[] = [
  {
    label: 'AI & Development',
    subtitle: 'AI coding assistants, vibe coding & frontend engineering',
    icon: '⚡',
    accent: '#67E8F9',
    skills: [
      'AI Coding Assistants (Antigravity IDE, Claude, Cursor)',
      'Prompt-Driven Development & Vibe Coding',
      'React (React 19 & 18)',
      'TypeScript & JavaScript',
      'Next.js (App Router)',
      'Model Context Protocol (MCP) Exploration',
    ],
  },
  {
    label: 'APIs & Backend',
    subtitle: 'Core backend services & data contracts',
    icon: '◇',
    accent: '#6E8BFF',
    skills: [
      'Java (Core & Spring)',
      'REST APIs & Contract Design',
      'Microservices Architecture',
      'Webhooks & Event Callbacks',
      'PostgreSQL & Supabase',
      'MongoDB',
    ],
  },
  {
    label: 'Payments & Fintech',
    subtitle: 'Enterprise payment gateways & merchant workflows',
    icon: '◈',
    accent: '#10B981',
    skills: [
      'Payment Gateway Integrations (Razorpay)',
      'UPI, Cards, Netbanking & Wallets',
      'Refunds & Reconciliation Flows',
      'Gift Cards & Loyalty Systems (Engage)',
      'Merchant Checkout Optimization',
    ],
  },
  {
    label: 'Infrastructure & Debugging',
    subtitle: 'Deployment, diagnostics & version control',
    icon: '◎',
    accent: '#F59E0B',
    skills: [
      'AWS & AWS CloudWatch',
      'Docker & Containerisation',
      'Kubernetes Basics',
      'Postman & API Client Suites',
      'Browser DevTools (Network & Console)',
      'API Log Tracing',
      'Git & Bitbucket',
    ],
  },
]

export default function Skills() {
  const headRef = useReveal()

  return (
    <section id="skills" className={`section ${styles.skills}`} aria-labelledby="skills-heading">
      <div className="container">
        <p className="section-label reveal">05 / CAPABILITIES · TECHNICAL TOOLKIT</p>

        <div className={`reveal ${styles.sectionHead}`} ref={headRef as React.RefObject<HTMLDivElement>}>
          <h2 id="skills-heading" className="section-heading">
            Technical <span className="gradient-text">Toolkit.</span>
          </h2>
          <p className="section-subheading">
            Focused on enterprise integrations, backend systems, and AI-assisted application development.
          </p>
        </div>

        <div className={styles.grid}>
          {SKILL_GROUPS.map((group, i) => (
            <div
              key={group.label}
              className={`${styles.groupCard} reveal reveal-delay-${(i % 2) + 1}`}
              style={{ '--group-accent': group.accent } as React.CSSProperties}
            >
              <div className={styles.groupHeader}>
                <span className={styles.groupIcon} aria-hidden="true" style={{ color: group.accent }}>
                  {group.icon}
                </span>
                <div>
                  <h3 className={styles.groupLabel}>{group.label}</h3>
                  <p className={styles.groupSubtitle}>{group.subtitle}</p>
                </div>
              </div>

              <div className={styles.skillList}>
                {group.skills.map((skill) => (
                  <span key={skill} className={styles.skillChip}>
                    {skill}
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
