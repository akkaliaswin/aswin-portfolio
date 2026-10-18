import { useReveal } from '../hooks/useReveal'
import styles from './Education.module.css'

const EDUCATION = {
  degree: "Bachelor's in Computer Science & Engineering (Honours)",
  institution: 'Rajagiri School of Engineering and Technology',
  period: '2016 – 2020',
  cgpa: '8.23',
}

const RECOGNITION = [
  {
    title: 'Team Award',
    description: 'Recognition for professional delivery and working within SLA timelines.',
    icon: '◈',
    accent: '#F59E0B',
  },
  {
    title: 'Docker Foundations',
    description: 'Professional Certificate — Docker Foundations.',
    icon: '◇',
    accent: '#67E8F9',
    badge: 'CERTIFICATE',
  },
]

export default function Education() {
  const ref = useReveal()

  return (
    <section id="education" className={`section ${styles.education}`} aria-labelledby="edu-heading">
      <div className="container">
        <p className="section-label reveal">06 / FOUNDATIONS · EDUCATION &amp; RECOGNITION</p>

        <div className={`reveal ${styles.sectionHead}`}>
          <h2 id="edu-heading" className="section-heading">
            Where it <span className="gradient-text">started.</span>
          </h2>
        </div>

        <div className={`${styles.layout} reveal`} ref={ref as React.RefObject<HTMLDivElement>}>
          {/* Education Card */}
          <div className={styles.eduCard}>
            <div className={styles.eduIcon} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 3L2 8l10 5 10-5-10-5zM2 13l10 5 10-5M2 18l10 5 10-5" stroke="#6E8BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className={styles.eduDegree}>{EDUCATION.degree}</h3>
              <p className={styles.eduInstitution}>{EDUCATION.institution}</p>
              <div className={styles.eduMeta}>
                <span className={styles.eduPeriod}>{EDUCATION.period}</span>
                <span className={styles.eduSep}>·</span>
                <span className={styles.eduCgpa}>CGPA {EDUCATION.cgpa}</span>
              </div>
            </div>
          </div>

          {/* Recognition Cards */}
          <div className={styles.recognitionGrid}>
            {RECOGNITION.map((item) => (
              <div key={item.title} className={styles.recCard} style={{ '--rec-accent': item.accent } as React.CSSProperties}>
                <div className={styles.recHeader}>
                  <span className={styles.recIcon} style={{ color: item.accent }}>{item.icon}</span>
                  <h4 className={styles.recTitle}>{item.title}</h4>
                  {item.badge && (
                    <span className={styles.recBadge}>{item.badge}</span>
                  )}
                </div>
                <p className={styles.recDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
