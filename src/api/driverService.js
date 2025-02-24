import axios from 'axios';
import { useState } from 'react';

const DOMAIN_URL = process.env.REACT_APP_DOMAIN_URL || 'http://localhost:3000';

export const useDriverService = () => {
    const [driver, setDriver] = useState({
        id: 'string',
        licenseNumber: 'string',
        authorizedCategory: {
            id: 'string',
            category: 'string',
        },
        customer: {
            id: 'string',
            dni: 'string',
            firstName: 'string',
            secondName: 'string',
            firstSurname: 'string',
            secondSurname: 'string',
            password: 'string',
            companyEmail: 'string',
            phone: 'string',
            rol: 0,
        },
    });

    const [authorizedCategories, setAuthorizedCategories] = useState([]);

    const createDriver = async (driverForm) => {
        try {
            const response = await axios.post(`${DOMAIN_URL}/api/v1/carpooling-uco/driver`, driverForm);
            return response.data;
        } catch (error) {
            console.error('Error creating driver:', error);
            throw error;
        }
    };

    const getDrivers = async () => {
        try {
            const response = await axios.get(`${DOMAIN_URL}/api/v1/carpooling-uco/driver`);
            setDriver(response.data?.data[0] || {});
            return response.data?.data || [];
        } catch (error) {
            console.error('Error fetching drivers:', error);
            throw error;
        }
    };

    const getAuthorizedCategories = async () => {
        try {
            const response = await axios.get(`${DOMAIN_URL}/api/v1/carpooling-uco/authorizedcategory`);
            setAuthorizedCategories(response.data?.data[0] || []);
            return response.data?.data[0] || [];
        } catch (error) {
            console.error('Error fetching authorized categories:', error);
            throw error;
        }
    };

    const getDriverByLicense = async (license) => {
        try {
            const response = await axios.get(`${DOMAIN_URL}/api/v1/carpooling-uco/driver`, {
                params: { license }
            });
            setDriver(response.data?.data[0] || {});
            return response.data?.data[0] || null;
        } catch (error) {
            console.error('Error fetching driver by license:', error);
            throw error;
        }
    };

    return {
        driver,
        authorizedCategories,
        createDriver,
        getDrivers,
        getAuthorizedCategories,
        getDriverByLicense,
    };
};
