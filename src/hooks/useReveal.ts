import { useEffect, useRef } from 'react'

interface UseRevealOptions {
  threshold?: number
  once?: boolean
}

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseRevealOptions = {}
) {
  const { threshold = 0.01, once = true } = options
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Immediately check if already in view (e.g. direct hash navigation or above fold)
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
      el.classList.add('visible')
      if (once) return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          if (once) observer.unobserve(el)
        } else if (!once) {
          el.classList.remove('visible')
        }
      },
      { threshold, rootMargin: '50px 0px 50px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return ref
}

export function useRevealAll(selector: string, threshold = 0.01) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector)
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '100px 0px 100px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [selector, threshold])
}

export function useCounter(
  target: number,
  duration = 2000,
  startOnVisible = true
) {
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const start = () => {
      if (started.current) return
      started.current = true
      const startTime = performance.now()
      const tick = (now: number) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        el.textContent = Math.round(eased * target).toString()
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    if (!startOnVisible) {
      start()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start()
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration, startOnVisible])

  return ref
}
