import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const ORBIT_LABELS = [
  { label: 'API INTEGRATIONS', angle: -20, radius: 200 },
  { label: 'PAYMENT FLOWS', angle: 45, radius: 200 },
  { label: 'BACKEND SYSTEMS', angle: 140, radius: 200 },
  { label: 'CLOUD INFRASTRUCTURE', angle: 220, radius: 200 },
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let t = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      const { width: w, height: h } = canvas
      ctx.clearRect(0, 0, w, h)
      const cx = w / 2
      const cy = h / 2

      // Outer orbit rings
      const rings = [
        { r: Math.min(w, h) * 0.42, opacity: 0.12 },
        { r: Math.min(w, h) * 0.35, opacity: 0.08 },
        { r: Math.min(w, h) * 0.28, opacity: 0.06 },
      ]

      rings.forEach(({ r, opacity }) => {
        ctx.beginPath()
        ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(110, 139, 255, ${opacity})`
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Orbit dots
      const mainR = Math.min(w, h) * 0.42
      const dots = [
        { speed: 0.003, offset: 0, color: '#67E8F9', size: 3 },
        { speed: -0.0018, offset: Math.PI, color: '#6E8BFF', size: 2.5 },
        { speed: 0.0025, offset: Math.PI / 3, color: '#A78BFA', size: 2 },
      ]

      dots.forEach(({ speed, offset, color, size }) => {
        const angle = t * speed + offset
        const dx = cx + Math.cos(angle) * mainR
        const dy = cy + Math.sin(angle) * mainR

        // Trail
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(dx, dy, 0, dx, dy, size * 4)
        gradient.addColorStop(0, color)
        gradient.addColorStop(1, 'transparent')
        ctx.fillStyle = gradient
        ctx.arc(dx, dy, size * 4, 0, Math.PI * 2)
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.arc(dx, dy, size, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()

        // Connection line to center
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(dx, dy)
        ctx.strokeStyle = `${color}18`
        ctx.lineWidth = 0.5
        ctx.stroke()
      })

      // Center pulse
      const pulse = 0.5 + 0.5 * Math.sin(t * 0.02)
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 60)
      grd.addColorStop(0, `rgba(110, 139, 255, ${0.08 + pulse * 0.06})`)
      grd.addColorStop(1, 'transparent')
      ctx.fillStyle = grd
      ctx.beginPath()
      ctx.arc(cx, cy, 60, 0, Math.PI * 2)
      ctx.fill()

      t++
      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const handleScrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className={styles.hero} aria-label="Introduction">
      <div className={styles.gridBg} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* Left Column */}
        <div className={styles.left}>
          {/* Identity Eyebrow Badge */}
          <div className={styles.identityRow}>
            <span className={styles.nameBadge}>ASWIN A</span>
            <span className={styles.badgeSeparator}>//</span>
            <span className={styles.roleBadge}>
              <span className={styles.livePulse} />
              Solutions Engineer @ Razorpay
            </span>
          </div>

          <p className={`${styles.eyebrow} font-mono`}>
            SOLUTIONS ENGINEER @ RAZORPAY · PREVIOUSLY TEMENOS
          </p>

          <h1 className={styles.headline}>
            Solutions Engineering.{' '}
            <span className="gradient-text">AI-Assisted Building.</span> Real-World Impact.
          </h1>

          <p className={styles.copy}>
            I work at the intersection of enterprise integrations, backend systems and
            customer-facing engineering. At Razorpay, I help merchants navigate payment and loyalty
            integrations, troubleshoot technical issues and reach successful go-lives. Outside my
            core role, I use AI-assisted development to build websites, applications and technical prototypes.
          </p>

          <div className={styles.ctas}>
            <button
              className="btn btn-primary"
              onClick={() => handleScrollTo('#experience')}
              id="hero-cta-experience"
            >
              View experience
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleScrollTo('#projects')}
              id="hero-cta-projects"
            >
              Selected projects
            </button>
            <a
              href="https://drive.google.com/file/d/1jfjiPLLCT_gRqfX2bgElnSKmAYmh3J0r/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeHeroBtn}
              id="hero-cta-resume"
              aria-label="View Aswin A's Resume (opens Google Drive in new tab)"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
              Resume ↗
            </a>
          </div>

          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M6 1C4.067 1 2.5 2.567 2.5 4.5c0 2.762 3.5 6.5 3.5 6.5s3.5-3.738 3.5-6.5C9.5 2.567 7.933 1 6 1zm0 4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="currentColor"/>
              </svg>
              Bengaluru, India
            </span>
            <span className={styles.metaDot}>·</span>
            <span className={styles.metaItem}>Solutions Engineering</span>
            <span className={styles.metaDot}>·</span>
            <span className={styles.metaItem}>Enterprise Payments · Backend APIs · AI-Assisted Dev</span>
          </div>
        </div>

        {/* Right Column — Technical Illustration */}
        <div className={styles.right} aria-label="Technical illustration">
          <div className={styles.orbitContainer}>
            {/* Canvas for animated orbits */}
            <canvas ref={canvasRef} className={styles.orbitCanvas} aria-hidden="true" />

            {/* Portrait */}
            <div className={styles.portraitRing}>
              <div className={styles.portraitFrame}>
                <img
                  src="/images/aswin-portrait.jpg"
                  alt="Aswin A — Solutions Engineer"
                  className={styles.portrait}
                  loading="eager"
                />
              </div>
              {/* Floating Nameplate Badge */}
              <div className={styles.portraitNameplate} aria-label="Aswin A — Solutions Engineer">
                <span className={styles.nameplateTitle}>Aswin A</span>
                <span className={styles.nameplateDivider}>·</span>
                <span className={styles.nameplateRole}>Solutions Engineer</span>
              </div>
            </div>

            {/* Floating orbit labels */}
            {ORBIT_LABELS.map(({ label, angle, radius: _r }) => {
              // Position labels around the orbit visually
              const rad = (angle * Math.PI) / 180
              const r = 44
              const x = 50 + r * Math.cos(rad)
              const y = 50 + r * Math.sin(rad)
              return (
                <div
                  key={label}
                  className={styles.orbitLabel}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                  aria-hidden="true"
                >
                  {label}
                </div>
              )
            })}

            {/* System annotation */}
            <div className={styles.annotation} aria-hidden="true">
              <span className={styles.annotationDot} />
              BUILD / DEBUG / SHIP
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
