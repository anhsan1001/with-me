import { createContext, useEffect, useState } from "react";
import { auth } from "../src/firebase/config";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const unsubcribed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, photoURL, uid } = user;
        setUser({ displayName, email, photoURL, uid });
      }
    });
    return () => unsubcribed();
  }, []);
  return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>;
};
export default AppProvider;
