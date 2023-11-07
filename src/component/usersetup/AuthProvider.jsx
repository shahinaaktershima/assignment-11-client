import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";

export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);
    const Register=(email,password)=>{
        setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    }
    const Login=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const LogOut=()=>{
        return signOut(auth)
    }
    const google=()=>{
        return signInWithPopup(auth,provider)
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            
            setLoading(false)
        });
        return ()=>{
            return unSubscribe();
        }
    },[])
    const authInfo={
     user,
     loading,
     Register,
     setUser,
     Login,
     LogOut,
     google
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;