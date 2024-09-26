// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtT10UZTYntkOyrMjEKbo1Gaj4YqbaEYU",
  authDomain: "admin-panel-6ab6d.firebaseapp.com",
  projectId: "admin-panel-6ab6d",
  storageBucket: "admin-panel-6ab6d.appspot.com",
  messagingSenderId: "132557866093",
  appId: "1:132557866093:web:f1069b0e9e5266eaf06b64",
  measurementId: "G-M6R735LS16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);