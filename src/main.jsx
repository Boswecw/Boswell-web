import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 🔥 Service Worker management
if ('serviceWorker' in navigator) {
  if (import.meta.env.PROD) {
    // Register service worker in production
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .then((reg) => {
          console.log('✅ Service worker registered:', reg);
        })
        .catch((err) => {
          console.error('❌ Service worker registration failed:', err);
        });
    });
  } else {
    // Unregister service worker in development to avoid conflicts
    window.addEventListener('load', () => {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          registration.unregister().then(() => {
            console.log('🧹 Service worker unregistered for development');
          });
        });
      });
    });
  }
}
