import axios from 'axios';
import { useState } from 'react';
import { getCookie } from '../utils/cookieUtils';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api/v1/carpooling-uco';

export const useRoutesService = () => {
    const [activeRoutes, setActiveRoutes] = useState([
        {
            id: '',
            driverVehicle: {
                id: '',
                vehicle: {
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
                            companyEmail: '',
                            phone: '',
                        },
                    },
                },
                status: { id: '', status: '' },
            },
            routeCapacity: 0,
            origin: { latitude: '', longitude: '' },
            destination: { latitude: '', longitude: '' },
            color: '',
        },
    ]);

    const [routeDetail, setRouteDetail] = useState({
        id: '',
        driverVehicle: {
            id: '',
            vehicle: {
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
                        companyEmail: '',
                        phone: '',
                    },
                },
            },
            status: { id: '', status: '' },
        },
        routeCapacity: 0,
        pointsOfInterest: [],
        position: [],
        routeTime: '',
        routeStatus: { id: '', status: '' },
    });

    const getActiveRoutes = async () => {
        try {
            const token = getCookie('token');
            const response = await axios.get(`${API_URL}/route`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setActiveRoutes(response.data || []);
            return response.data;
        } catch (error) {
            console.error('Error fetching active routes:', error.response?.data || error.message);
            throw error;
        }
    };

    const getRouteDetail = async (routeId) => {
        try {
            const token = getCookie('token');
            const response = await axios.get(`${API_URL}/route/${routeId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setRouteDetail(response.data || {});
            return response.data;
        } catch (error) {
            console.error('Error fetching route detail:', error.response?.data || error.message);
            throw error;
        }
    };

    return { activeRoutes, routeDetail, getActiveRoutes, getRouteDetail };
};
