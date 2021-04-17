import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

const SimplePayment = ({ booking }) => {
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            booking.TrxId = (paymentMethod.id)
            booking.status = "pending";
            setPaymentError(null);
            postToDatabase();
        }


    };

    const postToDatabase = () => {
        fetch('https://blooming-hollows-97264.herokuapp.com/addBooking', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Booking added successfully');
                }
            })
    }

    return (
        <div className="w-50">
            <div>
                {
                    paymentError && <p className="text-center" style={{ color: 'red' }}>{paymentError}</p>
                }
                {
                    paymentSuccess && <p className="text-center" style={{ color: 'green' }}>your transaction is successful</p>
                }
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                <label className="form-check-label" for="flexRadioDefault1">
                    Credit Card
                </label>
            </div>
            <div className="form-check d-inline">
                <input className="form-check-input  d-inline" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label className="form-check-label d-inline" for="flexRadioDefault2">
                    PayPal
                </label>
            </div>

            <form className="mt-3" onSubmit={handleSubmit}>
                <CardElement />
                <button className="mt-3 add-btn" type="submit" disabled={!stripe}>Pay</button>
            </form>
        </div>
    );
};

export default SimplePayment;