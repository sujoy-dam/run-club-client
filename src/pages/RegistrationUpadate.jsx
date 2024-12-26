import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { format } from 'date-fns';

const RegistrationUpadate = () => {

    const { user } = useContext(AuthContext)
    const [updateApply, setUpdateApply] = useState({})
    const { id } = useParams()
    // console.log(id)
    // console.log(singleMarathon)
    const navigate = useNavigate()
    // const [startDate, setStartDate] = useState(new Date())
    // const [startRegistrationDate, setStartRegistrationtDate] = useState(new Date());
    // const [endRegistrationDate, setEndRegistrationtDate] = useState(new Date());
    // const [marathonStartDate, setMarathonStartDate] = useState(new Date())

    useEffect(() => {
        fetchSingleMarathonData()
    }, [id])
    const fetchSingleMarathonData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/apply/${id}`)
        setUpdateApply(data)
        console.log(data)
        //     setStartRegistrationtDate(new Date(data.startRegistration))
        //     setEndRegistrationtDate(new Date(data.endRegistration))
        //     setMarathonStartDate(new Date(data.startMarathon))
        //     setStartDate(data.createdAt)
    }



    const handleUpdate = async (e) => {

        e.preventDefault()
        const form = e.target;
        // const form= e.target;
        // const email= updateApply.email;
        // const title =form.marathonTitle.value;
        // const startDate = form.startDate.value;
        const firstName= form.firstName.value;
        const lastName = form.lastName.value;
        const mobileNo = form.contactNumber.value;
        const info = form.additionalInfo.value;
        const updateData = {

            firstName,
            lastName,
            mobileNo,
            info
        }
        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/update-apply/${id}`, updateData)
            // console.log(data)
            form.reset()
            toast.success('Updated successfully')
            navigate('/my-apply-list')
        } catch (err) {
            // console.log(err)
            toast.error(err.message)
        }

    }
    return (
        <div>
            <h1>Registration Update</h1>
            <h2>{updateApply._id}</h2>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
                    <h2 className="text-2xl font-bold text-center mb-6">Registration Form</h2>
                    <form onSubmit={handleUpdate} className="space-y-4">
                        {/* Email Field (Auto-filled and Read-only) */}
                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={updateApply.email}
                                readOnly
                                className="input input-bordered w-full bg-gray-100"
                            />
                        </div>

                        {/* Marathon Title (Read-only) */}
                        <div>
                            <label className="label">
                                <span className="label-text">Marathon Title</span>
                            </label>
                            <input
                                type="text"
                                name="marathonTitle"
                                // value={marathon.title}
                                defaultValue={updateApply.title}
                                readOnly
                                className="input input-bordered w-full bg-gray-100"
                            />
                        </div>

                        {/* Marathon Start Date (Read-only) */}
                        <div>
                            <label className="label">
                                <span className="label-text">Start Date</span>
                            </label>
                            <input
                                type="text"
                                name="startDate"
                                // value={marathon.startDate}
                                defaultValue={updateApply.startDate && format(new Date(updateApply.startDate), 'P')}
                                readOnly
                                className="input input-bordered w-full bg-gray-100"
                            />
                        </div>

                        {/* First Name Field */}
                        <div>
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                // value={formData.firstName}
                                // onChange={handleChange}
                                placeholder="Enter your first name"
                                className="input input-bordered w-full"
                                defaultValue={updateApply.firstName}
                                required
                            />
                        </div>

                        {/* Last Name Field */}
                        <div>
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                // value={formData.lastName}
                                // onChange={handleChange}
                                defaultValue={updateApply.lastName}
                                placeholder="Enter your last name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Contact Number Field */}
                        <div>
                            <label className="label">
                                <span className="label-text">Contact Number</span>
                            </label>
                            <input
                                type="tel"
                                name="contactNumber"
                                // value={formData.contactNumber}
                                // onChange={handleChange}
                                placeholder="Enter your contact number"
                                className="input input-bordered w-full"
                                defaultValue={updateApply.mobileNo}
                                required
                            />
                        </div>

                        {/* Additional Info Field */}
                        <div>
                            <label className="label">
                                <span className="label-text">Additional Info</span>
                            </label>
                            <textarea
                                name="additionalInfo"
                                // value={formData.additionalInfo}
                                // onChange={handleChange}
                                placeholder="Any additional information"
                                className="textarea textarea-bordered w-full"
                                defaultValue={updateApply.info}
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn btn-primary w-full">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationUpadate;