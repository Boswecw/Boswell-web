// src/components/GoogleAnalytics.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Replace with your actual Google Analytics ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Get this from Google Analytics

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Only load in production
    if (import.meta.env.PROD && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID);
    }
  }, []);

  useEffect(() => {
    // Track page views on route changes
    if (import.meta.env.PROD && window.gtag && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;