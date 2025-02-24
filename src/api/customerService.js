import axios from 'axios';
import { useState } from 'react';

const DOMAIN_URL = process.env.REACT_APP_DOMAIN_URL || 'http://localhost:3000';

export const useCustomerService = () => {
    const [customer, setCustomer] = useState({
        id: 'string',
        dni: 'string',
        firstName: 'string',
        secondName: 'string',
        firstSurname: 'string',
        secondSurname: 'string',
        password: 'string',
        phone: 'string',
        companyEmail: 'string',
        rol: 0,
    });

    const createCustomer = async (customerForm) => {
        try {
            const response = await axios.post(`${DOMAIN_URL}/api/v1/carpooling-uco/customer`, customerForm);
            return response.data;
        } catch (error) {
            console.error('Error creating customer:', error);
            throw error;
        }
    };

    const getCustomer = async () => {
        try {
            const response = await axios.get(`${DOMAIN_URL}/api/v1/carpooling-uco/customer`);
            setCustomer(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching customer:', error);
            throw error;
        }
    };

    return { customer, createCustomer, getCustomer };
};
