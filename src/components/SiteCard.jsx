import { MapPin, ExternalLink, Navigation, Clock } from 'lucide-react'
import { forwardRef } from 'react'

/**
 * SiteCard - Reusable card component for displaying SelaSafe partner locations
 * 
 * @param {string} businessName - Name of the business/venue
 * @param {string} location - City or area name
 * @param {string} address - Full street address
 * @param {string} description - Optional description of the venue
 * @param {string} image - Optional image of the venue
 * @param {string} imageAlt - Alt text for the image
 * @param {string} website - External website URL
 * @param {string} hours - Operating hours
 * @param {string} phone - Phone number
 * @param {boolean} featured - Whether this is a featured location
 * @param {function} onGetDirections - Handler for directions button
 * @param {function} onClick - Click handler for the entire card
 * @param {string} className - Additional CSS classes
 */
const SiteCard = forwardRef(({
  businessName,
  location,
  address,
  description,
  image,
  imageAlt = '',
  website,
  hours,
  phone,
  featured = false,
  directionsUrl,
  onGetDirections,
  onClick,
  className = '',
  ...props
}, ref) => {

  const baseClasses = 'card-glass rounded-xl overflow-hidden transition-all duration-300 group'
  const featuredClasses = featured 
    ? 'border-2 border-sela-purple-border bg-gradient-purple shadow-lg' 
    : 'border border-sela-watermark hover:border-sela-purple-border card-hover'

  const cardClasses = `${baseClasses} ${featuredClasses} ${className}`

  const handleGetDirections = (e) => {
    e.stopPropagation()
    if (directionsUrl) {
      // Open the explicit directions/map URL when provided
      window.open(directionsUrl, '_blank', 'noopener noreferrer')
    } else if (onGetDirections) {
      onGetDirections({ businessName, address, location })
    } else if (address) {
      // Default behavior: open in Google Maps
      const encodedAddress = encodeURIComponent(`${businessName}, ${address}`)
      window.open(`https://www.google.com/maps/search/${encodedAddress}`, '_blank')
    }
  }

  const handleWebsiteClick = (e) => {
    e.stopPropagation()
    if (website) {
      window.open(website, '_blank', 'noopener noreferrer')
    }
  }

  const cardContent = (
    <>
      {/* Header with optional image */}
      {image && (
        <div className="relative h-32 md:h-40 overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {featured && (
            <div className="absolute top-3 right-3">
              <span className="bg-gradient-to-r from-sela-neon-pink to-sela-purple-glow text-white text-xs font-medium px-3 py-1 rounded-full">
                Featured
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-sela-black/40 to-transparent"></div>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Business Name & Location */}
        <div className="mb-4">
          {businessName && (
            <h3 className={`font-display font-semibold mb-2 text-sela-white group-hover:text-sela-lavender transition-colors duration-300 ${
              featured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
            }`}>
              {businessName}
            </h3>
          )}
          
          {location && (
            <div className="flex items-center space-x-2 text-sela-lavender-soft mb-2">
              <MapPin size={16} className="flex-shrink-0" />
              <span className="text-body font-medium">{location}</span>
            </div>
          )}
        </div>

        {/* Address */}
        {address && (
          <div className="mb-4">
            <p className="text-body text-sela-gray-light leading-relaxed">
              {address}
            </p>
          </div>
        )}

        {/* Description */}
        {description && (
          <div className="mb-4">
            <p className="text-body text-sela-lavender-soft leading-relaxed">
              {description}
            </p>
          </div>
        )}

        {/* Additional Info */}
        <div className="space-y-2 mb-6">
          {hours && (
            <div className="flex items-center space-x-2 text-sela-gray-light">
              <Clock size={14} className="flex-shrink-0" />
              <span className="text-caption">{hours}</span>
            </div>
          )}
          
          {phone && (
            <div className="flex items-center space-x-2 text-sela-gray-light">
              <span className="text-caption">{phone}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {address && (
            <button
              onClick={handleGetDirections}
              className="inline-flex items-center space-x-2 btn-secondary text-sm px-4 py-2"
            >
              <Navigation size={14} />
              <span>Directions</span>
            </button>
          )}
          
          {website && (
            <button
              onClick={handleWebsiteClick}
              className="inline-flex items-center space-x-2 text-sela-lavender hover:text-sela-white font-medium text-sm transition-colors duration-300 group/link"
            >
              <span>Visit Website</span>
              <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
            </button>
          )}
        </div>

        {/* Partnership Badge */}
        {featured && (
          <div className="mt-4 pt-4 border-t border-sela-purple-border">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6">
                <img
                  src="/assets/images/sela_safe_logo_remake.jpeg"
                  alt="SelaSafe Partner"
                  className="w-full h-full"
                />
              </div>
              <span className="text-caption text-sela-lavender font-medium">
                Official SelaSafe Partner
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  )

  if (onClick) {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={`${cardClasses} text-left w-full cursor-pointer hover:transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-sela-purple-glow focus:ring-offset-2 focus:ring-offset-sela-black`}
        {...props}
      >
        {cardContent}
      </button>
    )
  }

  return (
    <div
      ref={ref}
      className={cardClasses}
      {...props}
    >
      {cardContent}
    </div>
  )
})

SiteCard.displayName = 'SiteCard'

export default SiteCard