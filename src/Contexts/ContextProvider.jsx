import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.init";

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // onAuthStateChanged(auth, (currentUser)=>{
  //   console.log(currentUser)
  // })
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);
  const signOutUser = () => {
    return signOut(auth);
  };
  const userInfo = {
    user,
    createUser,
    loginUser,
    googleLogin,
    signOutUser,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default ContextProvider;
