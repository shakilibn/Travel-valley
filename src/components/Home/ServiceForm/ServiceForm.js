import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import SimplePayment from '../../PaymentProcess/SimplePayment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')
const stripePromise = loadStripe('pk_test_51Ie1LlK0PeBbDwtoBVXD5JQrBLZTZx2Ix560O2SvYtoDY1BZDMlDvkIGsGIHn0K0yRwXMWyb0IuX4LtR2jnAeAGw00aqXnsnf4');

const ServiceForm = ({ modalIsOpen, closeModal, service }) => {
    const [formData, setFormData] = useState({});
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // data.service = service;
        // data.date = new Date();

        // fetch('http://localhost:5000/addService', {
        //     method: 'POST',
        //     headers: {'Content-Type':'Application/json'},
        //     body: JSON.stringify()
        // })
        // .then(res => res.json())
        // .then(success => {
        //     if(success){
        //         closeModal();
        //         alert("Service Booked Successfully");
        //     }
        // })

        console.log(data);
        setFormData(data);

        // fetch('http://localhost:5000/addBooking', {
        //     method: 'POST',
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(success => {
        //         if (success) {
        //             alert('Booking added successfully');
        //         }
        //     })
    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className="text-center">{service.name}</h2>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="service" placeholder="Service" className="form-control" />
                        {errors.service && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
                <div>
                    <Elements stripe={stripePromise}>
                        <SimplePayment booking={formData}/>
                    </Elements>
                </div>
            </Modal>
        </div>
    );
};

export default ServiceForm;