import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './GuideDetails.css';

const GuideDetails = ({ guide }) => {

    return (
        <div className="col-md-4">
            <div className=" d-flex justify-content-center">
                <Card className="mx-2 my-3 guide-card text-center shadow" style={{ width: '18rem' }}>
                    <Card.Img variant="top" style={{ height: '300px' }} src={guide.imageURL} />
                    <Card.Body>
                        <Card.Title>{guide.name}</Card.Title>
                            <Button className="guide-btn" variant="primary" block>Travel with me</Button>
                            {/* <Button className="guide-btn" as={Link} to={`/guide/${guide._id}`} variant="primary" block>Travel with me</Button> */}
                        </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default GuideDetails;