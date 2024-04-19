import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithPopup,
} from "firebase/auth";
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
const signGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);

      const user = result.user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

const signWithPhonenumber = (phoneNumber) => {
  console.log(phoneNumber);
  window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
    size: "invisible",
    callback: () => {},
  });
  const appVerifier = window.recaptchaVerifier;

  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
    })
    .catch((error) => {
      console.log(error);
    });
};

const verifyOtp = (otp) => {
  window.confirmationResult
    .confirm(otp)
    .then((result) => {
      const user = result.user;
    })
    .catch((error) => {
      console.log(error);
    });
};

export { app, auth, provider, signGoogle, signWithPhonenumber, verifyOtp };
