import { useEffect, useRef } from 'react'
import styles from './SignalBackground.module.css'

interface SignalNode {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseAlpha: number
  pulseSpeed: number
  phase: number
  isAccent: boolean
}

interface SignalPacket {
  startX: number
  startY: number
  targetX: number
  targetY: number
  progress: number
  speed: number
  color: string
}

export default function SignalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let width = 0
    let height = 0
    let nodes: SignalNode[] = []
    let packets: SignalPacket[] = []
    let mouse = { x: -1000, y: -1000, active: false }

    const init = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight

      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)

      const isMobile = width < 768
      const nodeCount = isMobile ? 20 : 36
      nodes = []

      // Distribute nodes evenly across viewport sectors with natural jitter
      const cols = isMobile ? 4 : 6
      const rows = isMobile ? 5 : 6
      const cellWidth = width / cols
      const cellHeight = height / rows

      for (let i = 0; i < nodeCount; i++) {
        const col = i % cols
        const row = Math.floor(i / cols) % rows
        const isAccent = i % 4 === 0 // ~25% prominent accent nodes

        const x = (col + 0.2 + Math.random() * 0.6) * cellWidth
        const y = (row + 0.2 + Math.random() * 0.6) * cellHeight

        nodes.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          radius: isAccent ? Math.random() * 1.0 + 2.8 : Math.random() * 0.8 + 1.8,
          baseAlpha: isAccent ? Math.random() * 0.2 + 0.68 : Math.random() * 0.25 + 0.42,
          pulseSpeed: Math.random() * 0.02 + 0.012,
          phase: Math.random() * Math.PI * 2,
          isAccent,
        })
      }
    }

    init()

    let resizeTimer: number
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(init, 200)
    }

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
      mouse.x = clientX
      mouse.y = clientY
      mouse.active = true
    }

    const handlePointerLeave = () => {
      mouse.active = false
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handlePointerMove)
    window.addEventListener('touchstart', handlePointerMove, { passive: true })
    window.addEventListener('mouseleave', handlePointerLeave)

    let isVisible = true
    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === 'visible'
      if (isVisible) {
        lastTime = performance.now()
        animId = requestAnimationFrame(render)
      } else {
        cancelAnimationFrame(animId)
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    let lastTime = performance.now()
    let packetTimer = 0
    const maxLinkDist = width < 768 ? 120 : 170

    const render = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1)
      lastTime = now

      ctx.clearRect(0, 0, width, height)

      // Draw subtle technical grid coordinate ticks
      const gridSize = width < 768 ? 80 : 100
      const tickSize = 3.5
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
      ctx.lineWidth = 1

      for (let x = gridSize; x < width; x += gridSize) {
        for (let y = gridSize; y < height; y += gridSize) {
          ctx.beginPath()
          ctx.moveTo(x - tickSize, y)
          ctx.lineTo(x + tickSize, y)
          ctx.moveTo(x, y - tickSize)
          ctx.lineTo(x, y + tickSize)
          ctx.stroke()
        }
      }

      // Periodically spawn telemetry packet along nearby nodes
      packetTimer += dt
      if (packetTimer > 1.2 && nodes.length > 2) {
        packetTimer = 0
        const n1 = nodes[Math.floor(Math.random() * nodes.length)]
        let closest: SignalNode | null = null
        let closestDist = maxLinkDist * 1.3
        for (const n2 of nodes) {
          if (n1 === n2) continue
          const d = Math.hypot(n1.x - n2.x, n1.y - n2.y)
          if (d < closestDist) {
            closestDist = d
            closest = n2
          }
        }
        if (closest) {
          packets.push({
            startX: n1.x,
            startY: n1.y,
            targetX: closest.x,
            targetY: closest.y,
            progress: 0,
            speed: 0.65 + Math.random() * 0.55,
            color: Math.random() > 0.35 ? '#FF4B26' : '#FFB020',
          })
        }
      }

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        n.phase += n.pulseSpeed
        n.x += n.vx * dt * 60
        n.y += n.vy * dt * 60

        // Wrap bounds
        if (n.x < -20) n.x = width + 20
        if (n.x > width + 20) n.x = -20
        if (n.y < -20) n.y = height + 20
        if (n.y > height + 20) n.y = -20

        // Mouse gentle deflection
        if (mouse.active) {
          const dx = n.x - mouse.x
          const dy = n.y - mouse.y
          const d = Math.hypot(dx, dy)
          if (d < 140 && d > 0) {
            const force = (1 - d / 140) * 0.8
            n.x += (dx / d) * force
            n.y += (dy / d) * force
          }
        }

        // Draw node with soft signal glow and depth hierarchy
        const pulseAmp = n.isAccent ? 0.22 : 0.12
        const alpha = Math.min(1, Math.max(0.25, n.baseAlpha + Math.sin(n.phase) * pulseAmp))

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2)

        if (n.isAccent) {
          // Prominent accent node: slightly brighter warm red/orange with soft halo
          ctx.fillStyle = `rgba(255, 95, 45, ${alpha})`
          ctx.shadowColor = 'rgba(255, 75, 38, 0.75)'
          ctx.shadowBlur = 10
        } else {
          // Subtle node: warm low-contrast node
          ctx.fillStyle = `rgba(255, 80, 40, ${alpha})`
          ctx.shadowColor = 'rgba(255, 75, 38, 0.38)'
          ctx.shadowBlur = 5
        }
        ctx.fill()
        ctx.shadowBlur = 0

        // Constellation connections: Noticeably visible warm red/orange fine lines
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j]
          const dist = Math.hypot(n.x - n2.x, n.y - n2.y)
          if (dist < maxLinkDist) {
            // Enhanced red/orange lines: clearly visible against dark background without harshness
            const linkAlpha = (1 - dist / maxLinkDist) * 0.30
            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(n2.x, n2.y)
            ctx.strokeStyle = `rgba(255, 90, 45, ${linkAlpha})`
            ctx.lineWidth = 0.85
            ctx.stroke()
          }
        }
      }

      // Update & draw glowing telemetry packets
      for (let k = packets.length - 1; k >= 0; k--) {
        const p = packets[k]
        p.progress += p.speed * dt
        if (p.progress >= 1) {
          packets.splice(k, 1)
          continue
        }
        const curX = p.startX + (p.targetX - p.startX) * p.progress
        const curY = p.startY + (p.targetY - p.startY) * p.progress

        ctx.beginPath()
        ctx.arc(curX, curY, 2.6, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.shadowColor = p.color
        ctx.shadowBlur = 10
        ctx.fill()
        ctx.shadowBlur = 0
      }

      if (isVisible) {
        animId = requestAnimationFrame(render)
      }
    }

    animId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handlePointerMove)
      window.removeEventListener('touchstart', handlePointerMove)
      window.removeEventListener('mouseleave', handlePointerLeave)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <div className={styles.signalContainer} aria-hidden="true">
      {/* Luminous ambient drift orbs */}
      <div className={styles.glowLayer}>
        <div className={styles.glowSignalOrange} />
        <div className={styles.glowWarmAmber} />
        <div className={styles.glowDeepIndigo} />
      </div>

      {/* Interactive telemetry canvas */}
      <canvas ref={canvasRef} className={styles.signalCanvas} />

      {/* Subtle vignette for contrast */}
      <div className={styles.vignette} />
    </div>
  )
}
