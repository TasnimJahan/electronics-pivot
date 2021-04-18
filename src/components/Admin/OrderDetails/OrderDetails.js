import React from 'react';
import './OrderDetails.css';


const OrderDetails = (props) => {
    const {serviceImg,serviceName,serviceDescription,orderId} = props;
    return (
        <div className="orderDetailsDiv col-md-4">
            <img style={{height: '200px', width: '100%'}}src={serviceImg} alt=""/>
            <p>Order Id: {orderId}</p>
            <h4>Service: {serviceName}</h4>
            <h6>Description: {serviceDescription}</h6>
        </div>
    );
};

export default OrderDetails;