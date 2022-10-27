import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
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
        const unsbuscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unsbuscribe();
        }
    }, [])

    //update profile
    const userUpdateProfile = (name, url) => {
        return updateProfile(auth.currentUser, {displayName:name, photoURL:url})
    }
    const authInfo = { user, createUser, userUpdateProfile }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;