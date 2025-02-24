import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from '../components/Login';
import DriverSignUpComponent from '../components/DriverSignUpComponent';
import VehicleRegisterComponent from '../components/VehicleRegisterComponent';
import PassengerSignUp from '../components/PassengerSignUp';
import RouteComponent from '../components/RouteComponent';
import RouteCreationComponent from '../components/RouteCreationcomponent';
import IntroComponent from '../components/IntroComponent';
import OptionsComponent from '../components/OptionsComponent';
import RouteDetailComponent from '../components/RouteDetailComponent';
import { AuthProvider } from '../context/AuthContext';
import { getCookie } from '../token/cookie';

// 🔐 Función para verificar autenticación (rutas protegidas)
const PrivateRoute = () => {
    const token = getCookie('token') || localStorage.getItem('token');
    return token ? <Outlet /> : <Navigate to="/login" replace />;
};

const AppRoutes = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/*  Rutas Públicas */}
                    <Route path="/" element={<Navigate to="/intro" replace />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup/driver" element={<DriverSignUpComponent />} />
                    <Route path="/signup/driver/vehicle" element={<VehicleRegisterComponent />} />
                    <Route path="/signup/passenger" element={<PassengerSignUp />} />
                    <Route path="/intro" element={<IntroComponent />} />
                    <Route path="/signup" element={<OptionsComponent />} />

                    {/*  Rutas Privadas (requieren autenticación) */}
                    <Route element={<PrivateRoute />}>
                        <Route path="/routes" element={<RouteComponent />} />
                        <Route path="/routecreation" element={<RouteCreationComponent />} />
                        <Route path="/routedetail/:id" element={<RouteDetailComponent />} />
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default AppRoutes;
