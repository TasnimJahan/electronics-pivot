import React, { useEffect, useState } from 'react';
import servicePhoto from '../../../images/serviceImg.jpg'
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Services.css'
const Services = () => {
        const [services, setServices] = useState([])
        useEffect( () => {
            fetch('https://peaceful-coast-73791.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
        }, [])

    return (
        <section className="services p-5">
            <div className="container">
                <h5 className="text-center  text-brand p-3">Our Services</h5>
                <div className=" card-deck ">
                    {
                        services.map(service =><ServiceDetails key={service._id} service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;