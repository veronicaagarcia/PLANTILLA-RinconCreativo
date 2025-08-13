import { useEffect, useRef } from 'react';

const Subtitle = ({ name, bgColor, textColor }) => {
  const subtitleRef = useRef(null);

  useEffect(() => {
    const subtitle = subtitleRef.current;
    if (subtitle) {
      subtitle.style.opacity = '0';
      subtitle.style.transform = 'translateY(20px) rotate(-1deg)';
      
      setTimeout(() => {
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0) rotate(-4deg)';
      }, 100);
    }
  }, []);

  return (
    <div className="relative inline-block mx-auto p-1 md:p-2 mx:p-3 transform rotate-2 transition-all duration-500 ease-out hover:scale-110 hover:rotate-6 hover:-translate-y-2 group cursor-pointer">
      
      {/* Floating particles on hover */}
      <div className="absolute -top-4 -left-4 w-3 h-3 bg-gradient-to-br from-COLOR2-accent to-COLOR3 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-all duration-500"></div>
      <div className="absolute -top-2 -right-6 w-2 h-2 bg-gradient-to-br from-COLOR3 to-COLOR2 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-all duration-700" style={{animationDelay: '0.2s'}}></div>
      <div className="absolute -bottom-3 -right-2 w-4 h-4 bg-gradient-to-br from-COLOR2 to-COLOR2-accent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-all duration-600" style={{animationDelay: '0.4s'}}></div>
      
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-gradient-to-br from-COLOR2/20 via-COLOR3/20 to-COLOR2-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
      
      {/* Main subtitle with enhanced effects */}
      <h2 
        ref={subtitleRef}
        className={`
          relative z-10 inline-block text-center w-fit mx-auto font-heading font-bold 
          text-${textColor} ${bgColor} text-lg md:text-xl xl:text-2xl 
          px-3 py-2 md:px-4 md:py-3 xl:px-6 xl:py-4 mt-4 md:mt-8 xl:mt-12 
          shadow-lg group-hover:shadow-2xl group-hover:shadow-COLOR2/30
          transition-all duration-500 ease-out
          group-hover:text-shadow-lg
          border border-white/20 group-hover:border-COLOR2-accent/50
          backdrop-blur-sm
          overflow-hidden
        `}
        style={{
          clipPath: 'polygon(0% 5%, 5% 0%, 85% 0%, 100% 5%, 100% 85%, 85% 100%, 15% 100%, 0% 85%)',
        }}
      >
        {/* Shimmer effect on text */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></span>
        
        {/* Subtitle text */}
        <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
          {name}
        </span>
      </h2>
      <svg 
        className="absolute inset-0 w-full h-full -z-10" 
        viewBox="0 0 200 60" 
        preserveAspectRatio="none"
      >
        <path 
          d="M10,30 Q30,10 50,30 T90,30 T130,30 T170,30 Q190,30 190,30" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3"
          className="path-animation"
        />
      </svg>
      <style>{`
          .path-animation {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: draw 2s forwards, wiggle 3s ease-in-out infinite;
        }
        .path-animation-reverse {
          animation: draw 2s forwards, wiggle-reverse 3s ease-in-out infinite;
        }
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes wiggle {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(5px) rotate(1deg); }
          75% { transform: translateX(-5px) rotate(-1deg); }
        }
        @keyframes wiggle-reverse {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px) rotate(-1deg); }
          75% { transform: translateX(5px) rotate(1deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .path-animation, .path-animation-reverse {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Subtitle;