import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const ServiceDetails = ({ service }) => {
    
    return (
        <div className="col-md-4">
            <div className=" d-flex justify-content-center">
                <Card className="mx-2 my-3 shadow" style={{ width: '20rem' }}>
                    <Card.Img variant="top" style={{ height: '220px' }} src={service.imageURL} />
                    <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                        <Card.Text><FontAwesomeIcon className="text-secondary" icon={faGlobe} /><span className="text-secondary"> {service.description}</span></Card.Text>
                        <div className="d-flex justify-content-between">
                            <h2 className="brand-text">${service.price}</h2>
                            <Button className="brand-btn" as={Link} to={`/service/${service._id}`} variant="primary">Book Now</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ServiceDetails;