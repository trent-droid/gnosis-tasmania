import { useEffect } from 'react'

export function useScrollFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            observer.unobserve(e.target)
          }
        })
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px',
      }
    )

    const rafId = requestAnimationFrame(() => {
      document.querySelectorAll('section.fade-section, .fade-content').forEach(el => {
        observer.observe(el)
      })
    })

    return () => {
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [])
}
