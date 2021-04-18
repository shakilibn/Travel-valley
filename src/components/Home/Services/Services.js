import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://blooming-hollows-97264.herokuapp.com/services")
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setIsLoading(false);
            })
    }, [])
    return (
        <section className="container d-flex justify-content-around mt-5 pt-4">
            <div>
                <h4 className="text-center mb-5 brand-text2">Our Services</h4>
                <p className="text-center mb-4 text-secondary">We offer most competitive rates and offers for wonderful and beautiful places.</p>
                {isLoading ? <Spinner className="loading-spinner" animation="border" /> :
                <div className="row">
                    {
                        services.map(service => <ServiceDetails key={service._id} service={service}></ServiceDetails>)
                    }
                </div>}
            </div>
        </section>
    );
};

export default Services;