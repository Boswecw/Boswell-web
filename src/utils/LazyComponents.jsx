// src/utils/LazyComponents.jsx - Updated with Current Projects
import { lazy, Suspense, createElement } from 'react';

// Lazy loaded page components
export const LazyLandingPage = lazy(() => import('../pages/LandingPage'));
export const LazyAboutPage = lazy(() => import('../pages/AboutPage'));
export const LazyPortfolio = lazy(() => import('../pages/Portfolio'));
export const LazyContactPage = lazy(() => import('../pages/ContactPage'));

// Component lazy loading for heavy sections
export const LazyCurrentProjectsSection = lazy(() => 
  import('../components/CurrentProjectsSection')
);

// Wrapper without JSX syntax - uses createElement instead
export const withSuspense = (Component, fallbackText = 'Loading...') => {
  const WrappedComponent = (props) => 
    createElement(
      Suspense, 
      { fallback: createElement('div', { 
        className: 'flex items-center justify-center p-8 min-h-screen',
        style: { 
          background: 'linear-gradient(to-br, rgb(17, 24, 39), rgb(30, 58, 138), rgb(0, 0, 0))',
          color: 'white'
        }
      }, createElement('div', { 
        className: 'text-center'
      }, [
        createElement('div', { 
          key: 'spinner',
          className: 'animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4'
        }),
        createElement('p', { 
          key: 'text',
          className: 'text-lg'
        }, fallbackText)
      ])) },
      createElement(Component, props)
    );
  
  // Set display name for debugging
  WrappedComponent.displayName = `withSuspense(${Component.displayName || Component.name || 'Component'})`;
  
  return WrappedComponent;
};