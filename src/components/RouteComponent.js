import React, { useState, useEffect } from 'react';
import MapComponent from './MapComponent';

const RoutesComponent = () => {
    const [loading, setLoading] = useState(false);
    const [activeRoutes, setActiveRoutes] = useState([]);
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        fetchActiveRoutes();
    }, []);

    const fetchActiveRoutes = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/routes');
            const data = await response.json();
            if (Array.isArray(data)) {
                setActiveRoutes(data);
                setMarkers(
                    data.map(route => ({
                        lat: parseFloat(route.originLat),
                        lng: parseFloat(route.originLng),
                        title: `Ruta ${route.id}`,
                    }))
                );
            } else {
                console.error('Invalid data structure:', data);
            }
        } catch (error) {
            console.error('Error fetching active routes:', error);
        } finally {
            setLoading(false);
        }
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '600px',
            padding: '20px',
            margin: '20px auto',
            backgroundColor: 'forestgreen',
            borderRadius: '20px',
            color: 'white',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        },
        title: {
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '20px',
            marginBottom: '10px',
        },
        content: {
            width: '100%',
            maxHeight: '300px',
            overflowY: 'auto',
            padding: '10px',
        },
        routeItem: {
            backgroundColor: '#ffffff',
            color: 'black',
            padding: '10px',
            marginBottom: '5px',
            borderRadius: '5px',
            fontSize: '14px',
        },
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <div style={styles.container}>
                <h2 style={styles.title}>Active Routes</h2>
                <div style={styles.content}>
                    {loading ? (
                        <p>Loading routes...</p>
                    ) : (
                        activeRoutes.map((route, index) => (
                            <div key={index} style={styles.routeItem}>
                                <p><strong>ID:</strong> {route.id}</p>
                                <p><strong>Driver:</strong> {route.driverVehicle?.name || 'Unknown'}</p>
                                <p><strong>Capacity:</strong> {route.routeCapacity}</p>
                                <p><strong>Origin:</strong> {route.origin}</p>
                                <p><strong>Destination:</strong> {route.destination}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <MapComponent markers={markers} />
        </div>
    );
};

export default RoutesComponent;
