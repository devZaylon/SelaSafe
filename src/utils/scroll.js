/**
 * Smoothly scroll to a section on the current page by its element id.
 * If the id is empty/falsy, scrolls to the very top of the page.
 *
 * Relies on `scroll-margin-top` (set on `section[id]` in index.css) so the
 * target heading is not hidden underneath the sticky header.
 *
 * @param {string} id - The target element id (without the leading '#').
 */
export function scrollToSection(id) {
  if (!id) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  } else {
    // Fallback: if the target isn't in the DOM yet, go to top.
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
