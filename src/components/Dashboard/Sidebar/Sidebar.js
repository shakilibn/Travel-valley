import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './sidebar.css';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])
    return (
        <div className="sidebar col-md-2">
            <div className=" p-3" style={{ height: '100vh' }}>
                <ul className="list-unstyled">

                    <li>
                        <Link to="/orderList">Order List</Link>
                    </li>
                    <li>
                        <Link to="/addService">Add service</Link>
                    </li>
                    <li>
                        <Link to="/addGuide">Add Guide</Link>
                    </li>
                    <li>
                        <Link to="/addDestination">Add Destination</Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" >Make Admin</Link>
                    </li>
                    <li>
                        <Link to="/manageServices" >Manage Services</Link>
                    </li>
                    <li>
                        <Link to="/bookingList">Booking list</Link>
                    </li>
                    <li>
                        <Link to="/book">Book</Link>
                    </li>
                    <li>
                        <Link to="/bookingList">Booking list</Link>
                    </li>
                    <li>
                        <Link to="/review">Review</Link>
                    </li>
                    {/* {isAdmin ? <div>
                        <li>
                            <Link to="/orderList">Order List</Link>
                        </li>
                        <li>
                            <Link to="/addService">Add service</Link>
                        </li>
                        <li>
                            <Link to="/addGuide">Add Guide</Link>
                        </li>
                        <li>
                            <Link to="/addDestination">Add Destination</Link>
                        </li>
                        <li>
                            <Link to="/makeAdmin" >Make Admin</Link>
                        </li>
                        <li>
                            <Link to="/manageServices" >Manage Services</Link>
                        </li>
                        <li>
                            <Link to="/bookingList">Booking list</Link>
                        </li>
                    </div> :
                    <div>
                        <li>
                            <Link to="/book">Book</Link>
                        </li>
                        <li>
                            <Link to="/bookingList">Booking list</Link>
                        </li>
                        <li>
                            <Link to="/review">Review</Link>
                        </li>
                    </div>} */}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;