import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDu5nBVNXvTWInlCBYHi9hPla2nsoAAzrs",
  authDomain: "pertisidaapp.firebaseapp.com",
  projectId: "pertisidaapp",
  storageBucket: "pertisidaapp.firebasestorage.app",
  messagingSenderId: "983203623590",
  appId: "1:983203623590:web:02c44bfa14dbc38ee87a67",
  measurementId: "G-P9YMH8BRNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
