// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV5iJ0JqHrlb2d3DEJaPwPlt6_BfTVy7o",
  authDomain: "recipe-design-b4583.firebaseapp.com",
  projectId: "recipe-design-b4583",
  storageBucket: "recipe-design-b4583.firebasestorage.app",
  messagingSenderId: "777586887035",
  appId: "1:777586887035:web:8f5756aa6241d3569c55de"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);