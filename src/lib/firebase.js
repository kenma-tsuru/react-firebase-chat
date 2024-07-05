// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-c28b1.firebaseapp.com",
  projectId: "reactchat-c28b1",
  storageBucket: "reactchat-c28b1.appspot.com",
  messagingSenderId: "804468444508",
  appId: "1:804468444508:web:8093b3f868cb055eac8599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();