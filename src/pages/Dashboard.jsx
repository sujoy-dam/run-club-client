// import React from 'react';
// import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
// import { Link, NavLink, Outlet } from 'react-router-dom';
// import AddMarathon from './AddMarathon';
// import MyMarathonsList from './MyMarathonsList';

import {NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
import { FaAddressBook } from "react-icons/fa6";
import { FaThList } from "react-icons/fa";
import { RiFileListFill } from "react-icons/ri";

// import MyApplyList from './MyApplyList';
const Dashboard = () => {
    return (
        <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold space-x-4">Dashboard</div>
        <nav className="flex-1 px-4">
          <ul className="space-y-4">
            <li className="my-2 font-bold text-lg">
              <NavLink to="/dashboard/add-marathon" className="flex items-center gap-2 py-2 px-3 rounded hover:outline-2 hover:outline-pink-500 hover:outline">
              <FaAddressBook className="text-xl"/>
                Add Marathon
              </NavLink>
            </li>
            <li className="my-2 font-bold text-lg">
              <NavLink to="my-marathons-list" className="flex items-center gap-2 py-2 px-3 rounded hover:outline-2 hover:outline-pink-500 hover:outline">
              <FaThList className="text-xl"/>
               My Marathons List
              </NavLink>
            </li>
            <li className="my-2 font-bold text-lg">
              <NavLink to="my-apply-list" className="flex items-center gap-2 py-2 px-3 rounded hover:outline-2 hover:outline-pink-500 hover:outline">
              <RiFileListFill className="text-2xl"/>
                My Apply List
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* <div className="p-4">Footer</div> */}
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <header className="bg-white p-4 shadow rounded mb-4">
          <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Outlet/>
        </section>
      </main>
    </div>
    );
};

export default Dashboard;