import React from 'react';

const ApproveDonor = () => {
    return (
        <div>
            <h2 className="text-center text-3xl my-[20px]">Approve Donor</h2>
            <div class="overflow-x-auto px-[10px]">
                <table class="table w-full">
                    <thead className="bg-[#fff]">
                        <tr>
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
                        <tr className="border-[#222]">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Cyganderton@gmail.com</td>
                            <td>True</td>
                            <td>A+</td>
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
                        </tr>
                        <tr className="border-[#222]">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Cyganderton@gmail.com</td>
                            <td>True</td>
                            <td>A+</td>
                            <td>False</td>
                            <td>False</td>
                            <td>
                                <button class="btn no-animation gap-2 bg-green-500 mr-[14px] hover:bg-primary hover:border-primary  text-white">
                                    Approve
                                </button>
                            </td>
                            <td>
                                <button class="btn no-animation gap-2 bg-primary hover:bg-primary hover:border-primary  text-white">
                                    Deny
                                </button>
                            </td>
                        </tr>
                        <tr className="border-[#222]">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Cyganderton@gmail.com</td>
                            <td>True</td>
                            <td>A+</td>
                            <td>False</td>
                            <td>False</td>
                            <td><button class="btn no-animation gap-2 bg-green-500 mr-[14px] hover:bg-primary hover:border-primary  text-white">
                                Approve
                            </button>
                            </td>
                            <td>
                                <button class="btn no-animation gap-2 bg-primary hover:bg-primary hover:border-primary  text-white">
                                    Deny
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApproveDonor;
