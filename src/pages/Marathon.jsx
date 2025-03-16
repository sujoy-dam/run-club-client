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
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${MarathonBanner})`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold uppercase italic bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">keep running</h1>
            {/* <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p> */}
            L
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
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