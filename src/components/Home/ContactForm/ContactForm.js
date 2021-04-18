import { Button } from 'react-bootstrap';
import React from 'react';
import './ContactForm.css'

const ContactForm = () => {
    const handleSend = () => {
        alert('Thank you..! We will contact you as soon as possible');
    }
    return (
        <div>
            < h5 className="text-center mt-5 pt-5 brand-text" > Contact</h5 >
            <h2 className="text-center mb-4 text-muted">Let us handle your <br /> project, professionally</h2>

            <div className="d-flex justify-content-center p-3">
                <div className="form-area">
                    <div className="d-flex justify-content-between">
                        <input type="text" name="firstName" className="form-control mb-3 input-style" placeholder="First Name" />
                        <input type="text" name="lastName" className="form-control mb-3 input-style d-inline" placeholder="Last Name" />
                    </div>
                    <div className="d-flex justify-content-between">
                        <input type="text" name="email" className="form-control mb-3 input-style" placeholder="Email Address" />
                        <input type="text" name="phone" className="form-control mb-3 input-style d-inline" placeholder="Phone Number" />
                    </div>

                    <textarea className="form-control mb-3 input-textarea" name="description" id="" rows="5" placeholder="Write your message"></textarea>
                    <div className="text-center mb-5">
                        <Button onClick={handleSend} className="brand-btn mt-3">Send Message</Button>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default ContactForm;