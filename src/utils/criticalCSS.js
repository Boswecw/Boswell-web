// src/utils/criticalCSS.js
export const extractCriticalCSS = () => {
    const criticalStyles = `
      /* Critical styles for above-the-fold content */
      .hero-section { /* styles */ }
      .navigation { /* styles */ }
      .loading-placeholder { /* styles */ }
    `;
    
    const style = document.createElement('style');
    style.textContent = criticalStyles;
    document.head.appendChild(style);
  };
  
  // Load non-critical CSS asynchronously
  export const loadNonCriticalCSS = () => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles/non-critical.css';
    link.media = 'print';
    link.onload = () => link.media = 'all';
    document.head.appendChild(link);
  };