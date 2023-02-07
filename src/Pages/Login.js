import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar/Navbar';
const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    const [login, setLogin] = useState(true);
    return (
        <div className="min-h-screen ">
            <Navbar></Navbar>
            <div className="flex flex-col min-h-width  p-5 item-center justify-center items-center">
                {login ? (
                    <div className="w-3/4 ">
                        <p className="text-primary  text-3xl font-bold my-5">
                            Log in your account !
                        </p>
                        <form className="" onSubmit={handleSubmit(onSubmit)}>
                            <p>Enter Email</p>
                            <input
                                {...register('Email')}
                                type="email"
                                placeholder="Enter email"
                                className="input input-bordered input-secondary w-full max-w-md"
                                required
                            />
                            <br />
                            <p>Enter password</p>
                            <input
                                {...register('Password')}
                                type="password"
                                placeholder="Enter password"
                                className="input input-bordered input-secondary w-full max-w-md"
                                minLength="6"
                                required
                            />
                            <br />

                            <button
                                className="btn btn-outline  border-[#222222] fz-1.3 border-2 my-5 bg-[#ED4245] hover:bg-[#ED4245] "
                                type="submit"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="w-3/4">
                        <p className="text-primary  text-3xl font-bold my-5">Register as User !</p>
                        <form className="" onSubmit={handleSubmit(onSubmit)}>
                            <p>Enter Email</p>
                            <input
                                {...register('Email')}
                                type="email"
                                placeholder="Enter email"
                                className="input input-bordered input-secondary w-full max-w-md"
                                required
                            />
                            <br />
                            <p>Enter Password</p>
                            <input
                                {...register('Password')}
                                type="password"
                                placeholder="Enter password"
                                className="input input-bordered input-secondary w-full max-w-md"
                                minLength="6"
                                required
                            />
                            <br />
                            <p>Enter Phone Number</p>
                            <input
                                {...register('Phone')}
                                type="phone"
                                placeholder="Enter Your phone number"
                                className="input input-bordered input-secondary w-full max-w-md"
                                minLength={11}
                                required
                            />
                            <br />

                            <p>Enter Location Exact !</p>

                            <input
                                {...register('location')}
                                type="text"
                                placeholder="Enter Your Location details"
                                className="input input-bordered input-secondary w-full max-w-md"
                                required
                            />
                            <br />

                            <p>Enter Nid Number</p>

                            <input
                                {...register('Nid number')}
                                type="text"
                                placeholder="Enter Your Nid card Number"
                                className="input input-bordered input-secondary w-full max-w-md"
                                minLength={10}
                                required
                            />
                            <br />

                            <button
                                className="btn btn-outline  border-[#222222] fz-1.3 my-5 border-2 bg-[#ED4245] hover:bg-[#ED4245] "
                                type="submit"
                            >
                                Register as user !
                            </button>
                        </form>
                    </div>
                )}

                <div className="w-3/4 flex ">
                    <div>
                        <p
                            className={login ? 'text-primary cursor-pointer' : 'cursor-pointer '}
                            onClick={() => setLogin((prev) => !prev)}
                        >
                            {login ? 'Create an  Account ' : 'Already an Account ? login'}
                        </p>
                        <div>
                            <Link to="/registerDonar">
                                {' '}
                                <p className={login ? '' : 'text-primary  '}>
                                    Register as Donar
                                </p>{' '}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
