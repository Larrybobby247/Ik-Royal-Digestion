import { useEffect } from 'react'

export const useScrollReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    revealElements.forEach(el => revealObserver.observe(el))

    return () => {
      revealElements.forEach(el => revealObserver.unobserve(el))
    }
  }, [])
}

export const useCounterAnimation = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.counter-value')

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target
          const target = parseFloat(counter.dataset.target)
          const decimal = parseInt(counter.dataset.decimal) || 0
          const duration = 2000
          const start = performance.now()

          const animate = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            const current = target * easeOut
            counter.textContent = current.toFixed(decimal)
            if (progress < 1) requestAnimationFrame(animate)
          }

          requestAnimationFrame(animate)
          counterObserver.unobserve(counter)
        }
      })
    }, { threshold: 0.5 })

    counters.forEach(counter => counterObserver.observe(counter))

    return () => {
      counters.forEach(counter => counterObserver.unobserve(counter))
    }
  }, [])
}
