import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Portfolio from './pages/Portfolio';
import ResumePage from './pages/ResumePage';
import ErrorBoundary from './components/ErrorBoundary';
import GoogleAnalytics from './components/GoogleAnalytics';
import './index.css';

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <GoogleAnalytics />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<ResumePage />} />
            {/* Add a catch-all route for 404 pages */}
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;