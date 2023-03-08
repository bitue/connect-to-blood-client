import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar';

const UserProfileDetails = () => {
    const { userId } = useParams()
    const [tab, setTab] = useState(1);
    return (
        <div>
            <Navbar />
            <div className="min-h-screen flex items-center flex-col p-[40px]">
                <div className="bg-white w-[100%] h-[500px] rounded-[10px] shadow-md flex py-[30px] flex-col px-[30px]">
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="flex items-center">
                            <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="w-[150px] h-[150px] rounded-full object-cover mr-[20px]" alt="" />
                            <div>
                                <p>Random Person Name</p>
                                <p>Random Person Name@gmail.com</p>
                            </div>
                        </div>
                        <div className="divider border-secondary before:bg-[#222] after:bg-[#222]"></div>
                        <div className="flex justify-center items-center">
                            <div className="tabs">
                                <button className={tab === 1 ? "tab tab-bordered text-secondary border-primary" : "tab tab-bordered text-secondary opacity-[0.5]"} onClick={() => setTab(1)}>User Info</button>
                                <button className={tab === 2 ? "tab tab-bordered text-secondary border-primary" : "tab tab-bordered text-secondary opacity-[0.5]"} onClick={() => setTab(2)}>Donor Info</button>
                            </div>

                        </div>
                        {
                            tab === 1 ? <div className="flex justify-between w-[60%] mt-[30px]">
                                {/* User Info */}
                                <div>
                                    <p className="opacity-[0.5] font-bold">Name</p>
                                    <p className="mb-[30px]">{"randomEmail@gmail.com".split("@")[0]}</p>
                                    <p className="opacity-[0.5] font-bold">Email</p>
                                    <p >randomEmail@gmail.com</p>

                                </div>
                                <div>
                                    <p className="opacity-[0.5] font-bold">Phone Number</p>
                                    <p className="mb-[30px]">+880 123 456 78</p>
                                    <p className="opacity-[0.5] font-bold">Location</p>
                                    <p>Bangladesh, Dhaka, Utora</p>
                                </div>
                                <div>
                                    <p className="opacity-[0.5] font-bold">Data of Birth</p>
                                    <p className="mb-[30px]">{new Date("2023-03-22T00:00:00.000+00:00").toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}</p>

                                </div>


                            </div> : <div>
                                <div className="flex justify-between w-[50%] mt-[30px]">
                                    {/* User Info */}
                                    <div>
                                        <p className="opacity-[0.5] font-bold">Height</p>
                                        <p className="mb-[30px]">5.8</p>
                                        <p className="opacity-[0.5] font-bold">Weight</p>
                                        <p>60 kg</p>
                                    </div>
                                    <div>
                                        <p className="opacity-[0.5] font-bold">Phone Number</p>
                                        <p className="mb-[30px]">+880 123 456 78</p>
                                        <p className="opacity-[0.5] font-bold">Hypertension</p>
                                        <p>Yes</p>
                                    </div>
                                    <div>
                                        <p className="opacity-[0.5] font-bold">Smoke</p>
                                        <p className="mb-[30px]">No</p>
                                        <p className="opacity-[0.5] font-bold">Last Blood Donation</p>
                                        <p>{new Date("2023-03-16T00:00:00.000+00:00").toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}</p>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                </div>

            </div>
        </div>
    );
};

export default UserProfileDetails;