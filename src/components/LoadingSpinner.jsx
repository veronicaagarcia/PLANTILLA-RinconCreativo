import React from 'react';

const LoadingSpinner = ({ 
  size = 'md', 
  variant = 'primary', 
  text = '',
  fullScreen = false,
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const variantClasses = {
    primary: 'border-COLOR2 border-t-COLOR2-dark',
    secondary: 'border-COLOR3 border-t-COLOR3-dark',
    light: 'border-gray-300 border-t-white',
    dark: 'border-COLOR1 border-t-COLOR1/50'
  };

  const spinner = (
    <div className={`relative ${sizeClasses[size]}`}>
      {/* Main spinner */}
      <div className={`
        ${sizeClasses[size]} 
        border-4 ${variantClasses[variant]} 
        rounded-full animate-spin
      `} />
      
      {/* Inner glow effect */}
      <div className={`
        absolute inset-0 ${sizeClasses[size]} 
        border-2 border-transparent
        rounded-full animate-pulse
        ${variant === 'primary' ? 'shadow-lg shadow-COLOR2/30' : ''}
        ${variant === 'secondary' ? 'shadow-lg shadow-COLOR3/30' : ''}
      `} />
    </div>
  );

  const content = (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      {spinner}
      {text && (
        <p className="text-sm md:text-base font-medium text-COLOR1 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-COLOR1/50 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300">
        <div className="bg-CBACKGROUND rounded-2xl p-8 shadow-2xl border border-COLOR1/10 transform scale-100 animate-scaleIn">
          {content}
        </div>
      </div>
    );
  }

  return content;
};

// Variante para inline loading (botones)
export const InlineLoader = ({ size = 'sm', variant = 'light' }) => (
  <div className={`inline-flex items-center justify-center ${size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'}`}>
    <div className={`
      ${size === 'sm' ? 'w-4 h-4 border-2' : 'w-5 h-5 border-2'} 
      ${variant === 'light' ? 'border-white border-t-white/50' : 'border-COLOR1 border-t-COLOR1/50'}
      rounded-full animate-spin
    `} />
  </div>
);

// Variante para skeleton loading
export const SkeletonLoader = ({ className = '', lines = 3, avatar = false }) => (
  <div className={`animate-pulse ${className}`}>
    {avatar && (
      <div className="flex items-center space-x-4 mb-4">
        <div className="rounded-full bg-COLOR1/10 h-12 w-12"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-COLOR1/10 rounded w-3/4"></div>
          <div className="h-3 bg-COLOR1/10 rounded w-1/2"></div>
        </div>
      </div>
    )}
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, index) => (
        <div 
          key={index}
          className={`h-4 bg-COLOR1/10 rounded ${
            index === lines - 1 ? 'w-2/3' : 'w-full'
          }`}
        />
      ))}
    </div>
  </div>
);

export default LoadingSpinner;