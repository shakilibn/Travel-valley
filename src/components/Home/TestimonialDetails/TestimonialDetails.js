import React from 'react';
import './TestimonialDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const TestimonialDetails = ({ testimonial }) => {
    return (
        <div className="col-md-4 my-3">
            <div className="testimonial p-4 rounded shadow">
                <div className="d-flex align-items-center">
                    <img style={{ height: '50px' }} className="mr-3" src={testimonial.img} alt="profile picture" />
                    <div>
                        <h6>{testimonial.name}</h6>
                        <h6>{testimonial.designation}</h6>
                    </div>
                </div>
                <p>{testimonial.description}</p>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
        </div>
    );
};

export default TestimonialDetails;