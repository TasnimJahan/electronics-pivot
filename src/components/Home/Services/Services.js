import React, { useEffect, useState } from 'react';
import servicePhoto from '../../../images/serviceImg.jpg'
import ServiceDetails from '../ServiceDetails/ServiceDetails';
const Services = () => {
    const services = [
        {
            _id:"sfj76s5fd5sdf678sd5df",
            serviceTitle:"as",
            description: "asdasd",
            image:servicePhoto
        },
        {
            _id:"sfj76s5fd5sdf678sd5df",
            serviceTitle:"as",
            description: "asdasd",
            image:servicePhoto
        },
        {
            _id:"sfj76s5fd5sdf678sd5df",
            serviceTitle:"as",
            description: "asdasd",
            image:servicePhoto
        }
    ]
    // const [doctors, setDoctors] = useState([])
    // useEffect( () => {
    //     fetch('https://rocky-forest-80852.herokuapp.com/doctors')
    //     .then(res => res.json())
    //     .then(data => setDoctors(data))
    // }, [])
    return (
        <section className="services p-5">
            <div className="container">
                <h5 className="text-center  text-primary p-3">Our Services</h5>
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