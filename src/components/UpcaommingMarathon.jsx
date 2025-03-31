import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MarathonCard from './MarathonCard';
import { compareAsc } from 'date-fns';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const UpcaommingMarathon = () => {
    const [upcommingMarathons, setUpcommingMarathons] = useState([])

    //   console.log(homeMarathons)
    // console.log(upcommingMarathons)
    // const upcomming =upcommingMarathons.filter(item=>compareAsc(new Date(), new Date(item.startRegistration)))
    // // console.log(upcomming)
    console.log(new Date())

    useEffect(() => {
        fetchAllJobs()
    }, [upcommingMarathons])
    const fetchAllJobs = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/limit-marathons`)
        const upcomming =data.slice(0,6).filter(item=>(compareAsc(new Date(), new Date(item.startRegistration)))== -1)
    console.log(upcomming)
        setUpcommingMarathons(upcomming)
    }
    return (
        <div className='container mx-auto my-16' data-aos="fade-up">
            <div className='container mx-auto'>
                <h1 className='text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold text-center mb-8'>Marathons Upcomming Event</h1>
                <div className='grid min-h-[500px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                    {
                        upcommingMarathons.map(marathon => <MarathonCard marathon={marathon} key={marathon._id}></MarathonCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default UpcaommingMarathon;