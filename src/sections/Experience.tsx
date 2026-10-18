import { useReveal } from '../hooks/useReveal'
import styles from './Experience.module.css'

const GATEWAY_MERCHANTS = [
  { name: 'Amazon MX Player', logo: '/images/brands/amazon-mxplayer.svg', alt: 'Amazon MX Player logo' },
  { name: 'Decathlon', logo: '/images/brands/decathlon.svg', alt: 'Decathlon logo' },
  { name: 'Pizza Hut', logo: '/images/brands/pizzahut.svg', alt: 'Pizza Hut logo' },
]

const ENGAGE_MERCHANTS = [
  { name: 'BlueStone', logo: '/images/brands/bluestone.svg', alt: 'BlueStone logo' },
  { name: 'Maruti Suzuki', logo: '/images/brands/maruti.svg', alt: 'Maruti Suzuki logo' },
  { name: "Domino's", logo: '/images/brands/dominos.svg', alt: "Domino's logo" },
  { name: 'Flipkart', logo: '/images/brands/flipkart.svg', alt: 'Flipkart logo' },
  { name: 'Mother Dairy', logo: '/images/brands/motherdairy.svg', alt: 'Mother Dairy logo' },
  { name: 'CaratLane', logo: '/images/brands/caratlane.svg', alt: 'CaratLane logo' },
  { name: 'Urban Company', logo: '/images/brands/urbancompany.svg', alt: 'Urban Company logo' },
]

function LogoTile({ name, logo, alt }: { name: string; logo: string; alt: string }) {
  return (
    <div className={styles.logoTile}>
      <div className={styles.logoBox}>
        <img
          src={logo}
          alt={alt}
          className={styles.logoImg}
          loading="lazy"
          onError={(e) => {
            // Graceful fallback: show brand name
            const target = e.currentTarget
            target.style.display = 'none'
            const parent = target.parentElement
            if (parent) {
              const fallback = document.createElement('span')
              fallback.className = styles.logoFallback
              fallback.textContent = name
              parent.appendChild(fallback)
            }
          }}
        />
      </div>
      <span className={styles.logoName}>{name}</span>
    </div>
  )
}

