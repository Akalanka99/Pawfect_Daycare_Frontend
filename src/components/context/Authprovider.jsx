import React, { createContext, useEffect, useState } from 'react'
import app from '../../firebase/firebase';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,signOut} from "firebase/auth";



 export const AuthContext = createContext();
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();
const API_URL=process.env.VITE_API_URL;



const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

     // Function to send the Firebase ID token to the backend for verification
  const verifyTokenWithBackend = async (idToken) => {
    try {
      const response = await fetch(`${API_URL}/api/verify-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: idToken }),
      });
      const data = await response.json();
      setRole(data.role);
    } catch (error) {
      console.error('Error verifying token with backend:', error);
    }
  };


   //create account
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)

    }
    //sign up with google
    const loginwithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,googleprovider)
    }
     //loging using email and pasword
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
     //logout
    const logOut = () => {
        return signOut(auth)
    }

  // Check if the user is signed in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // If the user is signed in, get the ID token and send it to the backend
        const idToken = await currentUser.getIdToken();
        console.log('Firebase ID Token:', idToken);
        await verifyTokenWithBackend(idToken);
      } else {
        // If the user is signed out, clear the user state
        setUser(null);
      }
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
}, []);

  
    const authInfo = {
        user,
        createUser,
        loginwithGoogle,
        login,
        logOut,
        loading,
        role,
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default Authprovider
