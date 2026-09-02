import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

/**
 * BackToTop - A floating button that appears after the user scrolls down a
 * reasonable distance and smoothly returns them to the top of the page.
 *
 * - Hidden while near the top of the page.
 * - Appears after ~600px of scrolling.
 * - Smoothly scrolls to the top when clicked.
 * - Positioned in the lower-right, responsive on mobile and desktop.
 */
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 600)
    }

    // Set initial state and listen for scroll.
    toggleVisibility()
    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-sela-neon-pink to-sela-purple-glow text-white shadow-lg hover:shadow-xl hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-sela-purple-glow focus-visible:ring-offset-2 focus-visible:ring-offset-sela-black transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp size={22} className="md:w-6 md:h-6" />
    </button>
  )
}
