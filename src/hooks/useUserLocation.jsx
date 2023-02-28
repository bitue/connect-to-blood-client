import { useState } from 'react';

export const useUserLocation = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [bloodType, setBloodType] = useState('');
    const [distance, setDistance] = useState(0);

    return {
        setUserLocation,
        setBloodType,
        setDistance
    };
};
