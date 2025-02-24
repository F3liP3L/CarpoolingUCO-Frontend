import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const RegisterComponent = () => {
    const { signUp, logIn, userProfile, verifyLogged, logout } = useAuth();
    const [formData, setFormData] = useState({ companyEmail: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        await signUp(formData);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        await logIn(formData);
    };

    return (
        <div>
            <h1>{verifyLogged() ? `Welcome, ${userProfile.companyEmail}` : 'Register or Log In'}</h1>

            {!verifyLogged() ? (
                <>
                    <form onSubmit={handleSignUp}>
                        <label>Email:</label>
                        <input type="email" name="companyEmail" value={formData.companyEmail} onChange={handleChange} />
                        <label>Password:</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} />
                        <button type="submit">Sign Up</button>
                    </form>

                    <form onSubmit={handleLogin}>
                        <label>Email:</label>
                        <input type="email" name="companyEmail" value={formData.companyEmail} onChange={handleChange} />
                        <label>Password:</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} />
                        <button type="submit">Log In</button>
                    </form>
                </>
            ) : (
                <button onClick={logout}>Logout</button>
            )}
        </div>
    );
};

export default RegisterComponent;
