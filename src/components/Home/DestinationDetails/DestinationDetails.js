import React from 'react';
import { Card, Button } from 'react-bootstrap';

const DestinationDetails = ({destination}) => {
    return (
        <div className="col-md-4">
            <div className=" d-flex justify-content-center">
                <Card className="mx-2 my-3 shadow" style={{ width: '22rem' }}>
                    <Card.Img variant="top" style={{ height: '250px' }} src={destination.imageURL} />
                    <Card.Body>
                        <Card.Title>{destination.name}</Card.Title>
                        <Card.Text><small><span className="text-secondary">{destination.description}</span></small></Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default DestinationDetails;