import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthProvider';

const BanUsers = () => {
    const { token } = useContext(AuthContext)
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

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

    if (loading) {
        return <div className="min-h-screen flex justify-center items-center">
            <div className="loader"></div>
        </div>
    }

    const banUser = (userId) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-primary ml-[10px]',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure? You want to ban him?',
            text: "This will be impossible to undo",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, ban him!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Success',
                    'Successfully banned user',
                    'success'
                )
                axios.delete(`https://pear-gifted-lamb.cyclic.app/admin/banUserById?id=${userId}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                fetchData()
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
        <div>
            <h2 className="text-center text-3xl my-[20px]">Ban user</h2>
            <div class="overflow-x-auto px-[10px]">
                <table class="table w-full">
                    <thead className="bg-[#fff]">
                        <tr>
                            <th className="bg-[#222] text-[#f1f1f1]"></th>
                            <th className="bg-[#222] text-[#f1f1f1]">Name</th>
                            <th className="bg-[#222] text-[#f1f1f1]">Email</th>
                            <th className="bg-[#222] text-[#f1f1f1]">Role</th>
                            <th className="bg-[#222] text-[#f1f1f1]">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr className="border-[#222]">
                                <th>{index + 1}</th>
                                <td>{user.email.split("@")[0]}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td><button class="btn no-animation gap-2 bg-primary hover:bg-primary hover:border-primary text-white" onClick={() => banUser(user._id)}>
                                    Ban Users
                                </button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BanUsers;
