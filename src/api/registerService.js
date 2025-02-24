import axios from 'axios';
import { useState } from 'react';

// URL base de la API
const API_URL = process.env.REACT_APP_DOMAIN_URL || 'http://localhost:8080/api/v1/carpooling-uco';

export const useCustomerService = () => {
    const [customer, setCustomer] = useState(null); // Estado inicial como null

    const createCustomer = async (customerForm) => {
        try {
            const response = await axios.post(`${API_URL}/customer`, customerForm);
            return response.data;
        } catch (error) {
            console.error(' Error creating customer:', error.response?.data || error.message);
            throw error;
        }
    };

    const getCustomer = async () => {
        try {
            const response = await axios.get(`${API_URL}/customer`);
            if (response.data) {
                setCustomer(response.data);
            }
            return response.data;
        } catch (error) {
            console.error('Error fetching customer:', error.response?.data || error.message);
            throw error;
        }
    };

    return { customer, createCustomer, getCustomer };
};
