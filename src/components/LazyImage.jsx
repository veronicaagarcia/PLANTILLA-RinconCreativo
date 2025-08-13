import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  placeholder = true,
  rounded = 'rounded-xl',
  objectFit = 'object-cover'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // Generate placeholder color based on alt text
  const generatePlaceholderColor = (text) => {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash) % 360;
    return `hsl(${hue}, 25%, 85%)`;
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  const placeholderColor = generatePlaceholderColor(alt);

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${rounded} ${className}`}
      style={{ width, height }}
    >
      {/* Placeholder/Loading state */}
      {placeholder && (
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${
            isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          style={{ backgroundColor: placeholderColor }}
        >
          {!hasError ? (
            <>
              {/* Loading spinner */}
              <div className="w-8 h-8 md:w-12 md:h-12 border-4 border-COLOR1/20 border-t-COLOR1/40 rounded-full animate-spin mb-2"></div>
              
              {/* Image icon */}
              <svg className="w-6 h-6 md:w-8 md:h-8 text-COLOR1/30" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              
              <span className="text-xs text-COLOR1/40 mt-2 font-medium">Cargando imagen...</span>
            </>
          ) : (
            <>
              {/* Error state */}
              <svg className="w-8 h-8 md:w-12 md:h-12 text-COLOR2/50 mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-xs text-COLOR2/60 font-medium">Error al cargar</span>
            </>
          )}
        </div>
      )}

      {/* Actual image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-full ${objectFit} transition-all duration-700 ease-out ${
            isLoaded 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105'
          } ${hasError ? 'hidden' : ''}`}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}

      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-COLOR1/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default LazyImage;