import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';

const UpdateMarathon = () => {
    const {user}=useContext(AuthContext)
    const [singleMarathon, setSingleMarathon] = useState({})
    const { id } = useParams()
    // console.log(id)
    // console.log(singleMarathon)
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date())
    const [startRegistrationDate, setStartRegistrationtDate] = useState(new Date());
    const [endRegistrationDate, setEndRegistrationtDate] = useState(new Date());
    const [marathonStartDate, setMarathonStartDate] = useState(new Date())

    useEffect(() => {
        fetchSingleMarathonData()
    }, [id])
    const fetchSingleMarathonData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/marathon/${id}`)
        setSingleMarathon(data)
        setStartRegistrationtDate(new Date(data.startRegistration))
        setEndRegistrationtDate(new Date(data.endRegistration))
        setMarathonStartDate(new Date(data.startMarathon))
        setStartDate(data.createdAt)
    }

    const handleUpdate = async (e)=>{

        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const startRegistration = startRegistrationDate;
        const endRegistration = endRegistrationDate;
        const startMarathon = marathonStartDate;
        const location = form.location.value;
        const marathonImg = form.img.value;
        const createdAt = startDate;
        const distance= form.distance.value;
        const description = form.description.value;
        const updateData = {
            title, 
            startRegistration, 
            endRegistration, 
            startMarathon,
            location, 
            marathonImg,
            createdAt,
            distance,
            description,
            email: user?.email,
            name:user?.displayName,
            photo:user?.photoURL,
            registration_count :singleMarathon.registration_count
        }
        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/update-marathon/${id}`, updateData)
            // console.log(data)
            form.reset()
            toast.success('Marathon updated successfully')
            navigate('/my-marathons-list')
        } catch (err) {
            // console.log(err)
            toast.error(err.message)
        }

    }
    return (
        <div>
            {/* <h1>merathon</h1> */}
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Update a Marathon Event</h2>
                <form onSubmit={handleUpdate} className="space-y-4">
                    {/* Marathon Title */}
                    <div className="form-control">
                        <label className="label">Marathon Title</label>
                        <input
                            type="text"
                            name="title"
                            // value={formData.title}
                            // onChange={handleChange}
                            placeholder="Enter marathon title"
                            className="input input-bordered"
                            defaultValue={singleMarathon.title}
                            required
                        />
                    </div>

                    {/* Registration Dates */}
                    <div className="form-control">
                        <label className="label">Start Registration Date</label>
                        <DatePicker
                            selected={startRegistrationDate}
                            onChange={(date) => setStartRegistrationtDate(date)}
                            className="input input-bordered"
                            placeholderText="Select start date"
                            required
                        />
                    </div>
                    {/* end Registration Date  */}
                    <div className="form-control">
                        <label className="label">End Registration Date</label>
                        <DatePicker
                            selected={endRegistrationDate}
                            onChange={(date) => setEndRegistrationtDate(date)}
                            className="input input-bordered"
                            placeholderText="Select end date"
                            required
                        />
                    </div>

                    {/* Marathon Start Date */}
                    <div className="form-control">
                        <label className="label">Marathon Start Date</label>
                        <DatePicker
                            selected={marathonStartDate}
                            onChange={(date) => setMarathonStartDate(date)}
                            className="input input-bordered"
                            placeholderText="Select marathon start date"
                            required
                        />
                    </div>

                    {/* Location */}
                    <div className="form-control">
                        <label className="label">Location</label>
                        <input
                            type="text"
                            name="location"
                            // value={formData.location}
                            // onChange={handleChange}
                            placeholder="Enter location"
                            className="input input-bordered"
                            defaultValue={singleMarathon.location}
                            required
                        />
                    </div>

                    {/* Running Distance */}
                    <div className="form-control">
                        <label className="label">Running Distance</label>
                        <select
                            name="distance"
                            // value={formData.distance}
                            // onChange={handleChange}
                            className="select select-bordered"
                            defaultValue={singleMarathon.distance}
                            required
                        >
                            <option value="">Select distance</option>
                            <option value="25k">25k</option>
                            <option value="10k">10k</option>
                            <option value="3k">3k</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div className="form-control">
                        <label className="label">Description</label>
                        <textarea
                            name="description"
                            // value={formData.description}
                            // onChange={handleChange}
                            placeholder="Enter description"
                            className="textarea textarea-bordered"
                            rows="4"
                            defaultValue={singleMarathon.description}
                            required
                        ></textarea>
                    </div>

                    {/* Marathon Image */}
                    <div className="form-control">
                        <label className="label">Marathon Image</label>
                        <input
                            type="text"
                            name='img'
                            // onChange={handleFileChange}
                            className="file-input file-input-bordered"
                            defaultValue={singleMarathon.marathonImg}
                            required
                        />
                    </div>

                    {/* CreatedAt  */}
                    <div className="form-control">
                        <label className="label">CreatedAt</label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="input input-bordered"
                            placeholderText="Select marathon start date"
                            // defaultValue={singleMarathon.createdAt}
                            required
                            readOnly
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-full">
                        Create Marathon
                    </button>
                </form>
            </div>

        </div>
    );
};

export default UpdateMarathon;