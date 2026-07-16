import { useEffect, useRef, useState } from 'react'

function AnimatedNumber({ raw, delay = 0 }) {
  const ref = useRef(null)
  const [displayed, setDisplayed] = useState('0')
  const [hasAnimated, setHasAnimated] = useState(false)

  // Extract prefix, numeric value, and suffix
  const match = raw.match(/^([^0-9]*)([0-9]+)(.*)$/)
  const prefix = match ? match[1] : ''
  const target = match ? parseInt(match[2]) : 0
  const suffix = match ? match[3] : ''

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => setHasAnimated(true), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [hasAnimated, delay])

  useEffect(() => {
    if (!hasAnimated || target === 0) {
      if (hasAnimated) setDisplayed(prefix + target + suffix)
      return
    }

    let current = 0
    const duration = 1200
    const startTime = performance.now()

    function animate(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4) // easeOutQuart
      current = Math.round(eased * target)
      setDisplayed(prefix + current + (current === target ? suffix : ''))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [hasAnimated, prefix, target, suffix])

  return <span ref={ref}>{displayed}</span>
}

export default function AnimatedCounter({ value, label, className }) {
  return (
    <div className={className}>
      <AnimatedNumber raw={value} delay={0} />
      <span>{label}</span>
    </div>
  )
}

export { AnimatedNumber }
