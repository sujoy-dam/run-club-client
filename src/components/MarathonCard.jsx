import { format } from 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const MarathonCard = ({ marathon }) => {
  const {_id, title,
    startRegistration,email,
    endRegistration, location, 
    marathonImg, registration_count}=marathon
  return (
    <>
      <div  
      className="card bg-base-100 shadow-xl hover:outline-2 hover:outline-slate-500">
        <figure>
          <img src={marathonImg} alt={title} className="w-full h-60 object-cover transform transition-transform hover:scale-105" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg font-bold">{title}</h2>
          <p className="text-sm text-gray-600">
            <strong>Location:</strong> {location}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Email:</strong> {email}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Registration:</strong> {format(new Date(startRegistration), 'P')} - {format(new Date(endRegistration), 'P')}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Perticipate:</strong> {registration_count}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/marathon-details/${_id}`}>
            <button className="btn btn-outline w-full">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarathonCard;