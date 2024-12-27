import { useContext } from 'react'
import logo from '../assets/images/logo.png'
import { AuthContext } from '../providers/AuthProvider'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const nav = <>
    <li><NavLink to='/'>Home</NavLink></li>
    {/* <li><NavLink to='/add-marathon'>Add Marathon</NavLink></li> */}
    <li><NavLink to='/marathon'>All Marathons</NavLink></li>
    {user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>}
    {/* <li><NavLink to='/my-marathons-list'>My Marathons List</NavLink></li> */}
    {/* <li><NavLink to='/my-apply-list'>My Apply List</NavLink></li> */}
  </>
  return (
    <>
      <div className="navbar bg-base-100 container mx-auto">
        <div className="flex-1">
          <div className='flex items-center gap-2'>
            <Link to="/">
              <img className='w-auto h-10 rounded-xl' src={logo} alt="" /></Link>
            <Link to="/" className='uppercase text-lg lg:text-xl font-bold'>runclub</Link>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 flex flex-col md:flex-row">

            {nav}
          </ul>
        </div>
        <div className='flex flex-col'>
          {user ? <div className='flex flex-col md:flex-row'>
           
            {/* <div>
            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
            </div> */}
            <div className='md:mx-5'>
              <img referrerPolicy='no-referrer' className='w-12 h-12 rounded-full' src={user.photoURL} alt="" />
            </div>
            <div className=''>
              <button className='btn' onClick={logOut}>Log Out</button>
            </div>
          </div> : <div>
            <NavLink to='/login'>
              <button className='btn'>Login</button>
            </NavLink>
            <NavLink to='/registration'>
              <button className='btn md:ml-5'>SignUp</button>
            </NavLink>
            {/* <li><NavLink to='/dashboard'>Dashboard</NavLink></li> */}

          </div>}
        </div>
      </div>
    </>
  )
}

export default Navbar
