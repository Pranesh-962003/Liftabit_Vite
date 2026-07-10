import { useEffect } from 'react'

/**
 * Custom hook to set up IntersectionObserver-based scroll reveal.
 * Elements with className "reveal" will have "in" added when visible.
 */
export function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    )

    const els = document.querySelectorAll('.reveal')
    els.forEach(el => obs.observe(el))

    return () => obs.disconnect()
  }, [])
}
