import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only enable on desktop with fine pointer and no reduced-motion preference
    if (typeof window === 'undefined') return
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!isFinePointer || prefersReducedMotion) return
    const glow = glowRef.current
    if (!glow) return
    glow.style.display = 'block'

    let mouseX = -200
    let mouseY = -200
    let currentX = -200
    let currentY = -200
    let animId: number

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      // Smooth lerp
      currentX += (mouseX - currentX) * 0.12
      currentY += (mouseY - currentY) * 0.12

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`
      }

      animId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    animId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      style={{
        display: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 75, 38, 0.08) 0%, rgba(255, 160, 51, 0.03) 45%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 9999,
        willChange: 'transform',
      }}
      aria-hidden="true"
    />
  )
}
