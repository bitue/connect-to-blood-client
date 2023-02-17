import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar';

const RegisterDonar = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const BMI = data.weight / ((data.height / 100) * (data.height / 100));
        // ------------------ Need to add userId to put here at user property ----------------
        console.log(BMI);
        data.BMI = BMI;
        console.log(data);
    };
    const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

    return (
        <>
            <Navbar></Navbar>
            <div className="min-h-screen flex justify-center items-center">
                <div className="flex items-center flex-col justify-center py-[25px] px-[20px]  lg:md:w-[500px] bg-[#fff] shadow-xl rounded-[20px] ">
                    <h2 className="text-3xl text-center mb-[20px] font-medium">
                        Register as a <span className="text-primary">Donar</span>
                    </h2>
                    <div>
                        <form
                            action=""
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col justify-center items-center"
                        >
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-secondary">Your password</span>
                                    <span className="label-text text-secondary">
                                        <Link to="/fPassword" className="text-blue-500">
                                            Forgot password?
                                        </Link>
                                    </span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Your password"
                                    class="input border-secondary mb-[20px] w-[400px] max-w-xs"
                                    {...register('password', {
                                        required: true
                                    })}
                                />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-secondary">
                                        Your Date of Birth
                                    </span>
                                </label>
                                <input
                                    type="date"
                                    placeholder="Last blood donation"
                                    class="input border-secondary mb-[20px] w-[400px] max-w-xs"
                                    {...register('dateOfBirth', {
                                        required: true
                                    })}
                                />
                            </div>

                            <select
                                className="select mb-[20px] border-secondary w-full max-w-xs"
                                {...register('hiv', {
                                    required: true
                                })}
                            >
                                <option className="text-[#555]" selected disabled>
                                    Do you have HIV?
                                </option>
                                <option className="text-secondary">Yes</option>
                                <option className="text-secondary">No</option>
                            </select>

                            <select
                                className="select mb-[20px] border-secondary w-full max-w-xs"
                                {...register('smoke', {
                                    required: true
                                })}
                            >
                                <option className="text-[#555]" selected disabled>
                                    Have you ever smoked?
                                </option>
                                <option className="text-secondary">Yes</option>
                                <option className="text-secondary">No</option>
                            </select>

                            <select
                                className="select mb-[20px] border-secondary w-full max-w-xs"
                                {...register('hypertension', {
                                    required: true
                                })}
                            >
                                <option className="text-[#555]" selected disabled>
                                    Do you have hypertension ?
                                </option>
                                <option className="text-secondary">Yes</option>
                                <option className="text-secondary">No</option>
                            </select>

                            <select
                                className="select mb-[20px] border-secondary w-full max-w-xs"
                                {...register('bloodType', {
                                    required: true
                                })}
                            >
                                <option className="text-[#555]" disabled selected>
                                    Your Blood Group
                                </option>
                                {bloodTypes.map((blood) => {
                                    return <option className="text-secondary">{blood}</option>;
                                })}
                            </select>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-secondary">
                                        Last Blood Donation
                                    </span>
                                </label>
                                <input
                                    type="date"
                                    placeholder="Last blood donation"
                                    class="input border-secondary mb-[20px] w-[400px] max-w-xs"
                                    {...register('lastBloodDonation', {
                                        required: true
                                    })}
                                />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-secondary">Your Height </span>
                                </label>
                                <input
                                    type="float"
                                    placeholder="Your Height in cm -ex: 1 in = 2.54 cm "
                                    class="input border-secondary mb-[20px] w-[400px] max-w-xs"
                                    {...register('height', {
                                        required: true
                                    })}
                                />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-secondary">Your Weight </span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Your Weight in KG eg:70 kg  "
                                    class="input border-secondary mb-[20px] w-[400px] max-w-xs"
                                    {...register('weight', {
                                        required: true
                                    })}
                                />
                            </div>

                            <button className="btn w-[325px] text-black hover:text-white hover:bg-primary hover:border-none">
                                Request for a donar!
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterDonar;