export default function Experience() {
  const headRef = useReveal()
  const razorRef = useReveal()
  const temenosRef = useReveal()

  return (
    <section id="experience" className={`section ${styles.experience}`} aria-labelledby="experience-heading">
      <div className="container">
        {/* Section label */}
        <p className="section-label reveal">02 / FIELD NOTES · PROFESSIONAL EXPERIENCE</p>

        <div className={`reveal ${styles.sectionHead}`} ref={headRef as React.RefObject<HTMLDivElement>}>
          <h2 id="experience-heading" className="section-heading">
            Built in the <span className="gradient-text">real world.</span>
          </h2>
          <p className="section-subheading">
            Production systems. Real constraints. Practical outcomes.
          </p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>

          {/* ── Razorpay ── */}
          <div className={`${styles.entry} reveal`} ref={razorRef as React.RefObject<HTMLDivElement>}>
            {/* Timeline dot */}
            <div className={styles.timelineDot} aria-hidden="true">
              <span className={styles.dotInner} />
            </div>

            <div className={styles.entryCard}>
              {/* Header */}
              <div className={styles.entryHeader}>
                <div className={styles.companyLogo}>
                  <img
                    src="/images/brands/razorpay.svg"
                    alt="Razorpay logo"
                    className={styles.companyLogoImg}
                    width={160}
                    height={40}
                  />
                </div>
                <div className={styles.entryMeta}>
                  <span className={styles.entryRole}>Solutions Engineer</span>
                  <span className={styles.entryPeriod}>Aug 2024 – Present</span>
                </div>
              </div>

              {/* Focus chips */}
              <div className={styles.focusChips}>
                {['Enterprise Solutions', 'Payment Gateway', 'Engage Loyalty'].map(c => (
                  <span key={c} className={`tag ${styles.focusChip}`}>{c}</span>
                ))}
              </div>

              <p className={styles.entrySummary}>
                I support enterprise merchants with Payment Gateway and Engage integrations, working
                across implementation guidance, technical troubleshooting, payment flows, loyalty
                solutions and merchant go-lives. I work with merchant engineering teams to understand
                integration requirements, provide implementation guidance, troubleshoot technical issues
                and help resolve blockers during time-sensitive go-lives.
              </p>

              <ul className={styles.responsibilities}>
                <li>Handled 150+ merchant integration requests and supported 15+ merchant go-lives.</li>
                <li>Assisted enterprise merchants with web and mobile payment integrations.</li>
                <li>Worked across UPI, cards, wallets, netbanking, gift cards and promotional wallets.</li>
                <li>Investigated payment failures, retries, refunds and integration issues using browser DevTools, request/response traces and logs.</li>
                <li>Collaborated with merchant engineering teams and internal product and engineering teams to resolve implementation blockers.</li>
                <li>Supported time-sensitive escalations and high-priority go-lives.</li>
              </ul>

              {/* Merchant Showcase */}
              <div className={styles.merchantShowcase}>
                <div className={styles.showcaseHeader}>
                  <h3 className={styles.showcaseTitle}>Selected merchants I have supported</h3>
                  <p className={styles.showcaseSubtitle}>
                    Examples from a broader portfolio of enterprise merchant integrations.
                  </p>
                </div>

                <div className={styles.merchantGroup}>
                  <p className={styles.groupLabel}>
                    <span className={styles.groupDot} style={{ background: '#67E8F9' }} aria-hidden="true" />
                    Payment Gateway — Integrations &amp; Go-Lives
                  </p>
                  <div className={styles.logoGrid}>
                    {GATEWAY_MERCHANTS.map(m => <LogoTile key={m.name} {...m} />)}
                  </div>
                </div>

                <div className={styles.merchantGroup}>
                  <p className={styles.groupLabel}>
                    <span className={styles.groupDot} style={{ background: '#A78BFA' }} aria-hidden="true" />
                    Engage — Loyalty, Wallets &amp; Gift Cards
                  </p>
                  <div className={styles.logoGrid}>
                    {ENGAGE_MERCHANTS.map(m => <LogoTile key={m.name} {...m} />)}
                  </div>
                </div>

                <p className={styles.disclaimer}>
                  Selected examples of merchants I have supported professionally through my Razorpay role.
                  Brand names are used to describe professional experience and do not imply endorsement.
                </p>
              </div>
            </div>
          </div>

          {/* ── Temenos ── */}
          <div className={`${styles.entry} reveal`} ref={temenosRef as React.RefObject<HTMLDivElement>}>
            <div className={styles.timelineDot} aria-hidden="true">
              <span className={styles.dotInner} style={{ background: '#A78BFA' }} />
            </div>

            <div className={styles.entryCard}>
              <div className={styles.entryHeader}>
                <div className={styles.companyLogo}>
                  <img
                    src="/images/brands/temenos.svg"
                    alt="Temenos logo"
                    className={styles.companyLogoImg}
                    width={160}
                    height={40}
                  />
                </div>
                <div className={styles.entryMeta}>
                  <span className={styles.entryRole}>Product Engineer / Software Engineer</span>
                  <span className={styles.entryPeriod}>Jan 2021 – Sep 2022</span>
                </div>
              </div>

              <div className={styles.focusChips}>
                {['Banking Technology', 'Backend Engineering', 'REST APIs'].map(c => (
                  <span key={c} className={`tag ${styles.focusChip}`}>{c}</span>
                ))}
              </div>

              <p className={styles.entrySummary}>
                Built and supported backend services in a banking technology environment,
                with an emphasis on REST API reliability, microservices architecture and deployment operations.
              </p>

              <ul className={styles.responsibilities}>
                <li>Built and deployed 16+ REST APIs using Java for customer-related banking services.</li>
                <li>Supported backend services within an ecosystem of 100+ APIs and microservices.</li>
                <li>Worked with AWS, Docker and Kubernetes for deployment and containerized infrastructure.</li>
                <li>Worked with PostgreSQL, MongoDB, Git, Bitbucket and test-driven development workflows.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
