// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfV0XnFhznmk2BKh5abPppiqv2pFXZNHI",
  authDomain: "labari-cfbda.firebaseapp.com",
  projectId: "labari-cfbda",
  storageBucket: "labari-cfbda.firebasestorage.app",
  messagingSenderId: "561875893681",
  appId: "1:561875893681:web:710862599412821f24d190",
  measurementId: "G-SEVYBP692D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);