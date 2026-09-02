import AnimatedSection, { FadeUp, SlideLeft, SlideRight, FadeIn, ScaleIn, ZoomIn } from './AnimatedSection'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { motion } from 'framer-motion'

/**
 * Example component demonstrating various animation patterns
 * This can be used for testing and as a reference guide
 */
export default function AnimationExamples() {
  const { ref: customRef, isInView } = useScrollAnimation({ threshold: 0.2 })

  return (
    <div className="space-y-20 py-20">
      
      {/* Basic Fade Up */}
      <FadeUp>
        <div className="bg-sela-charcoal p-8 rounded-xl">
          <h2 className="text-display text-sela-lavender mb-4">Fade Up Animation</h2>
          <p className="text-body text-sela-white">This content fades up smoothly as it enters the viewport.</p>
        </div>
      </FadeUp>

      {/* Slide Animations */}
      <div className="grid md:grid-cols-2 gap-8">
        <SlideLeft>
          <div className="bg-sela-charcoal p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-sela-lavender mb-4">Slide Left</h3>
            <p className="text-body text-sela-white">Slides in from the right side.</p>
          </div>
        </SlideLeft>
        
        <SlideRight>
          <div className="bg-sela-charcoal p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-sela-lavender mb-4">Slide Right</h3>
            <p className="text-body text-sela-white">Slides in from the left side.</p>
          </div>
        </SlideRight>
      </div>

      {/* Scale and Zoom Effects */}
      <div className="grid md:grid-cols-3 gap-6">
        <FadeIn delay={0.1}>
          <div className="card-glass p-6 rounded-xl text-center">
            <h4 className="font-semibold text-sela-white mb-2">Fade In</h4>
            <p className="text-sm text-sela-lavender-soft">Simple opacity transition</p>
          </div>
        </FadeIn>
        
        <ScaleIn delay={0.2}>
          <div className="card-glass p-6 rounded-xl text-center">
            <h4 className="font-semibold text-sela-white mb-2">Scale In</h4>
            <p className="text-sm text-sela-lavender-soft">Scales from 80% to 100%</p>
          </div>
        </ScaleIn>
        
        <ZoomIn delay={0.3}>
          <div className="card-glass p-6 rounded-xl text-center">
            <h4 className="font-semibold text-sela-white mb-2">Zoom In</h4>
            <p className="text-sm text-sela-lavender-soft">Zooms from 60% to 100%</p>
          </div>
        </ZoomIn>
      </div>

      {/* Staggered Animation */}
      <AnimatedSection direction="fade-up" stagger={true} staggerDelay={0.15}>
        <div className="text-center mb-8">
          <h2 className="text-display text-sela-lavender">Staggered Animation</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="card-glass p-4 rounded-lg text-center">
              <div className="w-8 h-8 bg-gradient-to-r from-sela-neon-pink to-sela-purple-glow rounded-full mx-auto mb-2"></div>
              <p className="text-sm text-sela-white">Item {item}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Custom Animation with Different Easing */}
      <AnimatedSection 
        direction="slide-left" 
        duration={0.8} 
        easing="bouncy"
        threshold={0.3}
      >
        <div className="bg-gradient-purple p-8 rounded-xl border border-sela-purple-border">
          <h2 className="text-display text-sela-white mb-4">Custom Timing</h2>
          <p className="text-body text-sela-lavender-soft">
            This animation uses bouncy easing and a longer duration for a more dramatic effect.
          </p>
        </div>
      </AnimatedSection>

      {/* Advanced Custom Animation */}
      <motion.div
        ref={customRef}
        className="bg-sela-charcoal p-8 rounded-xl"
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 50,
          scale: isInView ? 1 : 0.95
        }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        <h2 className="text-display text-sela-lavender mb-4">Custom Hook Animation</h2>
        <p className="text-body text-sela-white">
          This uses the useScrollAnimation hook for more granular control over the animation behavior.
        </p>
      </motion.div>

    </div>
  )
}