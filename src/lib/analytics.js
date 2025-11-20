/**
 * Google Analytics Integration
 * Track page views and events
 */

// Initialize Google Analytics
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Track page view
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Common event trackers
export const trackAddToCart = (product) => {
  event({
    action: 'add_to_cart',
    category: 'ecommerce',
    label: product.title,
    value: product.price,
  });
};

export const trackRemoveFromCart = (product) => {
  event({
    action: 'remove_from_cart',
    category: 'ecommerce',
    label: product.title,
    value: product.price,
  });
};

export const trackPurchase = (orderData) => {
  event({
    action: 'purchase',
    category: 'ecommerce',
    label: 'Order Completed',
    value: orderData.total || 0,
  });
};

export const trackPODSubmission = (productType) => {
  event({
    action: 'pod_submission',
    category: 'print_on_demand',
    label: productType,
  });
};

export const trackFormError = (formName, errorType) => {
  event({
    action: 'form_error',
    category: 'validation',
    label: `${formName}: ${errorType}`,
  });
};

