// src/components/ui/button.jsx
import React, { forwardRef } from 'react';

const Button = forwardRef(({ 
  className = '', 
  variant = 'default', 
  size = 'default', 
  asChild = false,
  children,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg",
    outline: "border border-blue-400 bg-transparent text-blue-400 hover:bg-blue-400 hover:text-gray-900 shadow-lg",
    ghost: "text-gray-300 hover:bg-gray-800 hover:text-white shadow-lg",
  };
  
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (asChild) {
    return React.cloneElement(children, {
      className: classes,
      ref,
      ...props
    });
  }
  
  return (
    <button
      className={classes}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button };