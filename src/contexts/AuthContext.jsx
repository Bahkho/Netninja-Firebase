import { useContext, useState, useEffect, createContext } from "react";
import { auth, googleProvider } from "../config/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
//------------------------------------------------------------
const UserContext = createContext();
//------------------------------------------------------------
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //------------------------------------------------------------
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //------------------------------------------------------------
  const logout = () => {
    return signOut(auth);
  };
  //------------------------------------------------------------
  const googlelogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //------------------------------------------------------------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userInfo) => {
      console.log(userInfo);
      setCurrentUser(userInfo);
    });

    return unsubscribe;
  }, []);
  //------------------------------------------------------------

  const contextValue = {
    createUser,
    googlelogin,
    login,
    logout,
    currentUser,
    //   resetPassword,
    //   updateEmail,
    //   updatePassword
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

//------------------------------------------------------------
export const useAuth = () => {
  return useContext(UserContext);
};
