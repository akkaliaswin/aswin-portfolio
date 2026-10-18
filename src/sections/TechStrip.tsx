import styles from './TechStrip.module.css'

const ITEMS = [
  'SOLUTIONS ENGINEERING',
  'PAYMENT GATEWAY INTEGRATIONS',
  'API ENGINEERING',
  'AI-ASSISTED DEVELOPMENT',
  'BACKEND SYSTEMS',
  'RAPID PROTOTYPING',
]

export default function TechStrip() {
  // Duplicate for seamless loop
  const allItems = [...ITEMS, ...ITEMS]

  return (
    <div className={styles.strip} aria-label="Technical specialisations">
      {/* Static version for reduced motion / screen readers */}
      <div className={styles.staticItems} aria-hidden="false">
        {ITEMS.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.dot} aria-hidden="true">·</span>
            {item}
          </span>
        ))}
      </div>

      {/* Animated ticker */}
      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.track}>
          {allItems.map((item, i) => (
            <span key={i} className={styles.tickerItem}>
              <span className={styles.tickerDot}>◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
