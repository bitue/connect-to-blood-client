import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <>
            <Navbar></Navbar>
            <div className="min-h-screen flex justify-center items-center">
                <div className="flex items-center flex-col justify-center py-[25px] px-[20px]  lg:md:w-[500px] bg-[#fff] shadow-xl rounded-[20px]">
                    <h2 className="text-3xl text-center mb-[20px] font-medium">Regis<span className="text-primary">ter</span></h2>
                    <div>
                        <form action="" onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-secondary">Enter your email</span>
                                </label>
                                <input type="email" placeholder="Write your email" class="input border-secondary mb-[20px] w-[400px] max-w-xs" {...register("email", {
                                    required: true
                                })} />

                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-secondary">Password</span>
                                </label>
                                <input type="password" placeholder="Your password" class="input border-secondary mb-[20px] w-[400px] max-w-xs" {...register("password", {
                                    required: true
                                })} />

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-secondary">Phone Number</span>
                                </label>
                                <input type="password" placeholder="Your Phone Number" class="input border-secondary mb-[20px] w-[400px] max-w-xs" {...register("phone", {
                                    required: true
                                })} />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-secondary">Location</span>
                                </label>
                                <input type="text" placeholder="Your Location" class="input border-secondary mb-[20px] w-[400px] max-w-xs" {...register("location", {
                                    required: true
                                })} />

                            </div>

                            <button className="btn w-[325px] text-black hover:text-white hover:bg-primary hover:border-none">Register</button>
                            <div className="">
                                <p className="text-center my-[10px] text-sm">Already have a account?<Link to="/login" className="text-blue-500">Login!</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Register;
