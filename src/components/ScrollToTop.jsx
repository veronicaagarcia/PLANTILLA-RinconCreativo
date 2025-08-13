import { useState, useEffect, useRef } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const buttonRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrolled / maxHeight, 1);
      
      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
      
      // Show scrolling indicator
      setIsScrolling(true);
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const scrollToTop = () => {
    // Add haptic feedback for mobile devices
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }

    // Smooth scroll with easing
    const scrollDuration = 800;
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);

    // Add bounce animation
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'scale(0.9)';
      setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.style.transform = '';
        }
      }, 150);
    }
  };

  // Calculate circle stroke offset for progress indicator
  const circleRadius = 22;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (scrollProgress * circumference);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        ref={buttonRef}
        className={`
          group relative
          w-12 h-12 md:w-14 md:h-14
          bg-gradient-to-br from-COLOR2 to-COLOR2-dark
          hover:from-COLOR3 hover:to-COLOR3-dark
          text-CBACKGROUND
          rounded-full shadow-lg hover:shadow-2xl hover:shadow-COLOR2/30
          transition-all duration-300 ease-out
          transform hover:scale-110 active:scale-95 hover:-translate-y-1
          focus:outline-none focus:ring-2 focus:ring-COLOR2-accent focus:ring-offset-2
          overflow-hidden
          ${isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
          }
          ${isScrolling ? 'ring-2 ring-COLOR2-accent/50' : ''}
        `}
        onClick={scrollToTop}
        aria-label={`Volver al inicio (${Math.round(scrollProgress * 100)}% leído)`}
        title={`Volver al inicio (${Math.round(scrollProgress * 100)}% leído)`}
      >
        {/* Progress circle */}
        <svg 
          className="absolute inset-0 w-full h-full -rotate-90 opacity-70"
          viewBox="0 0 48 48"
        >
          <circle
            cx="24"
            cy="24"
            r={circleRadius}
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-300 ease-out"
            strokeLinecap="round"
          />
        </svg>

        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full rounded-full"></div>
        
        {/* Arrow icon */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <svg
            className={`
              w-5 h-5 md:w-6 md:h-6 
              transition-transform duration-300 ease-out
              group-hover:scale-110 group-hover:-translate-y-0.5
              ${isScrolling ? 'animate-bounce' : ''}
            `}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </div>

        {/* Ripple effect on click */}
        <div className="absolute inset-0 rounded-full opacity-0 group-active:opacity-20 bg-white scale-0 group-active:scale-100 transition-all duration-300"></div>
      </button>

      {/* Progress indicator tooltip */}
      {isVisible && scrollProgress > 0.1 && (
        <div className={`
          absolute -top-12 right-0
          px-2 py-1 
          bg-COLOR1 text-CBACKGROUND text-xs font-medium
          rounded-md shadow-lg
          transition-all duration-300
          ${isScrolling ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
        `}>
          {Math.round(scrollProgress * 100)}%
          <div className="absolute top-full right-3 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent border-t-COLOR1"></div>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;