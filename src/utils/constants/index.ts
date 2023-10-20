export const {
    REACT_APP_APP_ENV: APP_ENV,
    // REACT_APP_DEV_USER_ID: DEV_USER_ID,
    // REACT_APP_DEV_CONVERSATION_ID: DEV_CONVERSATION_ID,
    REACT_APP_PROD_USER_ID: PROD_USER_ID,
    REACT_APP_PROD_CONVERSATION_ID: PROD_CONVERSATION_ID,
} = process.env;

// Localhost
export const LOCAL_BASE_URL = 'http://localhost:8000';
// Dev Env
export const DEV_BASE_URL = 'http://localhost:8000';

// Prod Env
// Flask API
export const PROD_BASE_URL = 'https://irs-copilot-dev-f3ffc3a3fca9.herokuapp.com';
// Fast API
// export const PROD_BASE_URL = 'https://irs-copilot-543238a8f348.herokuapp.com';

// Staging Env
// Flask API
export const STAGING_BASE_URL = 'https://irs-copilot-dev-f3ffc3a3fca9.herokuapp.com';
// Fast API
// export const STAGING_BASE_URL = 'https://irs-copilot-543238a8f348.herokuapp.com';

export const VERCEL_BASE_URL = 'https://irs-copilot.vercel.app';


// export const USER_ID = 'cefece6f-3a77-493c-b'; // PROD
// export const CONVERSATION_ID = '7ba4cca9-4115-4a5d-a'; // PROD
export const DEV_USER_ID = 'be2c9c89-ec4a-4fee-8';
export const DEV_CONVERSATION_ID = 'ea5bdd64-1495-40dd-b';

export const USER_ID = APP_ENV === 'production' ? PROD_USER_ID as string : 'be2c9c89-ec4a-4fee-8';
export const CONVERSATION_ID = APP_ENV === 'production' ? PROD_CONVERSATION_ID as string : 'ea5bdd64-1495-40dd-b';

export const MESSAGES_LIST = [
    {
        content: 'Hi, how I can help you with your tax questions?',
        role: 'assistant',
    },
];
export const ASSISTANT_LOADING_MESSAGE = {
    content: 'One second please.',
    role: 'assistant',
};

