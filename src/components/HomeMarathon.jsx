import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MarathonCard from './MarathonCard';
import HomeMarathonCard from './HomeMarathonCard';

const HomeMarathon = () => {
  const [homeMarathons, setHomeMarathons] = useState([])

  console.log(homeMarathons)

  useEffect(() => {
    fetchAllJobs()
  }, [])
  const fetchAllJobs = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/limit-marathons`)
    setHomeMarathons(data)
  }
  return (
    <div className='container mx-auto mb-10'>
      <div className='container mx-auto'>
        <h1 className='text-4xl text-center mb-8 font-bold'>Marathons</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

          {
            homeMarathons.map(marathon => <HomeMarathonCard marathon={marathon} key={marathon._id}></HomeMarathonCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default HomeMarathon;