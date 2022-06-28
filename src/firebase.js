// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnIJ04l9NWyISg5ySzJWbncGsKjkQz9rk",
  authDomain: "sig-adat.firebaseapp.com",
  projectId: "sig-adat",
  storageBucket: "sig-adat.appspot.com",
  messagingSenderId: "585545596709",
  appId: "1:585545596709:web:1551ab7cf0df8e5e08a4cc",
  measurementId: "G-CN16QCHC1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;