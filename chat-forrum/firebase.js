// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
 import {getFirestore,collection} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmApLQKx9xWAVTUvIh924NGOZOc7lRF6U",
  authDomain: "lab3-21853.firebaseapp.com",
  projectId: "lab3-21853",
  storageBucket: "lab3-21853.appspot.com",
  messagingSenderId: "767994735789",
  appId: "1:767994735789:web:bd5bf88e892dbcace56a24",
  measurementId: "G-3JJGS6SX3Y"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
