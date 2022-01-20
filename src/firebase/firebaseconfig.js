// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAG1B4h77HldRHrepN5DqtNyI2jbxFi3OQ",
  authDomain: "blogreactfirebase-331f2.firebaseapp.com",
  projectId: "blogreactfirebase-331f2",
  storageBucket: "blogreactfirebase-331f2.appspot.com",
  messagingSenderId: "488083264310",
  appId: "1:488083264310:web:7155ca37d41c957ae01997",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); // for database
export const auth = getAuth(app); // for authentication
export const provider = new GoogleAuthProvider(); // for google authentication
