// src/utils/preLoader.js
export const preloadCriticalResources = () => {
    // Preload critical images
    const preloadImage = (src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    };
    
    // Preload hero image and logo
    preloadImage('/hero-background.webp');
    preloadImage('https://firebasestorage.googleapis.com/v0/b/endless-fire-467204-n2.firebasestorage.app/o/75C2B6B4-7539-4C70-BB2E-D97E39E038D5.JPG?alt=media&token=e0c77b96-1841-43a0-8ee9-43e5ef2cb344');
  };
  
  // Utility function for font preloading (available for future use)
  export const preloadFont = (href) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    link.href = href;
    document.head.appendChild(link);
  };
  
  // Load non-critical CSS asynchronously
  export const loadNonCriticalCSS = () => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles/non-critical.css';
    link.media = 'print';
    link.onload = () => { link.media = 'all'; };
    document.head.appendChild(link);
  };