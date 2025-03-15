import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddMarathon = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date())
    const [startRegistrationDate, setStartRegistrationtDate] = useState(new Date());
    const [endRegistrationDate, setEndRegistrationtDate] = useState(new Date());
    const [marathonStartDate, setMarathonStartDate] = useState(new Date())
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Submit form data logic here
        // console.log("Marathon Data:", );
        const form = e.target;
        const title = form.title.value;
        const startRegistration = startRegistrationDate;
        const endRegistration = endRegistrationDate;
        const startMarathon = marathonStartDate;
        const location = form.location.value;
        const marathonImg = form.img.value;
        const createdAt = startDate;
        const distance = form.distance.value;
        const description = form.description.value;
        const formData = {
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
            name: user?.displayName,
            photo: user?.photoURL,
            registration_count: 0
        }
        console.table(formData)
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/add-marathons`, formData)
            // console.log(data)
            form.reset()
            toast.success('Marathon added successfully')
            navigate('/dashboard/my-marathons-list')
        } catch (err) {
            // console.log(err)
            toast.error(err.message)
        }
    };
    return (
        <div className='bg-base-100'>
            {/* <h1>merathon</h1> */}
            <div className="w-full mx-auto p-2 md:p-6 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Create a Marathon Event</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-x-10 gap-5">
                    {/* Marathon Title */}
                    <div className="form-control col-span-full md:col-span-6">
                        <label className="label">Marathon Title</label>
                        <input
                            type="text"
                            name="title"
                            // value={formData.title}
                            // onChange={handleChange}
                            placeholder="Enter marathon title"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    {/* Registration Dates */}
                    <div className="form-control col-span-full md:col-span-6">
                        <label className="label">Start Registration Date</label>
                        <DatePicker
                            selected={startRegistrationDate}
                            onChange={(date) => setStartRegistrationtDate(date)}
                            className="input input-bordered w-full z-40"
                            placeholderText="Select start date"
                            required
                        />
                    </div>
                    {/* end Registration Date  */}
                    <div className="form-control col-span-full md:col-span-6">
                        <label className="label">End Registration Date</label>
                        <DatePicker
                            selected={endRegistrationDate}
                            onChange={(date) => setEndRegistrationtDate(date)}
                            className="input input-bordered w-full"
                            placeholderText="Select end date"
                            required
                        />
                    </div>

                    {/* Marathon Start Date */}
                    <div className="form-control col-span-full md:col-span-6">
                        <label className="label">Marathon Start Date</label>
                        <DatePicker
                            selected={marathonStartDate}
                            onChange={(date) => setMarathonStartDate(date)}
                            className="input input-bordered w-full"
                            placeholderText="Select marathon start date"
                            required
                        />
                    </div>

                    {/* Location */}
                    <div className="form-control col-span-full md:col-span-6">
                        <label className="label">Location</label>
                        <input
                            type="text"
                            name="location"
                            // value={formData.location}
                            // onChange={handleChange}
                            placeholder="Enter location"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    {/* Running Distance */}
                    <div className="form-control col-span-full md:col-span-6">
                        <label className="label">Running Distance</label>
                        <select
                            name="distance"
                            // value={formData.distance}
                            // onChange={handleChange}
                            className="select select-bordered"
                            required
                        >
                            <option value="">Select distance</option>
                            <option value="25k">25k</option>
                            <option value="10k">10k</option>
                            <option value="3k">3k</option>
                        </select>
                    </div>

                    {/* Marathon Image */}
                    <div className="form-control col-span-full md:col-span-6">
                        <label className="label">Marathon Image</label>
                        <input
                            type="text"
                            name='img'
                            // onChange={handleFileChange}
                            className="input input-bordered"
                            required
                        />
                    </div>

                    {/* CreatedAt  */}
                    <div className="form-control col-span-full md:col-span-6">
                        <label className="label">CreatedAt</label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="input input-bordered w-full"
                            placeholderText="Select marathon start date"
                            required
                            readOnly
                        />
                    </div>
                    {/* Description */}
                    <div className="form-control col-span-full md:col-span-12">
                        <label className="label">Description</label>
                        <textarea
                            name="description"
                            // value={formData.description}
                            // onChange={handleChange}
                            placeholder="Enter description"
                            className="textarea textarea-bordered"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-full col-span-12">
                        Create Marathon
                    </button>
                </form>
            </div>

        </div>
    );
};

export default AddMarathon;