import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8lmnu4_ZG7ipi-s9f53o5_vjfxZZmSo4",
  authDomain: "jenxel-corporation.firebaseapp.com",
  projectId: "jenxel-corporation",
  storageBucket: "jenxel-corporation.appspot.com",
  messagingSenderId: "285577335190",
  appId: "1:285577335190:web:e2d007aff335df7e20cdb7"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();