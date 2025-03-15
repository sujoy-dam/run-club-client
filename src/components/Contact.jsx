import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="py-12 bg-base-100" id="contact">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <div className="bg-base-300 shadow-lg p-6 rounded-2xl">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <FaPhoneAlt className="text-primary text-xl" />
                                <span className="">+123 456 7890</span>
                            </div>
                            <div className="flex items-center gap-4 mb-4">
                                <FaEnvelope className="text-primary text-xl" />
                                <span className="">contact@runclub.com</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-primary text-xl" />
                                <span className="">123 Marathon Street, City, Country</span>
                            </div>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <div className="bg-base-300 shadow-lg p-6 rounded-2xl">
                        <div>
                            <form>
                                <label className="label">Your Name</label>
                                <input type="text" placeholder="Enter your name" className="mb-4 input input-bordered w-full" />
                                <label className="label">Email Address</label>
                                <input type="email" placeholder="Enter your email" className="mb-4 input input-bordered w-full" />
                                <label className="label">Message</label>
                                <textarea placeholder="Write your message" className="mb-4 input input-bordered h-56 w-full"/>
                                <button className="btn btn-primary w-full">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;