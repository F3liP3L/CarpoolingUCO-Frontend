import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VehicleRegister = () => {
    const [formData, setFormData] = useState({ name: '', plate: '', capacity: '' });
    const [driver, setDriver] = useState(null);

    useEffect(() => {
        const fetchDriver = async () => {
            try {
                const response = await axios.get('/api/driver/current'); // Ajusta el endpoint según tu lógica
                setDriver(response.data);
            } catch (error) {
                console.error('Failed to fetch driver information:', error);
            }
        };
        fetchDriver();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.plate || !formData.capacity) {
            alert('Por favor, completa todos los campos');
            return;
        }

        const vehicleData = {
            ...formData,
            owner: driver ? { id: driver.id, licenseNumber: driver.licenseNumber } : null
        };

        try {
            await axios.post('/api/vehicle/register', vehicleData);
            alert('Vehículo registrado con éxito!');
        } catch (error) {
            console.error('Error al registrar vehículo:', error);
            alert('Error al registrar vehículo');
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
        formWrapper: {
            width: '100%',
            maxWidth: '500px',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
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
            <div style={styles.formWrapper}>
                <img src="/assets/img/logo.jpg" alt="Logo" style={{ width: '80px', marginBottom: '10px' }} />
                <h1>Registro de Vehículo</h1>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <label>Modelo</label>
                    <input name="name" type="text" value={formData.name} onChange={handleChange} style={styles.input} required />

                    <label>Placa</label>
                    <input name="plate" type="text" value={formData.plate} onChange={handleChange} style={styles.input} required />

                    <label>Capacidad</label>
                    <input name="capacity" type="number" value={formData.capacity} onChange={handleChange} style={styles.input} required />

                    <button type="submit" style={styles.button}>Registrar</button>
                </form>

                <button onClick={() => window.history.back()} style={{ ...styles.button, backgroundColor: '#ccc', color: 'black' }}>Volver</button>
            </div>
        </div>
    );
};

export default VehicleRegister;
