import React from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase.init";

const ContextProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider()
  const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  const googleLogin=()=>{
    return signInWithPopup(auth,googleProvider)
  }
  const userInfo = {
    createUser,
    loginUser,
    googleLogin
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default ContextProvider;
