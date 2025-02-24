import React, { createContext, useContext, useState } from 'react';

const VehicleContext = createContext();

export const VehicleProvider = ({ children }) => {
    const [vehicle, setVehicle] = useState(null);
    const [driverVehicles, setDriverVehicles] = useState([]);

    const getCookie = (name) => {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [key, value] = cookie.split('=');
            if (key.trim() === name) {
                return value;
            }
        }
        return null;
    };

    const createVehicle = async (vehicleForm) => {
        try {
            const response = await fetch('api/v1/carpooling-uco/vehicle', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(vehicleForm),
            });
            if (!response.ok) throw new Error('Failed to create vehicle');
            const data = await response.json();
            setVehicle(data);
        } catch (error) {
            console.error('Error creating vehicle:', error);
        }
    };

    const deleteCar = async (vehicleId) => {
        try {
            const token = getCookie('token');
            const response = await fetch(`api/v1/carpooling-uco/vehicle/${vehicleId}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` },
            });
            if (!response.ok) throw new Error('Failed to delete vehicle');
            setVehicle(null); // Clear vehicle state after deletion
        } catch (error) {
            console.error('Error deleting vehicle:', error);
        }
    };

    const getCarsPerDriver = async (vehicleId) => {
        try {
            const token = getCookie('token');
            const response = await fetch(`api/v1/carpooling-uco/driverpervehicle/${vehicleId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': '*/*'
                },
            });
            if (!response.ok) throw new Error('Failed to fetch cars for driver');
            const data = await response.json();
            setDriverVehicles(data);
        } catch (error) {
            console.error('Error fetching cars for driver:', error);
        }
    };

    return (
        <VehicleContext.Provider value={{ vehicle, driverVehicles, createVehicle, deleteCar, getCarsPerDriver }}>
            {children}
        </VehicleContext.Provider>
    );
};

export const useVehicle = () => {
    const context = useContext(VehicleContext);
    if (!context) {
        throw new Error('useVehicle must be used within a VehicleProvider');
    }
    return context;
};
