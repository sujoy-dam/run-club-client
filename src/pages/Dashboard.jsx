// import React from 'react';
// import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
// import { Link, NavLink, Outlet } from 'react-router-dom';
// import AddMarathon from './AddMarathon';
// import MyMarathonsList from './MyMarathonsList';
import { GoX } from "react-icons/go";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
import { FaAddressBook } from "react-icons/fa6";
import { FaThList } from "react-icons/fa";
import { RiFileListFill } from "react-icons/ri";
import { useState } from "react";
import { MdMenu } from "react-icons/md";

// import MyApplyList from './MyApplyList';
const Dashboard = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  console.log(toggleSidebar)
  return (
    <div className="min-h-screen flex mb-5 relative">

      {/* Sidebar */}
      <aside className={`${toggleSidebar === true && "hidden"} w-64 bg-gray-800 text-white flex flex-col`}>
        <div className="p-4 text-sm md:text-2xl font-bold space-x-4 flex items-center justify-between">Dashboard <button className="border-2 rounded-full p-0 md:p-2" onClick={() => setToggleSidebar(!toggleSidebar)}><GoX /> </button></div>
        <nav className="flex-1 px-4">
          <ul className="space-y-4">
            <li className="my-2 font-bold text-xs md:text-lg">
              <NavLink to="/dashboard/add-marathon" className="flex items-center gap-2 py-2 px-3 rounded hover:outline-2 hover:outline-pink-500 hover:outline">
                <FaAddressBook className="text-xl" />
                Add Marathon
              </NavLink>
            </li>
            <li className="my-2 font-bold text-xs md:text-lg">
              <NavLink to="my-marathons-list" className="flex items-center gap-2 py-2 px-3 rounded hover:outline-2 hover:outline-pink-500 hover:outline">
                <FaThList className="text-xl" />
                My Marathons List
              </NavLink>
            </li>
            <li className="my-2 font-bold text-xs md:text-lg">
              <NavLink to="my-apply-list" className="flex items-center gap-2 py-2 px-3 rounded hover:outline-2 hover:outline-pink-500 hover:outline">
                <RiFileListFill className="text-2xl" />
                My Apply List
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* <div className="p-4">Footer</div> */}
      </aside>


      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-0 md:p-6">
        <div>

        </div>
        <header className="bg-white p-0 md:p-4 shadow rounded mb-4 flex items-center gap-4">
          
            <button className={`${toggleSidebar === false && "hidden"}`} onClick={() => setToggleSidebar(!toggleSidebar)}>

            <MdMenu className="text-3xl" />
            </button>
          
          <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
        </header>
        <section className="">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;