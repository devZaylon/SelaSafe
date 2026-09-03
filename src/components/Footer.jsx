import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Facebook, Instagram, Phone, Mail, MessageCircle } from 'lucide-react'
import { scrollToSection } from '../utils/scroll'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const location = useLocation()
  const navigate = useNavigate()

  // Each quick link targets a section on the Home page.
  // `sectionId` empty string means the very top of the Home page.
  const navigation = [
    { name: 'Home', sectionId: '' },
    { name: 'Our Story', sectionId: 'our-story' },
    { name: 'How It Works', sectionId: 'how-it-works' },
    { name: 'Our Clients', sectionId: 'our-clients' },
    { name: 'Contact', sectionId: 'contact' }
  ]

  // Navigate to a Home page section. If already on Home, smoothly scroll to
  // the section. Otherwise, navigate to Home with the hash so the Home page
  // scrolls to the section after it mounts.
  const handleQuickLinkClick = (event, sectionId) => {
    event.preventDefault()

    if (location.pathname === '/') {
      scrollToSection(sectionId)
      const newHash = sectionId ? `#${sectionId}` : ''
      window.history.replaceState(null, '', `/${newHash}`)
    } else {
      navigate(sectionId ? `/#${sectionId}` : '/')
    }
  }

  const hrefFor = (sectionId) => (sectionId ? `/#${sectionId}` : '/')

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
      ariaLabel: 'Follow us on Facebook'
    },
    {
      name: 'Instagram', 
      href: '#',
      icon: Instagram,
      ariaLabel: 'Follow us on Instagram'
    }
  ]

  return (
    <footer className="w-full bg-sela-black border-t border-sela-watermark">
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <div className="py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
            
            {/* Logo & Brand */}
            <div className="md:col-span-5 lg:col-span-6">
              <Link to="/" className="inline-block mb-5">
                <img
                  src="/assets/images/sela_safe_logo_remake.jpeg"
                  alt="SelaSafe"
                  className="h-10 md:h-12 w-auto"
                />
              </Link>
              <p className="text-sela-white font-display font-semibold text-lg md:text-xl leading-snug mb-2">
                South Africa's Anti-Spiking Partner
              </p>
              <p className="text-sela-lavender-soft text-body leading-relaxed mb-6 whitespace-nowrap">
                Your drink. Your night. Your safety.
              </p>
              <div className="flex items-center space-x-3">
               {/* {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.ariaLabel}
                      className="p-2.5 rounded-full bg-sela-watermark border border-sela-purple-border text-sela-white hover:text-sela-lavender hover:bg-sela-charcoal transition-all duration-300 group"
                    >
                      <IconComponent 
                        size={18} 
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </a>
                  )
                })} */}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h3 className="font-display font-semibold text-lg text-sela-white mb-4">
                Quick Links
              </h3>
              <nav className="space-y-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={hrefFor(item.sectionId)}
                    onClick={(e) => handleQuickLinkClick(e, item.sectionId)}
                    className="block text-sela-lavender-soft hover:text-sela-lavender transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="font-display font-semibold text-lg text-sela-white mb-4">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {/* Phone */}
                <a
                  href="tel:0726619224"
                  className="flex items-center space-x-3 text-sela-white hover:text-sela-lavender transition-colors duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-r from-sela-neon-pink to-sela-purple-glow group-hover:shadow-lg transition-all duration-300">
                    <Phone size={16} className="text-white" />
                  </div>
                  <span className="text-sm font-medium">072 661 9224</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:selasafesa@gmail.com"
                  className="flex items-center space-x-3 text-sela-white hover:text-sela-lavender transition-colors duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-r from-sela-neon-pink to-sela-purple-glow group-hover:shadow-lg transition-all duration-300">
                    <Mail size={16} className="text-white" />
                  </div>
                  <span className="text-sm font-medium uppercase">selasafesa@gmail.com</span>
                </a>

                {/* Social Handle */}
                {/*<div className="flex items-center space-x-3 text-sela-white">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-sela-neon-pink to-sela-purple-glow">
                    <MessageCircle size={16} className="text-white" />
                  </div>
                  <span className="text-sm font-medium">@SELASAFE</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-sela-watermark py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
            <p className="text-sela-gray-light text-sm">
              © {currentYear} SelaSafe. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                to="/privacy"
                className="text-sela-gray-light hover:text-sela-lavender transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sela-gray-light hover:text-sela-lavender transition-colors duration-300 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}