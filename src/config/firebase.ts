// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyA93YAYtmidH6IvkyCVTGHCDKkFfyo_TEA',
//   authDomain: 'irscopilot-dev.firebaseapp.com',
//   databaseURL: 'https://irscopilot-dev-default-rtdb.firebaseio.com',
//   projectId: 'irscopilot-dev',
//   storageBucket: 'irscopilot-dev.appspot.com',
//   messagingSenderId: '491470877076',
//   appId: '1:491470877076:web:830014bce1da5bcffcdf81',
//   measurementId: 'G-QRKNDLEST4',
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// NOTE: Below is config for DO-WHAT-EVER Firebase Project.

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig_doWhatEver = {
  apiKey: 'AIzaSyDpkP0WtKibV8hX5RJeBYd1zJ55niYFfmg',
  authDomain: 'do-what-ever.firebaseapp.com',
  projectId: 'do-what-ever',
  storageBucket: 'do-what-ever.appspot.com',
  messagingSenderId: '585113563893',
  appId: '1:585113563893:web:6800673aea0483bbcd4bbc',
  measurementId: 'G-2KXBNW660B',
};

// Initialize Firebase
const app_doWhatEver = initializeApp(firebaseConfig_doWhatEver);
const analytics_doWhatEver = getAnalytics(app_doWhatEver);
