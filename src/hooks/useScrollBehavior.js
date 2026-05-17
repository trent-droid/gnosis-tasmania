import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
}

export function useScrollFadeIn() {
  const { pathname } = useLocation()
  useEffect(() => {
    let observer
    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('is-visible')
              observer.unobserve(e.target)
            }
          })
        },
        { threshold: 0.07, rootMargin: '0px 0px -30px 0px' }
      )
      document.querySelectorAll('section.fade-section').forEach(el => {
        observer.observe(el)
      })
    }, 80)
    return () => {
      clearTimeout(timer)
      if (observer) observer.disconnect()
    }
  }, [pathname])
}
