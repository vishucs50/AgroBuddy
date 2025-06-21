  // import { createContext, useContext, useState } from "react";

  // const UserContext = createContext();

  // export const useUserContext = () => useContext(UserContext);

  // export const UserProvider = ({ children }) => {
  //   const [userData, setUserData] = useState(null); // this is where MongoDB data will go

  //   return (
  //     <UserContext.Provider value={{ userData, setUserData }}>
  //       {children}
  //     </UserContext.Provider>
  //   );
  // };




  import { createContext, useContext, useEffect, useState } from "react";
  import { onAuthStateChanged } from "firebase/auth";
  import { auth } from "../config/firebase"; // your firebase.js file

  const UserContext = createContext();

  export const useUserContext = () => useContext(UserContext);

  export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null); // can be Firebase + MongoDB data
    const [loading, setLoading] = useState(true); // ⏳ loading until Firebase checks auth

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // You could fetch MongoDB user data here if needed
          setUserData(user);
        } else {
          setUserData(null);
        }
        setLoading(false);
      });

      return () => unsubscribe(); // cleanup on unmount
    }, []);

    return (
      <UserContext.Provider value={{ userData, setUserData, loading }}>
        {!loading && children}
      </UserContext.Provider>
    );
  };
