// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6KI_BgL_tzKt_DHXcYsbJq8wdPXxTPs4",
  authDomain: "hi-chat-19324.firebaseapp.com",
  projectId: "hi-chat-19324",
  storageBucket: "hi-chat-19324.appspot.com",
  messagingSenderId: "289624088117",
  appId: "1:289624088117:web:73647c49cd3aeea38b5b7c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firebase auth referansını al
export const auth = getAuth(app);

// google sağlayacısını kur
export const provider = new GoogleAuthProvider();

// firestore veritbanını referansını al
export const db = getFirestore(app);
