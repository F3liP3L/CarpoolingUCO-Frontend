import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDriverService } from '../api/driverService';

const DriverSignUpComponent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [categories, setCategories] = useState([]);
    const [hidePassword, setHidePassword] = useState(true);
    const navigate = useNavigate();
    const { getAuthorizedCategories, createDriver } = useDriverService();

    useEffect(() => {
        getAuthorizedCategories()
            .then((categories) => setCategories(categories))
            .catch((error) => console.error('Error fetching categories:', error));
    }, []);

    const onSubmit = async (data) => {
        try {
            await createDriver(data);
            alert('¡Registro exitoso!');
            navigate('/login');
        } catch (error) {
            console.error('Error al registrar:', error);
        }
    };

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
            }
            ,
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
        select: {
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
                <h1>Registro de Conductor</h1>

                <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
                    <label>DNI</label>
                    <input {...register('dni', { required: 'DNI es obligatorio' })} type="text" style={styles.input} />
                    {errors.dni && <p style={styles.error}>{errors.dni.message}</p>}

                    <label>Nombre</label>
                    <input {...register('firstName', { required: 'Nombre es obligatorio' })} type="text" style={styles.input} />
                    {errors.firstName && <p style={styles.error}>{errors.firstName.message}</p>}

                    <label>Segundo Nombre</label>
                    <input {...register('secondName')} type="text" style={styles.input} />

                    <label>Primer Apellido</label>
                    <input {...register('firstSurname', { required: 'Primer apellido es obligatorio' })} type="text" style={styles.input} />
                    {errors.firstSurname && <p style={styles.error}>{errors.firstSurname.message}</p>}

                    <label>Segundo Apellido</label>
                    <input {...register('secondSurname')} type="text" style={styles.input} />

                    <label>Número de Licencia</label>
                    <input {...register('licenseNumber', { required: 'Número de licencia es obligatorio' })} type="text" style={styles.input} />
                    {errors.licenseNumber && <p style={styles.error}>{errors.licenseNumber.message}</p>}

                    <label>Categoría</label>
                    <select {...register('category', { required: 'Selecciona una categoría' })} style={styles.select}>
                        <option value="">Seleccionar...</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.category}</option>
                        ))}
                    </select>
                    {errors.category && <p style={styles.error}>{errors.category.message}</p>}

                    <label>Email</label>
                    <input {...register('companyEmail', { required: 'Correo es obligatorio', pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/ })} type="email" style={styles.input} />
                    {errors.companyEmail && <p style={styles.error}>{errors.companyEmail.message}</p>}

                    <label>Contraseña</label>
                    <input
                        {...register('password', { required: 'Contraseña es obligatoria' })}
                        type={hidePassword ? 'password' : 'text'}
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

                    <label>Celular</label>
                    <input {...register('phone', { required: 'Número de celular es obligatorio' })} type="tel" placeholder="320-555-1234" style={styles.input} />
                    {errors.phone && <p style={styles.error}>{errors.phone.message}</p>}

                    <button type="submit" style={styles.button}>Registrarse</button>
                </form>

                <button onClick={() => navigate('/')} style={{ ...styles.button, backgroundColor: '#ccc', color: 'black' }}>Volver</button>
            </div>
        </div>
    );
};

export default DriverSignUpComponent;
