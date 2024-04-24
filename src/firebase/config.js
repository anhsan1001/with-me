import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDu_X5aRQGmUYVZpJ3HS81yJ8TP5djfmnE",
  authDomain: "with-me-83ab7.firebaseapp.com",
  projectId: "with-me-83ab7",
  storageBucket: "with-me-83ab7.appspot.com",
  messagingSenderId: "733171484867",
  appId: "1:733171484867:web:de122efd2a16f739ee7a76",
  measurementId: "G-X7X198L405",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en";
const provider = new GoogleAuthProvider();
const database = getFirestore(app);

export { app, auth, provider, database };
