import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AnimatedSection, { FadeUp, SlideLeft, SlideRight } from '../components/AnimatedSection'
import ProductCard from '../components/ProductCard'
import SiteCard from '../components/SiteCard'
import OurStorySection from '../components/OurStorySection'
import { scrollToSection } from '../utils/scroll'

export default function Home() {
  const location = useLocation()

  // When arriving at the Home page with a hash (e.g. navigating from another
  // route via a nav link), scroll to the matching section once it's rendered.
  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    // Defer to the next frame so the target section is mounted before scrolling.
    const timer = window.setTimeout(() => scrollToSection(id), 100)
    return () => window.clearTimeout(timer)
  }, [location.hash])

  const productDemonstrations = [
    {
      title: 'Apply',
      description: 'Place the sticker securely over the opening of your drink. Make sure the surface is clean and dry so the sticker stays in place.',
      supportingText: 'Step 1',
      variant: 'default'
    },
    {
      title: 'Cover',
      description: 'Once applied, place your straw through the designated opening. The sticker acts as a barrier over the drinking area while allowing you to enjoy your drink.',
      supportingText: 'Step 2',
      variant: 'default'
    },
    {
      title: 'Secure',
      description: 'Once your sticker is securely in place, your drink has an added layer of protection. This sticker is an additional safety tool, not a guarantee of protection.',
      supportingText: 'Step 3',
      variant: 'default'
    }
  ]

  const partnerLocations = [
    {
      businessName: 'Boogie',
      location: 'Claremont, Cape Town',
      address: '12 Steegman Rd, Claremont, Cape Town, 7708',
      description: 'Find SelaSafe at Boogie',
      image: '/assets/images/sela_safe_boogie.jpg',
      imageAlt: 'SelaSafe x Boogie partnership',
      featured: true
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced responsive layout */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-dark overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-sela-purple-glow opacity-8 sm:opacity-10 rounded-full blur-2xl sm:blur-3xl animate-float"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-28 h-28 sm:w-40 sm:h-40 lg:w-52 lg:h-52 bg-sela-neon-pink opacity-8 sm:opacity-10 rounded-full blur-2xl sm:blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 lg:w-[32rem] lg:h-[32rem] bg-sela-watermark opacity-15 sm:opacity-20 rounded-full blur-3xl"></div>
        </div>

        <div className="container-max section-padding text-center relative z-10">
          {/* Logo - Enhanced responsive sizing */}
          <FadeUp>
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <img
                src="/assets/images/sela_safe_logo_remake.jpeg"
                alt="SelaSafe"
                className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 w-auto mx-auto transition-all duration-500 hover:scale-105"
              />
            </div>
          </FadeUp>

          {/* Tagline - Better responsive typography */}
          <SlideLeft delay={0.2}>
            <p className="text-subtitle text-sela-lavender mb-4 sm:mb-6">
              South Africa's Anti-Spiking Partner
            </p>
          </SlideLeft>

          {/* Main Heading - Enhanced responsive scaling */}
          <FadeUp delay={0.4}>
            <h1 className="text-hero text-glow-lavender mb-6 sm:mb-8 lg:mb-10 leading-none px-4">
              Your drink. Your night. Your safety
            </h1>
          </FadeUp>

          {/* Description */}
          <SlideRight delay={0.6}>
            <p className="text-body-large text-sela-lavender-soft max-w-6xl mx-auto mb-10 leading-relaxed">
              SelaSafe is an anti-spiking drink protector designed to help keep your drink covered while you're out. 
              By creating a physical barrier over your glass, SelaSafe helps reduce the risk of unwanted substances being 
              added to your drink.
            </p>
          </SlideRight>

          {/* CTA Buttons */}
          <AnimatedSection direction="fade-up" delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('how-it-works')
                  window.history.replaceState(null, '', '/#how-it-works')
                }}
                className="btn-primary"
              >
                How It Works
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contact')
                  window.history.replaceState(null, '', '/#contact')
                }}
                className="btn-secondary"
              >
                Get SelaSafe
              </a>
            </div>
          </AnimatedSection>
        </div>

      </section>

      {/* Our Story Section */}
      <OurStorySection id="our-story" />

      {/* Product Demonstration Section (How It Works) */}
      <section id="how-it-works" className="py-16 md:py-20 bg-sela-black relative">
        <div className="container-max section-padding">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <FadeUp>
              <h2 className="text-display text-sela-white mb-6">
                Simple. Secure. SelaSafe.
              </h2>
            </FadeUp>
            <SlideLeft delay={0.2}>
              <p className="text-body-large text-sela-lavender-soft max-w-6xl mx-auto">
                Our anti-spiking stickers are designed to give you an additional layer of awareness when you're out. 
                Simply apply the sticker to your drink, cover it with your straw or the drink opening, and check it if you have any reason to be concerned.
              </p>
            </SlideLeft>
          </div>

          {/* Product Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {productDemonstrations.map((product, index) => (
              <AnimatedSection 
                key={index}
                direction="fade-up" 
                delay={0.2 + (index * 0.2)}
              >
                <ProductCard {...product} />
              </AnimatedSection>
            ))}
          </div>

          {/* Large Product Showcase */}
          <AnimatedSection direction="fade-up" delay={0.8}>
            <div className="mt-12 text-center">
              <div className="relative inline-block">
                <img
                  src="/assets/images/sela_safe_logo_remake.jpeg"
                  alt="SelaSafe Product"
                  className="h-48 md:h-64 w-auto mx-auto opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sela-black via-transparent to-transparent"></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Client/Location Section */}
      <section id="our-clients" className="py-16 md:py-20 bg-gradient-dark relative">
        <div className="container-max section-padding">
          {/* Section Header */}
          <div className="text-center mb-12">
            <SlideRight>
              <h2 className="text-display text-sela-white mb-6">
                Our clients
              </h2>
            </SlideRight>
            <FadeUp delay={0.2}>
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-sela-lavender mb-4 text-glow-lavender">
                  SelaSafe x Boogie
                </h3>
              </div>
            </FadeUp>
          </div>

          {/* Partnership Showcase */}
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Content */}
            <SlideLeft delay={0.3} className="h-full">
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <h4 className="text-xl md:text-2xl font-display font-semibold text-sela-white mb-4 uppercase tracking-wide">
                    Your drink. Protected.
                  </h4>
                  <p className="text-body text-sela-lavender-soft mb-6">
                    Safety in Every Sip.
                  </p>
                </div>

                <div className="flex-1 flex flex-col">
                  <SiteCard {...partnerLocations[0]} className="h-full" />
                </div>
              </div>
            </SlideLeft>

            {/* Right Content */}
            <SlideRight delay={0.5} className="h-full">
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <h4 className="text-xl md:text-2xl font-display font-semibold text-sela-white mb-4 uppercase tracking-wide">
                    A Safer Night Out Together.
                  </h4>
                  <p className="text-body text-sela-lavender-soft mb-6">
                    Safety in Every Sip.
                  </p>
                </div>

                <div className="flex-1 flex flex-col">
                  <SiteCard
                    businessName="More locations coming soon"
                    image="/assets/images/sela_safe_logo_remake.jpeg"
                    imageAlt="SelaSafe"
                    description="We're partnering with more venues across South Africa to keep your night safe. Stay tuned for new SelaSafe locations near you."
                    className="h-full"
                  />
                </div>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-16 md:py-20 bg-sela-black">
        <div className="container-max section-padding text-center">
          <FadeUp>
            <h2 className="text-display text-sela-white mb-6">
              Contact us!
            </h2>
          </FadeUp>
          
          <SlideLeft delay={0.2}>
            <p className="text-body-large text-sela-lavender-soft max-w-6xl mx-auto mb-12">
              Have a question about our stickers, need help with an order, or interested in partnering with us?
              Send us a message and our team will get back to you.
            </p>
          </SlideLeft>

          {/* Contact Buttons */}
          <AnimatedSection direction="fade-up" delay={0.4}>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center items-stretch max-w-2xl mx-auto">
              <a
                href="tel:0726619224"
                className="btn-primary flex-1 min-w-[16rem] text-center text-lg whitespace-nowrap"
              >
                072 661 9224
              </a>

              <a
                href="mailto:selasafe@co.za"
                className="btn-primary flex-1 min-w-[16rem] text-center text-lg uppercase whitespace-nowrap"
              >
                selasafesa@gmail.com
              </a>
            </div>
          </AnimatedSection>

          {/* Social Icons */}
          {/*<AnimatedSection direction="fade-up" delay={1.0}>
            <div className="flex justify-center space-x-6 mt-8">
              <a
                href="#"
                className="social-icon"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                className="social-icon"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.533l1.624-1.177c.44.555 1.127.914 1.894.914.766 0 1.454-.358 1.894-.914l1.624 1.177c-.756.937-1.907 1.533-3.205 1.533h-.626zm7.718 0h-.626c-1.297 0-2.448-.596-3.205-1.533l1.624-1.177c.44.555 1.127.914 1.894.914.766 0 1.454-.358 1.894-.914l1.624 1.177c-.756.937-1.907 1.533-3.205 1.533z"/>
                </svg>
              </a>
            </div>
          </AnimatedSection> */}
        </div>
      </section>
    </div>
  )
}