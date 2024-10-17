// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "cherryloop-29327.firebaseapp.com",
  projectId: "cherryloop-29327",
  storageBucket: "cherryloop-29327.appspot.com",
  messagingSenderId: "371413546044",
  appId: "1:371413546044:web:e5b3a650412e22e0483f39",
  measurementId: "G-FETSLZNRNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const db = getFirestore()
export const storage = getStorage()