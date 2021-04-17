import axios from 'axios';
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AddService.css'

const AddService = () => {
    const [imageURL, setImageURL] = useState(null);
    const [info, setInfo] = useState({});

    const handleSubmit = e => {
        e.preventDefault();

        const serviceData = {
            name: info.name,
            description: info.description,
            price: info.price,
            imageURL: imageURL
        }

        const url = `http://localhost:5000/addService`;

        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(serviceData)
        })
            .then(res => {
                if (res) {
                    alert("service added successfully");
                }
            })

    }
    const handleBlur = e => {
        e.preventDefault();
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleFileUpload = e => {
        const imgData = new FormData();
        imgData.set("key", "d8bcaccb149b8e228209e2a29aa2da25");
        imgData.append("image", e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <section className="row">
            <Sidebar />
            <div className="col-md-10 p-5 add-service">
                <h4>Add Service</h4>
                <form className="row mt-5" action="" onSubmit={handleSubmit}>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="name"><strong>Service title</strong></label>
                        <input onBlur={handleBlur} name="name" type="text" className="form-control mb-4" placeholder="Service title" />

                        <label htmlFor="description"><strong>Service Description</strong></label>
                        <textarea rows="4" onBlur={handleBlur} name="description" type="text" className="form-control" placeholder="service description" ></textarea>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="price"><strong>Service charge</strong></label>
                        <input onBlur={handleBlur} name="price" type="text" className="form-control mb-4" placeholder="Service Charge" />

                        <label htmlFor="file"><strong>Image</strong></label><br />
                        <input onChange={handleFileUpload} type="file" name="file" /><br />
                    </div>

                    <input type="submit" value="submit" />
                </form>
            </div>
        </section>
    );
};

export default AddService;