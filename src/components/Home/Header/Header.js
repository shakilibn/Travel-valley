import React from 'react';
import dubai from '../../../images/dubai.jpg'
import './Header.css'

const Header = () => {
    return (
        <section>
            <div className="row p-5 header-container">
                <div className="col-md-6 p-5">
                    <h1 className="mb-4">Make Your <br/> Life Extraordinary</h1>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi velit voluptas delectus? Doloremque, tempora. Consectetur cum ratione error maiores recusandae.</p>
                    <button className="btn btn-primary">Booking</button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid rounded" src={dubai} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Header;