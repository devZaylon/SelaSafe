import AnimatedSection, { FadeUp, SlideLeft, SlideRight } from '../components/AnimatedSection'
import ProductCard from '../components/ProductCard'

export default function Works() {
  const howItWorksSteps = [
    {
      image: '/assets/images/sela_safe_prod.jpg',
      title: 'APPLY',
      description: 'Place the sticker securely over the opening of your drink. Make sure the surface is clean and dry so the sticker stays in place.',
      supportingText: 'Step 1 - Secure Application',
      variant: 'default'
    },
    {
      image: '/assets/images/sela_safe_apply.jpeg', 
      title: 'COVER',
      description: 'Once applied, place your straw through the designated opening. The sticker acts as a barrier over the drinking area while allowing you to enjoy your drink.',
      supportingText: 'Step 2 - Safe Access',
      variant: 'featured'
    },
    {
      image: '/assets/images/sela_safe_prod.jpg',
      title: 'SECURE',
      description: 'Once your sticker is securely in place, your drink has an added layer of protection. This sticker is an additional safety tool, not a guarantee of protection.',
      supportingText: 'Step 3 - Enhanced Protection',
      variant: 'default'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container-max section-padding text-center">
          <FadeUp>
            <h1 className="text-hero text-glow-blue mb-8">
              How it works
            </h1>
          </FadeUp>
          
          <SlideLeft delay={0.2}>
            <p className="text-body-large text-sela-lavender-soft max-w-6xl mx-auto mb-12">
              Our anti-spiking stickers are designed to give you an additional layer of awareness when you're out. 
              Simply apply the sticker to your drink, cover it with your straw or the drink opening, and check it if you have any reason to be concerned.
            </p>
          </SlideLeft>
        </div>
      </section>

      {/* Three Steps Process */}
      <section className="py-12 md:py-20">
        <div className="container-max section-padding">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
            {howItWorksSteps.map((step, index) => (
              <AnimatedSection 
                key={index}
                direction="fade-up" 
                delay={0.2 + (index * 0.2)}
              >
                <ProductCard {...step} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Large Product Demonstration */}
      <section className="py-12 md:py-20 bg-sela-black">
        <div className="container-max section-padding text-center">
          <SlideRight delay={0.2}>
            <div className="mb-12">
              <h2 className="text-display text-sela-white mb-6">
                Your Protection in Action
              </h2>
              <p className="text-body-large text-sela-lavender-soft max-w-6xl mx-auto">
                See how SelaSafe provides an additional layer of safety awareness for your peace of mind.
              </p>
            </div>
          </SlideRight>
          
          <AnimatedSection direction="zoom-in" delay={0.5}>
            <div className="relative inline-block">
              <img
                src="/assets/images/sela_safe_logo_remake.jpeg"
                alt="SelaSafe Product Demonstration"
                className="h-64 md:h-80 w-auto mx-auto opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sela-black via-transparent to-transparent"></div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 md:py-24 bg-gradient-purple">
        <div className="container-max section-padding text-center">
          <FadeUp delay={0.3}>
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-sela-white mb-6">
                Important Safety Notice
              </h3>
              <p className="text-body text-sela-white leading-relaxed mb-6">
                <strong>MAKE IT CLEAR:</strong> the sticker is an additional safety tool, not a guarantee of protection
              </p>
              <p className="text-body-large text-sela-lavender-light italic">
                Keep the tone empowering rather than fear-based
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container-max section-padding text-center">
          <SlideLeft delay={0.2}>
            <h2 className="text-display text-sela-white mb-8">
              Ready to Get Protected?
            </h2>
          </SlideLeft>
          
          <SlideRight delay={0.4}>
            <p className="text-body-large text-sela-lavender-soft max-w-6xl mx-auto mb-12">
              Find SelaSafe at partner venues or contact us to learn more about bringing SelaSafe to your establishment.
            </p>
          </SlideRight>
          
          <AnimatedSection direction="fade-up" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/clients"
                className="btn-primary text-center"
              >
                Find Partner Venues
              </a>
              <a
                href="/contact"
                className="btn-secondary text-center"
              >
                Contact Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}