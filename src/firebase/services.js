import {
  RecaptchaVerifier,
  createUserWithEmailAndPassword,
  signInWithPhoneNumber,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, database, provider } from "./config";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import {
  equalTo,
  get,
  onChildChanged,
  onChildRemoved,
  onValue,
  orderByChild,
  query,
  ref,
  remove,
  set,
  update,
} from "firebase/database";

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

const logOut = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {});
};

const getDataFirebase = (collection, setData) => {
  const startRef = ref(database, collection);
  onValue(startRef, (data) => {
    if (data.exists()) {
      setData(data.val());
    } else {
      setData({});
    }
  });
};

const getDataFirebase2 = (collection, setData) => {
  const startRef = ref(database, `${collection}`);
  onValue(startRef, (data) => {
    if (data.exists()) {
      setData(data.val());
      // console.log(data.val());
    } else {
      setData({});
    }
  });
};

const addFriend = (yourId, data) => {
  if (yourId && data) {
    update(ref(database, `friends/${yourId}/${data.uid}`), data).then(() => {
      remove(ref(database, `friend-request/${yourId}/${data.uid}`), {});
    });
  }
};

const sendFriendRequest = (yourId, data) => {
  if (yourId && data) {
    set(ref(database, `friend-request/${yourId}/${data.uid}`), data);
  }
};

const addMessages = (yourId, friendId, data) => {
  const timestamp = new Date().getTime();
  if (yourId && data) {
    set(ref(database, `messages/${yourId}/${friendId}/${timestamp}`), data);
  }
};

const addUserIntoDatabase = (data) => {
  set(ref(database, `users/${data.uid}`), data);
};

const queryDataUsers = async (valueSearch, setUserSearch) => {
  const mostViewedPosts = await query(
    ref(database, "users"),
    orderByChild(`displayName`),
    equalTo(valueSearch)
  );
  get(mostViewedPosts).then((results) => {
    setUserSearch(results.val());
  });
};

export {
  signGoogle,
  signWithPhonenumber,
  createUserWithPassword,
  verifyOtp,
  logOut,
  getDataFirebase,
  addFriend,
  addMessages,
  addUserIntoDatabase,
  queryDataUsers,
  sendFriendRequest,
  getDataFirebase2,
};
