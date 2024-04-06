// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-marketplace-e13ed.firebaseapp.com",
  projectId: "real-estate-marketplace-e13ed",
  storageBucket: "real-estate-marketplace-e13ed.appspot.com",
  messagingSenderId: "1053396128388",
  appId: "1:1053396128388:web:1a8754cdc7281fd80f28d1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
