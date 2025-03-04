import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Main = () => {
  return (
    <div className='relative'>
      {/* Navbar */}
      <nav className='sticky top-0 z-10 bg-base-100 shadow-lg'>

        <Navbar />
      </nav>
      {/* Outlet */}
      <div className='min-h-[calc(100vh-306px)]'>
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Main
