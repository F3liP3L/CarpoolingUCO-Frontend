import axios from 'axios';
import { useState } from 'react';
import { getCookie } from '../utils/cookieUtils';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api/v1/carpooling-uco';

export const useVehicleService = () => {
    const [vehicle, setVehicle] = useState({
        id: '',
        plate: '',
        name: '',
        capacity: 0,
        owner: {
            id: '',
            licenseNumber: '',
            customer: {
                id: '',
                dni: '',
                firstName: '',
                secondName: '',
                firstSurname: '',
                secondSurname: '',
                password: '',
                phone: '',
                companyEmail: '',
            },
            authorizedCategory: {
                id: '',
                category: '',
            },
        },
    });

    const createVehicle = async (vehicleForm) => {
        try {
            const response = await axios.post(`${API_URL}/vehicle`, vehicleForm);
            return response.data;
        } catch (error) {
            console.error('Error creating vehicle:', error.response?.data || error.message);
            throw error;
        }
    };

    const deleteCar = async (vehicleId) => {
        try {
            const token = getCookie('token');
            await axios.delete(`${API_URL}/vehicle/${vehicleId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return { message: 'Vehicle deleted successfully' };
        } catch (error) {
            console.error('Error deleting vehicle:', error.response?.data || error.message);
            throw error;
        }
    };

    const getCarsPerDriver = async (vehicleId) => {
        try {
            const token = getCookie('token');
            const response = await axios.get(`${API_URL}/driverpervehicle/${vehicleId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: '*/*',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching driver vehicles:', error.response?.data || error.message);
            throw error;
        }
    };

    return { vehicle, createVehicle, deleteCar, getCarsPerDriver };
};
