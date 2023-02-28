import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Shared/Navbar';
// import { Redirect } from 'react-router-dom';

const BloodSearch = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [kilometers, setKilometers] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [step, setStep] = useState(2);

    // browser automatic get user location here
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setUserLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
        });
    }, []);

    const handleNextStep = (event) => {
        event.preventDefault();
        setStep(step + 1);
    };

    const handlePrevStep = (event) => {
        event.preventDefault();
        setStep(step - 1);
    };

    const handleFinish = (event) => {
        console.log(kilometers, userLocation, bloodType);

        event.preventDefault();
    };

    return (
        <div className="flex-1 flex flex-col">
            <Navbar />
            <ul className="steps mx-auto w-full mt-20">
                {/* <li className={step === 1 ? 'step step-primary' : 'step'}>Put location</li> */}
                <li className={step === 2 ? 'step step-primary' : 'step'}>Choose kilometers</li>
                <li className={step === 3 ? 'step step-primary' : 'step'}>Select blood type</li>
            </ul>
            <div className="flex-1 flex items-center justify-center h-96">
                <div className="pt-8 sm:max-w-md md:max-w-lg lg:max-w-xl flex items-center justify-center">
                    {/* {step === 1 && (
                        <form action="" className="flex justify-center items-center flex-col">
                            <input
                                type="text"
                                placeholder="Type location"
                                className="input w-full sm:w-64 md:w-80 lg:w-96 text-lg"
                                onChange={(event) => setUserLocation(event.target.value)}
                                value={userLocation}
                            />
                            <button
                                className="btn text-[#fff] gap-2 bg-primary border-primary hover:bg-[#222] disabled:bg-[#f3f3f3] mt-[30px]"
                                disabled={!userLocation}
                                onClick={handleNextStep}
                            >
                                Next
                            </button>
                        </form>
                    )} */}
                    {step === 2 && (
                        <form action="" className="flex justify-center items-center flex-col">
                            <input
                                type="text"
                                placeholder="Enter kilometers"
                                className="input w-full sm:w-64 md:w-80 lg:w-96 text-lg"
                                onChange={(event) => setKilometers(event.target.value)}
                                value={kilometers}
                            />
                            <div className="flex justify-center items-center">
                                <button
                                    className="btn mt-[10px] text-[#fff] gap-2 bg-primary border-primary hover:bg-[#222] disabled:bg-[#f3f3f3] mr-[30px]"
                                    disabled={!kilometers}
                                    onClick={handleNextStep}
                                >
                                    Next
                                </button>
                                <button
                                    className="btn text-[#222] border-[#222] hover:border-primary hover:text-primary mt-[10px]"
                                    onClick={handlePrevStep}
                                >
                                    Previous
                                </button>
                            </div>
                        </form>
                    )}
                    {step === 3 && (
                        <form action="" className="flex justify-center items-center flex-col">
                            <select
                                className="select w-full sm:w-64 md:w-80 lg:w-96 text-lg"
                                onChange={(event) => setBloodType(event.target.value)}
                                value={bloodType}
                            >
                                <option value="" disabled>
                                    Select blood type
                                </option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                            <div className="flex justify-center items-center">
                                <button
                                    className="btn mt-[10px] text-[#fff] gap-2 bg-primary border-primary hover:bg-[#222] disabled:bg-[#f3f3f3] mr-[30px]"
                                    disabled={!bloodType}
                                    onClick={handleFinish}
                                >
                                    Finish
                                </button>
                                <button
                                    className="btn text-[#222] border-[#222] hover:border-primary hover:text-primary mt-[10px]"
                                    onClick={handlePrevStep}
                                >
                                    Previous
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BloodSearch;
