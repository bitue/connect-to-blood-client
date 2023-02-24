import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthProvider';

const CreateAdmin = () => {
    const [users, setUsers] = useState([])
    const { token, user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);


    function fetchData() {
        setLoading(true)
        axios.get("https://pear-gifted-lamb.cyclic.app/admin/getAllUsers", {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setUsers(res.data.data)
            setLoading(false)
        })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    const makeAdmin = (userId) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-primary ml-[10px]',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Make admin!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Successfully Made Admin!',
                    'Your made someone a admin',
                    'success'
                )
                fetch(`https://pear-gifted-lamb.cyclic.app/admin/makeAdmin?id=${userId}`, {
                    method: "put",
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${token}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        fetchData()
                    })
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Make admin cancelled',
                    'error'
                )

                fetchData()
            }
        })
    }


    return (
        <>
            {
                loading ? <div className="flex justify-center items-center min-h-screen">
                    <div className="loader">

                    </div>
                </div> : <div>
                    <h2 className="text-center text-3xl my-[20px]">Create an Admin</h2>
                    <div class="overflow-x-auto px-[10px]">
                        <table class="table w-full">
                            <thead className="bg-[#fff]">
                                <tr>
                                    <th className="bg-[#222] text-[#f1f1f1]"></th>
                                    <th className="bg-[#222] text-[#f1f1f1]">Name</th>
                                    <th className="bg-[#222] text-[#f1f1f1]">Email</th>
                                    <th className="bg-[#222] text-[#f1f1f1]">Role</th>
                                    <th className="bg-[#222] text-[#f1f1f1]">Make Admin</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    users?.map((user, index) => <tr className="border-[#222]">
                                        <th>{index + 1}</th>
                                        <td>{user.email.split("@")[0]}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td><button class="btn no-animation gap-2 bg-primary hover:bg-primary hover:border-primary text-white" onClick={() => makeAdmin(user._id)}>
                                            Make Admin
                                        </button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </>
    );
};

export default CreateAdmin;
