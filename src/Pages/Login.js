import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    const { user, setUser, saveToken } = useContext(AuthContext);

    const onSubmit = async (form_data) => {
        try {
            setLoading(true);
            const userCred = await axios.post(
                'https://pear-gifted-lamb.cyclic.app/signin',
                form_data
            );
            const { data, headers } = userCred;
            // const{'authorizationtoken'} = userCred.headers ;
            console.log(data);
            console.log(headers);
            saveToken(headers.authorization);
            setUser(data.user);
            setLoading(false);
            // redirect it to the page he wants to go || home page
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <>
            <Navbar></Navbar>
            {loading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <div className="loader"></div>
                </div>
            ) : (
                <div className="min-h-screen flex justify-center items-center my-[10px]">
                    <div className="flex items-center flex-col justify-center py-[25px] px-[20px]  lg:md:w-[500px] bg-[#fff] shadow-xl rounded-[20px] h-[500px]">
                        <h2 className="text-3xl text-center mb-[20px] font-medium">
                            Log<span className="text-primary">in</span>
                        </h2>
                        <div>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="flex flex-col justify-center items-center"
                            >
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text text-secondary">
                                            Enter your email
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Write your email"
                                        class="input border-secondary mb-[20px] w-[400px] max-w-xs"
                                        {...register('email', {
                                            required: true
                                        })}
                                    />
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text text-secondary">
                                            Your password
                                        </span>
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

                                <button className="btn w-[325px] text-black hover:text-white hover:bg-primary hover:border-none">
                                    Login
                                </button>
                                <div className="">
                                    <p className="text-center my-[10px] text-sm">
                                        Don't have a account?{' '}
                                        <Link to="/register" className="text-blue-500">
                                            Register!
                                        </Link>{' '}
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
