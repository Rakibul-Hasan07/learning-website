import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //register
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //user set state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    //login
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //LogOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //update profile
    const userUpdateProfile = (name, url) => {
        setLoading(true)
        return updateProfile(auth.currentUser, { displayName: name, photoURL: url })
    }

    // Google signin
    const googleSignIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // GitHub Singin
    const githubSIgnIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // Reset password using email
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    const authInfo = {
        user,
        loading,
        createUser,
        userUpdateProfile,
        userLogin,
        logOut,
        googleSignIn,
        githubSIgnIn,
        resetPassword
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;