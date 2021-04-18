import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const BookingListDetails = ({ bookingList }) => {
        
    return (
        <div className="col-md-3 my-3">
            <div className="d-flex justify-content-center">
                <Card className="p-2 shadow" style={{ width: '18rem' }}>
                    <div className="d-flex justify-content-around">
                        <Card.Img style={{ height: '50px', width: '50px' }} className="rounded" variant="top" src={bookingList.imageURL} alt="image" />
                        <p className="text-white px-3 py-2 rounded" style={{backgroundColor: '#79B530'}}>{bookingList.status}</p>
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