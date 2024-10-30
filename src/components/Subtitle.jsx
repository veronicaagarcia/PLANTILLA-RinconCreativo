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
    <div className="relative inline-block mx-auto p-1 md:p-2 mx:p-3 transform rotate-2 transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-6 group ">
      <h2 
        ref={subtitleRef}
        className={`
          relative z-10 inline-block text-center w-fit mx-auto font-heading font-medium 
          text-${textColor} ${bgColor} text-base md:text-lg xl:text-xl 
          px-1 md:px-2 xl:px-3 mt-4 md:mt-8 xl:mt-12 
        `}
        style={{
          clipPath: 'polygon(0% 15%, 15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%)',
        }}
      >
        {name}
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
      <style jsx>{`
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