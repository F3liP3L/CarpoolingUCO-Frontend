import { Navigate, Outlet } from 'react-router-dom';
import { getCookie } from '../utils/cookieUtils';

const isAuthenticated = () => {
    const token = getCookie('token');
    return token !== null && token !== undefined && token !== '';
};

const ProtectedRoute = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
