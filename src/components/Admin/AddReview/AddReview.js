import React, { useState } from 'react';
import { useForm } from "react-hook-form";
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
        const url = `http://localhost:5000/addReview`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
        .then(response => console.log("server side response", response))
    };

    return (
       <div className=""> 
        <Sidebar/>  
        <div className="form addReview">
        <h2>Add review</h2>       
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