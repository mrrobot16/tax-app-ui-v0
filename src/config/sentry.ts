import * as Sentry from '@sentry/react';

import {
  PROD_BASE_URL,
  STAGING_BASE_URL,
  VERCEL_BASE_URL,
} from 'utils/constants';

import {
  APP_ENV,
} from 'config/app';

const tracePropagationTargets = [
    'localhost',
    STAGING_BASE_URL,
    PROD_BASE_URL,
    VERCEL_BASE_URL,
];

const DSN_PROD = 'https://5ecf9a0bd5d2f716e11e7bc668906cdf@o4506084321984512.ingest.sentry.io/4506215997308928';
const DSN_DEV = 'https://f60a145bdf46090a2f22c3fdcf223dd4@o4506084321984512.ingest.sentry.io/4506084330700800';
const dsn = APP_ENV === 'production' ? DSN_PROD : DSN_DEV;
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
