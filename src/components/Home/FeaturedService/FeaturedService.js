import { Button } from 'react-bootstrap';
import React from 'react';
import featuredImage from '../../../images/featuredImage2.jpg';
import './FeatureService.css';
import { Link } from 'react-router-dom';

const FeaturedService = () => {
    return (
        <section className="row my-5 p-5 feature-container">
            <div className="col-md-6 text-center py-3">
                <img className="img-fluid rounded" style={{ height: '450px', width:'85%' }} src={featuredImage} alt="" />
            </div>
            <div className="col-md-6 align-self-center">
                <h1 className="mb-5 brand-text2">Choose Your <br /> Adventure at one place with Ease</h1>
                <p className="mb-5 ">TourPress offers hundreds of tours and activities for travelers around the globe. Choose from sightseeing tours to spa escapes to interactive cultural programs and so much more. TourPress is the only way to travel.</p>
                <Button as={Link} to="/services" className="brand-btn" variant="primary">Explore Tours</Button>
            </div>
        </section>
    );
};

export default FeaturedService;