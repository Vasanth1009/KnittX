import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
};

const fireApp = initializeApp(firebaseConfig);
export const auth = getAuth(fireApp);

export const login = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
export const signup = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const logout = () => {
  auth.signOut();
};

export default fireApp;
