import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';


const MyMarathonsList = () => {
    const [myMarathons, setMyMarathons] = useState([])

    // console.log(myMarathons)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetchAllJobs()
    }, [user])
    const fetchAllJobs = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/marathons/${user?.email}`)
        setMyMarathons(data)
    }

    const handleDelete = id => {
        try {


            // const remaining= jobs.filter(job=>job._id !== id)
            //   console.log(data)
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    const { data } = axios.delete(`${import.meta.env.VITE_API_URL}/marathon/${id}`)
                    toast.success("Deleted successfully")
                    fetchAllJobs()
                }
            });

        }
        catch (err) {
            // console.log(err.message)
        }
    }
    return (
        <>
            {/* <h1>My marathons list</h1> */}
            <section className='container px-2 md:px-4 mx-auto pt-12 mb-10'>
                <div className='flex items-center gap-x-3'>
                    <h2 className='text-lg font-medium text-base-800 '>My marathons List</h2>

                    <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                        {myMarathons.length}
                    </span>
                </div>

                <div className='flex overflow-x-auto flex-col mt-6'>
                    <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                                {
                                    myMarathons.length === 0 ? <div className='min-h-screen flex justify-center items-center'><h1>You do not add any marathon</h1></div> :
                                        <table className='min-w-full overflow-x-auto divide-y divide-gray-200'>
                                            <thead className='bg-base-50'>
                                                <tr>
                                                    <th
                                                        scope='col'
                                                        className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                    >
                                                        <div className='flex items-center gap-x-3'>
                                                            <span>Title</span>
                                                        </div>
                                                    </th>

                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                    >
                                                        <span>Registration(start - end)</span>
                                                    </th>

                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                    >
                                                        <button className='flex items-center gap-x-2'>
                                                            <span>Location</span>
                                                        </button>
                                                    </th>

                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                    >
                                                        Start Date
                                                    </th>
                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                    >
                                                        Participate
                                                    </th>

                                                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                                        Edit
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className='bg-base-100 divide-y divide-gray-200 '>
                                                {
                                                    myMarathons.map(marathon => <tr key={marathon._id}>
                                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                            {marathon.title}
                                                        </td>

                                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                            {format(new Date(marathon.startRegistration), "P")} - {format(new Date(marathon.endRegistration), "P")}
                                                        </td>

                                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                            {marathon.location}
                                                        </td>
                                                        <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                            <div className='flex items-center gap-x-2'>
                                                                <p
                                                                    className='px-3 py-1 
                            text-blue-500 bg-blue-100/60 text-xs rounded-full'
                                                                >
                                                                    {format(new Date(marathon.startMarathon), 'P')}
                                                                </p>
                                                            </div>
                                                        </td>
                                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                            {marathon.registration_count}
                                                        </td>
                                                        <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                            <div className='flex items-center gap-x-6'>
                                                                <button onClick={() => handleDelete(marathon._id)} className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'>
                                                                    <svg
                                                                        xmlns='http://www.w3.org/2000/svg'
                                                                        fill='none'
                                                                        viewBox='0 0 24 24'
                                                                        strokeWidth='1.5'
                                                                        stroke='currentColor'
                                                                        className='w-5 h-5'
                                                                    >
                                                                        <path
                                                                            strokeLinecap='round'
                                                                            strokeLinejoin='round'
                                                                            d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                                                                        />
                                                                    </svg>
                                                                </button>
                                                                <Link
                                                                    to={`/dashboard/update-marathon/${marathon._id}`}
                                                                    className='text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none'
                                                                >
                                                                    <svg
                                                                        xmlns='http://www.w3.org/2000/svg'
                                                                        fill='none'
                                                                        viewBox='0 0 24 24'
                                                                        strokeWidth='1.5'
                                                                        stroke='currentColor'
                                                                        className='w-5 h-5'
                                                                    >
                                                                        <path
                                                                            strokeLinecap='round'
                                                                            strokeLinejoin='round'
                                                                            d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                                                                        />
                                                                    </svg>
                                                                </Link>

                                                            </div>
                                                        </td>
                                                    </tr>)
                                                }
                                            </tbody>
                                        </table>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MyMarathonsList;