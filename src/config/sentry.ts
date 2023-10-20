import * as Sentry from '@sentry/react';

import {
  PROD_BASE_URL,
  STAGING_BASE_URL,
  VERCEL_BASE_URL,
} from 'utils/constants';

const tracePropagationTargets = [
    'localhost',
    STAGING_BASE_URL,
    PROD_BASE_URL,
    VERCEL_BASE_URL,
];

const dsn = 'https://f60a145bdf46090a2f22c3fdcf223dd4@o4506084321984512.ingest.sentry.io/4506084330700800';
const integrations = [
  new Sentry.BrowserTracing({
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets,
  }),
  new Sentry.Replay(),
];

const tracesSampleRate = 1.0;

const replaysSessionSampleRate = 0.1;

const replaysOnErrorSampleRate = 1.0;

const config = {
  dsn,
  integrations,
  // Performance Monitoring
  tracesSampleRate, // Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
};


export const initSentry = () => {
  Sentry.init(config);
};
