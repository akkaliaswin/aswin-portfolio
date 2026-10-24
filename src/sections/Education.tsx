import { useReveal } from '../hooks/useReveal'
import styles from './Education.module.css'

const EDUCATION = {
  degree: "Bachelor's in Computer Science & Engineering (Honours)",
  institution: 'Rajagiri School of Engineering and Technology',
  period: '2016 – 2020',
  cgpa: '8.23 CGPA',
  coursework: 'Distributed Systems, Operating Systems, Computer Networks, Database Systems, Data Structures & Algorithms',
}

const RECOGNITION = [
  {
    title: 'Team Award',
    description: 'Recognition for professional delivery and working within SLA timelines.',
    accent: '#FFB020',
  },
  {
    title: 'Docker Foundations Certificate',
    description: 'Docker Foundations professional certificate.',
    accent: '#38BDF8',
  },
]

export default function Education() {
  const ref = useReveal()

  return (
    <section id="education" className={`section ${styles.education}`} aria-labelledby="edu-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-meta reveal">
          <span>06 / FOUNDATIONS · EDUCATION &amp; RECOGNITION</span>
        </div>

        <div className="reveal">
          <h2 id="edu-heading" className={`section-heading ${styles.heading}`}>
            Where it <span className="gradient-text">started.</span>
          </h2>
          <p className="section-subheading">
            Computer science engineering foundation and professional recognition.
          </p>
        </div>

        <div className={`${styles.layout} reveal`} ref={ref as React.RefObject<HTMLDivElement>}>
          {/* Degree Card */}
          <div className={styles.eduCard}>
            <div className={styles.eduHeader}>
              <span className={styles.eduCode}>B.TECH (HONOURS)</span>
              <span className={styles.eduScore}>{EDUCATION.cgpa}</span>
            </div>

            <h3 className={styles.eduDegree}>{EDUCATION.degree}</h3>
            <p className={styles.eduInstitution}>{EDUCATION.institution}</p>
            <p className={styles.eduPeriod}>Graduation Class of {EDUCATION.period}</p>

            <div className={styles.courseworkBlock}>
              <span className={styles.courseworkLabel}>CORE CURRICULUM:</span>
              <p className={styles.courseworkText}>{EDUCATION.coursework}</p>
            </div>
          </div>

          {/* Recognition Column */}
          <div className={styles.recognitionCol}>
            {RECOGNITION.map((item) => (
              <div key={item.title} className={styles.recCard}>
                <div className={styles.recHeader}>
                  <span className={styles.recCode} style={{ color: item.accent }}>
                    HONOUR &amp; CREDENTIAL
                  </span>
                  <span className={styles.recDot} style={{ background: item.accent }} />
                </div>
                <h4 className={styles.recTitle}>{item.title}</h4>
                <p className={styles.recDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
