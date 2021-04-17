import { Button } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
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
        fetch('https://blooming-hollows-97264.herokuapp.com/addReview', {
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
            <div className="col-md-10 right-area">
                <div className="right-interior">
                    <h4 className="mb-5">Review</h4>
                    <form action="">
                        <input onBlur={handleBlur} className="form-control w-50 mb-3" type="text" name="name" placeholder="Your name" />
                        <input onBlur={handleBlur} className="form-control w-50 mb-3" type="text" name="designation" placeholder="Company's name, Designation" />
                        <textarea onBlur={handleBlur} className="form-control w-50 mb-3" name="description" id="" rows="5" placeholder="write your comment"></textarea>
                        <Button className="brand-btn" onClick={handleSubmit} variant="primary">Submit</Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MakeReview;