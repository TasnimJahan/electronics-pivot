import React from 'react';
import './ServiceDetails.css'
import servicePhoto from '../../../images/serviceImg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const ServiceDetails = ({service}) => {
    console.log(service);
    return (
        <div className="text-center card shadow ServiceDetails"> 
                    {/* {
                        service.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${service.image.img}`}/>
                        :
                        <img style={{height: '200px'}} className="img-fluid mb-3" src={`https://rocky-forest-80852.herokuapp.com/${service.img}`} alt=""/>
                    } */}
                    <img style={{height: '200px'}} className="img-fluid mb-3" src={`${service.imageUrl}`} alt=""/>
                    <div class="card-body">
                    <h5 style={{fontSize: '2rem'}} class="card-title">{service.serviceTitle}</h5>
                    <p class="card-text">{service.description}</p>
                    </div>
                    {/* <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                    </div> */}
               
            
        </div>
    );
};

export default ServiceDetails;