// Enhanced animation utilities for improved user experience

export const ANIMATION_VARIANTS = {
  // Entrance animations
  slideUp: 'animate-slideUpSoft',
  slideDown: 'animate-fadeInDown',
  slideLeft: 'animate-fadeInLeft',
  slideRight: 'animate-fadeInRight',
  scaleIn: 'animate-scaleInSoft',
  fadeIn: 'animate-fade-in-soft',
  
  // Staggered animations
  stagger1: 'animate-stagger-1',
  stagger2: 'animate-stagger-2',
  stagger3: 'animate-stagger-3',
  stagger4: 'animate-stagger-4',
  stagger5: 'animate-stagger-5',
  stagger6: 'animate-stagger-6',
};

export const ANIMATION_DELAYS = {
  none: 0,
  short: 100,
  medium: 200,
  long: 300,
  extra: 500,
};

export const ANIMATION_DURATIONS = {
  fast: 300,
  normal: 600,
  slow: 800,
  extra: 1000,
};

export const EASING_FUNCTIONS = {
  easeOut: 'ease-out',
  easeIn: 'ease-in',
  easeInOut: 'ease-in-out',
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  elastic: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
};

// Intersection Observer utility for enhanced performance
export class AnimationObserver {
  constructor(options = {}) {
    this.options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    };
    this.observer = null;
    this.elements = new Map();
  }

  observe(element, animationConfig = {}) {
    if (!element) return;

    const config = {
      animation: ANIMATION_VARIANTS.slideUp,
      delay: ANIMATION_DELAYS.none,
      duration: ANIMATION_DURATIONS.normal,
      easing: EASING_FUNCTIONS.smooth,
      once: true,
      ...animationConfig
    };

    this.elements.set(element, config);

    if (!this.observer) {
      this.createObserver();
    }

    this.observer.observe(element);
  }

  createObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateElement(entry.target);
        }
      });
    }, this.options);
  }

  animateElement(element) {
    const config = this.elements.get(element);
    if (!config) return;

    // Apply custom CSS properties
    element.style.setProperty('--animation-duration', `${config.duration}ms`);
    element.style.setProperty('--animation-easing', config.easing);

    // Set initial state
    element.style.opacity = '0';
    element.style.transform = this.getInitialTransform(config.animation);

    // Apply animation after a delay
    setTimeout(() => {
      element.classList.add('animated', config.animation);
      element.style.opacity = '1';
      element.style.transform = 'none';
    }, config.delay);

    // Unobserve if once is true
    if (config.once) {
      this.observer.unobserve(element);
      this.elements.delete(element);
    }
  }

  getInitialTransform(animation) {
    const transforms = {
      'animate-slideUpSoft': 'translateY(30px)',
      'animate-fadeInDown': 'translateY(-20px)',
      'animate-fadeInLeft': 'translateX(-30px)',
      'animate-fadeInRight': 'translateX(30px)',
      'animate-scaleInSoft': 'scale(0.95)',
      'animate-fade-in-soft': 'translateY(20px)',
    };
    return transforms[animation] || 'translateY(30px)';
  }

  disconnect() {
    if (this.observer) {
      this.observer.disconnect();
      this.elements.clear();
    }
  }
}

// Hover effect utilities
export const HOVER_EFFECTS = {
  lift: 'hover:transform hover:scale-105 hover:-translate-y-1 transition-transform duration-300',
  glow: 'hover:shadow-lg hover:shadow-COLOR2/30 transition-shadow duration-300',
  shine: 'relative overflow-hidden group',
  float: 'hover:animate-float transition-transform duration-300',
  pulse: 'hover:animate-pulse-slow transition-opacity duration-300',
  rotate: 'hover:rotate-3 transition-transform duration-300',
  bounce: 'hover:animate-bounce transition-transform duration-300',
};

// Focus effect utilities for accessibility
export const FOCUS_EFFECTS = {
  ring: 'focus:outline-none focus:ring-2 focus:ring-COLOR2-accent focus:ring-offset-2',
  glow: 'focus:outline-none focus:shadow-lg focus:shadow-COLOR2/50',
  scale: 'focus:outline-none focus:scale-105 transition-transform duration-200',
  highlight: 'focus:outline-none focus:bg-COLOR2/10 transition-colors duration-200',
};

// Micro-interaction helpers
export const addRippleEffect = (element, event) => {
  const ripple = document.createElement('span');
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 0.6s ease-out;
    pointer-events: none;
  `;

  element.style.position = 'relative';
  element.style.overflow = 'hidden';
  element.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
};

// Add ripple CSS animation to document
export const injectRippleStyles = () => {
  if (document.getElementById('ripple-styles')) return;

  const style = document.createElement('style');
  style.id = 'ripple-styles';
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(2);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
};

// Loading state utilities
export const createLoadingState = (element, options = {}) => {
  const config = {
    shimmer: true,
    skeleton: true,
    placeholder: true,
    ...options
  };

  const loadingElement = element.cloneNode(true);
  loadingElement.classList.add('loading-skeleton');
  
  if (config.shimmer) {
    loadingElement.classList.add('animate-shimmer');
  }
  
  // Replace content with skeleton elements
  if (config.skeleton) {
    const textElements = loadingElement.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span');
    textElements.forEach(textEl => {
      textEl.innerHTML = `<div class="h-4 bg-gray-200 rounded animate-pulse"></div>`;
    });

    const imageElements = loadingElement.querySelectorAll('img');
    imageElements.forEach(imgEl => {
      imgEl.style.background = 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)';
      imgEl.style.backgroundSize = '200% 100%';
      imgEl.style.animation = 'shimmer 2s infinite';
    });
  }

  return loadingElement;
};

// Performance optimization utilities
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Accessibility utilities
export const announceToScreenReader = (message) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.style.cssText = `
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  `;
  
  document.body.appendChild(announcement);
  announcement.textContent = message;
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

export const handleReducedMotion = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    document.documentElement.style.setProperty('--transition-duration', '0.01ms');
    
    // Add class to disable animations
    document.body.classList.add('motion-reduced');
  }
  
  return prefersReducedMotion;
};

// Initialize animations on page load
export const initializeAnimations = () => {
  // Handle reduced motion preference
  handleReducedMotion();
  
  // Inject ripple styles
  injectRippleStyles();
  
  // Add global animation observer
  const globalObserver = new AnimationObserver();
  
  // Auto-observe elements with data-animate attribute
  document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('[data-animate]');
    elementsToAnimate.forEach(element => {
      const animation = element.dataset.animate;
      const delay = parseInt(element.dataset.delay) || 0;
      const duration = parseInt(element.dataset.duration) || 600;
      
      globalObserver.observe(element, {
        animation: ANIMATION_VARIANTS[animation] || animation,
        delay,
        duration
      });
    });
  });
  
  return globalObserver;
};