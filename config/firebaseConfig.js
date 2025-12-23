// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-room-redesign-3ef34.firebaseapp.com",
  projectId: "ai-room-redesign-3ef34",
  storageBucket: "ai-room-redesign-3ef34.firebasestorage.app",
  messagingSenderId: "767647829920",
  appId: "1:767647829920:web:d405045ce00906563d1ec5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)