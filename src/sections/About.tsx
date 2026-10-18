import { useReveal, useCounter } from '../hooks/useReveal'
import styles from './About.module.css'

const METRICS = [
  { value: 150, suffix: '+', label: 'Merchant integration\nrequests handled' },
  { value: 15, suffix: '+', label: 'Merchant go-lives\nsupported' },
  { value: 16, suffix: '+', label: 'REST APIs built\nat Temenos' },
  { value: 100, suffix: '+', label: 'APIs &amp; microservices\nin the platform' },
]

const TAGS = ['SOLUTIONS ENGINEERING', 'FORWARD DEPLOYED', 'PAYMENTS & FINTECH', 'BACKEND APIS', 'RAPID PROTOTYPING']

function MetricCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const numRef = useCounter(value, 1800)

  return (
    <div className={styles.metric}>
      <div className={styles.metricValue}>
        <span ref={numRef}>0</span>
        <span className={styles.metricSuffix}>{suffix}</span>
      </div>
      <p className={styles.metricLabel} dangerouslySetInnerHTML={{ __html: label }} />
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
      <div className="grid-bg" aria-hidden="true" />
      <div className="container">
        {/* Section label */}
        <p className="section-label reveal" ref={headingRef as React.RefObject<HTMLParagraphElement>}>
          01 / PROFILE · ASWIN A
        </p>

        <div className={styles.layout}>
          {/* Left — Heading + Body */}
          <div className={styles.leftCol}>
            <h2
              id="about-heading"
              className={`section-heading ${styles.heading} reveal`}
              ref={headingRef as React.RefObject<HTMLHeadingElement>}
            >
              Not just making it work.{' '}
              <span className="gradient-text">Making it make sense.</span>
            </h2>

            <div className={`${styles.body} reveal`} ref={bodyRef as React.RefObject<HTMLDivElement>}>
              <p>
                Engineering is most rewarding when it directly solves customer friction.
                My background spans distributed backend development in banking and enterprise
                solutions engineering in high-volume fintech.
              </p>
              <p>
                At Razorpay, I work directly with merchant engineering leads to translate
                complex payment workflows into reliable integrations. At Temenos, I built and
                monitored core Java REST APIs and microservices. Across both environments, my focus
                has been the same: digging into API logs, understanding system constraints, and
                delivering dependable solutions under time-sensitive deadlines.
              </p>
              <p>
                I thrive in roles where technical depth meets customer-facing problem solving —
                Solutions Engineering, Solutions Consulting, Forward Deployed Engineering, and technical
                product delivery.
              </p>
            </div>

            <div className={`${styles.tags} reveal`} ref={tagsRef as React.RefObject<HTMLDivElement>}>
              {TAGS.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Right — Metrics */}
          <div className={`${styles.rightCol} reveal`} ref={metricsRef as React.RefObject<HTMLDivElement>}>
            <div className={styles.metricsGrid}>
              {METRICS.map((m) => (
                <MetricCounter key={m.label} {...m} />
              ))}
            </div>

            <div className={styles.metricsNote}>
              <p className={styles.noteText}>
                Figures reflect personal experience scope and are not independently audited.
                Platform-level numbers describe the broader system, not solely my individual contribution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
