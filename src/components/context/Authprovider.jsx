import React, { createContext, useEffect, useState } from 'react'
import app from '../../firebase/firebase';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,signOut} from "firebase/auth";



 export const AuthContext = createContext();
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();


const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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

    //cheack in sign in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            //console.log(currentUser);
            setUser(currentUser)
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
      
    }, [])
       
  

    const authInfo = {
        user,
        createUser,
        loginwithGoogle,
        login,
        logOut,
        loading
        
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default Authprovider
