import { Button } from 'react-bootstrap';
import React from 'react';
import featuredImage from '../../../images/featuredImage2.jpg';
import sajek from '../../../images/sajek.jpg';
import boy from '../../../images/boy.jpg';
import ireland2 from '../../../images/ireland2.jpg';
import ireland3 from '../../../images/ireland3.jpg';
import hawai from '../../../images/hawai.jpg';
import './FeatureService.css';
import { Link } from 'react-router-dom';

const FeaturedService = () => {
    return (
        <section className="row my-5 p-5 feature-container">
            <div className="col-md-6 text-center py-3 d-none d-md-block">
                {/* <img className="img-fluid rounded image-4" style={{ height: '350px', width:'60%'}} src={ireland} alt="" /> */}
                {/* <img className="img-fluid rounded image-3" style={{ height: '350px', width:'60%'}} src={boy} alt="" /> */}
                <img className="img-fluid rounded image-2" style={{ height: '350px', width:'60%'}} src={sajek} alt="" />
                <img className="img-fluid rounded image-1" src={featuredImage} alt="" />
            </div>
            <div className="col-md-6">
                <h1 className="mb-5 brand-text3">Choose Your <br /> Adventure at one place with Ease</h1>
                <p className="mb-3 text-white">TourPress offers hundreds of tours and activities for travelers around the globe. Choose from sightseeing tours to spa escapes to interactive cultural programs and so much more. TourPress is the only way to travel.</p>
                <img className="side-img mr-2" src={ireland2} alt="" style={{height:'100px'}}/>
                <img className="side-img mr-3"  src={hawai} alt="" style={{height:'100px'}}/>
                <img className="side-img mr-3" src={ireland3} alt="" style={{height:'100px'}}/>
                <img className="side-img mr-3" src={sajek} alt="" style={{height:'100px'}}/>
                <p className="mb-4 mt-3 text-white d-none d-md-block">TourPress offers hundreds of tours and activities for travelers around the globe. Choose from sightseeing tours to spa escapes to interactive cultural programs and so much more.TourPress offers hundreds of tours and activities for travelers around the globe. Choose from sightseeing tours to spa escapes to interactive cultural programs and so much more. TourPress is the only way to travel.</p>
                <Button as={Link} to="/services" className="brand-btn" variant="primary">Explore Tours</Button>
            </div>
        </section>
    );
};

export default FeaturedService;