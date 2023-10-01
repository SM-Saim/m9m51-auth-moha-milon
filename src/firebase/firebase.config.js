// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB12OC2RcN_DSdLN9i0E0PJRJnDnpO3KeI",
  authDomain: "auth-moha-milon-11738.firebaseapp.com",
  projectId: "auth-moha-milon-11738",
  storageBucket: "auth-moha-milon-11738.appspot.com",
  messagingSenderId: "184178877612",
  appId: "1:184178877612:web:4f3f3b59558644e31eeb09",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
