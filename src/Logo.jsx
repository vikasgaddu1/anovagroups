import React from 'react'

const Logo = ({ size = 'medium', variant = 'default' }) => {
  const sizes = {
    small: { icon: 'w-6 h-6', text: 'text-lg' },
    medium: { icon: 'w-8 h-8', text: 'text-xl' },
    large: { icon: 'w-12 h-12', text: 'text-2xl' }
  }
  
  const variants = {
    default: {
      bg: 'bg-blue-600',
      text: 'text-white',
      company: 'text-gray-900'
    },
    white: {
      bg: 'bg-white',
      text: 'text-blue-600',
      company: 'text-white'
    },
    light: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      company: 'text-gray-900'
    }
  }
  
  const sizeClasses = sizes[size]
  const variantClasses = variants[variant]
  
  return (
    <div className="flex items-center space-x-3">
      {/* Icon */}
      <div className={`${sizeClasses.icon} ${variantClasses.bg} rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden`}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 32 32" className="w-full h-full">
            <path
              d="M8 4 L24 4 L28 8 L28 24 L24 28 L8 28 L4 24 L4 8 Z"
              fill="currentColor"
              opacity="0.1"
            />
          </svg>
        </div>
        
        {/* Main A design */}
        <div className={`${variantClasses.text} font-bold ${sizeClasses.text} relative z-10`}>
          <svg viewBox="0 0 24 24" className="w-full h-full">
            {/* Stylized A with consulting symbolism */}
            <path
              d="M12 3 L6 19 L8.5 19 L10 15 L14 15 L15.5 19 L18 19 L12 3 Z M11 10 L13 10 L12 7 Z"
              fill="currentColor"
            />
            {/* Small accent dots representing growth/innovation */}
            <circle cx="6" cy="6" r="1" fill="currentColor" opacity="0.6" />
            <circle cx="18" cy="6" r="1" fill="currentColor" opacity="0.6" />
          </svg>
        </div>
      </div>
      
      {/* Company name */}
      <div className="flex flex-col">
        <span className={`${sizeClasses.text} font-bold ${variantClasses.company} leading-tight`}>
          Anova Groups
        </span>
        {size === 'large' && (
          <span className={`text-sm ${variantClasses.company} opacity-70 font-medium`}>
            Consulting Excellence
          </span>
        )}
      </div>
    </div>
  )
}

export default Logo