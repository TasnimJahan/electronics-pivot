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
                <h5 className="text-center  text-brand p-3">Our Services</h5>
                <div className=" row justify-content-center ">
                    {
                        services.map(service =><ServiceDetails key={service._id} service={service} />)
                    }
                </div>
        </section>
    );
};

export default Services;