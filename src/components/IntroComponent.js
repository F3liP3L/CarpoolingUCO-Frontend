import React from 'react';
import { useNavigate } from 'react-router-dom';

const Intro = () => {
    const navigate = useNavigate();

    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
        },
        header: {
            width: '100%',
            backgroundColor: '#f8f9fa',
            padding: '10px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        },
        fullWidthHeader: {
            width: '100%',
        },
        navbar: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            padding: '0 20px',
        },
        logo: {
            width: '100px',
        },
        buttonContainer: {
            display: 'flex',
            gap: '10px',
            marginRight: '20px', // Agregado según tu petición
        },
        button: {
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
        },
        portada: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100vh',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#327648',
            padding: '20px',
        },
        title: {
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '10px',
        },
        description: {
            fontSize: '20px',
            maxWidth: '600px',
        },
        imageContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
        },
        imgPortada: {
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '10px',
        },
    };

    return (
        <div style={styles.container}>
            <header style={{ ...styles.header, ...styles.fullWidthHeader }}>
                <nav style={styles.navbar}>
                    <div>
                        <img src="/assets/img/Logo.jpg" alt="Logo Carpooling" style={styles.logo} />
                    </div>
                    <div style={styles.buttonContainer}>
                        <button style={styles.button} onClick={() => navigate('/login')}>
                            Iniciar Sesión
                        </button>
                        <button style={styles.button} onClick={() => navigate('/signup')}>
                            Registrarse
                        </button>
                    </div>
                </nav>
            </header>

            <section style={styles.portada}>
                <h1 style={styles.title}>Carpooling UCO</h1>
                <p style={styles.description}>
                    Es una aplicación web que permite comunicar conductores con pasajeros
                    y brindar mayor accesibilidad a las rutas de interés para el usuario.
                </p>
                <div style={styles.imageContainer}>
                    <img src="/assets/img/pagina1.gif" alt="Carpooling" style={styles.imgPortada} />
                </div>
            </section>
        </div>
    );
};

export default Intro;
