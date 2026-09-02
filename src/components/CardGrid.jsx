import { forwardRef } from 'react'
import AnimatedSection from './AnimatedSection'

/**
 * CardGrid - Responsive grid container for cards with animation support
 * 
 * @param {React.ReactNode} children - Card components to render
 * @param {number} columns - Number of columns (1-4, default: 3)
 * @param {string} gap - Gap size ('sm', 'md', 'lg', default: 'md')
 * @param {boolean} animate - Enable staggered animations (default: true)
 * @param {number} staggerDelay - Delay between card animations (default: 0.1)
 * @param {string} animationDirection - Animation direction (default: 'fade-up')
 * @param {string} className - Additional CSS classes
 */
const CardGrid = forwardRef(({
  children,
  columns = 3,
  gap = 'md',
  animate = true,
  staggerDelay = 0.1,
  animationDirection = 'fade-up',
  className = '',
  ...props
}, ref) => {

  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  }

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6 lg:gap-8',
    lg: 'gap-8 lg:gap-12'
  }

  const gridClasses = `grid ${columnClasses[columns]} ${gapClasses[gap]} ${className}`

  if (animate) {
    return (
      <AnimatedSection
        ref={ref}
        direction={animationDirection}
        stagger={true}
        staggerDelay={staggerDelay}
        className={gridClasses}
        {...props}
      >
        {children}
      </AnimatedSection>
    )
  }

  return (
    <div 
      ref={ref}
      className={gridClasses}
      {...props}
    >
      {children}
    </div>
  )
})

CardGrid.displayName = 'CardGrid'

export default CardGrid