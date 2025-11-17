// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBti3-fgWE0hupZ4Jqy0_ZMOQWgF--df2M",
  authDomain: "mindu-91138.firebaseapp.com",
  projectId: "mindu-91138",
  storageBucket: "mindu-91138.firebasestorage.app",
  messagingSenderId: "154559506405",
  appId: "1:154559506405:web:31ee16fc3ef71f22c0310c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app); // para FCM en cliente
