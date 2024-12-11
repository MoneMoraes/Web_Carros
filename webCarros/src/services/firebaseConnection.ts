
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVPv0UA0LYiq5aT7s2qHiC33EFuO5dpEI",
  authDomain: "web-carros-32411.firebaseapp.com",
  projectId: "web-carros-32411",
  storageBucket: "web-carros-32411.firebasestorage.app",
  messagingSenderId: "556351072053",
  appId: "1:556351072053:web:ee811698ea0418b7ad8e7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {db, auth, storage};