import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MarathonCard from './MarathonCard';
// import HomeMarathonCard from './HomeMarathonCard';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

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
    <>
      <div className='container mx-auto my-16' ata-aos="fade-up">
        <h1 className='text-4xl text-center mb-8 font-semibold'>Marathons Event</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

          {
            homeMarathons.map(marathon => <MarathonCard marathon={marathon} key={marathon._id}></MarathonCard>)
          }
        </div>
      </div>
    </>
  );
};

export default HomeMarathon;