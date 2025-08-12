// src/components/ui/FirebaseImage.jsx
import React from 'react';
import { useFirebaseImage } from '../../hooks/useFirebaseImage';

const FirebaseImage = ({ 
  storagePath, 
  alt, 
  className = '', 
  fallback = null,
  ...props 
}) => {
  const { imageUrl, loading, error } = useFirebaseImage(storagePath);

  if (loading) {
    return (
      <div className={`bg-gray-200 animate-pulse ${className}`}>
        <div className="flex items-center justify-center h-full">
          <span className="text-gray-500 text-sm">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    // Removed console.error - handle silently or with proper error reporting
    if (fallback) {
      return fallback;
    }
    return (
      <div className={`bg-gray-100 border-2 border-dashed border-gray-300 ${className}`}>
        <div className="flex items-center justify-center h-full">
          <span className="text-gray-500 text-sm">Image unavailable</span>
        </div>
      </div>
    );
  }

  if (!imageUrl) {
    return fallback;
  }

  return (
    <img
      src={imageUrl}
      alt={alt}
      className={className}
      {...props}
    />
  );
};

export default FirebaseImage;