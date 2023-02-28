import React, { useEffect, useState, useContext } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';
import { AuthContext } from '../context/AuthProvider';

import { useLocation } from 'react-router-dom';

const MapView = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [donors, setDonors] = useState([]);
    const maxDistance = 12020;
    const { token } = useContext(AuthContext);
    // const { bloodType, distance } = useUserQuery();
    const { state } = useLocation();
    const { distance, bloodType } = state;

    console.log(bloodType, distance);
    console.log(state, ' from navigate');

    const tileLayerUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    console.log(userLocation, '................');

    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setUserLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
        });
    }, []);

    const getDonorList = async () => {
        console.log(userLocation, maxDistance);
        const data = await axios.post(
            `https://pear-gifted-lamb.cyclic.app/donorListMap`,
            {
                userLocation,
                maxDistance: distance,
                bloodType
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        );
        const donors = await data.data;
        setDonors(donors);
        console.log(donors);
    };

    return (
        <div className="">
            <h1>
                Map view {userLocation?.lat} {userLocation?.lng}
            </h1>
            <button onClick={getDonorList}>getDonor </button>
            {userLocation && (
                <div className="">
                    <MapContainer
                        center={userLocation}
                        zoom={13}
                        scrollWheelZoom={true}
                        style={{ height: '100vh', width: '100vw' }}
                    >
                        <TileLayer url={tileLayerUrl} />
                        <Marker position={userLocation}>
                            <Popup>
                                <p>Your current location </p>
                            </Popup>
                        </Marker>
                        <TileLayer url={tileLayerUrl} />
                        {donors.map((donor) => (
                            <Marker
                                position={[
                                    donor.location.coordinates[1],
                                    donor.location.coordinates[0]
                                ]}
                            >
                                <Popup>
                                    {/* donor card make korte hbe */}

                                    <p> {donor.email}</p>
                                    <p> {donor.phone}</p>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            )}
        </div>
    );
};

export default MapView;
