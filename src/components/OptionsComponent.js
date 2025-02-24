import React from 'react';
import { useNavigate } from 'react-router-dom';

const OptionsComponent = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    // Estilos en línea
    const styles = {
        fondo: {
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
        },
        navbar: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1em',
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #ccc',
        },
        logo: {
            width: '100px',
        },
        btn: {
            padding: '10px 20px',
            fontSize: '1rem',
            cursor: 'pointer',
            backgroundColor: '#2eb358',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
        },
        opcion: {
            textAlign: 'center',
            fontSize: '2em',
            marginBottom: '20px',
        },
        container1: {
            display: 'flex',
            justifyContent: 'center',
            gap: '2em',
        },
        card: {
            width: '200px',
            height: '250px',
            backgroundColor: '#f0f0f0',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
        },
        cardHover: {
            backgroundColor: '#1eabab',
            color: 'white',
        },
        icon: {
            fontSize: '4em',
            marginBottom: '10px',
        }
    };

    return (
        <div style={styles.fondo}>
            <header>
                <nav style={styles.navbar}>
                    <div>
                        <img src="/assets/img/Logo.jpg" alt="Logo Carpooling" style={styles.logo} />
                    </div>
                    <div>
                        <button onClick={() => handleNavigation('/intro')} style={styles.btn}>
                            Regresar
                        </button>
                    </div>
                </nav>
            </header>

            <section>
                <h1 style={styles.opcion}>¿Qué quieres ser?</h1>
                <div style={styles.container1}>
                    <div
                        style={styles.card}
                        onMouseEnter={(e) => e.currentTarget.style = { ...styles.card, ...styles.cardHover }}
                        onMouseLeave={(e) => e.currentTarget.style = styles.card}
                        onClick={() => handleNavigation('/signup/driver')}
                    >
                        <i className="fa-solid fa-car" style={styles.icon}></i>
                        <p>Conductor</p>
                    </div>

                    <div
                        style={styles.card}
                        onMouseEnter={(e) => e.currentTarget.style = { ...styles.card, ...styles.cardHover }}
                        onMouseLeave={(e) => e.currentTarget.style = styles.card}
                        onClick={() => handleNavigation('/signup/passenger')}
                    >
                        <i className="fa-solid fa-person-walking-luggage" style={styles.icon}></i>
                        <p>Pasajero</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OptionsComponent;
