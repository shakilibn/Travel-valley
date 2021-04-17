import React from 'react';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Ie1LlK0PeBbDwtoBVXD5JQrBLZTZx2Ix560O2SvYtoDY1BZDMlDvkIGsGIHn0K0yRwXMWyb0IuX4LtR2jnAeAGw00aqXnsnf4');

const PaymentProcess = () => {
    return (
        <Elements stripe={stripePromise}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
        </Elements>
    );
};

export default PaymentProcess;