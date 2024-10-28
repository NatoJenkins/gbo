// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJg8vEFj_ANHTY_RDbLnZ-WiGdLoESRFI",
  authDomain: "gameblazers-optimizer.firebaseapp.com",
  projectId: "gameblazers-optimizer",
  storageBucket: "gameblazers-optimizer.appspot.com",
  messagingSenderId: "531817727815",
  appId: "1:531817727815:web:1a0e733c9656234eaeee62",
  measurementId: "G-JT5XMB754E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);