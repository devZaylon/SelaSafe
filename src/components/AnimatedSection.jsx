import { motion } from 'framer-motion'
import { forwardRef } from 'react'

// Animation variants for different directions
const animationVariants = {
  'fade-up': {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0
    }
  },
  'fade-down': {
    hidden: {
      opacity: 0,
      y: -40
    },
    visible: {
      opacity: 1,
      y: 0
    }
  },
  'slide-left': {
    hidden: {
      opacity: 0,
      x: 60
    },
    visible: {
      opacity: 1,
      x: 0
    }
  },
  'slide-right': {
    hidden: {
      opacity: 0,
      x: -60
    },
    visible: {
      opacity: 1,
      x: 0
    }
  },
  'fade': {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    }
  },
  'scale': {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1
    }
  },
  'zoom-in': {
    hidden: {
      opacity: 0,
      scale: 0.6
    },
    visible: {
      opacity: 1,
      scale: 1
    }
  },
  'zoom-out': {
    hidden: {
      opacity: 0,
      scale: 1.2
    },
    visible: {
      opacity: 1,
      scale: 1
    }
  }
}

// Professional easing curves
const easingPresets = {
  smooth: [0.25, 0.1, 0.25, 1],        // Smooth, natural feeling
  snappy: [0.4, 0, 0.2, 1],            // Quick and responsive  
  gentle: [0.16, 1, 0.3, 1],           // Soft and gentle
  bouncy: [0.68, -0.55, 0.265, 1.55],  // Playful bounce
  spring: [0.175, 0.885, 0.32, 1.275]  // Spring-like motion
}

/**
 * AnimatedSection - A reusable scroll-triggered animation component
 * 
 * @param {React.ReactNode} children - Content to animate
 * @param {string} direction - Animation type ('fade-up', 'slide-left', etc.)
 * @param {number} duration - Animation duration in seconds (default: 0.6)
 * @param {number} delay - Animation delay in seconds (default: 0)
 * @param {string} easing - Easing preset ('smooth', 'snappy', etc.)
 * @param {number} threshold - Viewport intersection threshold (0-1, default: 0.1)
 * @param {boolean} triggerOnce - Whether animation triggers only once (default: true)
 * @param {string} className - Additional CSS classes
 * @param {string} as - HTML element type (default: 'div')
 * @param {boolean} stagger - Enable staggered child animations (default: false)
 * @param {number} staggerDelay - Delay between staggered animations (default: 0.1)
 * @param {boolean} reduceMotion - Respect user's motion preferences (default: true)
 */
const AnimatedSection = forwardRef(({
  children,
  direction = 'fade-up',
  duration = 0.6,
  delay = 0,
  easing = 'smooth',
  threshold = 0.1,
  triggerOnce = true,
  className = '',
  as = 'div',
  stagger = false,
  staggerDelay = 0.1,
  reduceMotion = true,
  ...props
}, ref) => {
  
  // Check for user's motion preferences
  const prefersReducedMotion = reduceMotion && typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Get animation variant, fallback to fade if motion is reduced
  const variant = prefersReducedMotion 
    ? animationVariants['fade'] 
    : (animationVariants[direction] || animationVariants['fade-up'])
  
  // Create transition configuration
  const transition = {
    duration: prefersReducedMotion ? 0.2 : duration,
    delay: prefersReducedMotion ? 0 : delay,
    ease: easingPresets[easing] || easingPresets.smooth
  }

  // Viewport configuration for intersection observer
  const viewport = {
    once: triggerOnce,
    margin: '-10px',
    amount: threshold
  }

  // Handle staggered animations for child elements
  const containerVariants = stagger ? {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
        delayChildren: prefersReducedMotion ? 0 : delay
      }
    }
  } : undefined

  const itemVariants = stagger ? variant : undefined

  // Motion component props
  const motionProps = {
    ref,
    className,
    variants: containerVariants || variant,
    initial: 'hidden',
    whileInView: 'visible',
    viewport,
    transition: containerVariants ? undefined : transition,
    ...props
  }

  // Create the appropriate motion component
  const MotionComponent = motion[as] || motion.div

  return (
    <MotionComponent {...motionProps}>
      {stagger ? (
        // Wrap children in motion divs for stagger effect
        Array.isArray(children) ? (
          children.map((child, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={transition}
            >
              {child}
            </motion.div>
          ))
        ) : (
          <motion.div variants={itemVariants} transition={transition}>
            {children}
          </motion.div>
        )
      ) : (
        children
      )}
    </MotionComponent>
  )
})

AnimatedSection.displayName = 'AnimatedSection'

export default AnimatedSection

// Export additional utility components for common use cases
export const FadeUp = ({ children, ...props }) => (
  <AnimatedSection direction="fade-up" {...props}>
    {children}
  </AnimatedSection>
)

export const FadeDown = ({ children, ...props }) => (
  <AnimatedSection direction="fade-down" {...props}>
    {children}
  </AnimatedSection>
)

export const SlideLeft = ({ children, ...props }) => (
  <AnimatedSection direction="slide-left" {...props}>
    {children}
  </AnimatedSection>
)

export const SlideRight = ({ children, ...props }) => (
  <AnimatedSection direction="slide-right" {...props}>
    {children}
  </AnimatedSection>
)

export const FadeIn = ({ children, ...props }) => (
  <AnimatedSection direction="fade" {...props}>
    {children}
  </AnimatedSection>
)

export const ScaleIn = ({ children, ...props }) => (
  <AnimatedSection direction="scale" {...props}>
    {children}
  </AnimatedSection>
)

export const ZoomIn = ({ children, ...props }) => (
  <AnimatedSection direction="zoom-in" {...props}>
    {children}
  </AnimatedSection>
)

export const ZoomOut = ({ children, ...props }) => (
  <AnimatedSection direction="zoom-out" {...props}>
    {children}
  </AnimatedSection>
)