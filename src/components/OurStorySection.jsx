import AnimatedSection, { FadeUp, SlideLeft, SlideRight } from './AnimatedSection'

/**
 * OurStorySection - The reusable "Our Story" content used on both the
 * dedicated Our Story page and as a section on the Home page.
 *
 * @param {boolean} asPage - When true, the intro heading renders as an <h1>
 *   (for the standalone Our Story page). When false (default), it renders as
 *   an <h2> so it fits correctly within the Home page heading hierarchy.
 */
export default function OurStorySection({ asPage = false, id }) {
  const HeadingTag = asPage ? 'h1' : 'h2'

  return (
    <>
      {/* Intro / Story Section */}
      <section id={id} className="py-12 md:py-16">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <FadeUp>
                <HeadingTag className={asPage ? 'text-hero text-glow-purple mb-8' : 'text-display text-sela-white mb-6'}>
                  Our Story
                </HeadingTag>
              </FadeUp>

              <div className="space-y-6 text-sela-white">
                <SlideLeft delay={0.2}>
                  <div>
                   {/*} <h3 className="text-xl font-display font-semibold mb-4 text-sela-lavender">
                      PARAGRAPH ABOUT THE BUSINESS AND WHY YOU STARTED IT.
                    </h3> */}
                  </div>
                </SlideLeft>

                <SlideLeft delay={0.4}>
                  <div>
                    <h3 className="text-lg font-display font-semibold mb-3 text-sela-lavender">
                      MISSION STATEMENT
                    </h3>
                    <p className="text-body text-sela-lavender-soft leading-relaxed">
                      To provide individuals with an additional layer of safety awareness when enjoying nightlife,
                      empowering them to feel more confident and secure in social environments.
                    </p>
                  </div>
                </SlideLeft>

                <SlideLeft delay={0.6}>
                  <div>
                    <h3 className="text-lg font-display font-semibold mb-3 text-sela-lavender">
                      BRAND VALUES
                    </h3>
                    <ul className="space-y-2 text-body text-sela-lavender-soft">
                      <li>• Safety and awareness without fear-mongering</li>
                      <li>• Empowerment through proactive protection</li>
                      <li>• Community partnerships for safer nightlife</li>
                      <li>• Transparency about product limitations</li>
                    </ul>
                  </div>
                </SlideLeft>

                <SlideLeft delay={0.8}>
                  {/* <div>
                   <h3 className="text-lg font-display font-semibold mb-3 text-sela-lavender">
                      ABOUT THE CEO.
                    </h3>
                    <p className="text-body text-sela-lavender-soft leading-relaxed">
                      [CEO information and background to be provided]
                    </p>
                  </div> */}
                </SlideLeft>
              </div>
            </div>

            {/* Right Content - Logo */}
            <SlideRight delay={0.5}>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <img
                    src="/assets/images/sela_safe_logo_remake.jpeg"
                    alt="SelaSafe Logo"
                    className="h-80 md:h-96 w-auto opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sela-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </SlideRight>

          </div>
        </div>
      </section>

      {/* Key Message Section */}
     {/*} <section className="py-12 md:py-16 bg-sela-black">
        <div className="container-max section-padding text-center">
          <FadeUp delay={0.2}>
            <p className="text-2xl md:text-3xl font-display font-medium text-sela-lavender mb-8">
              Keep the tone empowering rather than fear-based
            </p>
          </FadeUp>

          <SlideLeft delay={0.4}>
            <p className="text-body-large text-sela-white max-w-6xl mx-auto mb-8">
              <strong className="text-sela-lavender">MAKE IT CLEAR:</strong> the sticker is an additional safety tool, not a guarantee of protection
            </p>
          </SlideLeft>
        </div>
      </section> */}

      {/* Company Values Section */}
      <section className="py-12 md:py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <SlideRight>
              <h3 className="text-display text-sela-white mb-6">
                Why SelaSafe Exists
              </h3>
            </SlideRight>
            <FadeUp delay={0.2}>
              <p className="text-body-large text-sela-lavender-soft max-w-6xl mx-auto">
                We believe everyone deserves to feel safe and confident when enjoying their social life.
                SelaSafe provides a simple, practical tool that adds an extra layer of awareness.
              </p>
            </FadeUp>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection direction="fade-up" delay={0.2}>
              <div className="text-center p-8 card-glass rounded-xl card-hover">
                <div className="w-16 h-16 bg-gradient-to-r from-sela-neon-pink to-sela-purple-glow rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-sela-white mb-4">Safety First</h3>
                <p className="text-body text-sela-lavender-soft">
                  Providing practical tools for enhanced awareness and peace of mind in social settings.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="fade-up" delay={0.4}>
              <div className="text-center p-8 card-glass rounded-xl card-hover">
                <div className="w-16 h-16 bg-gradient-to-r from-sela-neon-blue to-sela-purple-glow rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-sela-white mb-4">Partnership</h3>
                <p className="text-body text-sela-lavender-soft">
                  Working with venues and establishments to create safer environments for everyone.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="fade-up" delay={0.6}>
              <div className="text-center p-8 card-glass rounded-xl card-hover">
                <div className="w-16 h-16 bg-gradient-to-r from-sela-purple-glow to-sela-neon-pink rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">💪</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-sela-white mb-4">Empowerment</h3>
                <p className="text-body text-sela-lavender-soft">
                  Giving people confidence to enjoy their night out while staying aware and protected.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-12 md:py-16 bg-gradient-purple">
        <div className="container-max section-padding text-center">
          <FadeUp>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-sela-white mb-4">
              Safe.Secure.SelaSafe
            </h3>
          </FadeUp>

          <SlideLeft delay={0.3}>
            <p className="text-body-large text-sela-lavender-light">
              South Africa's Anti-Spiking Partner
            </p>
          </SlideLeft>
        </div>
      </section>
    </>
  )
}
