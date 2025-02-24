import React, { createContext, useContext, useState } from 'react';

// Modelo básico de usuario
const initialUser = {
    companyEmail: '',
    token: '',
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userProfile, setUserProfile] = useState(initialUser);
    const [token, setToken] = useState(localStorage.getItem('token'));

    const signUp = async (signUpForm) => {
        try {
            const response = await fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(signUpForm),
            });

            if (!response.ok) throw new Error('Sign up failed');
            return await response.json();
        } catch (error) {
            console.error('Error during sign-up:', error);
        }
    };

    const logIn = async (logInForm) => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/carpooling/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(logInForm),
            });

            if (!response.ok) throw new Error('Login failed');

            const data = await response.json();
            saveUserToLocal(data);
            return data;
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const saveUserToLocal = (user) => {
        setUserProfile(user);
        setToken(user.token);
        localStorage.setItem('token', user.token);
        localStorage.setItem('user', user.companyEmail);
    };

    const verifyLogged = () => {
        return !!localStorage.getItem('token');
    };

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setUserProfile(initialUser);
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ userProfile, token, signUp, logIn, verifyLogged, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
