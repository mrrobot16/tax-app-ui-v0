import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import { APP_ENV } from 'utils/constants';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfigProd = {
  apiKey: 'AIzaSyAg-VpiII4IwmBH0jjiq8yC3p-DSlXyTKE',
  authDomain: 'tax-app-prod-35a06.firebaseapp.com',
  projectId: 'tax-app-prod-35a06',
  storageBucket: 'tax-app-prod-35a06.appspot.com',
  messagingSenderId: '64026493068',
  appId: '1:64026493068:web:4bb5293a13b1c65d04fba9',
  measurementId: 'G-0BZT2XP96Y',
};


const firebaseConfigDev = {
  apiKey: 'AIzaSyA93YAYtmidH6IvkyCVTGHCDKkFfyo_TEA',
  authDomain: 'irscopilot-dev.firebaseapp.com',
  databaseURL: 'https://irscopilot-dev-default-rtdb.firebaseio.com',
  projectId: 'irscopilot-dev',
  storageBucket: 'irscopilot-dev.appspot.com',
  messagingSenderId: '491470877076',
  appId: '1:491470877076:web:830014bce1da5bcffcdf81',
  measurementId: 'G-QRKNDLEST4',
};

const firebaseConfig = APP_ENV === 'production' ? firebaseConfigProd : firebaseConfigDev;

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(initFirebase);
