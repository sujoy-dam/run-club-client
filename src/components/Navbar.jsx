import { useContext } from 'react'
import logo from '../assets/images/logo.png'
import { AuthContext } from '../providers/AuthProvider'
import { Link, NavLink } from 'react-router-dom'
import { CgMenuGridR } from 'react-icons/cg'
import { FiLogOut } from 'react-icons/fi'
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const nav = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/marathon'>All Marathons</NavLink></li>
    {user && <li><NavLink to='/dashboard/add-marathon'>Dashboard</NavLink></li>}
    {/* <li><NavLink to='/dashboard/add-marathon'>Dashboard</NavLink></li> */}
  </>
  return (
    <>
      <div className="navbar bg-base-100 py-4 container mx-auto flex items-center">
        <div className="navbar-start">
          <div className='flex items-center gap-2'>
            <Link to="/">
              <img className='w-auto h-10 rounded-xl' src={logo} alt="" /></Link>
            <Link to="/" className='uppercase text-lg lg:text-xl font-bold'>runclub</Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-0 lg:space-x-4">
              {nav}
            </ul>
          </div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <CgMenuGridR className='text-3xl' />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] border mt-3 -ml-20 p-2 w-36 shadow">
              {nav}
            </ul>
          </div>
        </div>
        <div className=''>
          {user ? <div className='flex items-center mx-4'>
              <button className='flex outline-1 outline items-center font-semibold py-2 gap-2 rounded-lg px-2 md:px-4 hover:bg-gray-700 hover:text-white' onClick={logOut}><FiLogOut />Logout</button>

          </div> : <div className='mx-4 '>
            <NavLink to='/login'>
              <button className='flex outline-1 outline items-center font-semibold py-2 rounded-lg px-2 md:px-4 gap-2 hover:bg-gray-700 hover:text-white' onClick={logOut}><FiLogOut />Login</button>
            </NavLink>
          </div>}
          {
            user? <div className='hidden md:flex'>
            <img referrerPolicy='no-referrer' className='md:w-28 lg:w-20 h-12 rounded-full' src={user.photoURL} alt="" />
          </div>:<FaUserCircle className='text-[42px] hidden md:flex lg:flex'/>
          }
        </div>
      </div>
    </>
  )
}

export default Navbar
