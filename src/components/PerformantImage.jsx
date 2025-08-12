// src/components/PerformantImage.jsx
import React, { useState, useRef, useEffect } from 'react';

const PerformantImage = ({ 
  src, 
  alt, 
  className, 
  loading = 'lazy',
  sizes = '(max-width: 768px) 100vw, 50vw',
  _quality = 80 // Prefixed with underscore to indicate intentionally unused
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const imgRef = useRef();

  useEffect(() => {
    // Create optimized image URLs for different formats
    const webpSrc = src.replace(/\.(jpg|jpeg|png)/, '.webp');
    // Note: AVIF support can be added later when needed
    
    // Feature detection and progressive enhancement
    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    
    // Try modern formats first
    if (supportsWebP()) {
      img.src = webpSrc;
    } else {
      img.src = src;
    }
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse" />
      )}
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        loading={loading}
        sizes={sizes}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

// Utility function to check WebP support
const supportsWebP = () => {
  const canvas = document.createElement('canvas');
  return canvas.toDataURL('image/webp').indexOf('webp') !== -1;
};

export default PerformantImage;