import React from 'react';
import './TestimonialDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const TestimonialDetails = ({ testimonial }) => {
    return (
        <div className="col-md-4 my-3">
            <div className="testimonial p-4 rounded shadow">
                <div className="d-flex align-items-center mb-4">
                    <img style={{ height: '50px' }} className="mr-3 rounded-circle" src={testimonial.img} alt="profile picture" />
                    <div>
                        <h6>{testimonial.name}</h6>
                        <h6>{testimonial.designation}</h6>
                    </div>
                </div>
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <p className="mt-4">{testimonial.description}</p>

            </div>
        </div>
    );
};

export default TestimonialDetails;