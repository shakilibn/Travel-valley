import React, { useEffect, useState } from 'react';
import DestinationDetails from '../DestinationDetails/DestinationDetails';

const Destinations = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/destinations")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <section className="container d-flex justify-content-around mt-5 pt-4 text-center">
            <div>
                <h5 className="text-center">Places</h5>
                <h1 className="text-center mb-4">Hundreds of...Destinations Worldwide.</h1>
                <p className="text-center mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero odit a doloribus dignissimos quos, sequi itaque in enim optio?</p>
                <div className="row">
                    {
                        services.map(destination => <DestinationDetails key={destination._id} destination={destination}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Destinations;