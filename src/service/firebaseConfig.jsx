// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwmssnNlbmgFvftM555kAZf1DFlHAoEqU",
  authDomain: "ai-trip-75c2c.firebaseapp.com",
  projectId: "ai-trip-75c2c",
  storageBucket: "ai-trip-75c2c.firebasestorage.app",
  messagingSenderId: "11262923816",
  appId: "1:11262923816:web:f880ecc96cc10ee05f111d",
  measurementId: "G-TM45WSSP56"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);