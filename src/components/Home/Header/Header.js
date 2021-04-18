import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import dubai from '../../../images/dubai.jpg'
import './Header.css'

const Header = () => {
    return (
        <section>
            <div className="row p-5 header-container">
                <div className="col-md-6 p-5">
                    <h1 className="mb-5 text-white">Make Your <br/> Life Extraordinary</h1>
                    <p className="mb-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi velit voluptas delectus? Doloremque, tempora. Consectetur cum ratione error maiores recusandae.</p>
                    <p className="mb-5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi velit voluptas delectus? Doloremque, tempora. Consectetur cum ratione error maiores recusandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi velit voluptas delectus? Doloremque, tempora. Consectetur cum ratione error maiores recusandae.</p>
                    <Button as={Link} to="/services" className="btn btn-primary brand-btn">Booking</Button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid rounded" src={dubai} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Header;