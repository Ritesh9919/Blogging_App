// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvSPcIwu0_MGpk27t2yP7mYPonRoWz0kI",
  authDomain: "blogging-app-e47a0.firebaseapp.com",
  projectId: "blogging-app-e47a0",
  storageBucket: "blogging-app-e47a0.appspot.com",
  messagingSenderId: "684818472696",
  appId: "1:684818472696:web:11f3a105e98e29833be50d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);