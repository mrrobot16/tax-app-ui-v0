import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyA93YAYtmidH6IvkyCVTGHCDKkFfyo_TEA',
  authDomain: 'irscopilot-dev.firebaseapp.com',
  databaseURL: 'https://irscopilot-dev-default-rtdb.firebaseio.com',
  projectId: 'irscopilot-dev',
  storageBucket: 'irscopilot-dev.appspot.com',
  messagingSenderId: '491470877076',
  appId: '1:491470877076:web:830014bce1da5bcffcdf81',
  measurementId: 'G-QRKNDLEST4',
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(initFirebase);
