import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const PassengerSignUp = ({ onSignUp }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log('Form data:', data);
        onSignUp(data);
        navigate('/login');
    };

    const styles = {
        contenedor: {
            marginTop: '5%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
        },
        caja: {
            width: '90%',
            maxWidth: '800px',
            backgroundColor: 'grey',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        },
        formContainer: {
            width: '100%',
            maxWidth: '400px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
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
            width: '100%',
            borderRadius: '5px',
            border: '1px solid #ccc',
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
        imgLogo: {
            width: '100px',
            marginBottom: '10px',
        },
    };

    return (
        <div style={styles.contenedor}>
            <div style={styles.caja}>
                <div style={styles.formContainer}>
                    <img src="/assets/img/Logo.jpg" alt="Logo" style={styles.imgLogo} />
                    <h1>Registrarse</h1>

                    <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
                        <label>DNI</label>
                        <input type="text" {...register('dni', { required: 'DNI es obligatorio' })} style={styles.input} />
                        {errors.dni && <p style={styles.error}>{errors.dni.message}</p>}

                        <label>Nombre</label>
                        <input type="text" {...register('firstName', { required: 'Nombre es obligatorio' })} style={styles.input} />
                        {errors.firstName && <p style={styles.error}>{errors.firstName.message}</p>}

                        <label>Segundo nombre</label>
                        <input type="text" {...register('secondName')} style={styles.input} />

                        <label>Primer Apellido</label>
                        <input type="text" {...register('firstSurname', { required: 'Primer apellido es obligatorio' })} style={styles.input} />
                        {errors.firstSurname && <p style={styles.error}>{errors.firstSurname.message}</p>}

                        <label>Segundo Apellido</label>
                        <input type="text" {...register('secondSurname')} style={styles.input} />

                        <label>Email</label>
                        <input type="email" {...register('companyEmail', { required: 'Correo es obligatorio' })} style={styles.input} />
                        {errors.companyEmail && <p style={styles.error}>{errors.companyEmail.message}</p>}

                        <label>Contraseña</label>
                        <input type="password" {...register('password', { required: 'Contraseña es obligatoria' })} style={styles.input} />
                        {errors.password && <p style={styles.error}>{errors.password.message}</p>}

                        <label>Celular</label>
                        <input type="tel" {...register('phone', { required: 'Número de celular es obligatorio' })} placeholder="320-555-1234" style={styles.input} />
                        {errors.phone && <p style={styles.error}>{errors.phone.message}</p>}

                        <button type="submit" style={styles.button}>Registrarse</button>
                    </form>

                    <button onClick={() => navigate('/intro')} style={styles.button}>Volver</button>
                </div>
            </div>
        </div>
    );
};

export default PassengerSignUp;
