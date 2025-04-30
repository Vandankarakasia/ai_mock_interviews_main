// Import the functions you need from the SDKs you need
import { initializeApp, getApp ,getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1BnDOAaPI9AXlZr6sCASUTXytddekJlM",
  authDomain: "prepwise-b16ed.firebaseapp.com",
  projectId: "prepwise-b16ed",
  storageBucket: "prepwise-b16ed.firebasestorage.app",
  messagingSenderId: "497770717544",
  appId: "1:497770717544:web:dc8d533959fa1f129e76dd",
  measurementId: "G-6NXGJCSMNJ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);