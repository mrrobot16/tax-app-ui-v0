export const {
    REACT_APP_APP_ENV: APP_ENV,
    // REACT_APP_DEV_USER_ID: DEV_USER_ID,
    REACT_APP_PROD_USER_ID: PROD_USER_ID,
    REACT_APP_PROD_CONVERSATION_ID: PROD_CONVERSATION_ID,
} = process.env;

// Localhost
export const LOCAL_BASE_URL = 'http://localhost:8000';
// Dev Env
export const DEV_BASE_URL = 'http://localhost:8000';

// HEROKU ENDPOINTS
// Fast API Production Env
// export const PROD_BASE_URL = 'https://tax-app-api-dev-004c410e86db.herokuapp.com';
// Fast API Staging Env
export const STAGING_BASE_URL = 'https://tax-app-api-dev-004c410e86db.herokuapp.com/';

// AWS ENDPOINTS
// FastAPI AWS Linux Virtual Server
export const PROD_BASE_URL = 'https://api.taxapp.chat';

export const VERCEL_BASE_URL = 'https://irs-copilot.vercel.app';

export const DEV_USER_ID2 = 'be2c9c89-ec4a-4fee-8';
export const DEV_CONVERSATION_ID2 = 'ea5bdd64-1495-40dd-b';

export const USER_ID2 = APP_ENV === 'production' ? PROD_USER_ID as string : 'be2c9c89-ec4a-4fee-8';
export const CONVERSATION_ID2 = APP_ENV === 'production' ? PROD_CONVERSATION_ID as string : 'ea5bdd64-1495-40dd-b';

