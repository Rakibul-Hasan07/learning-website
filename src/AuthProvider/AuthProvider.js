import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    //register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //user set state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])
    
    //login
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //LogOut
    const logOut = () => {
        return signOut(auth)
    }

    //update profile
    const userUpdateProfile = (name, url) => {
        return updateProfile(auth.currentUser, {displayName:name, photoURL:url})
    }
    const authInfo = { user, createUser, userUpdateProfile, userLogin, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;