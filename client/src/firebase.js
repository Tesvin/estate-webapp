// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ce4ae.firebaseapp.com",
  projectId: "mern-estate-ce4ae",
  storageBucket: "mern-estate-ce4ae.appspot.com",
  messagingSenderId: "645077493662",
  appId: "1:645077493662:web:b808676f1a6e13b71d588f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);