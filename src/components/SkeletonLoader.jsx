import React from 'react';

export function CardSkeleton() {
  return (
    <div className="w-[290px] xs:w-[310px] md:w-[320px] lg:w-[350px] xl:w-[370px] min-h-[400px] p-4 md:p-6 xl:p-8 rounded-xl border border-COLOR1/10 bg-CBACKGROUND shadow-lg relative overflow-hidden">
      
      {/* Shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
      
      {/* Header skeleton */}
      <div className="mb-4 md:mb-6 relative">
        <div className="h-8 md:h-10 xl:h-12 bg-gradient-to-r from-COLOR1/8 via-COLOR1/15 to-COLOR1/8 rounded-lg w-40 mx-auto animate-pulse"></div>
      </div>
      
      {/* Text content skeleton */}
      <div className="space-y-4 md:space-y-6 flex-grow relative">
        <div className="space-y-3">
          <div className="h-4 bg-gradient-to-r from-COLOR1/6 via-COLOR1/12 to-COLOR1/6 rounded w-full animate-pulse"></div>
          <div className="h-4 bg-gradient-to-r from-COLOR1/6 via-COLOR1/12 to-COLOR1/6 rounded w-5/6 animate-pulse" style={{animationDelay: '0.1s'}}></div>
          <div className="h-4 bg-gradient-to-r from-COLOR1/6 via-COLOR1/12 to-COLOR1/6 rounded w-4/6 animate-pulse" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
      
      {/* Image skeleton */}
      <div className="mt-4 md:mt-6 relative">
        <div className="h-[240px] md:h-[280px] lg:h-[300px] bg-gradient-to-br from-COLOR1/8 via-COLOR1/15 to-COLOR1/8 rounded-xl animate-pulse relative overflow-hidden">
          {/* Image shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        </div>
        
        {/* Button skeleton */}
        <div className="absolute bottom-4 left-4 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-COLOR2/20 via-COLOR2/30 to-COLOR2/20 rounded-full animate-pulse relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
}

export function TextSkeleton({ lines = 3 }) {
  return (
    <div className="animate-pulse space-y-2">
      {Array.from({ length: lines }).map((_, index) => (
        <div 
          key={index} 
          className={`h-4 bg-gray-200 rounded ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        ></div>
      ))}
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col items-center justify-center mx-auto px-4 py-8 w-full">
        {/* Title skeleton */}
        <div className="w-full mx-auto text-center mb-8">
          <div className="h-8 md:h-16 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-6 md:h-12 bg-gray-200 rounded w-2/3 mx-auto"></div>
        </div>
        
        {/* Content skeleton */}
        <div className="flex flex-col items-center justify-center w-full md:flex-row md:mt-8 mt-4 xl:mt-12">
          {/* Image skeleton */}
          <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] xl:w-[450px] xl:h-[650px] bg-gray-200 rounded-xl mx-auto"></div>
          
          {/* Text content skeleton */}
          <div className="w-full lg:w-5/12 md:w-10/12 xl:mr-14 md:mr-5 mt-4 md:mt-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SubtitleSkeleton() {
  return (
    <div className="animate-pulse inline-block mx-auto p-1 md:p-2 mx:p-3">
      <div className="h-8 md:h-10 xl:h-12 bg-gray-200 rounded-lg w-64 md:w-80 xl:w-96"></div>
    </div>
  );
}