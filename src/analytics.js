import posthog from 'posthog-js';

export const initAnalytics = () => {
    // Check if env vars are present (they will be in production)
    const apiKey = import.meta.env.VITE_POSTHOG_KEY;
    const apiHost = import.meta.env.VITE_POSTHOG_HOST || 'https://app.posthog.com';

    if (apiKey) {
        posthog.init(apiKey, {
            api_host: apiHost,
            autocapture: true, // Automatically track clicks, pageviews, etc.
            capture_pageview: false, // We'll handle this manually if needed, or let auto handle it
        });
    } else {
        console.log('Analytics: PostHog key not found. Events will be logged to console.');
    }
};

export const trackEvent = (eventName, properties = {}) => {
    if (import.meta.env.VITE_POSTHOG_KEY) {
        posthog.capture(eventName, properties);
    } else {
        console.log(`[Analytics] ${eventName}:`, properties);
    }
};
