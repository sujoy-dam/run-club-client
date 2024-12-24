import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MarathonCard from '../components/MarathonCard';

const Marathon = () => {
    const [marathons, setMarathons] = useState([])
    console.log(marathons)
  
    useEffect(() => {
      fetchAllJobs()
    }, [])
    const fetchAllJobs = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/marathons`)
      setMarathons(data)
    }
    return (
        <div className='container mx-auto'>
            <h1>Marathons</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

          {
            marathons.map(marathon=><MarathonCard marathon={marathon} key={marathon._id}></MarathonCard>)
          }
            </div>
        </div>
    );
};

export default Marathon;