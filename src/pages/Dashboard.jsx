
import { GoX } from "react-icons/go";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
import { FaAddressBook } from "react-icons/fa6";
import { FaThList } from "react-icons/fa";
import { RiFileListFill } from "react-icons/ri";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

// import MyApplyList from './MyApplyList';
const Dashboard = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  console.log(toggleSidebar)
  return (
    <div className="min-h-screen flex mb-5 relative">

      {/* Sidebar */}
      <aside className={`${toggleSidebar === true && "hidden"} absolute h-full z-10 left-0 top-0 lg:sticky lg:min-h-screen w-64 bg-base-200 shadow-xl pb-4 flex flex-col`}>
        <div className="p-4 text-lg md:text-xl font-bold space-x-4 flex items-center justify-between">Dashboard <button className="border rounded-full p-1" onClick={() => setToggleSidebar(!toggleSidebar)}>
          <a data-tooltip-id="my-tooltip" data-tooltip-content="Close!" data-tooltip-place="right">
            <GoX /><Tooltip id="my-tooltip" className="text-lg font-light border-2" />
          </a>
        </button></div>
        <nav className="flex-1 dashboard px-4">
          <ul className="space-y-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            <li className="my-2 font-semibold text-lg">
              <NavLink to="/dashboard/add-marathon" className="flex items-center gap-2 py-2 px-3 rounded hover:outline-2 hover:outline-violet-500 hover:outline">
                <FaAddressBook className="text-pink-500" />
                Add Marathon
              </NavLink>
            </li>
            <li className="my-2 font-semibold text-lg">
              <NavLink to="my-marathons-list" className="flex items-center gap-2 py-2 px-3 rounded hover:outline-2 hover:outline-violet-500 hover:outline">
                <FaThList className="text-pink-500" />
                My Marathons List
              </NavLink>
            </li>
            <li className="my-2 font-semibold text-lg">
              <NavLink to="my-apply-list" className="flex items-center gap-2 py-2 px-3 rounded hover:outline-2 hover:outline-violet-500 hover:outline">
                <RiFileListFill className="text-pink-500" />
                My Apply List
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* <div className="p-4">Footer</div> */}
      </aside>


      {/* Main Content */}
      <main className="flex-1 bg-base-100 p-2 md:p-6">
        <header className="bg-base-100 p-4 shadow rounded mb-4 flex items-center gap-4">

          <button className={`${toggleSidebar === false && "hidden"}`} onClick={() => setToggleSidebar(!toggleSidebar)}>
            <a data-tooltip-id="my-tooltip" data-tooltip-content="Dashboard!" data-tooltip-place="right">
            <MdMenu className="text-xl md:text-3xl" /><Tooltip id="my-tooltip" className="text-lg font-light" />
            </a>

            
          </button>

          <h1 className="text-2xl font-bold text-center w-full">Welcome to the Dashboard</h1>
        </header>
        <section className="">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;