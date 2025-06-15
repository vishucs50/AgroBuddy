import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD6urCyyIZfrIVU3yK-SHkWKvnIhA__1Oc",
  authDomain: "agrobuddy-4d0f8.firebaseapp.com",
  projectId: "agrobuddy-4d0f8",
  // Optional: storageBucket, messagingSenderId, etc. cloud storage for auth
};
 const app=initializeApp(firebaseConfig);
 export const auth=getAuth(app);