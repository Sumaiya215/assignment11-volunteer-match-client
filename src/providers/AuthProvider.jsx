import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword,
     GoogleAuthProvider,
     onAuthStateChanged,
     signInWithEmailAndPassword,
     signInWithPopup,
     signOut,
     updateProfile
    } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null)

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const updateUser = (name,photo) =>{
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
        })
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            // console.log('current user', currentUser);
            if(currentUser){
                const userInfo = { email: currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                    }
                })
            }
            else{
                localStorage.removeItem('access-token');
            }
            setLoading(false)
        })

        return () =>{
            return unsubscribe()
        }
    },[axiosPublic])


    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
        updateUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;