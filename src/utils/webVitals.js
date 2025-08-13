// Web Vitals Performance Monitoring
// Lightweight performance monitoring without external dependencies

export function initWebVitals() {
  if (typeof window === 'undefined') return;

  // Core Web Vitals metrics
  const metrics = {
    CLS: 0,
    FID: 0,
    LCP: 0,
    FCP: 0,
    TTFB: 0
  };

  // Observe Cumulative Layout Shift (CLS)
  if ('LayoutShiftEntry' in window) {
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          metrics.CLS += entry.value;
        }
      }
    }).observe({ type: 'layout-shift', buffered: true });
  }

  // Observe First Input Delay (FID)
  if ('PerformanceEventTiming' in window) {
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-input') {
          metrics.FID = entry.processingStart - entry.startTime;
        }
      }
    }).observe({ type: 'first-input', buffered: true });
  }

  // Observe Largest Contentful Paint (LCP)
  if ('LargestContentfulPaint' in window) {
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      metrics.LCP = lastEntry.startTime;
    }).observe({ type: 'largest-contentful-paint', buffered: true });
  }

  // Calculate TTFB and FCP from Navigation Timing
  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0];
    if (navigation) {
      metrics.TTFB = navigation.responseStart - navigation.requestStart;
    }

    const paintEntries = performance.getEntriesByType('paint');
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    if (fcpEntry) {
      metrics.FCP = fcpEntry.startTime;
    }

    // Log metrics for development (remove in production)
    if (import.meta.env.DEV) {
      console.group('🚀 Web Vitals Performance Metrics');
      console.log('CLS (Cumulative Layout Shift):', metrics.CLS.toFixed(3));
      console.log('FID (First Input Delay):', metrics.FID.toFixed(2), 'ms');
      console.log('LCP (Largest Contentful Paint):', metrics.LCP.toFixed(2), 'ms');
      console.log('FCP (First Contentful Paint):', metrics.FCP.toFixed(2), 'ms');
      console.log('TTFB (Time to First Byte):', metrics.TTFB.toFixed(2), 'ms');
      console.groupEnd();
    }
  });

  return metrics;
}

// Initialize automatically if in browser
if (typeof window !== 'undefined') {
  initWebVitals();
}