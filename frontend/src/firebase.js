// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Add this to use authentication

const firebaseConfig = {
  apiKey: "AIzaSyDy5TPgHspOTTPpbebLNeMiqZHzaNVNAAY",
  authDomain: "weather-ee3cb.firebaseapp.com",
  projectId: "weather-ee3cb",
  storageBucket: "weather-ee3cb.appspot.com",
  messagingSenderId: "1018272880247",
  appId: "1:1018272880247:web:419063b5a0455700fa5872",
  measurementId: "G-N5RK8DEXNG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // export auth for use in your Login component
