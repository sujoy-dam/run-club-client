import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MarathonDetails = () => {
    const [marathon, setMarathon] = useState({})
    const {id}=useParams()
    useEffect(() => {
        fetchSingleMarathonData()
    }, [id])
    const fetchSingleMarathonData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/marathon/${id}`)
       setMarathon(data)
    }
    return (
        <div>
            <h1>Marathons Details</h1>
            <div className="container mx-auto px-4 py-8">
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={marathon.marathonImg}
                            alt="Marathon"
                            className="w-full h-60 object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold">{marathon.title}</h2>
                        <p className="text-sm text-gray-500">
                            Created on: {marathon.createdAt}
                        </p>
                        <div className="mt-4">
                            <p>
                                <strong>Start Registration Date:</strong>{" "}
                                {marathon.startRegistration}
                            </p>
                            <p>
                                <strong>End Registration Date:</strong>{" "}
                                {marathon.endRegistration}
                            </p>
                            <p>
                                <strong>Marathon Start Date:</strong> {marathon.startMarathon}
                            </p>
                            <p>
                                <strong>Location:</strong> {marathon.location}
                            </p>
                            <p>
                                <strong>Running Distance:</strong> {marathon.distance}
                            </p>
                            <p className="mt-2">
                                <strong>Description:</strong> {marathon.description}
                            </p>
                            <p className="mt-4">
                                <strong>Total Registration Count:</strong>{" "}
                                {marathon.registration_count}
                            </p>
                        </div>
                        <div className="card-actions justify-end mt-6">
                            <button className="btn btn-primary">Register Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarathonDetails;