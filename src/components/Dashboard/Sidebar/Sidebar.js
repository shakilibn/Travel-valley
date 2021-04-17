import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faPlus, faUserPlus, faThLarge, faShoppingCart, faCommentDots } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
        <div className="sidebar col-md-2">
            <div className="p-4" style={{ height: '100vh' }}>
                <ul className="list-unstyled">
                    {isAdmin ? <div>
                        <li>
                            <Link className="text-white" to="/orderList"><FontAwesomeIcon icon={faBox} /> <span>Order List</span></Link>
                        </li>
                        <li>
                            <Link className="text-white" to="/addService"><FontAwesomeIcon icon={faPlus} /> <span>Add service</span></Link>
                        </li>
                        <li>
                            <Link className="text-white" to="/addGuide"><FontAwesomeIcon icon={faUserPlus} /> <span>Add Guide</span></Link>
                        </li>
                        <li>
                            <Link className="text-white" to="/addDestination"><FontAwesomeIcon icon={faPlus} /> <span>Add Destination</span></Link>
                        </li>
                        <li>
                            <Link className="text-white" to="/makeAdmin" ><FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span></Link>
                        </li>
                        <li>
                            <Link className="text-white" to="/manageServices" ><FontAwesomeIcon icon={faThLarge} /> <span>Manage Services</span></Link>
                        </li>
                    </div> :
                    <div>
                        <li>
                            <Link className="text-white" to="/book"><FontAwesomeIcon icon={faShoppingCart} /> <span>Book</span></Link>
                        </li>
                        <li>
                            <Link className="text-white" to="/bookingList"><FontAwesomeIcon icon={faBox} /> <span>Booking list</span></Link>
                        </li>
                        <li>
                            <Link className="text-white" to="/review"><FontAwesomeIcon icon={faCommentDots} /> <span>Review</span></Link>
                        </li>
                    </div>}                    
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;