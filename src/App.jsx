// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // <-- HashRouter for static hosting safety
import ErrorBoundary from './components/ErrorBoundary';
import GoogleAnalytics from './components/GoogleAnalytics';
import {
  LazyLandingPage,
  LazyAboutPage,
  LazyContactPage,
  LazyPortfolio,
  LazyCurrentProjectsSection,
  withSuspense
} from './utils/LazyComponents';
import ResumePage from './pages/ResumePage';
import FurBabies from './pages/projects/FurBabies';
import Leopold from './pages/projects/Leopold';
import Livy from './pages/projects/Livy';
import './index.css';

// Suspense-wrapped lazies
const LandingPage = withSuspense(LazyLandingPage);
const AboutPage = withSuspense(LazyAboutPage);
const ContactPage = withSuspense(LazyContactPage);
const Portfolio = withSuspense(LazyPortfolio);
const CurrentProjects = withSuspense(LazyCurrentProjectsSection);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <GoogleAnalytics />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/current-projects" element={<CurrentProjects />} />

          {/* Project detail routes (lowercase slugs) */}
          <Route path="/projects/furbabies" element={<FurBabies />} />
          <Route path="/projects/leopold" element={<Leopold />} />   {/* <- fixed case */}
          <Route path="/projects/livy" element={<Livy />} />

          <Route path="/resume" element={<ResumePage />} />

          {/* Fallback */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
