import ProductCard from './ProductCard'
import SiteCard from './SiteCard'
import AnimatedSection, { FadeUp, SlideLeft } from './AnimatedSection'

/**
 * Example component demonstrating ProductCard and SiteCard usage
 * This shows how to use the components with different props and variants
 */
export default function CardExamples() {
  
  const productExamples = [
    {
      image: '/assets/images/sela_safe_prod.jpg',
      title: 'Apply Protection',
      description: 'Place the SelaSafe sticker securely over the opening of your drink. Make sure the surface is clean and dry so the sticker stays in place.',
      supportingText: 'Step 1 of 3',
      linkText: 'Learn More',
      linkUrl: '/how-it-works',
      variant: 'default'
    },
    {
      image: '/assets/images/sela_safe_apply.jpeg',
      title: 'Enjoy Your Night',
      description: 'Once applied, place your straw through the designated opening. The sticker acts as a barrier over the drinking area while allowing you to enjoy your drink.',
      supportingText: 'Step 2 of 3',
      linkText: 'See in Action',
      linkUrl: '/clients',
      variant: 'featured'
    },
    {
      image: '/assets/images/sela_safe_prod.jpg',
      title: 'Stay Protected',
      description: 'Your drink now has an additional layer of protection. This sticker is an additional safety tool, not a guarantee of protection.',
      supportingText: 'Step 3 of 3',
      linkText: 'Get SelaSafe',
      linkUrl: '/contact',
      variant: 'default'
    }
  ]

  const siteExamples = [
    {
      businessName: 'Boogie',
      location: 'Claremont, Cape Town',
      address: '12 Steegman Rd, Claremont, Cape Town, 7708',
      description: 'Experience SelaSafe protection at this premier nightlife destination. Your safety is our priority.',
      image: '/assets/images/sela_safe_boogie.jpg',
      imageAlt: 'SelaSafe at Boogie nightclub',
      website: 'https://boogie.co.za',
      hours: 'Thu-Sat: 9PM-4AM',
      phone: '+27 21 123 4567',
      featured: true
    },
    {
      businessName: 'The Club',
      location: 'Cape Town',
      address: 'City Centre, Cape Town',
      description: 'Find SelaSafe protection available at this popular venue.',
      image: '/assets/images/sela_safe_club.jpeg',
      imageAlt: 'SelaSafe at The Club',
      hours: 'Wed-Sat: 8PM-2AM',
      featured: false
    },
    {
      businessName: 'Local Bar',
      location: 'Cape Town',
      address: 'Local area, Cape Town',
      description: 'SelaSafe partners with local establishments to keep you safe.',
      hours: 'Daily: 6PM-12AM',
      featured: false
    }
  ]

  return (
    <div className="container-max section-padding py-20">
      
      {/* Product Cards Section */}
      <FadeUp>
        <div className="mb-16">
          <h2 className="text-display text-sela-lavender text-center mb-4">
            How SelaSafe Works
          </h2>
          <p className="text-body-large text-sela-lavender-soft text-center mb-12 max-w-6xl mx-auto">
            Simple steps to protect your drink and enjoy your night with confidence.
          </p>
        </div>
      </FadeUp>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {productExamples.map((product, index) => (
          <AnimatedSection 
            key={index}
            direction="fade-up" 
            delay={index * 0.2}
          >
            <ProductCard {...product} />
          </AnimatedSection>
        ))}
      </div>

      {/* Site Cards Section */}
      <SlideLeft>
        <div className="mb-16">
          <h2 className="text-display text-sela-lavender text-center mb-4">
            Find SelaSafe Partners
          </h2>
          <p className="text-body-large text-sela-lavender-soft text-center mb-12 max-w-6xl mx-auto">
            Discover venues where SelaSafe protection is available for your peace of mind.
          </p>
        </div>
      </SlideLeft>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteExamples.map((site, index) => (
          <AnimatedSection 
            key={index}
            direction="slide-up" 
            delay={index * 0.15}
          >
            <SiteCard 
              {...site}
              onGetDirections={({ businessName, address }) => {
                console.log(`Getting directions to ${businessName} at ${address}`)
              }}
            />
          </AnimatedSection>
        ))}
      </div>

      {/* Card Variants Demo */}
      <div className="mt-20 pt-20 border-t border-sela-watermark">
        <FadeUp>
          <h3 className="text-xl font-display font-semibold text-sela-white mb-8 text-center">
            Card Variations
          </h3>
        </FadeUp>
        
        <div className="grid md:grid-cols-3 gap-6">
          <SlideLeft delay={0.1}>
            <ProductCard
              title="Minimal Card"
              description="Clean and simple design for secondary content."
              variant="minimal"
              linkText="Learn More"
              linkUrl="#"
            />
          </SlideLeft>
          
          <SlideLeft delay={0.2}>
            <ProductCard
              image="/assets/images/sela_safe_logo_remake.jpeg"
              title="Default Card"
              description="Standard card design with image and content."
              variant="default"
              supportingText="Most common usage"
              linkText="Explore"
              linkUrl="#"
            />
          </SlideLeft>
          
          <SlideLeft delay={0.3}>
            <ProductCard
              image="/assets/images/sela_safe_prod.jpg"
              title="Featured Card"
              description="Highlighted card for important content with enhanced styling."
              variant="featured"
              supportingText="Premium content"
              linkText="Get Started"
              linkUrl="#"
            />
          </SlideLeft>
        </div>
      </div>
    </div>
  )
}