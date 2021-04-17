import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './sidebar.css';
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faPlus, faUserPlus, faThLarge, faShoppingCart, faCommentDots, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignOut = () => {
        firebase.auth().signOut()
        .then(() => {
            const loggedInfo = {...loggedInUser};
            loggedInfo.isSignedIn = false;
            loggedInfo.name = '';
            loggedInfo.email = '';
            loggedInfo.image = '';
            loggedInfo.isAdmin = false;
            setLoggedInUser(loggedInfo)

          }).catch((error) => {
            // An error happened.
          });
    }

    return (
        <div className="sidebar col-md-2">
            <div className="p-4 pb-5 d-flex flex-column justify-content-between" style={{ height: '93vh' }}>
                <ul className="list-unstyled">
                    {loggedInUser.isAdmin ? <div>
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
                <div>
                    <Link onClick={handleSignOut} className="text-white" to="/"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Log out</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;