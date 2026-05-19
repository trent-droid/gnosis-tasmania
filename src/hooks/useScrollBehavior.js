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
        // Lower threshold + less negative rootMargin = triggers slightly earlier,
        // so the animation is already finishing by the time the element is fully
        // in view rather than just starting. Eliminates the "pop-in" feel.
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px',
      }
    )

    // requestAnimationFrame waits until after the browser has painted the new
    // route, so all section elements are in the DOM before we observe them.
    // This replaces the arbitrary 80ms setTimeout which could fire too early
    // or too late depending on device speed.
    const rafId = requestAnimationFrame(() => {
      document.querySelectorAll('section.fade-section').forEach(el => {
        observer.observe(el)
      })
    })

    return () => {
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [pathname])
}
