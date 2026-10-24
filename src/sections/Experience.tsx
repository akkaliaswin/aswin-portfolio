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
          loading="eager"
          onError={(e) => {
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
        {/* Section Header */}
        <div className="section-meta reveal">
          <span>02 / FIELD NOTES · PROFESSIONAL EXPERIENCE</span>
        </div>

        <div className={`reveal ${styles.sectionHead}`} ref={headRef as React.RefObject<HTMLDivElement>}>
          <h2 id="experience-heading" className="section-heading">
            Built in the <span className="gradient-text">real world.</span>
          </h2>
          <p className="section-subheading">
            “Production systems. Real constraints. Practical outcomes.”
          </p>
        </div>

        {/* Experience Scenes */}
        <div className={styles.scenesWrap}>
          {/* ──────────────── SCENE 1: RAZORPAY ──────────────── */}
          <div className={`${styles.sceneCard} reveal`} ref={razorRef as React.RefObject<HTMLDivElement>}>
            <div className={styles.pinHeader}>
              <div className={styles.pinStatus}>
                <span className={styles.liveBeacon} />
                <span>AUGUST 2024 – PRESENT</span>
              </div>
              <span className={styles.pinOrg}>RAZORPAY</span>
            </div>

            <div className={styles.sceneBody}>
              {/* Header: Company + Title */}
              <div className={styles.companyRow}>
                <div className={styles.logoWrap}>
                  <img
                    src="/images/brands/razorpay.svg"
                    alt="Razorpay brand mark"
                    className={styles.brandLogo}
                    width={180}
                    height={44}
                  />
                </div>
                <div className={styles.roleBlock}>
                  <h3 className={styles.roleTitle}>Solutions Engineer</h3>
                  <span className={styles.roleMeta}>Bengaluru, India</span>
                </div>
              </div>

              {/* Focus Domain Tags */}
              <div className={styles.chipRow}>
                <span className={styles.signalChip}>ENTERPRISE SOLUTIONS</span>
                <span className={styles.signalChip}>PAYMENT GATEWAY</span>
                <span className={styles.signalChip}>ENGAGE LOYALTY</span>
              </div>

              {/* Narrative Summary */}
              <p className={styles.summaryText}>
                I support enterprise merchants with Payment Gateway and Engage integrations, working
                across implementation guidance, technical troubleshooting, payment flows, loyalty
                solutions and merchant go-lives. I work with merchant engineering teams to understand
                integration requirements, provide implementation guidance, troubleshoot technical issues
                and help resolve blockers during time-sensitive go-lives.
              </p>

              {/* Responsibilities Matrix */}
              <div className={styles.respGrid}>
                <div className={styles.respItem}>
                  <span className={styles.respIndex}>01</span>
                  <p>Handled <strong>150+ merchant integration requests</strong> and supported <strong>15+ merchant go-lives</strong>.</p>
                </div>
                <div className={styles.respItem}>
                  <span className={styles.respIndex}>02</span>
                  <p>Assisted enterprise merchants with web and mobile payment integrations.</p>
                </div>
                <div className={styles.respItem}>
                  <span className={styles.respIndex}>03</span>
                  <p>Worked across UPI, cards, wallets, netbanking, gift cards and promotional wallets.</p>
                </div>
                <div className={styles.respItem}>
                  <span className={styles.respIndex}>04</span>
                  <p>Investigated payment failures, retries, refunds and integration issues using browser DevTools, request/response traces and logs.</p>
                </div>
                <div className={styles.respItem}>
                  <span className={styles.respIndex}>05</span>
                  <p>Collaborated with merchant engineering teams and internal product and engineering teams to resolve implementation blockers.</p>
                </div>
                <div className={styles.respItem}>
                  <span className={styles.respIndex}>06</span>
                  <p>Supported time-sensitive escalations and high-priority go-lives.</p>
                </div>
              </div>

              {/* Merchant Integration Showcase */}
              <div className={styles.merchantShowcase}>
                <div className={styles.showcaseHeader}>
                  <div className={styles.showcaseTitleWrap}>
                    <span className={styles.showcaseDot} />
                    <h4 className={styles.showcaseTitle}>Selected Merchants Supported</h4>
                  </div>
                  <span className={styles.showcaseMeta}>REPRESENTATIVE CLIENT WORK</span>
                </div>

                <div className={styles.merchantSection}>
                  <p className={styles.merchantCategoryLabel}>
                    GROUP 1: PAYMENT GATEWAY — INTEGRATIONS &amp; GO-LIVES
                  </p>
                  <div className={styles.logoGrid}>
                    {GATEWAY_MERCHANTS.map((m) => (
                      <LogoTile key={m.name} {...m} />
                    ))}
                  </div>
                </div>

                <div className={styles.merchantSection}>
                  <p className={styles.merchantCategoryLabel}>
                    GROUP 2: ENGAGE — LOYALTY, WALLETS &amp; GIFT CARDS
                  </p>
                  <div className={styles.logoGrid}>
                    {ENGAGE_MERCHANTS.map((m) => (
                      <LogoTile key={m.name} {...m} />
                    ))}
                  </div>
                </div>

                <p className={styles.disclaimerText}>
                  Selected examples of merchants I have supported professionally through my Razorpay role. Brand names are used to describe professional experience and do not imply endorsement.
                </p>
              </div>
            </div>
          </div>

          {/* ──────────────── SCENE 2: TEMENOS ──────────────── */}
          <div className={`${styles.sceneCard} reveal`} ref={temenosRef as React.RefObject<HTMLDivElement>}>
            <div className={styles.pinHeader}>
              <div className={styles.pinStatus}>
                <span className={styles.pastDot} />
                <span>JANUARY 2021 – SEPTEMBER 2022</span>
              </div>
              <span className={styles.pinOrg}>TEMENOS</span>
            </div>

            <div className={styles.sceneBody}>
              <div className={styles.companyRow}>
                <div className={styles.logoWrap}>
                  <img
                    src="/images/brands/temenos.svg"
                    alt="Temenos brand mark"
                    className={styles.brandLogo}
                    width={180}
                    height={44}
                  />
                </div>
                <div className={styles.roleBlock}>
                  <h3 className={styles.roleTitle}>Product Engineer / Software Engineer</h3>
                  <span className={styles.roleMeta}>Chennai, India</span>
                </div>
              </div>

              <div className={styles.chipRow}>
                <span className={styles.signalChip}>BANKING TECHNOLOGY</span>
                <span className={styles.signalChip}>BACKEND ENGINEERING</span>
                <span className={styles.signalChip}>REST APIS</span>
              </div>

              <p className={styles.summaryText}>
                Built and supported backend services in a banking technology environment,
                with an emphasis on REST API reliability, microservices architecture and deployment operations.
              </p>

              <div className={styles.respGrid}>
                <div className={styles.respItem}>
                  <span className={styles.respIndex}>01</span>
                  <p>Built and deployed <strong>16+ REST APIs using Java</strong> for customer-related banking services.</p>
                </div>
                <div className={styles.respItem}>
                  <span className={styles.respIndex}>02</span>
                  <p>Supported backend services within an ecosystem of <strong>100+ APIs and microservices</strong>.</p>
                </div>
                <div className={styles.respItem}>
                  <span className={styles.respIndex}>03</span>
                  <p>Worked with AWS, Docker and Kubernetes for deployment and containerized infrastructure.</p>
                </div>
                <div className={styles.respItem}>
                  <span className={styles.respIndex}>04</span>
                  <p>Worked with PostgreSQL, MongoDB, Git, Bitbucket and test-driven development workflows.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
