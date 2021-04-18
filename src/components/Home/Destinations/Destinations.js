import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import DestinationDetails from '../DestinationDetails/DestinationDetails';

const Destinations = () => {
    const [slicedServices, setSlicedServices] = useState([]);
    const [services, setServices] = useState([]);
    const [isExplore, setIsExplore] = useState(false);

    useEffect(() => {
        fetch("https://blooming-hollows-97264.herokuapp.com/destinations")
            .then(res => res.json())
            .then(data => {
                setServices(data)
                const newData = data.slice(0, 3);
                setSlicedServices(newData)
            })
    }, [])
    return (
        <section className="container d-flex justify-content-around mt-5 pt-4 text-center">
            <div>
                <h4 className="text-center brand-text2">Places</h4>
                <h1 className="text-center mb-4">Hundreds of...<span className="brand-text">Destinations Worldwide.</span> </h1>
                <p className="text-center mb-4 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero odit a doloribus dignissimos quos, sequi itaque in enim optio?</p>
                <div>
                    {isExplore ?
                        <div className="row">
                            {
                                services.map(destination => <DestinationDetails key={destination._id} destination={destination} />)
                            }
                        </div> :
                        <div className="row">
                            {
                                slicedServices.map(destination => <DestinationDetails key={destination._id} destination={destination} />)
                            }
                        </div>}
                </div>
                {!isExplore && <Button onClick={() => setIsExplore(true)} className="brand-btn mt-5">Explore More</Button>}
            </div>
        </section>
    );
};

export default Destinations;