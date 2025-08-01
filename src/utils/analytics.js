/**
 * Analytics tracking utilities for Boswell Web Development Solutions
 * Handles event tracking for user interactions
 */

// Check if analytics should be enabled (production only)
const isAnalyticsEnabled = () => {
  return typeof window !== 'undefined' && (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1');
};

// Generic event tracking function
const trackEvent = (eventName, _properties = {}) => {
  if (!isAnalyticsEnabled()) {
    return;
  }

  // Google Analytics 4 (gtag) - Uncomment when GA is set up
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', eventName, _properties);
  // }

  // Alternative: Send to your own analytics endpoint
  // fetch('/api/analytics', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ event: eventName, properties: _properties })
  // }).catch(() => {}); // Silently fail analytics
};

// Page view tracking
export const trackPageView = (pageName, path = window.location.pathname) => {
  trackEvent('page_view', {
    page_title: pageName,
    page_location: path,
    page_referrer: document.referrer
  });
};

// Portfolio specific tracking
export const trackPortfolioView = () => {
  trackEvent('portfolio_view', {
    page_title: 'Portfolio',
    section: 'github_projects'
  });
};

export const trackProjectClick = (projectName, projectUrl, clickType = 'repo') => {
  trackEvent('project_click', {
    project_name: projectName,
    project_url: projectUrl,
    click_type: clickType, // 'repo' or 'demo'
    section: 'portfolio'
  });
};

// Resume tracking
export const trackResumeView = () => {
  trackEvent('resume_view', {
    view_type: 'inline'
  });
};

export const trackResumeDownload = () => {
  trackEvent('resume_download', {
    file_type: 'pdf',
    download_source: 'website'
  });
};

// Social media tracking
export const trackSocialClick = (platform) => {
  trackEvent('social_click', {
    platform: platform.toLowerCase(),
    link_type: 'external'
  });
};

// Pricing page & package selection
export const trackPricingView = () => {
  trackEvent('pricing_view', {
    page_title: 'Pricing',
    section: 'services'
  });
};

export const trackPackageSelection = (packageName) => {
  trackEvent('package_selected', {
    package_name: packageName,
    action: 'selection'
  });
};

// Contact form tracking
export const trackContactFormSubmit = (packageName = 'unknown') => {
  trackEvent('contact_form_submit', {
    form_type: 'contact',
    selected_package: packageName
  });
};

export const trackEmailClick = () => {
  trackEvent('email_click', {
    contact_method: 'email',
    action: 'mailto'
  });
};

export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    contact_method: 'phone',
    action: 'tel'
  });
};

// Business/CTA tracking
export const trackHireMeClick = (source = 'unknown') => {
  trackEvent('hire_me_click', {
    source: source,
    action: 'contact_intent'
  });
};

// Error tracking
export const trackError = (errorMessage, errorSource = 'unknown') => {
  trackEvent('error_occurred', {
    error_message: errorMessage,
    error_source: errorSource,
    user_agent: navigator.userAgent,
    timestamp: new Date().toISOString()
  });
};

// Performance tracking
export const trackPerformance = (metricName, value, unit = 'ms') => {
  trackEvent('performance_metric', {
    metric_name: metricName,
    metric_value: value,
    metric_unit: unit
  });
};

// Initialize analytics (call this in your main App component)
export const initializeAnalytics = () => {
  if (!isAnalyticsEnabled()) return;

  // Google Analytics 4 initialization
  // const script = document.createElement('script');
  // script.async = true;
  // script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
  // document.head.appendChild(script);

  // window.dataLayer = window.dataLayer || [];
  // function gtag(){dataLayer.push(arguments);}
  // gtag('js', new Date());
  // gtag('config', 'GA_MEASUREMENT_ID');

  trackPageView('Landing Page');
};

// Default export object
export default {
  trackPageView,
  trackPortfolioView,
  trackProjectClick,
  trackResumeView,
  trackResumeDownload,
  trackSocialClick,
  trackPricingView,
  trackPackageSelection,
  trackContactFormSubmit,
  trackEmailClick,
  trackPhoneClick,
  trackHireMeClick,
  trackError,
  trackPerformance,
  initializeAnalytics
};
