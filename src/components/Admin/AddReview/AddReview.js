import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
const axios = require('axios').default;
import './AddReview.css'

const AddReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        const adminData = {
            name: data.name,
            review: data.review,
        }
        const url = `https://peaceful-coast-73791.herokuapp.com/addReview`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
        .then(response => console.log("server side response", response))
    };

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
       <div className=""> 
        <Sidebar/>  
        <div className="form addReview">
        <div className=" headSection d-flex justify-content-between">
            <h2>Add review</h2>
            <h4>{loggedInUser.name || loggedInUser.displayName || loggedInUser.userName || " "}</h4>
        </div>      
            <form className="col-md-8" onSubmit={handleSubmit(onSubmit)}>

                <label>
                    <span  className="nameSection">Name</span> <br/>
                    <input name="name" placeholder="Your Name" {...register("name")} />
                </label>
                <br/>
    
                <label>
                    <span  className="reviewSection">Add Review</span> <br/>
                    <input id="review" type="text" name="review" placeholder="Add review" {...register("review")} />    
                </label>
                <br/>
                {errors.exampleRequired && <span>This field is required</span>}
                <input id="submitBtn" type="submit" />
            </form>
        </div>
        </div>
    );
};

export default AddReview;