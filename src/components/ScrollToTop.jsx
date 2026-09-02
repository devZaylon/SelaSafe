import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop - Scrolls the window to the top whenever the route changes.
 *
 * React Router preserves the scroll position across navigations, so moving
 * from the bottom of one page to another would leave the new page scrolled
 * down. Rendering this component inside the router resets the scroll on each
 * pathname change.
 *
 * When the location includes a hash (e.g. "/#our-story"), we skip the reset
 * so the section-scrolling logic can bring the user to the correct anchor.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
