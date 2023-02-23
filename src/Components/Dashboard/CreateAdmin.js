import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthProvider';

const CreateAdmin = () => {
    const [users, setUsers] = useState([])
    const { token, user } = useContext(AuthContext);

    useEffect(() => {
        axios.get("https://pear-gifted-lamb.cyclic.app/admin/getAllUsers", {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(res => setUsers(res.data.data))
            .catch(error => console.log(error))
    }, [users])

    const makeAdmin = (userId) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
        fetch(`https://pear-gifted-lamb.cyclic.app/admin/makeAdmin?id=${userId}`, {
            method: "put",
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    return (
        <div>
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
    );
};

export default CreateAdmin;
