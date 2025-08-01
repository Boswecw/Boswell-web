// src/components/OptimizedImage.jsx
import React from 'react';

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
  ...props
}) => {
  // Calculate aspect ratio for responsive sizing
  const aspectRatio = height / width;
  
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading}
      className={className}
      style={{
        aspectRatio: `${width} / ${height}`,
        maxWidth: '100%',
        height: 'auto'
      }}
      {...props}
    />
  );
};

export default OptimizedImage;