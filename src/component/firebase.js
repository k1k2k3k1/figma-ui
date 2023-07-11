// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAlb8u5O4nl9soh-2qj3R8VZ1E7moDIsgE",
  authDomain: "taskmanage-48ab1.firebaseapp.com",
  projectId: "taskmanage-48ab1",
  storageBucket: "taskmanage-48ab1.appspot.com",
  messagingSenderId: "1015279406612",
  appId: "1:1015279406612:web:1a5eb9c3d8505112b4a101",
  measurementId: "G-DBCS1R1Z7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth};

