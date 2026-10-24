import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Contact.module.css'

export default function Contact() {
  const contentRef = useReveal()
  const [copied, setCopied] = useState(false)

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
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
      <div className="container">
        <div className={`${styles.contentWrapper} reveal`} ref={contentRef as React.RefObject<HTMLDivElement>}>
          {/* Section Chapter */}
          <div className="section-meta">
            <span>07 / OPEN CHANNEL · GET IN TOUCH</span>
          </div>

          {/* Availability Status Pill */}
          <div className={styles.statusPill}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span>SOLUTIONS ENGINEERING · FORWARD-DEPLOYED ROLES</span>
          </div>

          {/* Main Monumental Heading */}
          <h2 id="contact-heading" className={styles.heading}>
            Have a hard problem? <span className="gradient-text">Good.</span>
          </h2>

          <p className={styles.subtext}>
            I’m interested in teams building ambitious products and solving problems that require technical depth, thoughtful implementation and strong customer empathy.
          </p>

          {/* Primary CTA Deck */}
          <div className={styles.ctaDeck}>
            <a
              href="mailto:aswinaytb@gmail.com?subject=Reaching%20out%20via%20aswin.dev"
              className="btn btn-primary"
              id="contact-cta-talk"
            >
              <span>INITIATE EMAIL CONVERSATION</span>
              <span>→</span>
            </a>
          </div>

          {/* Direct Communication Channels */}
          <div className={styles.channelsGrid}>
            {/* Email Card */}
            <div className={styles.channelCard}>
              <div className={styles.channelHeader}>
                <span className={styles.channelCode}>01 / EMAIL</span>
                <span className={styles.channelTag}>DIRECT</span>
              </div>
              <span className={styles.channelValue}>aswinaytb@gmail.com</span>
              <p className={styles.channelMeta}>Typical reply within 24–48 hours</p>
              
              <div className={styles.cardActions}>
                <a
                  href="mailto:aswinaytb@gmail.com"
                  className={styles.actionLink}
                >
                  Send Email ↗
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className={styles.copyBtn}
                  aria-label="Copy email address"
                >
                  {copied ? '✓ COPIED TO CLIPBOARD' : 'COPY EMAIL ADDRESS'}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/aswinakkali"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.channelCard}
              aria-label="Visit Aswin A's LinkedIn Profile (opens in new tab)"
            >
              <div className={styles.channelHeader}>
                <span className={styles.channelCode}>02 / LINKEDIN</span>
                <span className={styles.channelTag}>NETWORK</span>
              </div>
              <span className={styles.channelValue}>linkedin.com/in/aswinakkali</span>
              <p className={styles.channelMeta}>Connect and message directly on LinkedIn</p>
              <div className={styles.cardActions}>
                <span className={styles.actionLink}>Open Profile ↗</span>
              </div>
            </a>

            {/* Resume / Document Card */}
            <a
              href="https://drive.google.com/file/d/1jfjiPLLCT_gRqfX2bgElnSKmAYmh3J0r/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.channelCard}
              aria-label="View Aswin A's Resume on Google Drive (opens in new tab)"
            >
              <div className={styles.channelHeader}>
                <span className={styles.channelCode}>03 / RESUME</span>
                <span className={styles.channelTag}>DOCUMENT</span>
              </div>
              <span className={styles.channelValue}>Aswin_A_Resume.pdf</span>
              <p className={styles.channelMeta}>Google Drive PDF Document</p>
              <div className={styles.cardActions}>
                <span className={styles.actionLink}>View PDF ↗</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Editorial Footer */}
      <footer className={styles.footer} role="contentinfo">
        <div className={`container ${styles.footerInner}`}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <span className={styles.footerMonogram}>A.</span>
              <span className={styles.footerName}>ASWIN A</span>
            </div>
            <p className={styles.footerTagline}>
              IDEAS → SYSTEMS → IMPACT
            </p>
            <p className={styles.footerCopy}>
              © 2026 Aswin A. All rights reserved.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className={styles.backToTop}
            aria-label="Scroll back to top of page"
          >
            <span>RETURN TO TOP</span>
            <span className={styles.backArrow}>↑</span>
          </button>
        </div>
      </footer>
    </section>
  )
}
