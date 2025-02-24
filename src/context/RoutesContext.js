import React, { createContext, useContext, useState } from 'react';

const RoutesContext = createContext();

export const RoutesProvider = ({ children }) => {
    const [activeRoutes, setActiveRoutes] = useState([]);
    const [routeDetail, setRouteDetail] = useState(null);

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

    const fetchActiveRoutes = async () => {
        try {
            const token = getCookie('token');
            const response = await fetch('/api/v1/carpooling-uco/route', {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (!response.ok) throw new Error('Failed to fetch active routes');
            const data = await response.json();
            setActiveRoutes(data);
        } catch (error) {
            console.error('Error fetching active routes:', error);
        }
    };

    const fetchRouteDetail = async (routeId) => {
        try {
            const token = getCookie('token');
            const response = await fetch(`/api/v1/carpooling-uco/route/${routeId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (!response.ok) throw new Error('Failed to fetch route details');
            const data = await response.json();
            setRouteDetail(data);
        } catch (error) {
            console.error('Error fetching route details:', error);
        }
    };

    return (
        <RoutesContext.Provider value={{ activeRoutes, routeDetail, fetchActiveRoutes, fetchRouteDetail }}>
            {children}
        </RoutesContext.Provider>
    );
};

export const useRoutes = () => {
    const context = useContext(RoutesContext);
    if (!context) {
        throw new Error('useRoutes must be used within a RoutesProvider');
    }
    return context;
};
