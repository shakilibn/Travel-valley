import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimplePayment from '../../PaymentProcess/SimplePayment';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const stripePromise = loadStripe('pk_test_51Ie1LlK0PeBbDwtoBVXD5JQrBLZTZx2Ix560O2SvYtoDY1BZDMlDvkIGsGIHn0K0yRwXMWyb0IuX4LtR2jnAeAGw00aqXnsnf4');

const MakeBooking = () => {
    const { serviceId } = useParams();
    const [bookingInfo, setBookingInfo] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [service, setService] = useState({});
    const [confirm, setConfirm] = useState(false);
    const [serviceName, setServiceName] = useState('');

    useEffect(() => {
        const url = `https://blooming-hollows-97264.herokuapp.com/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


    const handleConfirm = () => {
        setConfirm(true);

        const newBookingInfo = { ...bookingInfo };
        newBookingInfo.name = loggedInUser.name;
        newBookingInfo.email = loggedInUser.email;
        if(serviceName){
            newBookingInfo.service = serviceName;
            newBookingInfo.imageURL = loggedInUser.image;
        }else {
            newBookingInfo.service = service.name;
            newBookingInfo.imageURL = service.imageURL;
        }
        newBookingInfo.price = service.price;
        console.log(newBookingInfo);
        setBookingInfo(newBookingInfo);
    }

    const handleBlur = (e) => {
        setServiceName(e.target.value);
    }
    return (
        <section className=" row ">
                <Sidebar />
            <div className="col-md-10 right-area">
                {
                    confirm ?
                        <div className="right-interior">
                            <h5>Pay with</h5>
                            <Elements stripe={stripePromise}>
                                <SimplePayment booking={bookingInfo} />
                            </Elements>
                        </div>
                        :
                        <div className="right-interior">
                            <h4 className="mb-5">Book</h4>
                            <label htmlFor="name">your name</label>
                            <input className="form-control w-50 mb-3" type="text" name="name" value={loggedInUser.name} placeholder="your name" />

                            <label htmlFor="email">your email</label>
                            <input className="form-control w-50 mb-3" type="text" name="email" value={loggedInUser.email} placeholder="your gmail" />

                            <label htmlFor="service">service name</label>
                            <input onBlur={handleBlur} className="form-control w-50 mb-3" type="text" name="service" value={service.name} placeholder="service name" />

                            <p>your service charged will be <strong>${service.price}</strong></p>
                            <Button className="brand-btn" onClick={handleConfirm} variant="primary">Confirm</Button>
                        </div>
                }
            </div>





        </section>
    );
};

export default MakeBooking;