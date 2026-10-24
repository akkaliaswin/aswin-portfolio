import { useReveal, useCounter } from '../hooks/useReveal'
import styles from './About.module.css'

const METRICS = [
  { value: 400, suffix: '+', label: 'Merchant integration requests handled' },
  { value: 40, suffix: '+', label: 'Merchant go-lives supported' },
  { value: 16, suffix: '+', label: 'REST APIs built at Temenos' },
  { value: 100, suffix: '+', label: 'APIs & microservices in broader platform' },
]

const EXPERTISE_TAGS = [
  'Solutions Engineering',
  'Payments & Fintech',
  'Backend APIs',
  'Integration Troubleshooting',
  'AI-Assisted Development',
  'Rapid Prototyping',
]

function MetricCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const numRef = useCounter(value, 1800)

  return (
    <div className={styles.metricBlock}>
      <div className={styles.metricValueWrap}>
        <span ref={numRef} className={styles.metricNumber}>0</span>
        <span className={styles.metricSuffix}>{suffix}</span>
      </div>
      <p className={styles.metricLabel}>{label}</p>
    </div>
  )
}

export default function About() {
  const headingRef = useReveal()
  const bodyRef = useReveal()
  const tagsRef = useReveal()
  const metricsRef = useReveal()

  return (
    <section id="about" className={`section ${styles.about}`} aria-labelledby="about-heading">
      <div className="container">
        {/* Chapter Marker */}
        <div className="section-meta reveal">
          <span>01 / PROFILE · ASWIN A</span>
        </div>

        {/* Section Heading */}
        <div className="reveal" ref={headingRef as React.RefObject<HTMLDivElement>}>
          <h2 id="about-heading" className={`section-heading ${styles.heading}`}>
            Not just making it work.{' '}
            <span className={styles.editorialHighlight}>Making it make sense.</span>
          </h2>
          <p className="section-subheading">
            Engineering is most rewarding when it directly solves customer friction.
          </p>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className={styles.layout}>
          {/* Left Column: Narrative Dossier */}
          <div className={`${styles.narrativeCol} reveal`} ref={bodyRef as React.RefObject<HTMLDivElement>}>
            <div className={styles.leadNarrative}>
              <p>
                My background spans distributed backend development in banking and enterprise
                solutions engineering in high-volume fintech.
              </p>
              <p>
                At <strong>Razorpay</strong>, I work directly with merchant engineering teams to translate
                complex payment workflows into reliable integrations. At <strong>Temenos</strong>, I built and
                supported Java REST APIs and microservices. Across both environments, my focus
                has been the same: investigating API issues, understanding system constraints, and
                helping deliver dependable solutions under time-sensitive deadlines.
              </p>
              <p>
                I thrive in roles where technical depth meets customer-facing problem solving —
                Solutions Engineering, Solutions Consulting, Forward Deployed Engineering, and technical
                product delivery.
              </p>
            </div>

            {/* Expertise Tags */}
            <div className={styles.tagsWrap} ref={tagsRef as React.RefObject<HTMLDivElement>}>
              <p className={styles.tagsLabel}>EXPERTISE &amp; CAPABILITIES</p>
              <div className={styles.tagsGrid}>
                {EXPERTISE_TAGS.map((tag) => (
                  <span key={tag} className={styles.tagPill}>
                    <span className={styles.tagDot} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Specification Panel with Live Counters */}
          <div className={`${styles.specCol} reveal`} ref={metricsRef as React.RefObject<HTMLDivElement>}>
            <div className={styles.specCard}>
              <div className={styles.specHeader}>
                <div className={styles.specTitle}>
                  <span className={styles.specDot} />
                  <span>EXPERIENCE SCOPE</span>
                </div>
                <span className={styles.specStatus}>VERIFIED RECORD</span>
              </div>

              <div className={styles.metricsGrid}>
                {METRICS.map((m) => (
                  <MetricCounter key={m.label} {...m} />
                ))}
              </div>

              <div className={styles.specFooter}>
                <p className={styles.specDisclaimer}>
                  Figures reflect professional experience scope. Platform-level figures describe the broader system, not solely my individual contribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
