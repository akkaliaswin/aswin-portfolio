import styles from './Hero.module.css'

export default function Hero() {
  const handleScrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className={styles.hero} aria-label="Introduction and Overview">
      {/* Editorial Registration Crosshairs */}
      <div className={styles.crosshairTopLeft} aria-hidden="true">+</div>
      <div className={styles.crosshairTopRight} aria-hidden="true">+</div>

      <div className="container">
        {/* Top Status Strip */}
        <div className={styles.telemetryBar}>
          <div className={styles.telemetryLeft}>
            <span className={styles.statusDot} />
            <span className={styles.statusText}>SOLUTIONS ENGINEER @ RAZORPAY · PREVIOUSLY TEMENOS</span>
          </div>
          <div className={styles.telemetryRight}>
            <span className={styles.geoTag}>BENGALURU, INDIA</span>
            <span className={styles.slashSep}>/</span>
            <span className={styles.verTag}>PORTFOLIO</span>
          </div>
        </div>

        {/* Hero Composition Grid */}
        <div className={styles.heroGrid}>
          {/* Main Typographic Column (Left) */}
          <div className={styles.mainContent}>
            {/* Monumental Name Header */}
            <div className={styles.nameLockup}>
              <p className={styles.kicker}>SOLUTIONS ENGINEER @ RAZORPAY · PREVIOUSLY TEMENOS</p>
              <h1 className={styles.monumentalName}>
                ASWIN A<span className={styles.periodDot}>.</span>
              </h1>
            </div>

            {/* Expressive Editorial Headline */}
            <h2 className={styles.editorialHeadline}>
              Solutions Engineering.{' '}
              <span className={styles.highlightText}>AI-Assisted Building.</span>{' '}
              Real-World Impact.
            </h2>

            {/* Factual, Precise Body Copy */}
            <p className={styles.leadCopy}>
              I work at the intersection of solutions engineering, backend development, and customer-facing technical problem-solving. At <strong>Razorpay</strong>, I help merchants implement payment and loyalty integrations, troubleshoot technical issues, and resolve blockers during go-lives. Previously at <strong>Temenos</strong>, I built and supported Java REST APIs and backend services in a banking technology environment. Alongside my professional work, I use AI-assisted development to build applications, websites, and technical prototypes.
            </p>

            {/* Action Buttons Deck */}
            <div className={styles.ctaDeck}>
              <button
                className="btn btn-primary"
                onClick={() => handleScrollTo('#experience')}
                id="hero-cta-experience"
              >
                <span>View experience</span>
                <span className={styles.btnArrow}>→</span>
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => handleScrollTo('#projects')}
                id="hero-cta-projects"
              >
                <span>Selected projects</span>
              </button>

              <a
                href="https://drive.google.com/file/d/1jfjiPLLCT_gRqfX2bgElnSKmAYmh3J0r/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-signal"
                id="hero-cta-resume"
                aria-label="View Aswin A's Resume (Google Drive)"
              >
                <span>Resume ↗</span>
              </a>
            </div>

            {/* Concise Capability Meta Line */}
            <div className={styles.heroMetaLine}>
              <span className={styles.metaLocation}>Bengaluru, India</span>
              <span className={styles.metaDot}>·</span>
              <span>Solutions Engineering</span>
              <span className={styles.metaDot}>·</span>
              <span>Enterprise Payments · Backend APIs · AI-Assisted Dev</span>
            </div>

            {/* Live Metrics Row */}
            <div className={styles.metricsRow}>
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>400+</span>
                <span className={styles.metricLab}>Merchant Integration Requests Handled</span>
              </div>
              <div className={styles.metricDivider} />
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>40+</span>
                <span className={styles.metricLab}>Merchant Go-Lives Supported</span>
              </div>
              <div className={styles.metricDivider} />
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>16+</span>
                <span className={styles.metricLab}>REST APIs Built at Temenos</span>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait Card with Restrained Systems Orbit */}
          <div className={styles.dossierColumn}>
            <div className={styles.orbitContainer}>
              {/* Restrained Animated Systems Orbit Visual */}
              <div className={styles.systemsOrbit} aria-hidden="true">
                {/* Outer Ring with slowly orbiting node */}
                <div className={styles.orbitRingOuter}>
                  <span className={styles.orbitNodeOuter} />
                </div>
                {/* Mid Concentric Guide Ring */}
                <div className={styles.orbitRingMid} />
                {/* Inner Ring with counter-orbiting node */}
                <div className={styles.orbitRingInner}>
                  <span className={styles.orbitNodeInner} />
                </div>

                {/* 4 Compact Expertise Badges */}
                <div className={`${styles.orbitBadge} ${styles.badgeTopLeft}`}>
                  <span className={styles.badgeDot} />
                  <span>API Integrations</span>
                </div>
                <div className={`${styles.orbitBadge} ${styles.badgeTopRight}`}>
                  <span className={styles.badgeDot} />
                  <span>Payment Flows</span>
                </div>
                <div className={`${styles.orbitBadge} ${styles.badgeBottomLeft}`}>
                  <span className={styles.badgeDot} />
                  <span>Backend Systems</span>
                </div>
                <div className={`${styles.orbitBadge} ${styles.badgeBottomRight}`}>
                  <span className={styles.badgeDot} />
                  <span>Loyalty Solutions</span>
                </div>
              </div>

              {/* Editorial Portrait Frame */}
              <div className={styles.portraitDossier}>
                <div className={styles.dossierCornerTL} />
                <div className={styles.dossierCornerBR} />

                <div className={styles.portraitImageWrap}>
                  <img
                    src="/images/aswin-portrait.jpg"
                    alt="Aswin A — Solutions Engineer at Razorpay"
                    className={styles.portraitPhoto}
                    loading="eager"
                  />
                  <div className={styles.imageOverlay} />
                </div>

                {/* Dossier Metadata Plaque */}
                <div className={styles.dossierPlaque}>
                  <div className={styles.plaqueRow}>
                    <span className={styles.plaqueKey}>NAME:</span>
                    <span className={styles.plaqueVal}>ASWIN A</span>
                  </div>
                  <div className={styles.plaqueRow}>
                    <span className={styles.plaqueKey}>ROLE:</span>
                    <span className={styles.plaqueVal}>SOLUTIONS ENGINEER</span>
                  </div>
                  <div className={styles.plaqueRow}>
                    <span className={styles.plaqueKey}>ORGANIZATION:</span>
                    <span className={styles.plaqueVal}>RAZORPAY · EX-TEMENOS</span>
                  </div>
                  <div className={styles.plaqueRow}>
                    <span className={styles.plaqueKey}>EXPERTISE:</span>
                    <span className={styles.plaqueVal}>INTEGRATIONS · APIS · AI</span>
                  </div>
                </div>
              </div>

              {/* Mobile-only compact badges strip (repositioned on small screens to prevent overlap) */}
              <div className={styles.mobileBadgeGrid} aria-hidden="true">
                <span className={styles.mobileBadge}><span className={styles.badgeDot} />API Integrations</span>
                <span className={styles.mobileBadge}><span className={styles.badgeDot} />Payment Flows</span>
                <span className={styles.mobileBadge}><span className={styles.badgeDot} />Backend Systems</span>
                <span className={styles.mobileBadge}><span className={styles.badgeDot} />Loyalty Solutions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Scroll Invitation */}
        <div className={styles.scrollStrip}>
          <button
            className={styles.scrollBtn}
            onClick={() => handleScrollTo('#about')}
            aria-label="Scroll to chapter 01 Profile"
          >
            <span className={styles.scrollLine} />
            <span className={styles.scrollText}>SCROLL TO EXPLORE // 01 PROFILE · ASWIN A</span>
            <span className={styles.scrollArrow}>↓</span>
          </button>
        </div>
      </div>
    </section>
  )
}
