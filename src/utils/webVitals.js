// src/utils/webVitals.js
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
import { analytics } from './optimizedAnalytics';

export const initWebVitals = () => {
  const vitalsData = {};
  
  getCLS((metric) => {
    vitalsData.cls = metric.value;
    reportVital('CLS', metric.value);
  });
  
  getFID((metric) => {
    vitalsData.fid = metric.value;
    reportVital('FID', metric.value);
  });
  
  getFCP((metric) => {
    vitalsData.fcp = metric.value;
    reportVital('FCP', metric.value);
  });
  
  getLCP((metric) => {
    vitalsData.lcp = metric.value;
    reportVital('LCP', metric.value);
  });
  
  getTTFB((metric) => {
    vitalsData.ttfb = metric.value;
    reportVital('TTFB', metric.value);
  });

  return vitalsData;
};

const reportVital = (name, value) => {
  analytics.track('web_vital', {
    metric_name: name,
    metric_value: value
  });
};