import { useReveal } from '../hooks/useReveal'
import styles from './AiSpeed.module.css'

interface CapabilityGroup {
  id: string
  title: string
  accent: string
  icon: string
  mcpNote?: string
  bullets: string[]
  tools: string[]
}

const GROUPS: CapabilityGroup[] = [
  {
    id: 'ai-dev',
    title: 'AI-Assisted Development',
    accent: '#67E8F9',
    icon: 'code',
    bullets: [
      'AI coding assistants and agentic IDEs',
      'Prompt-driven development and vibe coding',
      'Code refinement, test writing and AI-assisted debugging',
    ],
    tools: ['Antigravity IDE', 'Claude', 'Cursor', 'TypeScript'],
  },
  {
    id: 'web-apps',
    title: 'Websites & Application Building',
    accent: '#6E8BFF',
    icon: 'layout',
    bullets: [
      'Rapid prototyping and MVP development',
      'Responsive web interfaces and tactile application workflows',
      'API and database integration where implemented',
    ],
    tools: ['React 19', 'Next.js App Router', 'Vite', 'Tailwind CSS', 'Supabase'],
  },
  {
    id: 'mcp-tools',
    title: 'MCP & Connected Tools',
    accent: '#A78BFA',
    icon: 'network',
    mcpNote:
      'MCP is an area of hands-on exploration focused on connecting AI applications with external tools and data through a standardised protocol.',
    bullets: [
      'Exploring Model Context Protocol (MCP)',
      'Connecting AI applications with external tools and services',
      'Understanding tool schemas, permissions and integration boundaries',
    ],
    tools: ['Model Context Protocol', 'JSON-RPC', 'Prisma MCP Prototype'],
  },
]

function renderIcon(type: string) {
  switch (type) {
    case 'code':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    case 'layout':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      )
    case 'network':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="6" height="6" rx="1" />
          <rect x="16" y="2" width="6" height="6" rx="1" />
          <rect x="9" y="16" width="6" height="6" rx="1" />
          <path d="M5 8v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" />
          <line x1="12" y1="14" x2="12" y2="16" />
        </svg>
      )
    default:
      return null
  }
}

export default function AiSpeed() {
  const headingRef = useReveal()
  const introRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="ai-speed" className={`section ${styles.aiSpeed}`} aria-labelledby="ai-speed-heading">
      <div className="grid-bg" aria-hidden="true" />

      <div className="container">
        {/* Section Label */}
        <p className="section-label reveal" ref={headingRef as React.RefObject<HTMLParagraphElement>}>
          03 / AI &amp; PROTOTYPING · WORKFLOWS
        </p>

        {/* Section Heading & Subtitle */}
        <div className={`${styles.intro} reveal`} ref={introRef as React.RefObject<HTMLDivElement>}>
          <h2 id="ai-speed-heading" className="section-heading">
            Building at <span className="gradient-text">AI Speed.</span>
          </h2>
          <p className={styles.lead}>
            AI-assisted development. Connected tools. Practical solutions.
          </p>
          <p className={styles.subLead}>
            I use AI-assisted development to turn ideas and requirements into working websites,
            applications and prototypes. My workflow combines prompt-driven development, rapid
            iteration, code refinement and practical debugging to build and improve software faster.
          </p>
        </div>

        {/* 3 Compact Capability Groups */}
        <div className={`${styles.grid} reveal`} ref={gridRef as React.RefObject<HTMLDivElement>}>
          {GROUPS.map((group) => (
            <div
              key={group.id}
              className={styles.card}
              style={{ '--card-accent': group.accent } as React.CSSProperties}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{group.title}</h3>
                <div className={styles.cardIcon}>
                  {renderIcon(group.icon)}
                </div>
              </div>

              {group.mcpNote && (
                <div className={styles.mcpNote}>
                  {group.mcpNote}
                </div>
              )}

              <ul className={styles.bulletList}>
                {group.bullets.map((b, i) => (
                  <li key={i} className={styles.bulletItem}>
                    <span className={styles.bulletDot}>▹</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.toolTags}>
                {group.tools.map((tool) => (
                  <span key={tool} className={styles.toolTag}>
                    {tool}
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
