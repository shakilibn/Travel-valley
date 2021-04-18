import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GuideDetails = ({ guide }) => {

    return (
        <div className="col-md-4">
            <div className=" d-flex justify-content-center">
                <Card className="mx-2 my-3 guide-card text-center shadow" style={{ width: '18rem' }}>
                    <Card.Img variant="top" style={{ height: '300px' }} src={guide.imageURL} />
                    <Card.Body>
                        <Card.Title className="text-secondary">{guide.name}</Card.Title>
                            <Button className="brand-btn guide-btn" as={Link} to="/services" variant="primary" block>Travel with me</Button>
                        </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default GuideDetails;