import React from 'react';
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

    return (
        <section>
            <div className="">
                { loggedInUser.email ? <OrderList /> : <MakeBooking /> }
            </div>
        </section>
    );
};

export default Dashboard;