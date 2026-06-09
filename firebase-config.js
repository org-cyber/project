// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB9ioiaiNAiGJi5ShegFiUBxVyu_4dkswg",
  authDomain: "synergy-e40e9.firebaseapp.com",
  projectId: "synergy-e40e9",
  storageBucket: "synergy-e40e9.firebasestorage.app",
  messagingSenderId: "944126214974",
  appId: "1:944126214974:web:02e6bc0da5d90dd397626f",
  measurementId: "G-J2FLMG2WSP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);