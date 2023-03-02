import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApproveDonor = () => {
    const [donorRequest, setDonorRequest] = useState([]);
    const { token } = useContext(AuthContext);

    const fetchData = () => {
        axios
            .get('https://pear-gifted-lamb.cyclic.app/admin/allDonorReq', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then((data) => setDonorRequest(data.data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchData();
    }, []);
    console.log(donorRequest);

    const handleApprove = (uid) => {
        console.log(uid)
        fetch(`https://pear-gifted-lamb.cyclic.app/admin/approveDonorReq?id=${uid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Successfully made user Donor', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                fetchData();
            })
            .catch(error => {
                toast.error('Something went wrong!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light'
                });
                console.log(error);
                fetchData();
            });


    }

    const handleDeny = (id) => {
        axios
            .delete(
                `https://pear-gifted-lamb.cyclic.app/admin/removeDonorReq?id=${id}`,
                {},
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            .then((res) => {
                console.log(res);
                toast.success('Successfully remove donor request', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light'
                });
                fetchData();
            })
            .catch((error) => {
                toast.error('Something went wrong!', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light'
                });
                console.log(error);
                fetchData();
            });
    };

    return (
        <div>
            <h2 className="text-center text-3xl my-[20px]">Approve Donor</h2>
            <div className="overflow-x-auto px-[10px]">
                <table className="table w-full">
                    <thead className="bg-[#fff]">
                        <tr className="">
                            <th className="bg-[#222] text-[#f1f1f1]"></th>
                            <th className="bg-[#222] text-[#f1f1f1]">Name</th>
                            <th className="bg-[#222] text-[#f1f1f1]">Email</th>
                            <th className="bg-[#222] text-[#f1f1f1]">Blood Type</th>
                            <th className="bg-[#222] text-[#f1f1f1]">Learn more</th>
                            <th className="bg-[#222] text-[#f1f1f1]">Approve</th>
                            <th className="bg-[#222] text-[#f1f1f1]">Deny</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donorRequest.map((donorRq, index) => (
                            <tr className="border-[#222]">
                                <th>{index + 1}</th>
                                <td>{donorRq?.user?.email.split('@')[0]}</td>
                                <td>{donorRq?.user?.email}</td>
                                <td>{donorRq?.user?.bloodType}</td>
                                <td>
                                    <button className="btn no-animation gap-2 bg-green-500 mr-[14px] hover:bg-primary hover:border-primary text-white">
                                        <label htmlFor={`my-modal-${index}`}>Learn more</label>
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleApprove(donorRq?._id)}
                                        className="btn no-animation gap-2 bg-green-500 mr-[14px] hover:bg-primary hover:border-primary text-white"
                                    >
                                        Approve
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeny(donorRq?._id)}
                                        className="btn no-animation gap-2 bg-primary hover:bg-primary hover:border-primary  text-white"
                                    >
                                        Deny
                                    </button>
                                </td>

                                <input
                                    type="checkbox"
                                    id={`my-modal-${index}`}
                                    className="modal-toggle"
                                />
                                <div className="modal">
                                    <div className="modal-box relative">
                                        <label
                                            htmlFor={`my-modal-${index}`}
                                            className="btn btn-sm btn-circle absolute right-2 top-2"
                                        >
                                            ✕
                                        </label>
                                        <h3 className="text-lg font-bold">
                                            Health data for {donorRq.user.email.split('@')[0]}
                                        </h3>
                                        <ul>
                                            <li>HIV: {donorRq.hiv}</li>
                                            <li>
                                                Date of Birth: {donorRq.dateOfBirth.split('T')[0]}
                                            </li>
                                            <li>Hypertension: {donorRq.hypertension}</li>
                                            <li>
                                                Last Blood donation: {donorRq.lastBloodDonation}
                                            </li>
                                            <li>Smoke: {donorRq.smoke}</li>
                                            <li>Weight: {donorRq.weight}</li>
                                        </ul>
                                    </div>
                                </div>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApproveDonor;
