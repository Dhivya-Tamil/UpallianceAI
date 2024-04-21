import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBm2PW_ej7IJrzarqJF77h5tavnvE-JRfQ",
  authDomain: "authentiation-2475c.firebaseapp.com",
  projectId: "authentiation-2475c",
  storageBucket: "authentiation-2475c.appspot.com",
  messagingSenderId: "452412043359",
  appId: "1:452412043359:web:86f213ffbac60f5d47abea",
  measurementId: "G-9T75ZQ34TW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };