import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [email, setEmail] = useState({});

    const handleBlur = e => {
        const newEmail = { ...email };
        newEmail.[e.target.name] = e.target.value;
        setEmail(newEmail);
    }
    const handleSubmit = () => {
        fetch('https://blooming-hollows-97264.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Admin added successfully');
                }
            })
    }
    return (
        <section className="row">
            <Sidebar />
            <div className="col-md-10 right-area">
                <div className="right-interior">
                    <h4 className="mb-5">Make Admin</h4>
                    <label htmlFor="email"><strong>Email</strong></label> <br />
                    <input onBlur={handleBlur} name="email" type="text" className="form-control w-25 d-inline mr-3" placeholder="shakil@gmail.com" />
                    <Button className="brand-btn" onClick={handleSubmit} variant="primary">Submit</Button>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;