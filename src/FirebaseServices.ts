import firebase from 'firebase/compat/app';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSJDn4_zAs5xLkx30fX5A3nM2j02LA414",
  authDomain: "obxvacay-qrcoderouting.firebaseapp.com",
  projectId: "obxvacay-qrcoderouting",
  storageBucket: "obxvacay-qrcoderouting.firebasestorage.app",
  messagingSenderId: "661464757612",
  appId: "1:661464757612:web:be6c2b06cb6c935d576f49",
  measurementId: "G-GPJ8KJCSNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);