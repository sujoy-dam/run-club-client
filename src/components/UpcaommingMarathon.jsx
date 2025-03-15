import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MarathonCard from './MarathonCard';

const UpcaommingMarathon = () => {
    const [upcommingMarathons, setUpcommingMarathons] = useState([])

    //   console.log(homeMarathons)

    useEffect(() => {
        fetchAllJobs()
    }, [])
    const fetchAllJobs = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/limit-marathons`)
        setUpcommingMarathons(data)
    }
    return (
        <div className='container mx-auto my-16' id="events">
            <div className='container mx-auto'>
                <h1 className='text-4xl text-center mb-8 font-semibold'>Marathons Upcomming Event</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                    {
                        upcommingMarathons.map(marathon => <MarathonCard marathon={marathon} key={marathon._id}></MarathonCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default UpcaommingMarathon;