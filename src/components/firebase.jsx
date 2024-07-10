// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKLhjAJdet5GPTst4nrfM-xVnrrZKZ5XE",
  authDomain: "edureact-f66b1.firebaseapp.com",
  projectId: "edureact-f66b1",
  storageBucket: "edureact-f66b1.appspot.com",
  messagingSenderId: "707672615113",
  appId: "1:707672615113:web:f0c3c349db4e980f7fc518",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
