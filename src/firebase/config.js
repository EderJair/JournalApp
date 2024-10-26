// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVCJJMbiFDrMuzwO_YSDo2VwoUdL6DC3s",
  authDomain: "reactjournal-d3a0c.firebaseapp.com",
  projectId: "reactjournal-d3a0c",
  storageBucket: "reactjournal-d3a0c.appspot.com",
  messagingSenderId: "67445583081",
  appId: "1:67445583081:web:acd5d3e4e008cf88cf5478"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);