import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_d2KtRGJ9nSMLlRwSY1_e_a25EM9P09Y",
  authDomain: "hi-twitter-74852.firebaseapp.com",
  projectId: "hi-twitter-74852",
  storageBucket: "hi-twitter-74852.appspot.com",
  messagingSenderId: "62405735297",
  appId: "1:62405735297:web:660121736b668daf7b2e80",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth referansını al
export const auth = getAuth(app);

// google sağlayıcısını kur
export const provider = new GoogleAuthProvider();

// veritabanın referansını al
export const db = getFirestore(app);

// storage referansını al
export const storage = getStorage(app);
