import React, { createContext, useContext, useState } from 'react';

// Modelo del driver (ajústalo según lo que tienes en tu proyecto)
const initialDriver = {
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
};

const DriverContext = createContext();

export const DriverProvider = ({ children }) => {
    const [driver, setDriver] = useState(null);

    const setDriverData = (driverData) => {
        setDriver(driverData);
    };

    const clearDriver = () => {
        setDriver(null);
    };

    return (
        <DriverContext.Provider value={{ driver, setDriverData, clearDriver }}>
            {children}
        </DriverContext.Provider>
    );
};

export const useDriver = () => {
    const context = useContext(DriverContext);
    if (!context) {
        throw new Error('useDriver must be used within a DriverProvider');
    }
    return context;
};
