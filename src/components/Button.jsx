/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

const Button = forwardRef(({ 
  className = '', 
  variant = 'default', 
  size = 'default', 
  asChild = false,
  children,
  disabled = false,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";
  
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg",
    outline: "border border-blue-400 bg-transparent text-blue-400 hover:bg-blue-400 hover:text-gray-900 shadow-lg",
    ghost: "text-gray-300 hover:bg-gray-800 hover:text-white shadow-lg",
    destructive: "bg-red-600 text-white hover:bg-red-700 shadow-lg",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 shadow-lg",
  };
  
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3 text-xs",
    lg: "h-11 rounded-md px-8 text-base",
    icon: "h-10 w-10",
  };
  
  const classes = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );
  
  const Comp = asChild ? Slot : "button";
  
  return (
    <Comp
      className={classes}
      ref={ref}
      disabled={disabled}
      {...props}
    >
      {children}
    </Comp>
  );
});

Button.displayName = "Button";

export { Button };