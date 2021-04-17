import React, { useEffect, useState } from 'react';
import solomon from '../../../images/solomon.jpg';
import mexico from '../../../images/mexico.jpg';
import alaska from '../../../images/alaska.jpg';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: 'Iron Man',
        designation: 'CEO',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iure labore facilis blanditiis quam architecto saepe voluptate tenetur reprehenderit facere.',
        price: 2000,
        img: solomon,
        star:5
    },
    {
        id: 2,
        name: 'Doctor Strange',
        designation: 'CEO',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iure labore facilis blanditiis quam architecto saepe voluptate tenetur reprehenderit facere.',
        price: 2200,
        img: mexico,
        star:5
    },
    {
        id: 3,
        name: 'Thor',
        designation: 'CEO',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iure labore facilis blanditiis quam architecto saepe voluptate tenetur reprehenderit facere.',
        price: 2100,
        img: alaska,
        star:5
    },
]

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('https://blooming-hollows-97264.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <section className="mt-5 pt-4 testimonials-container">
            <div className="p-4">
                <h5 className="text-center mb-5">Testimonials</h5>
                <div className="row">
                    {
                        reviews.map(testimonial => <TestimonialDetails key={testimonial._id} testimonial={testimonial}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;