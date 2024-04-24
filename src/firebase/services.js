import {
  RecaptchaVerifier,
  createUserWithEmailAndPassword,
  signInWithPhoneNumber,
  signInWithPopup,
} from "firebase/auth";
import { auth, database, provider } from "./config";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import { doc, setDoc } from "firebase/firestore";

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
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
      size: "invisible",
      callback: () => {},
    });
  }
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

const createUserWithPassword = (email, password, handleShowLoign) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user) {
        handleShowLoign();
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

const addData = async () => {
  await setDoc(doc(database, "user", "nha"), {
    name: "Anh San",
    uid: "12334",
  });
};
export {
  signGoogle,
  signWithPhonenumber,
  createUserWithPassword,
  addData,
  verifyOtp,
};
