import { createContext, useEffect, useState } from "react";
import { auth } from "../services/firebase.config";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userLoader, setUserLoader] = useState(true);

    // page reload then auto login track
    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setUserLoader(false);
            } else {
                setUser(null);
                setUserLoader(false);
            }
        });

        return () => subscribe()
    }, []);

    // google provider init
    const googleProvider = new GoogleAuthProvider();

    // create user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // sign in with email and password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // const updateUser
    const updateUser = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, { displayName, photoURL });
    };

    const value = { createUser, user, userLoader, setUser, googleLogin, signIn, updateUser };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
