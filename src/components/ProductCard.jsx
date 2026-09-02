import { ExternalLink, ArrowRight } from 'lucide-react'
import { forwardRef } from 'react'

/**
 * ProductCard - Enhanced responsive card component for showcasing SelaSafe product features
 */
const ProductCard = forwardRef(({
  image,
  imageAlt = '',
  title,
  description,
  supportingText,
  linkText,
  linkUrl,
  external = false,
  variant = 'default',
  imagePosition = 'top',
  onClick,
  className = '',
  ...props
}, ref) => {

  const baseClasses = 'card-glass rounded-xl lg:rounded-2xl overflow-hidden group'
  const variantClasses = {
    default: 'border border-sela-watermark hover:border-sela-purple-border card-hover',
    featured: 'border-2 border-sela-purple-border bg-gradient-purple shadow-xl card-hover',
    minimal: 'border-0 bg-sela-charcoal hover:bg-sela-gray-dark card-hover'
  }

  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

  // Move components outside render to avoid recreation
  const renderImage = () => (
    <div className={`relative overflow-hidden ${
      imagePosition === 'top' 
        ? 'w-full h-44 sm:h-48 md:h-52 lg:h-56 xl:h-60' 
        : 'w-full h-28 sm:h-32 md:w-36 lg:w-40 md:h-32 flex-shrink-0'
    }`}>
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        loading="lazy"
      />
      {variant === 'featured' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-sela-black/60 via-transparent to-transparent"></div>
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
            <span className="bg-gradient-to-r from-sela-neon-pink to-sela-purple-glow text-white text-xs sm:text-sm font-medium px-2 py-1 sm:px-3 sm:py-1 rounded-full">
              Featured
            </span>
          </div>
        </>
      )}
    </div>
  )

  const renderContent = () => (
    <div className={`p-4 sm:p-5 md:p-6 lg:p-8 ${imagePosition !== 'top' ? 'flex-1' : ''}`}>
      {title && (
        <h3 className={`font-display font-semibold mb-3 sm:mb-4 text-sela-white group-hover:text-sela-lavender transition-colors duration-300 ${
          variant === 'featured' 
            ? 'text-lg sm:text-xl md:text-2xl lg:text-3xl' 
            : 'text-base sm:text-lg md:text-xl lg:text-2xl'
        }`}>
          {title}
        </h3>
      )}
      
      {description && (
        <p className="text-body text-sela-lavender-soft mb-3 sm:mb-4 leading-relaxed">
          {description}
        </p>
      )}
      
      {supportingText && (
        <p className="text-caption text-sela-gray-light mb-4 sm:mb-6">
          {supportingText}
        </p>
      )}
      
      {(linkText && linkUrl) && (
        <div className="mt-4 sm:mt-6">
          <a
            href={linkUrl}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center space-x-2 text-sela-lavender hover:text-sela-white font-medium text-sm sm:text-base transition-all duration-300 group/link link-hover"
          >
            <span>{linkText}</span>
            {external ? (
              <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
            ) : (
              <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform duration-300" />
            )}
          </a>
        </div>
      )}
    </div>
  )

  const cardContent = imagePosition === 'top' ? (
    <>
      {image && renderImage()}
      {renderContent()}
    </>
  ) : (
    <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
      {image && imagePosition === 'left' && renderImage()}
      {renderContent()}
      {image && imagePosition === 'right' && renderImage()}
    </div>
  )

  if (onClick) {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={`${cardClasses} text-left w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-sela-purple-glow focus:ring-offset-2 focus:ring-offset-sela-black`}
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

ProductCard.displayName = 'ProductCard'

export default ProductCard