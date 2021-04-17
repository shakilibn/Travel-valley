import { Button } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import './MakeReview.css'
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../../App';

const MakeReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [review, setReview] = useState({});

    const handleBlur = e => {
        const newReview = { ...review };
        newReview.[e.target.name] = e.target.value;
        newReview.img = loggedInUser.image;
        setReview(newReview);
    }

    const handleSubmit = () => {
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('review added successfully');
                }
            })
    }
    return (
        <section className="row">
            <Sidebar />
            <div className="col-md-10 make-review p-5">
                <h4>Review</h4>
                <form action="">
                    <input onBlur={handleBlur} className="form-control w-50 mb-3" type="text" name="name" placeholder="Your name" />
                    <input onBlur={handleBlur} className="form-control w-50 mb-3" type="text" name="designation" placeholder="Company's name, Designation" />
                    <textarea onBlur={handleBlur} className="form-control w-50 mb-3" name="description" id="" rows="5"></textarea>
                    <Button onClick={handleSubmit} variant="primary">Submit</Button>
                </form>
            </div>
        </section>
    );
};

export default MakeReview;