import React, { useEffect, useRef } from 'react';

const MapComponent = ({ markers = [], onMapClick }) => {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    const polyline = useRef(null);

    useEffect(() => {
        if (!window.google) {
            console.error("Google Maps API is not loaded.");
            return;
        }

        if (!mapInstance.current) {
            mapInstance.current = new window.google.maps.Map(mapRef.current, {
                center: { lat: 6.14983552114, lng: -75.3657935857 },
                zoom: 13,
            });

            mapInstance.current.addListener('click', (event) => {
                if (onMapClick) {
                    onMapClick({
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng(),
                    });
                }
            });
        }

        if (markers.length) {
            addMarkers(markers);
            drawPath(markers);
        }
    }, [markers, onMapClick]);

    const addMarkers = (markers) => {
        markers.forEach((marker, index) => {
            new window.google.maps.Marker({
                position: { lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) },
                map: mapInstance.current,
                title: marker.title || `Punto ${index + 1}`,
            });
        });
    };

    const drawPath = (markers) => {
        if (polyline.current) {
            polyline.current.setMap(null);
        }

        const pathCoordinates = markers.map(marker => ({
            lat: parseFloat(marker.lat),
            lng: parseFloat(marker.lng),
        }));

        if (pathCoordinates.length >= 2) {
            polyline.current = new window.google.maps.Polyline({
                path: pathCoordinates,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2,
            });

            polyline.current.setMap(mapInstance.current);
        }
    };

    return <div ref={mapRef} style={{ width: '100%', height: '500px' }} />;
};

export default MapComponent;
