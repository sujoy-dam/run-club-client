import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MarathonCard from '../components/MarathonCard';
import MarathonBanner from "../assets/images/all-marathon-banner.jpg"

const Marathon = () => {
  const [marathons, setMarathons] = useState([])
  // console.log(marathons)

  useEffect(() => {
    fetchAllJobs()
  }, [])
  const fetchAllJobs = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/marathons`)
    setMarathons(data)
  }
  return (
    <div className='my-10'>
      <div className='mix-blend-multiply bg-blue-400'>
        <img src={MarathonBanner} alt="" className='w-full object-cover transform transition-transform hover:scale-105'/>
      </div>
      <h1 className='text-2xl lg:text-4xl font-semibold mt-10 lg:mt-16 mb-8'>All Marathon Event:</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-screen'>

        {
          marathons.map(marathon => <MarathonCard marathon={marathon} key={marathon._id}></MarathonCard>)
        }
      </div>
    </div>
  );
};

export default Marathon;