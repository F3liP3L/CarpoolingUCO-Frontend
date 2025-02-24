import axios from 'axios';
import { getCookie } from '../utils/cookieUtils';
import { useAuth } from '../context/AuthContext';

const setupAxiosInterceptors = () => {
    axios.interceptors.request.use(
        (config) => {
            const token = getCookie('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response && error.response.status === 401) {
                const { logout } = useAuth();
                logout();
            }
            return Promise.reject(error);
        }
    );
};

export default setupAxiosInterceptors;
