import React, { useEffect, useState } from 'react';
import servicePhoto from '../../../images/serviceImg.jpg'
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Services.css'
const Services = () => {
    const services = [
        {
            _id:"sfj76s5fd5sdf678sd5df",
            serviceTitle:"Computer Repair",
            description: "asdsda asdsad ewre rew rwgdg dfgds eter terte tetete etert et ertet ertertre sdasd",
            image:servicePhoto
        },
        {
            _id:"sfj76s5fd5sdf678sd5df",
            serviceTitle:"Mobile Repair",
            description: "asdasda asdsad ewre rew rwgdg dfgds eter terte tetete etert et ertet ertertre sdsd",
            image:servicePhoto
        },
        {
            _id:"sfj76s5fd5sdf678sd5df",
            serviceTitle:"Television Repair",
            description: "asda asdsad ewre rew rwgdg dfgds eter terte tetete etert et ertet ertertre sd",
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