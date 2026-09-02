import AnimatedSection, { FadeUp, SlideLeft, SlideRight } from '../components/AnimatedSection'
import SiteCard from '../components/SiteCard'

export default function Clients() {
  const partnerVenues = [
    {
      businessName: 'Boogie',
      location: 'Claremont, Cape Town',
      address: '12 Steegman Rd, Claremont, Cape Town, 7708',
      description: 'Experience SelaSafe protection at this premier nightlife destination. Your safety is our priority.',
      image: '/assets/images/sela_safe_boogie.jpg',
      imageAlt: 'SelaSafe at Boogie nightclub',
      directionsUrl: 'https://www.google.com/maps/place/boogies+cape+town/data=!4m2!3m1!1s0x1dcc42d187c51b9d:0x42008131ddda5c7e?sa=X&ved=1t:242&ictx=111',
      hours: 'Thu-Sat: 9PM-4AM',
      phone: '+27 21 123 4567',
      featured: true
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container-max section-padding text-center">
          <FadeUp>
            <h1 className="text-hero text-glow-pink mb-8">
              Our clients
            </h1>
          </FadeUp>
          
          <SlideLeft delay={0.2}>
            <p className="text-body-large text-sela-lavender-soft max-w-6xl mx-auto mb-12">
              Discover venues where SelaSafe protection is available. We partner with establishments 
              committed to providing their customers with enhanced safety awareness.
            </p>
          </SlideLeft>
        </div>
      </section>

      {/* All Partner Venues */}
      <section className="py-16 md:py-24">
        <div className="container-max section-padding">
          
          <div className="text-center mb-16">
            <FadeUp>
              <h2 className="text-display text-sela-white mb-6">
                Find SelaSafe
              </h2>
            </FadeUp>
            <SlideLeft delay={0.2}>
              <p className="text-body-large text-sela-lavender-soft max-w-6xl mx-auto">
                Visit these partner venues where SelaSafe protection is available for your peace of mind.
              </p>
            </SlideLeft>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {partnerVenues.map((venue, index) => (
              <AnimatedSection 
                key={index}
                direction="fade-up" 
                delay={0.2 + (index * 0.2)}
                className="h-full"
              >
                <SiteCard 
                  {...venue}
                  className="h-full"
                  onGetDirections={({ businessName, address }) => {
                    console.log(`Getting directions to ${businessName} at ${address}`)
                  }}
                />
              </AnimatedSection>
            ))}

            {/* More locations coming soon */}
            <AnimatedSection 
              direction="fade-up" 
              delay={0.2 + (partnerVenues.length * 0.2)}
              className="h-full"
            >
              <SiteCard
                businessName="More locations coming soon"
                image="/assets/images/sela_safe_logo_remake.jpeg"
                imageAlt="SelaSafe"
                description="We're partnering with more venues across South Africa to keep your night safe. Stay tuned for new SelaSafe locations near you."
                className="h-full"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Partnership Call-to-Action */}
      <section className="py-16 md:py-24 bg-gradient-purple">
        <div className="container-max section-padding text-center">
          <FadeUp>
            <h2 className="text-display text-sela-white mb-8">
              Become a Partner
            </h2>
          </FadeUp>
          
          <SlideLeft delay={0.2}>
            <p className="text-body-large text-sela-lavender-light max-w-6xl mx-auto mb-12 leading-relaxed">
              Interested in partnering with SelaSafe? Join our network of venues committed to 
              customer safety and help create safer nightlife experiences.
            </p>
          </SlideLeft>
          
          <AnimatedSection direction="fade-up" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="btn-primary text-center bg-sela-white text-sela-black hover:bg-sela-lavender-light"
              >
                Partner With Us
              </a>
              <a
                href="/how-it-works"
                className="btn-secondary text-center border-sela-white text-sela-white hover:bg-sela-white hover:text-sela-black"
              >
                Learn More
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Spot SelaSafe Gallery */}
      <section className="py-16 md:py-24">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <SlideRight>
              <h2 className="text-display text-sela-white mb-6">
                Spot SelaSafe
              </h2>
            </SlideRight>
            <FadeUp delay={0.2}>
              <p className="text-body-large text-sela-lavender-soft max-w-6xl mx-auto">
                Pictures of SelaSafe in action coming soon
              </p>
            </FadeUp>
          </div>
          
          {/* Image Gallery Placeholders */}
          <AnimatedSection direction="fade-up" delay={0.4} stagger={true} staggerDelay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-sela-charcoal rounded-lg aspect-square flex items-center justify-center hover:bg-sela-gray-dark transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-sela-neon-pink to-sela-purple-glow rounded-full opacity-60"></div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}