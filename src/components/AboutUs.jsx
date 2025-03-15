import React from 'react';
import aboutImg from '../assets/images/aboutus.jpg'
import { Link } from 'react-router-dom';

const AboutUs = () => {
    
    return (
        <>
            <section className="bg-base-100 shadow-xl">
                <div className="container mx-auto p-16 text-center md:text-left border-2 rounded-xl">
                    {/* Title */}
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold mb-4">About Us</h2>
                        <p className="text-lg md:text-xl">
                            Empowering Runners, Inspiring Communities
                        </p>
                    </div>

                    {/* Image and Text Content */}
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* Image */}
                        <div className="w-full lg:w-1/2">
                            <img
                                src={aboutImg}
                                alt="Marathon runners"
                                className="rounded-lg shadow-xl transform transition-transform hover:scale-105"
                            />
                        </div>

                        {/* Text */}
                        <div className="w-full lg:w-1/2">
                            <h3 className="text-3xl font-semibold mb-6">
                                Our Mission and Vision
                            </h3>
                            <p className="text-lg mb-6">
                                At <span className="font-semibold text-yellow-300">Marathon Management</span>, our mission is to create life-changing experiences through running. We are dedicated to organizing marathons that bring people together, challenge limits, and celebrate the spirit of community.
                            </p>
                            <p className="text-lg mb-6">
                                Whether you're a seasoned athlete or a first-time runner, we ensure every race is memorable. Our vision is to cultivate a global community of runners united by their passion for fitness, health, and achievement.
                            </p>

                            {/* Call to Action */}
                            <Link to="/dashboard/add-marathon" className="btn btn-primary mt-6">Join Our Community</Link>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center bg-base-200 p-8 rounded-lg shadow-xl transform transition-transform hover:scale-105">
                            <h4 className="text-4xl font-bold text-blue-600">15+</h4>
                            <p className="text-gray-700">Years of Experience</p>
                        </div>
                        <div className="text-center bg-base-200 p-8 rounded-lg shadow-xl transform transition-transform hover:scale-105">
                            <h4 className="text-4xl font-bold text-blue-600">60,000+</h4>
                            <p className="text-gray-700">Runners Participated</p>
                        </div>
                        <div className="text-center bg-base-200 p-8 rounded-lg shadow-xl transform transition-transform hover:scale-105">
                            <h4 className="text-4xl font-bold text-blue-600">200+</h4>
                            <p className="text-gray-700">Successful Events</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;