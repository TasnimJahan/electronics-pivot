import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Book.css'
import { useContext } from 'react';

// import './CheckOut.css';
// import 'date-fns';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
// import { Button } from '@material-ui/core';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
// import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Payment from '../ProcessPayment/Payment';
// import Payment from '../ProcessPayment/payment';
// import Orders from '../Orders/Orders';


const Book = () => {
    const {id} = useParams();
    console.log(id);
    const [book,setBook]=useState({})
    useEffect(() => {
        fetch(`https://peaceful-coast-73791.herokuapp.com/services/${id}`)
        .then((response) =>response.json())
        .then(data => {
            console.log(data[0])
            setBook(data[0]);
        })
    },[])
    console.log(book);
    console.log(book.serviceTitle);
    const bookingName= book.serviceTitle;
    const bookingDescription= book.description;
    const bookingImage= book.imageUrl;
    const bookId=book._id;


    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <Sidebar/>  
            <div className="book">
                <div className=" headSection d-flex justify-content-between">
                    <h2>Book</h2> 
                    <h4>{loggedInUser.name || loggedInUser.displayName || loggedInUser.userName || " "}</h4>
                </div> 
                    
                <div className="userDetail mb-3">
                    <h5>{loggedInUser.name || loggedInUser.displayName || loggedInUser.userName || "For test Tasnim"}</h5>
                    <h5>{loggedInUser.email || "email here for test"}</h5>
                    <h5>{book.serviceTitle}</h5>
                </div>
                <div className="paymentDetails">
                    <p>Pay With:</p>
                    <Payment/>
                </div>
            </div>    
        </div>
    );
};

export default Book;