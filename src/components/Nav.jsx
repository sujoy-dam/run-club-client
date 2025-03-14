import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
// import { TfiLayoutMenuV } from "react-icons/tfi";
import { CgMenuGridR } from 'react-icons/cg';
import logo from '../assets/images/logo.png'
// import { MdOutlineLogout } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
// import { RiLogoutCircleLine } from 'react-icons/ri';

const Nav = () => {
    const { user, logOut } = useContext(AuthContext)
    const nav = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {/* <li><NavLink to='/add-marathon'>Add Marathon</NavLink></li> */}
        <li><NavLink to='/marathon'>All Marathons</NavLink></li>
        {user && <li><NavLink to='/dashboard/add-marathon'>Dashboard</NavLink></li>}
        {/* <li><NavLink to='/my-marathons-list'>My Marathons List</NavLink></li> */}
        {/* <li><NavLink to='/my-apply-list'>My Apply List</NavLink></li> */}
    </>
    return (
        <div className="navbar bg-base-100 py-4 container mx-auto">
            <div className="navbar-start">
                {/* <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn  btn-ghost lg:hidden">
                        <CgMenuGridR className='text-3xl' />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {nav}
                    </ul>
                </div> */}
                <div className='flex items-center gap-2'>
                    <Link to="/">
                        <img className='w-auto h-10 rounded-xl' src={logo} alt="" /></Link>
                    <Link to="/" className='uppercase text-lg lg:text-xl font-bold'>runclub</Link>
                </div>
            </div>
            {/* <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {nav}
                </ul>
            </div> */}
            <div className="navbar-end">

                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {nav}
                    </ul>
                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost mr-2 lg:hidden">
                        <CgMenuGridR className='text-3xl' />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] border-4 mt-3 -ml-20 p-2 w-36 shadow">
                        {nav}
                    </ul>
                </div>
            </div>
            <div className=''>
                {user ? <div className='flex items-center'>

                    {/* <div>
                            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                            </div> */}
                    <div className='mx-4 hidden md:flex'>
                        <img referrerPolicy='no-referrer' className='w-24 lg:w-20 h-12 rounded-full' src={user.photoURL} alt="" />
                    </div>
                    <div className=''>
                        <button className='flex outline-1 outline items-center font-semibold py-2 gap-2 rounded-lg px-4 hover:bg-gray-700 hover:text-white' onClick={logOut}><FiLogOut />Logout</button>
                    </div>
                </div> : <div>
                    <NavLink to='/login'>
                        <button className='flex outline-1 outline items-center font-semibold py-2 rounded-lg px-4 gap-2 hover:bg-gray-700 hover:text-white' onClick={logOut}><FiLogOut />Login</button>
                    </NavLink>
                    {/* <NavLink to='/registration'>
                        <button className='btn md:ml-5'>SignUp</button>
                    </NavLink> */}
                    {/* <li><NavLink to='/dashboard'>Dashboard</NavLink></li> */}

                </div>}
            </div>
        </div>
    );
};

export default Nav;