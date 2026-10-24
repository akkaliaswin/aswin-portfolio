import { useEffect, useRef, useState } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { num: '01', label: 'PROFILE', href: '#about' },
  { num: '02', label: 'EXPERIENCE', href: '#experience' },
  { num: '03', label: 'AI WORKFLOWS', href: '#ai-speed' },
  { num: '04', label: 'PROJECTS', href: '#projects' },
  { num: '05', label: 'TOOLKIT', href: '#skills' },
  { num: '06', label: 'FOUNDATIONS', href: '#education' },
  { num: '07', label: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0
      setScrollProgress(progress)
      setScrolled(window.scrollY > 24)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMenuOpen(false)
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1040) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 60)
  }

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="banner">
      {/* Scroll Progress Bar */}
      <div 
        className={styles.progressBar} 
        style={{ width: `${scrollProgress}%` }} 
        aria-hidden="true" 
      />

      <div className={`container ${styles.inner}`}>
        {/* Brand Lockup: Monogram & Identity */}
        <a
          href="#hero"
          className={styles.logo}
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
          aria-label="Aswin A — Return to Top"
        >
          <div className={styles.monogramBlock}>
            <span className={styles.monogram}>A</span>
            <span className={styles.monogramDot} />
          </div>
          <div className={styles.logoMeta}>
            <span className={styles.logoName}>ASWIN A</span>
            <span className={styles.logoRole}>SOLUTIONS ENGINEER</span>
          </div>
        </a>

        {/* Desktop Chapter Navigation */}
        <nav className={styles.desktopNav} aria-label="Chapter navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
            >
              <span className={styles.linkNum}>{link.num}</span>
              <span className={styles.linkLabel}>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Header Actions: Resume CTA + Hamburger */}
        <div className={styles.actions}>
          <a
            href="https://drive.google.com/file/d/1jfjiPLLCT_gRqfX2bgElnSKmAYmh3J0r/view?usp=sharing"
            className={styles.resumeBtn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Aswin A's Resume (Google Drive)"
          >
            <span>RESUME</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close chapter navigation' : 'Open chapter navigation'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Editorial Drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.drawerHeader}>
          <span className={styles.drawerLabel}>CHAPTER DIRECTORY // ASWIN.A</span>
          <span className={styles.drawerSub}>SOLUTIONS ENGINEER</span>
        </div>

        <nav className={styles.mobileNav} aria-label="Mobile chapter navigation">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileNavLink}
              style={{ transitionDelay: menuOpen ? `${i * 35}ms` : '0ms' }}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span className={styles.mobileLinkNum}>{link.num}</span>
              <span className={styles.mobileLinkLabel}>{link.label}</span>
              <span className={styles.mobileLinkArrow}>→</span>
            </a>
          ))}
          
          <div className={styles.drawerFooter}>
            <a
              href="https://drive.google.com/file/d/1jfjiPLLCT_gRqfX2bgElnSKmAYmh3J0r/view?usp=sharing"
              className={styles.mobileResumeBtn}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={menuOpen ? 0 : -1}
            >
              VIEW RESUME (GOOGLE DRIVE) ↗
            </a>
            <p className={styles.drawerNote}>
              Bengaluru, India · Solutions Engineer @ Razorpay
            </p>
          </div>
        </nav>
      </div>
    </header>
  )
}
