import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { scrollToSection } from '../utils/scroll'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Each nav item targets a section on the Home page.
  // `sectionId` empty string means the very top of the Home page.
  const navigation = [
    { name: 'HOME', sectionId: '' },
    { name: 'OUR STORY', sectionId: 'our-story' },
    { name: 'HOW IT WORKS', sectionId: 'how-it-works' },
    { name: 'OUR CLIENTS', sectionId: 'our-clients' },
    { name: 'CONTACT US', sectionId: 'contact' }
  ]

  // Navigate to a Home page section. If already on Home, smoothly scroll to
  // the section. Otherwise, navigate to Home with the hash so the Home page
  // scrolls to the section after it mounts.
  const handleNavClick = (event, sectionId) => {
    event.preventDefault()
    setIsMobileMenuOpen(false)

    if (location.pathname === '/') {
      scrollToSection(sectionId)
      // Keep the URL hash in sync without triggering a full navigation.
      const newHash = sectionId ? `#${sectionId}` : ''
      window.history.replaceState(null, '', `/${newHash}`)
    } else {
      navigate(sectionId ? `/#${sectionId}` : '/')
    }
  }

  const hrefFor = (sectionId) => (sectionId ? `/#${sectionId}` : '/')

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-sela-black/95 backdrop-blur-xl border-b border-sela-watermark shadow-lg' 
        : 'bg-sela-black/80 backdrop-blur-md border-b border-transparent'
    }`}>
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="flex-shrink-0 flex items-center h-full py-2 transition-all duration-300 hover:opacity-90 hover:scale-105 z-50"
            onClick={(e) => handleNavClick(e, '')}
          >
            <img
              src="/assets/images/sela_safe_logo_remake.jpeg"
              alt="SelaSafe - South Africa's Anti-Spiking Partner"
              className="h-full w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 2xl:space-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={hrefFor(item.sectionId)}
                onClick={(e) => handleNavClick(e, item.sectionId)}
                className="nav-link text-sela-white hover:text-sela-lavender"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl text-sela-white hover:text-sela-lavender hover:bg-sela-watermark transition-all duration-300 z-50 group"
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                }`} 
              />
              <X 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="lg:hidden fixed inset-0 bg-sela-black/90 backdrop-blur-sm z-40 animate-fade-in"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <nav className="lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-sela-black/95 backdrop-blur-xl border-l border-sela-watermark z-40 animate-slide-in-right">
              <div className="pt-24 px-6 pb-6 h-full overflow-y-auto">
                
                {/* Navigation Links */}
                <div className="space-y-2 mb-12">
                  {navigation.map((item, index) => (
                    <a
                      key={item.name}
                      href={hrefFor(item.sectionId)}
                      onClick={(e) => handleNavClick(e, item.sectionId)}
                      className="block px-6 py-4 rounded-xl text-lg font-medium transition-all duration-300 text-sela-white hover:text-sela-lavender hover:bg-sela-watermark hover:pl-8"
                      style={{ 
                        animationDelay: `${index * 75}ms`,
                        animation: 'fadeIn 0.5s ease-out forwards'
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                {/* Contact Info in Mobile Menu */}
                <div className="border-t border-sela-watermark pt-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
                  <div className="space-y-4 text-center">
                    <p className="text-sela-lavender-soft text-sm font-medium">Get in Touch</p>
                    <a 
                      href="tel:0726619224"
                      className="block text-sela-white hover:text-sela-lavender transition-colors duration-300"
                    >
                      072 661 9224
                    </a>
                    <a 
                      href="mailto:selasafe@co.co.za"
                      className="block text-sela-white hover:text-sela-lavender transition-colors duration-300 uppercase"
                    >
                      selasafe@co.co.za
                    </a>
                  </div>
                </div>

              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  )
}