import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <section className="container d-flex justify-content-around mt-5 pt-4">
            <div>
                <h5 className="text-center mb-4">Our Services</h5>
                <p className="text-center mb-4"><strong>We offer most competitive rates and offers for wonderful and beautiful places.</strong></p>
                <div className="row">
                    {
                        services.map(service => <ServiceDetails key={service._id} service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;