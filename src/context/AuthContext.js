import React, { createContext, useContext, useState } from 'react';

// Modelo básico de cliente (ajústalo según tus necesidades)
const initialCustomer = {
    companyEmail: '',
    password: '',
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [customerProfile, setCustomerProfile] = useState(initialCustomer);
    const [token, setToken] = useState(localStorage.getItem('token'));

    const signUp = async (signUpForm) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_DOMAIN_URL}/register`, {
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
            const response = await fetch(`${process.env.REACT_APP_DOMAIN_URL}/api/v1/carpooling-uco/auth/signin`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(logInForm),
            });

            if (!response.ok) throw new Error('Login failed');

            const data = await response.json();
            saveUserToLocal(data.customer, data.token);
            return data;
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const saveUserToLocal = (customer, token) => {
        setCustomerProfile(customer);
        setToken(token);
        localStorage.setItem('companyEmail', customer.companyEmail);
        localStorage.setItem('password', customer.password);
        localStorage.setItem('token', token);
    };

    const verifyLogged = () => {
        return !!localStorage.getItem('token');
    };

    const logout = () => {
        localStorage.removeItem('companyEmail');
        localStorage.removeItem('password');
        localStorage.removeItem('token');
        setCustomerProfile(initialCustomer);
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ customerProfile, token, signUp, logIn, verifyLogged, logout }}>
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
