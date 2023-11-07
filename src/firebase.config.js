// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2PQiJgYydPCBbmZsf8YuIz6Dk0Z0QyTs",
  authDomain: "job-space-60860.firebaseapp.com",
  projectId: "job-space-60860",
  storageBucket: "job-space-60860.appspot.com",
  messagingSenderId: "1029771318918",
  appId: "1:1029771318918:web:e3a2d4a1dc8066c162e307"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;