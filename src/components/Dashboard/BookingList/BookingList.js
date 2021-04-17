import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import BookingListDetails from '../BookingListDetails/BookingListDetails';
import Sidebar from '../Sidebar/Sidebar';
import './BookingList.css'

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookingList, setBookingList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookings?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookingList(data))
    }, [])
    return (
        <section className="row">
            <Sidebar />

            <div className="col-md-10 booking-list p-5">
                <h4 className="mb-5">Service List</h4>
                {loggedInUser.email ? 
                <div className="row">
                    {
                        bookingList.map(bookingList => <BookingListDetails key={bookingList._id} bookingList={bookingList} />)
                    }
                </div> :
                <p><strong>You have not login yet.!</strong></p>
                }
            </div>
        </section>
    );
};

export default BookingList;