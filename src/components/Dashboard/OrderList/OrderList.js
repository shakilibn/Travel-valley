import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const [orderList, setOrderList] = useState([]);
    const [itemId, setItemId] = useState(null);
    const [tatus, setTatus] = useState(null);

    useEffect(() => {
        fetch('https://blooming-hollows-97264.herokuapp.com/allBookings')
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [orderList])

    const handleGetId = (id) => {
        setItemId(id);
    }

    const handleStatusChange = e => {
        const status = { value: e.target.value };
        updateStatus(status);
        setTatus(status);
    }

    const updateStatus = (status) => {
        fetch(`https://blooming-hollows-97264.herokuapp.com/update/${itemId}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(success => {
                if(success){
                    alert('status modified successfully');
                }
            })
    }

    return (
        <section className="row">
            <Sidebar />
            <div className="col-md-10">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Service</th>
                            <th scope="col">Pay with</th>
                            <th scope="col">Status</th>
                            <th scope="col">Status Modify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderList.map(order =>
                                <tr>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.service}</td>
                                    <td>Credit Card</td>
                                    <td>{order.status}</td>
                                    <td>
                                        <select onChange={handleStatusChange} onFocus={() => handleGetId(`${order._id}`)} class="form-select" aria-label="Default select example">
                                            <option value="pending">Pending</option>
                                            <option value="onGoing">On going</option>
                                            <option value="Done">Done</option>
                                        </select>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default OrderList;