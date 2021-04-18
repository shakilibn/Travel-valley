import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GuideDetails = ({ guide }) => {

    return (
        <div className="col-md-4">
            <div className=" d-flex justify-content-center destination-card">
                <Card className="mx-2 my-3 destination-card text-center shadow" style={{ width: '18rem', overflow: 'hidden' }}>
                    <Card.Img variant="top" style={{ height: '300px' }} src={guide.imageURL} />
                    <Card.Body style={{zIndex:'1', backgroundColor:'white'}}>
                        <Card.Title className="text-secondary">{guide.name}</Card.Title>
                            <Button className="brand-btn guide-btn" as={Link} to="/services" variant="primary" block>Travel with me</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default GuideDetails;