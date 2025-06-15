import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth"; // Firebase tool to listen to auth changes
import { auth } from "../Auth/firebase"; // your Firebase instance

export const AuthContext = createContext(); //global store we will use context to share info to all components

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); //  React state to store the current user

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (u) => {
    setUser(u); //  Firebase tells us when the user logs in or logs out
  });

  return () => unsubscribe(); //  Cleanup on unmount
}, []);