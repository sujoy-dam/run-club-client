import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MarathonCard from '../components/MarathonCard';
import MarathonBanner from "../assets/images/all-marathon-banner.jpg"

const Marathon = () => {
  const [marathons, setMarathons] = useState([])
  const [search, setSearch] = useState("")
  console.log(marathons)

  useEffect(() => {

    fetchAllJobs()
  }, [search])
  const fetchAllJobs = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/marathons?search=${search}`)
    console.log(data)
    setMarathons(data)
  }

  return (
    <div className='my-5'>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${MarathonBanner})`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold uppercase italic bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">keep running</h1>
            {/* <p>{search}</p> */}

            <label className="input input-bordered flex items-center gap-2">
              <input onChange={(e) => setSearch(e.target.value)} type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill=""
                className="h-4 w-4">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd" />
              </svg>
            </label>
          </div>
        </div>
      </div>
      <div className='min-h-screen container mx-auto'>
        <h1 className='text-2xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mt-10 lg:mt-16 mb-8'>All Marathon Event :</h1>
        {
          marathons.length ===0?<div className='flex justify-center items-center'>
            <h1 className='text-2xl font-medium'>No result</h1>
          </div>:
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

          {
            marathons?.map(marathon => <MarathonCard marathon={marathon} key={marathon._id}></MarathonCard>)
          }
        </div>
        }
      </div>
    </div>
  );
};

export default Marathon;