import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Contact.module.css'

const CURRENT_YEAR = new Date().getFullYear()

export default function Contact() {
  const contentRef = useReveal()
  const [copied, setCopied] = useState(false)

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText('aswinaytb@gmail.com').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="contact" className={`section ${styles.contact}`} aria-labelledby="contact-heading">
      <div className="grid-bg" aria-hidden="true" />
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className="container">
        <div className={`${styles.contentWrapper} reveal`} ref={contentRef as React.RefObject<HTMLDivElement>}>
          {/* Availability Indicator */}
          <div className={styles.statusPill}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span>OPEN TO CONVERSATIONS · SOLUTIONS ENGINEERING &amp; FORWARD DEPLOYED</span>
          </div>

          {/* Eyebrow */}
          <div>
            <p className={styles.eyebrow}>07 / OPEN CHANNEL · GET IN TOUCH</p>
          </div>

          {/* Main Heading */}
          <h2 id="contact-heading" className={styles.heading}>
            Have a hard problem? <span className="gradient-text">Good.</span>
          </h2>

          {/* Supporting Copy */}
          <p className={styles.subtext}>
            I’m interested in teams building ambitious products and solving problems
            that require technical depth, thoughtful implementation and strong customer empathy.
          </p>

          {/* Primary CTA */}
          <div className={styles.ctaGroup}>
            <a
              href="mailto:aswinaytb@gmail.com?subject=Reaching%20out%20via%20aswin.dev"
              className={`btn btn-primary ${styles.primaryCta}`}
              id="contact-cta-talk"
            >
              Let’s talk
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                <path d="M3 7.5h9M8.5 4l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Direct Channels Cards */}
          <div className={styles.channelsGrid}>
            {/* Email Card */}
            <a
              href="mailto:aswinaytb@gmail.com"
              className={styles.channelCard}
              aria-label="Send email to aswinaytb@gmail.com"
            >
              <div className={styles.channelHeader}>
                <div className={styles.channelIcon} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div className={styles.channelArrow} aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <span className={styles.channelLabel}>Direct Inquiries</span>
              <span className={styles.channelValue}>aswinaytb@gmail.com</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className={styles.channelMeta}>Typical reply within 24–48h</span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="btn"
                  style={{ padding: '0.2rem 0.6rem', fontSize: '0.72rem', background: 'rgba(110,139,255,0.1)' }}
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <span className={styles.copyNotice}>✓ Copied</span>
                  ) : (
                    <span>Copy</span>
                  )}
                </button>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/aswinakkali"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.channelCard}
              aria-label="Visit Aswin A's LinkedIn Profile (opens in new tab)"
            >
              <div className={styles.channelHeader}>
                <div className={styles.channelIcon} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8v-8.37M7.86 6.3a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z"/>
                  </svg>
                </div>
                <div className={styles.channelArrow} aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <span className={styles.channelLabel}>Professional Network</span>
              <span className={styles.channelValue}>linkedin.com/in/aswinakkali</span>
              <span className={styles.channelMeta}>Connect &amp; message directly</span>
            </a>

            {/* Resume / CV Card */}
            <a
              href="https://drive.google.com/file/d/1jfjiPLLCT_gRqfX2bgElnSKmAYmh3J0r/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.channelCard}
              aria-label="View Aswin A's Resume on Google Drive (opens in new tab)"
            >
              <div className={styles.channelHeader}>
                <div className={styles.channelIcon} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
                <div className={styles.channelArrow} aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <span className={styles.channelLabel}>Curriculum Vitae</span>
              <span className={styles.channelValue}>Aswin_A_Resume.pdf</span>
              <span className={styles.channelMeta}>Google Drive PDF Document ↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer} role="contentinfo">
        <div className={`container ${styles.footerInner}`}>
          <div className={styles.footerBrand}>
            <div className={styles.footerMonogram}>
              <span>A</span>
              <span className={styles.footerArrow}>↗</span>
              <span>ASWIN A</span>
            </div>
            <p className={styles.footerTagline}>IDEAS → SYSTEMS → IMPACT</p>
            <p className={styles.footerCopy}>
              © {CURRENT_YEAR} Aswin A. All rights reserved.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className={styles.backToTop}
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </footer>
    </section>
  )
}
