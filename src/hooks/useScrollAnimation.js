import { useInView } from 'framer-motion'
import { useRef, useMemo, useCallback } from 'react'

/**
 * Custom hook for scroll-triggered animations
 * Provides more granular control over intersection observer behavior
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null)
  const {
    threshold = 0.1,
    triggerOnce = true,
    margin = '-10px',
    ...motionOptions
  } = options

  const isInView = useInView(ref, {
    once: triggerOnce,
    margin,
    amount: threshold,
    ...motionOptions
  })

  return { ref, isInView }
}

/**
 * Hook for sequential animations
 * Useful for animating multiple elements in sequence
 */
export function useSequentialAnimation(count, baseDelay = 0.1) {
  // Create refs array using useMemo to avoid recreating on each render
  const refs = useMemo(() => 
    Array.from({ length: count }, () => ({ current: null })), 
    [count]
  )
  
  // Create individual hooks for each ref
  const inViewStates = refs.map((ref) => 
    useInView(ref, {
      once: true,
      margin: '-10px',
      amount: 0.1
    })
  )

  const getDelay = useCallback((index) => baseDelay * index, [baseDelay])

  return { refs, inViewStates, getDelay }
}

/**
 * Hook for scroll progress tracking
 * Useful for progress bars or scroll-dependent animations
 */
export function useScrollProgress() {
  const ref = useRef(null)
  
  // This would require additional implementation for scroll progress
  // Currently returns basic intersection data
  const isInView = useInView(ref, {
    margin: '0px',
    amount: 'some'
  })

  return { ref, isInView }
}