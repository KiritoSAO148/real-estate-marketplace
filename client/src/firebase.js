// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-marketplace-c2963.firebaseapp.com",
  projectId: "real-estate-marketplace-c2963",
  storageBucket: "real-estate-marketplace-c2963.appspot.com",
  messagingSenderId: "171379598287",
  appId: "1:171379598287:web:86cf5db6d194d653ee28ba",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
