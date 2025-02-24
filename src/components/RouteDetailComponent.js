import React from 'react';

const RouteDetailComponent = ({ route }) => {
    if (!route) {
        return <p>No route selected.</p>;
    }

    const styles = {
        container: {
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        },
        title: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '10px',
        },
        info: {
            fontSize: '18px',
            marginTop: '10px',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Route Details</h2>
            <p style={styles.info}><strong>Origin:</strong> {route.origin}</p>
            <p style={styles.info}><strong>Destination:</strong> {route.destination}</p>
            <p style={styles.info}><strong>Capacity:</strong> {route.routeCapacity}</p>
        </div>
    );
};

export default RouteDetailComponent;
