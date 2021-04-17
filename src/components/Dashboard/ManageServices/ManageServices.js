import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Spinner } from 'react-bootstrap';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://blooming-hollows-97264.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
    }, [services])

    const handleDeleteService = (id) => {
        console.log(id);

        fetch('https://blooming-hollows-97264.herokuapp.com/delete?id=' + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Item deleted successfully');
                }
            })
    }
    return (
        <section className="row">
            <Sidebar />
            <div className="col-md-10 right-area">
                <div className="right-interior">
                    <h4 className="mb-5">Manage Services</h4>
                    {loading ? <Spinner className="loading-spinner" animation="border" /> :
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Service Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services.map(service =>
                                    <tr>
                                        <td><img style={{ height: '30px' }} src={service.imageURL} alt="" /></td>
                                        <td>{service.name}</td>
                                        <td>{service.description}</td>
                                        <td>{service.price}</td>
                                        <td><FontAwesomeIcon className="text-danger" onClick={() => handleDeleteService(`${service._id}`)} icon={faTrash} /></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>}
                </div>
            </div>

        </section>
    );
};

export default ManageServices;