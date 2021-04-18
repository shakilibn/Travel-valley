import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { UserContext } from '../../../App';
import BookingListDetails from '../BookingListDetails/BookingListDetails';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookingList, setBookingList] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('https://blooming-hollows-97264.herokuapp.com/bookings?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setBookingList(data);
                setLoading(false);
            })
    }, [])
    return (
        <section className="row">
            <Sidebar />

            <div className="col-md-10 right-area">
                <h4 className="mt-3 mb-3">Service List</h4>
                {loading ? <Spinner className="loading-spinner" animation="border" /> :
                    <div className="row">
                        {
                            bookingList.map(bookingList => <BookingListDetails key={bookingList._id} bookingList={bookingList} />)
                        }
                    </div>}
            </div>
        </section>
    );
};

export default BookingList;