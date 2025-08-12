// src/components/SEOHead.jsx - Custom SEO component for React 19
import React from 'react';

const SEOHead = ({ title, description, keywords, url, image }) => {
  React.useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta tags
    const updateMeta = (name, content) => {
      if (!content) return;
      
      let meta = document.querySelector(`meta[name="${name}"]`) || 
                 document.querySelector(`meta[property="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Update all meta tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('og:title', title);
    updateMeta('og:description', description);
    updateMeta('og:url', url);
    updateMeta('og:image', image);
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = 'Boswell Web Development Solutions LLC';
    };
  }, [title, description, keywords, url, image]);

  return null; // This component doesn't render anything
};

export default SEOHead;