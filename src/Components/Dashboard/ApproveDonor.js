import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const ApproveDonor = () => {
    const [donorRequest, setDonorRequest] = useState([])
    const { token } = useContext(AuthContext)

    const fetchData = () => {
        axios.get("https://pear-gifted-lamb.cyclic.app/admin/allDonorReq", {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(data => setDonorRequest(data.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log(donorRequest)


    return (
        <div>
            <h2 className="text-center text-3xl my-[20px]">Approve Donor</h2>
            <div class="overflow-x-auto px-[10px]">
                <table class="table w-full">
                    <thead className="bg-[#fff]">
                        <tr className="">
                            <th className="bg-[#222] text-[#f1f1f1]"></th>
                            <th className="bg-[#222] text-[#f1f1f1]">Name</th>
                            <th className="bg-[#222] text-[#f1f1f1]">Email</th>
                            <th className="bg-[#222] text-[#f1f1f1]">HIV</th>
                            <th className="bg-[#222] text-[#f1f1f1]">Blood Type</th>
                            <th className="bg-[#222] text-[#f1f1f1]">Smoked</th>
                            <th className="bg-[#222] text-[#f1f1f1]">Hypertension</th>
                            <th className="bg-[#222] text-[#f1f1f1]">Approve</th>
                            <th className="bg-[#222] text-[#f1f1f1]">Deny</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            donorRequest.map((user, index) => <tr className="border-[#222]">
                                <th>{index + 1}</th>
                                <td>Cy Ganderton</td>
                                <td>Cyganderton@gmail.com</td>
                                <td>{user.hiv}</td>
                                <td>A+</td>
                                <td>{user.smoke}</td>
                                <td>False</td>
                                <td>False</td>
                                <td>
                                    <button class="btn no-animation gap-2 bg-green-500 mr-[14px] hover:bg-primary hover:border-primary text-white">
                                        Approve
                                    </button>
                                </td>
                                <td>
                                    <button class="btn no-animation gap-2 bg-primary hover:bg-primary hover:border-primary  text-white">
                                        Deny
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApproveDonor;
