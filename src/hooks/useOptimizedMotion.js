// src/hooks/useOptimizedMotion.js
import React, { useMemo } from 'react';
import { useReducedMotion } from 'framer-motion';

export const useOptimizedMotion = (animationConfig) => {
  const shouldReduceMotion = useReducedMotion();
  
  return useMemo(() => {
    if (shouldReduceMotion) {
      return {
        initial: {},
        animate: {},
        transition: { duration: 0 }
      };
    }
    return animationConfig;
  }, [shouldReduceMotion, animationConfig]);
};

// Optional: Create a wrapper component for easier usage
export const OptimizedMotionWrapper = ({ children, variants, ...props }) => {
  const optimizedVariants = useOptimizedMotion(variants);
  
  return React.createElement('div', { ...optimizedVariants, ...props }, children);
};