import React, { useState } from 'react';
import firebase from 'firebase';
import { navigate } from "@reach/router";
import useAuth from "../hooks/useAuth";

const Login = () => {
    const [user, loading] = useAuth();
    const [authError, setAuthError] = useState(null);
    const handleLogin = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            await firebase.auth().signInWithPopup(provider);
            navigate("/");
        } catch (error) {
            setAuthError(error.message);
        }
    };

    const handleSignOut = async () => {
        firebase
            .auth()
            .signOut()
            .then(() => navigate("/"));
    };

    if (user) { 
        return ( 
            <a href="/" onClick={ e => {
                e.preventDefault()
                handleSignOut()
            }}>Sign out</a>
        )
    }

    return (
        <a href="/" onClick={ e => {
            e.preventDefault()
            handleLogin()
        }}>Login as admin {authError && authError.message}</a>
        // <p>{authError}</p>
    )
}

export default Login;