// src/utils/dynamicImports.js
import React, { useState, useEffect } from 'react';

export const loadFramerMotion = () => import('framer-motion');

export const loadReactIcons = (iconSet) => {
  switch (iconSet) {
    case 'fa':
      return import('react-icons/fa');
    case 'md':
      return import('react-icons/md');
    default:
      return import('react-icons/fa');
  }
};

// LazyIcon component with proper error handling
export const LazyIcon = ({ icon, set = 'fa', ...props }) => {
  const [IconComponent, setIconComponent] = useState(null);
  
  useEffect(() => {
    const loadIcon = async () => {
      try {
        const iconModule = await loadReactIcons(set);
        setIconComponent(() => iconModule[icon]);
      } catch {
        // Error is intentionally ignored - component will show placeholder
        // Don't need to store the error, just let it fail silently
        setIconComponent(null);
      }
    };
    
    loadIcon();
  }, [icon, set]);
  
  if (!IconComponent) {
    return <div className="w-4 h-4 bg-gray-300 rounded" />; // Placeholder
  }
  
  return <IconComponent {...props} />;
};