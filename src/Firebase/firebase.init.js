// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBV5iJ0JqHrlb2d3DEJaPwPlt6_BfTVy7o",
//   authDomain: "recipe-design-b4583.firebaseapp.com",
//   projectId: "recipe-design-b4583",
//   storageBucket: "recipe-design-b4583.firebasestorage.app",
//   messagingSenderId: "777586887035",
//   appId: "1:777586887035:web:8f5756aa6241d3569c55de"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCw2WfI1VYb2_TnWWLfW3iAevUy3M-GVqM",
  authDomain: "food-project-75ea0.firebaseapp.com",
  projectId: "food-project-75ea0",
  storageBucket: "food-project-75ea0.firebasestorage.app",
  messagingSenderId: "766143423529",
  appId: "1:766143423529:web:8e5a16da3f608d99ca2838"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);