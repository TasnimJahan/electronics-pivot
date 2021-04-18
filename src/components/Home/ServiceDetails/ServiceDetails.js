import React from 'react';
import './ServiceDetails.css'
// import {useSpring, animated} from 'react-spring'
import servicePhoto from '../../../images/serviceImg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const ServiceDetails = ({service}) => {
    console.log(service._id);
    return (
        <div className="text-center shadow ServiceDetails d-flex flex-column  col-md-3 p-3 col-sm-5 d-flex justify-content-center align-items-center m-4"> 
            <Link to={`/book/${service._id}`}>
                <img style={{height: '200px'}} className="img-fluid mb-3 detailsService" src={`${service.imageUrl}`} alt=""/>
                <div class="card-body details detailsService">
                    <h5 style={{fontSize: '2rem'}} class="card-title">{service.serviceTitle}</h5>
                    <p class="card-text">{service.description}</p>
                </div>
            </Link>
        </div>
    );
};

export default ServiceDetails;