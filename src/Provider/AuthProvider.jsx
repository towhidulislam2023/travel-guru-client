/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebasae.cofig';
export const AuthProviderContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const googleProvider=new GoogleAuthProvider()
    const githubProvider=new GithubAuthProvider()
    const [user,setUser] = useState(null)
    const [loading,setLoading]=useState(true)
    const registarUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserinfo=(name)=>{
        return updateProfile(auth.currentUser,{
            displayName:name
        })
    }
    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)

    }
    const handelGoogleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const handelGithubLogin=()=>{
        return signInWithPopup(auth,githubProvider)
    }
    const logout=()=>{
        signOut(auth)
    }
    


    
    const authInfo = {
        registarUser,
        user,
        updateUserinfo,
        loginUser,
        logout,
        handelGoogleLogin,
        handelGithubLogin,
        loading
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            return unsubscribe
        }
    },[])
    return (
        <AuthProviderContext.Provider value={authInfo}>
            {children}
        </AuthProviderContext.Provider>
    );
};

export default AuthProvider;