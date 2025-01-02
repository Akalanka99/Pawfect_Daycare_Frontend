// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6q_zGGbVwBiahjI0vajn2RAm5J_gpzRY",
  authDomain: "pawfect-daycare.firebaseapp.com",
  projectId: "pawfect-daycare",
  storageBucket: "pawfect-daycare.firebasestorage.app",
  messagingSenderId: "1049145179254",
  appId: "1:1049145179254:web:3de1224e4609cd573af357",
  measurementId: "G-P0HXCCWXKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication
const auth = getAuth(app);

// Export `auth` as a named export
export { auth };
export default app;