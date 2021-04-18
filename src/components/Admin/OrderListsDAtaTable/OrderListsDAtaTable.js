import React from 'react';

const OrderListsDAtaTable = ({orderLists}) => {
    console.log(orderLists);
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Service</th>
                <th className="text-secondary" scope="col">Pay With</th>
                <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                  orderLists.map((orderList, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{orderList.name}</td>
                        <td>{orderList.email}</td>
                        <td>{orderList.serviceName}</td>
                        <td>Credit Card</td>
                        <td>Pending</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};


export default OrderListsDAtaTable;