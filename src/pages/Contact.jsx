import AnimatedSection, { FadeUp, SlideLeft, SlideRight } from '../components/AnimatedSection'
import { Phone, Mail, MessageCircle, Facebook, Instagram, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container-max section-padding text-center">
          <FadeUp>
            <h1 className="text-hero text-glow-lavender mb-6">
              Contact us!
            </h1>
          </FadeUp>
          
          <SlideLeft delay={0.2}>
            <p className="text-body-large text-sela-lavender-soft max-w-6xl mx-auto mb-12">
              Have a question about our stickers, need help with an order, or interested in partnering with us?
              Send us a message and our team will get back to you.
            </p>
          </SlideLeft>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-6 md:py-10">
        <div className="container-max section-padding">
          <div className="w-full max-w-md mx-auto space-y-4">
            
            {/* Phone */}
            <a
              href="tel:0726619224"
              className="flex w-full items-center justify-center gap-3 py-4 px-8 bg-gradient-to-r from-sela-neon-pink to-sela-purple-glow text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-lg md:text-xl whitespace-nowrap group"
            >
              <Phone size={22} className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span>072 661 9224</span>
            </a>

            {/* Email */}
            <a
              href="mailto:selasafe@co.co.za"
              className="flex w-full items-center justify-center gap-3 py-4 px-8 bg-gradient-to-r from-sela-neon-pink to-sela-purple-glow text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-base md:text-lg uppercase whitespace-nowrap group"
            >
              <Mail size={22} className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span>selasafe@co.co.za</span>
            </a>

            {/* Social Handle */}
            <div
              className="flex w-full items-center justify-center gap-3 py-4 px-8 bg-gradient-to-r from-sela-neon-pink to-sela-purple-glow text-white font-medium rounded-full shadow-lg text-lg md:text-xl whitespace-nowrap"
            >
              <MessageCircle size={22} className="flex-shrink-0" />
              <span>@SELASAFE</span>
            </div>

          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-8 md:py-12">
        <div className="container-max section-padding text-center">
          <SlideRight delay={0.2}>
            <h2 className="text-2xl font-display font-semibold text-sela-white mb-8">
              Follow Us
            </h2>
          </SlideRight>
          
          <AnimatedSection direction="fade-up" delay={0.4}>
            <div className="flex justify-center space-x-8">
              <a
                href="#"
                className="w-16 h-16 bg-sela-charcoal rounded-full flex items-center justify-center text-sela-white hover:text-sela-lavender hover:bg-sela-gray-dark transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={28} />
              </a>
              <a
                href="#"
                className="w-16 h-16 bg-sela-charcoal rounded-full flex items-center justify-center text-sela-white hover:text-sela-lavender hover:bg-sela-gray-dark transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={28} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Business Hours & Additional Info */}
      <section className="py-16 md:py-24 border-t border-sela-watermark">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-28">

            {/* Left div - Business Information */}
            <div className="w-full">
              <h3 className="text-xl md:text-2xl font-display font-semibold text-sela-white mb-6">
                Business Information
              </h3>
              <div className="space-y-4 text-sela-lavender-soft leading-relaxed">
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="flex-shrink-0" />
                  <span className="text-base">Cape Town, South Africa</span>
                </div>
                <p className="text-base">
                  Response times: Within 24-48 hours
                </p>
                <p className="text-base">
                  For urgent inquiries, please call directly
                </p>
              </div>
            </div>

            {/* Right div - Partnership Opportunities */}
            <div className="w-full">
              <h3 className="text-xl md:text-2xl font-display font-semibold text-sela-white mb-6">
                Partnership Opportunities
              </h3>
              <div className="space-y-4 text-sela-lavender-soft leading-relaxed">
                <p className="text-base">
                  Interested in becoming a SelaSafe partner venue?
                </p>
                <p className="text-base">
                  Contact us to learn about our partnership program and how we can work together to keep your customers safe.
                </p>
                <div className="pt-2">
                  <div className="inline-flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-sela-neon-pink to-sela-purple-glow">
                      <Mail size={16} className="text-white flex-shrink-0" />
                    </div>
                    <span className="text-base font-medium text-sela-lavender">partnerships@selasafe.co.za</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}