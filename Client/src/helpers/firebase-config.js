// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "knittx-2022.firebaseapp.com",
  projectId: "knittx-2022",
  storageBucket: "knittx-2022.appspot.com",
  messagingSenderId: "742513583752",
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: "G-ZE92CSVJYV"
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
export default fireApp;
