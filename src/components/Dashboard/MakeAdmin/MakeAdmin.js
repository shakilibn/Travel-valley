import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import './MakeAdmin.css';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [email, setEmail] = useState({});

    const handleBlur = e => {
        const newEmail = { ...email };
        newEmail.[e.target.name] = e.target.value;
        setEmail(newEmail);
    }
    const handleSubmit = () => {
        fetch('http://localhost:5000/addAdmin', {
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
            <div className="make-admin col-md-10 p-5">
                <h4>Make Admin</h4>
                <label htmlFor="email"><strong>Email</strong></label> <br />
                <input onBlur={handleBlur} name="email" type="text" className="form-control w-25 d-inline mr-3" placeholder="shakil@gmail.com" />
                <Button onClick={handleSubmit} variant="primary">Submit</Button>
            </div>
        </section>
    );
};

export default MakeAdmin;