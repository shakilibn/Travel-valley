import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Menubar from '../../shared/Menubar/Menubar';
import AddService from '../AddService/AddService';
import BookingList from '../BookingList/BookingList';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MakeBooking from '../MakeBooking/MakeBooking';
import MakeReview from '../MakeReview/MakeReview';
import OrderList from '../OrderList/OrderList';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://blooming-hollows-97264.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    return (
        <section>
            <div>
                { isAdmin ? <OrderList /> : <MakeBooking /> }
            </div>
        </section>
    );
};

export default Dashboard;