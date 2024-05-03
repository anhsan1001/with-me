import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { getDataFirebase } from "../firebase/services";

export const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [friendRequest, setFriendRequest] = useState({});

  useEffect(() => {
    const unsubcribed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, photoURL, uid } = user;
        setUser({ displayName, email, photoURL, uid });
      }
    });

    return () => unsubcribed();
  }, []);

  useEffect(() => {
    getDataFirebase(`friend-request/${user?.uid}`, setFriendRequest);
  }, [user?.uid]);
  return (
    <AppContext.Provider value={{ user, friendRequest }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
