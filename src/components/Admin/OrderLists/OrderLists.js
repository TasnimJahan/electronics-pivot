import React, { useEffect, useState } from 'react';
import OrderListsDAtaTable from '../OrderListsDAtaTable/OrderListsDAtaTable';
import Sidebar from '../Sidebar/Sidebar';
import './OrderLists.css'


const OrderLists = () => {
    const [orderLists, setOrderLists] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allBookings')
            .then(res => res.json())
            .then(data => setOrderLists(data))
    }, [])

    return (
        <div className="container-fluid row " >
            <Sidebar></Sidebar>
            <div className="col-md-10 ms-5 p-4 pe-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Order Lists</h5>
                <OrderListsDAtaTable orderLists={orderLists} />
            </div>
        </div>
    );
};

export default OrderLists;