import React, { useEffect, useState } from 'react';

const CreateAdmin = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://pear-gifted-lamb.cyclic.app/admin/getAllUsers", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }, [users])


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
                        <tr className="border-[#222]">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Cyganderton@gmail.com</td>
                            <td>Admin</td>
                            <td><button class="btn no-animation gap-2 bg-primary hover:bg-primary opacity-[0.2] hover:border-primary">
                                Already Admin
                            </button></td>
                        </tr>
                        {
                            users.map((index, user) => <></>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CreateAdmin;
