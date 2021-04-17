import React, { useEffect, useState } from 'react';
import GuideDetails from '../GuideDetails/GuideDetails';

const Guide = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://blooming-hollows-97264.herokuapp.com/guides")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section className="container d-flex justify-content-around mt-5 pt-4">
            <div>
                <h1 className="mb-4">Meet Our Local Guides</h1>
                <p className="mb-4"><strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta nostrum placeat sed tempore obcaecati ducimus et sint maxime nisi excepturi laudantium magni, quis culpa iure nesciunt. Vero enim laboriosam aut minus dicta ratione in dolorem animi neque iste eligendi beatae, laudantium odit iure sed. Expedita, error quos. Labore, dicta aut!</strong></p>
                <div className="row">
                    {
                        services.map(guide => <GuideDetails key={guide._id} guide={guide}></GuideDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Guide;