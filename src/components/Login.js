import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { logIn } = useAuth();
    const [showMessage, setShowMessage] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await logIn(data);
            if (response?.token) {
                navigate('/routes');
            } else {
                setShowMessage(true);
                setMensaje('Credenciales incorrectas. Intenta de nuevo.');
            }
        } catch (error) {
            setShowMessage(true);
            setMensaje('Error al iniciar sesión. Verifica tus credenciales.');
        }
    };

    // 🎨 **Estilos aplicados**
    const styles = {
        container: {
            marginTop: '5%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
        },
        formContainer: {
            width: '100%',
            maxWidth: '400px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            width: '100%',
            minWidth: '280px',
        },
        input: {
            padding: '10px',
            fontSize: '1rem',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '100%',
        },
        button: {
            backgroundColor: '#2eb358',
            color: 'white',
            padding: '10px',
            fontSize: '1rem',
            cursor: 'pointer',
            border: 'none',
            borderRadius: '5px',
            marginTop: '10px',
            width: '100%',
        },
        error: {
            color: 'red',
            fontSize: '0.9rem',
            margin: '0',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h1>Iniciar Sesión</h1>

                {showMessage && <div className="alert alert-danger">{mensaje}</div>}

                <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
                    <label>Email</label>
                    <input
                        {...register('companyEmail', { required: 'El email es obligatorio', pattern: /^\S+@\S+\.\S+$/ })}
                        type="text"
                        placeholder="Ingrese su email"
                        style={styles.input}
                    />
                    {errors.companyEmail && <p style={styles.error}>{errors.companyEmail.message}</p>}

                    <label>Contraseña</label>
                    <input
                        {...register('password', { required: 'La contraseña es obligatoria' })}
                        type={hidePassword ? 'password' : 'text'}
                        placeholder="Ingrese su contraseña"
                        style={styles.input}
                    />
                    <button
                        type="button"
                        onClick={() => setHidePassword(!hidePassword)}
                        style={{ ...styles.button, backgroundColor: '#555' }}
                    >
                        {hidePassword ? 'Mostrar' : 'Ocultar'} Contraseña
                    </button>
                    {errors.password && <p style={styles.error}>{errors.password.message}</p>}

                    <button type="submit" style={styles.button}>Ingresar</button>
                </form>

                <button onClick={() => navigate('/intro')} style={{ ...styles.button, backgroundColor: '#ccc', color: 'black' }}>
                    Volver
                </button>
            </div>
        </div>
    );
};

export default Login;
