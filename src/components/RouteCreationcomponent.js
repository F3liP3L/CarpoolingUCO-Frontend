import React, { useState, useEffect } from 'react';

const RouteCreationComponent = () => {
    const [loadingMap, setLoadingMap] = useState(true);
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(0);
    const [markers, setMarkers] = useState([]);
    const [form, setForm] = useState({
        id: '',
        driverVehicle: { id: '', name: '', nameVehicle: '' },
        routeRequestOriginLatitude: '',
        routeRequestOriginLongitude: '',
        routeRequestEndLatitude: '',
        routeRequestEndLongitude: '',
        routeCapacity: 1,
    });
    const [selectedTime, setSelectedTime] = useState('');
    const [nextButtonDisabled, setNextButtonDisabled] = useState(true);

    useEffect(() => {
        initializeForm();
        setLoading(true);
        setLoadingMap(true);
        console.log('Form initialized:', form);
    }, []);

    const initializeForm = () => {
        setForm({
            id: '',
            driverVehicle: { id: '', name: '', nameVehicle: '' },
            routeRequestOriginLatitude: '',
            routeRequestOriginLongitude: '',
            routeRequestEndLatitude: '',
            routeRequestEndLongitude: '',
            routeCapacity: 1,
        });
    };

    const handleNextStep = () => {
        setStep(prevStep => prevStep + 1);
        if (step === 2 && form.routeRequestOriginLatitude && form.routeRequestOriginLongitude && form.routeRequestEndLatitude && form.routeRequestEndLongitude) {
            drawRoute(
                { lat: form.routeRequestOriginLatitude, lng: form.routeRequestOriginLongitude, title: 'Start Point' },
                { lat: form.routeRequestEndLatitude, lng: form.routeRequestEndLongitude, title: 'End Point' }
            );
        }
    };

    const drawRoute = (start, end) => {
        console.log('Drawing route:', start, end);
    };

    const handleMapClick = (event) => {
        const latitude = event.lat;
        const longitude = event.lng;

        setMarkers([...markers, { lat: latitude, lng: longitude, title: 'Point of Interest' }]);
    };

    const handleTimeSelection = (time) => {
        const formattedTime = new Date(time).toISOString();
        setSelectedTime(formattedTime);
        setForm({ ...form, routeTime: formattedTime });
    };

    const checkCoordinates = () => {
        setNextButtonDisabled(!(form.routeRequestOriginLatitude && form.routeRequestOriginLongitude && form.routeRequestEndLatitude && form.routeRequestEndLongitude));
    };

    return (
        <div>
            <h1>Route Creation</h1>
            <p>Step: {step}</p>
            <button onClick={() => setStep(0)}>Step 1</button>
            <button onClick={() => setStep(1)} disabled={step < 0}>Step 2</button>
            <button onClick={handleNextStep} disabled={nextButtonDisabled}>Next Step</button>
        </div>
    );
};

export default RouteCreationComponent;
