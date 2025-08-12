// src/utils/optimizedAnalytics.js

// Check if gtag is available globally
const isGtagAvailable = () => typeof window !== 'undefined' && typeof window.gtag === 'function';

class AnalyticsManager {
  constructor() {
    this.queue = [];
    this.initialized = false;
    this.batchSize = 10;
    this.flushInterval = 5000; // 5 seconds
  }

  init() {
    // Lazy load analytics script
    this.loadAnalyticsScript();
    this.startBatchProcessing();
    this.initialized = true;
  }

  track(event, data) {
    if (!this.initialized) {
      this.queue.push({ event, data, timestamp: Date.now() });
      return;
    }

    this.queue.push({ event, data, timestamp: Date.now() });
    
    if (this.queue.length >= this.batchSize) {
      this.flush();
    }
  }

  flush() {
    if (this.queue.length === 0) return;
    
    // Process batch
    this.queue.forEach(({ event, data }) => {
      if (isGtagAvailable()) {
        window.gtag('event', event, data);
      }
    });
    
    this.queue = [];
  }

  loadAnalyticsScript() {
    // Use requestIdleCallback for non-critical loading
    const loadScript = () => {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_ID';
      document.head.appendChild(script);
    };

    if (window.requestIdleCallback) {
      requestIdleCallback(loadScript);
    } else {
      setTimeout(loadScript, 2000);
    }
  }

  startBatchProcessing() {
    setInterval(() => {
      this.flush();
    }, this.flushInterval);
  }
}

export const analytics = new AnalyticsManager();