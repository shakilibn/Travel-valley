import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceDetails = ({ service }) => {
    
    return (
        <div className="col-md-4">
            <div className=" d-flex justify-content-center">
                <Card className="mx-2 my-3 shadow" style={{ width: '20rem' }}>
                    <Card.Img variant="top" style={{ height: '220px' }} src={service.imageURL} />
                    <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                        <Card.Text>{service.description}</Card.Text>
                        <div className="d-flex justify-content-between">
                            <h2>${service.price}</h2>
                            <Button as={Link} to={`/service/${service._id}`} variant="primary">Book Now</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ServiceDetails;