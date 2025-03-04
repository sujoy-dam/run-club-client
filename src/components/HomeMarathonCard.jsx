import { format } from 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';

const HomeMarathonCard = ({marathon}) => {
    const {_id, title,
        startRegistration,email,
        endRegistration, location, 
        marathonImg, registration_count}=marathon
    return (
        <div>
            <div className="card bg-base-100 shadow-xl transform transition-transform hover:scale-105">
                    <figure>
                      <img src={marathonImg} alt={title} className="h-48 w-full object-cover" />
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
                        <button className="btn btn-primary">See Details</button>
                        </Link>
                      </div>
                    </div>
                  </div>
        </div>
    );
};

export default HomeMarathonCard;