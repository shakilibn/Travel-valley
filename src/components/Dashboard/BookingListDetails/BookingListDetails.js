import React from 'react';
import { Button, Card } from 'react-bootstrap';

const BookingListDetails = ({ bookingList }) => {
    return (
        <div className="col-md-3 my-3">
            <div className="d-flex justify-content-center">
                <Card className="p-2"  style={{ width: '18rem' }}>
                    <div className="d-flex justify-content-around">
                        <Card.Img style={{ height: '50px', width: '50px' }} className="" variant="top" src={bookingList.imageURL} alt="image"/>
                        <Button variant="primary">{bookingList.status}</Button>
                    </div>
                    <Card.Body>
                        <Card.Title>{bookingList.name}</Card.Title>
                        <Card.Text>{bookingList.service}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default BookingListDetails;