import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import toast from 'react-hot-toast';

const MarathonRegister = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    console.log(id)
    const navigate = useNavigate()





    const [marathon, setMarathon] = useState({})
    // const { id } = useParams()
    useEffect(() => {
        fetchSingleMarathonData()
    }, [id])
    const fetchSingleMarathonData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/marathon/${id}`)
        console.log(data)
        setMarathon(data)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('connected')
        // console.log('Form Submitted:', { ...formData, email: user.email, marathon });
        const form= e.target;
        const email= user?.email;
        const title =form.marathonTitle.value;
        const startDate = form.startDate.value;
        const firstName= form.firstName.value;
        const lastName = form.lastName.value;
        const mobileNo = form.contactNumber.value;
        const info = form.additionalInfo.value;
        if(marathon?.email === user?.email){
            return toast.success('You don join your own marathon')
        }
        const registerData = {
            email,
            title,
            startDate,
            firstName,
            lastName,
            mobileNo,
            info
        }
        console.log(registerData)
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/apply`, registerData)
            // console.log(data)
            form.reset()
            toast.success('Registered successfully')
            navigate('/my-apply-list')
        } catch (err) {
            // console.log(err)
            toast.error(err.message)
        }
    };

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
                    <h2 className="text-2xl font-bold text-center mb-6">Registration Form</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email Field (Auto-filled and Read-only) */}
                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={user.email}
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
                                defaultValue={marathon.title}
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
                                defaultValue={marathon.startMarathon && format(new Date(marathon.startMarathon), 'P')}
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

export default MarathonRegister;