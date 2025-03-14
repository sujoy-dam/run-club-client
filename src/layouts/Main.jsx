import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import Nav from '../components/Nav'
// import Nav from '../components/Nav'

const Main = () => {
  return (
    <div className='relative px-2 md:px-0 lg:px-0'>
      {/* Navbar */}
      <nav className='sticky top-0 z-30 bg-base-100 shadow-lg'>

        <Navbar />
        {/* <Nav/> */}
      </nav>
      {/* Outlet */}
      <div className='min-h-[calc(100vh-306px)] container mx-auto'>
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Main
