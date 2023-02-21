import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="drawer drawer-mobile ">
                <input id="sidebar-dashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="sidebar-dashboard" className="drawer-overlay"></label>
                    <ul className="menu bu p-4 z-50 overflow-y-auto w-64 bg-white text-[#222] gap-y-2">
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title">
                                Control Panel
                            </div>
                            <div className="collapse-content">
                                <ul className="list-disc">
                                    <li className="hover:bg-[#f1f1f1] transition"><Link to="/dashboard/createAdmin">Create A Admin</Link></li>
                                    <li className="hover:bg-[#f1f1f1] transition"><Link to="/dashboard/approveDonor">Approve donor registration</Link></li>
                                    <li className="hover:bg-[#f1f1f1] transition"><Link to="/dashboard/banUser">Ban Users</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title">
                                General
                            </div>
                            <div className="collapse-content">
                                <ul className="list-disc">
                                    <li className="hover:bg-[#f1f1f1] transition"><Link to="/dashboard/">Your Profile</Link></li>
                                    <li className="hover:bg-[#f1f1f1] transition"><Link to="/dashboard/createBlog">Create an blog</Link></li>
                                    <li className="hover:bg-[#f1f1f1] transition"><Link to="/dashboard/yourArticles">Your articles</Link></li>
                                </ul>
                            </div>
                        </div>
                    </ul>
                </div>
            </div >
        </>
    );
};

export default Dashboard;
