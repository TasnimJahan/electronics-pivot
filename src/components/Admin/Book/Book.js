import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

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
// import Orders from '../Orders/Orders';


const Book = () => {
    const {id} = useParams();
    console.log(id);
    const [book,setBook]=useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
        .then((response) =>response.json())
        .then(data => {
            console.log(data[0])
            setBook(data[0]);
        })
    },[])
    console.log(book);
    const bookingName= book.serviceTitle;
    const bookingDescription= book.description;
    const bookingImage= book.imageUrl;
    const bookId=book._id;


    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <h1>Book section id is= {id}</h1>
        </div>
    );
};

export default Book;