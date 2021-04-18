import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import OrderDetails from '../OrderDetails/OrderDetails';
import Sidebar from '../Sidebar/Sidebar';
import './BookingList.css'

const BookingList = () => {
    const [orders,setOrders] = useState([]);
    console.log(orders);
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/bookings/?email='+loggedInUser.email, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(response => response.json())
        .then(data => setOrders(data));
    },[])
    console.log(orders);

    return (
        <div className="d-flex">
            <Sidebar/>
            <div className="row bookingDiv">
            <h3 style={{fontSize:'2rem',textDecoration:'underline', textAlign:'center'}}>You have total: {orders.length} Orders</h3>
                <div className="container">
                    <div className="detailOrder row">
                        {
                            orders.map(order => <OrderDetails key={order._id} orderId={order._id} serviceName={order.serviceName} serviceDescription={order.serviceDescription} serviceImg={order.serviceImg}></OrderDetails>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList;