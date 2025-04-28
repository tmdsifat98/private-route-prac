// Import the functions you need from the SDKs you need
import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqqROwm-v_80Yz6-QD0b8pWZpPnWG1Vr4",
  authDomain: "private-router-e4f67.firebaseapp.com",
  projectId: "private-router-e4f67",
  storageBucket: "private-router-e4f67.firebasestorage.app",
  messagingSenderId: "269923838533",
  appId: "1:269923838533:web:6c512aa3f42d67920d112c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
