import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import MarathonCard from './MarathonCard';
// import HomeMarathonCard from './HomeMarathonCard';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
// ..
AOS.init();

const HomeMarathon = () => {
  const [homeMarathons, setHomeMarathons] = useState([])
  const {loading}=useContext(AuthContext)

  console.log(homeMarathons)

  useEffect(() => {
    fetchAllJobs()
  }, [])
  const fetchAllJobs = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/limit-marathons`)
    setHomeMarathons(data)
  }
  if(loading) return "Loading.."
  return (
    <>
      <div className='container mx-auto my-16' data-aos="fade-up">
        <h1 className='text-4xl text-center mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold'>Marathons Event</h1>
        <div className='min-h-[500px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' >

          {
            homeMarathons.map(marathon => <MarathonCard marathon={marathon} key={marathon._id}></MarathonCard>)
          }
        </div>
        <div className='flex justify-center'>
          <Link to="/marathon" className="btn mt-5 px-8 text-white bg-violet-500 text-center">See All</Link>
        </div>
      </div>
    </>
  );
};

export default HomeMarathon;