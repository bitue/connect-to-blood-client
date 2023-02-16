import React from 'react';

const CreateAdmin = () => {
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
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>harthagerty@gmail.com</td>
                            <td>User</td>
                            <td><button class="btn hover:text-[#fff] gap-2 bg-primary border-primary hover:bg-[#222]">
                                Make Admin
                            </button></td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>briceswyre@gmail.com</td>
                            <td>Donor</td>
                            <td><button class="btn text-[#fff] gap-2 bg-primary border-primary hover:bg-[#222]">
                                Make Admin
                            </button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CreateAdmin;
