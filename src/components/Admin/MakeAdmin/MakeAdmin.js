import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
const axios = require('axios').default;
import './makeAdmin.css'

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        const adminData = {
            name: data.name,
            email: data.email,
        }
        const url = `http://localhost:5000/makeAnAdmin`;
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
        <div className="form makeAdmin">
        <h2>Make an Admin</h2>       
            <form className="col-md-8" onSubmit={handleSubmit(onSubmit)}>

                <label>
                    <span  className="nameSection">Name</span> <br/>
                    <input name="name" placeholder="Name" {...register("name")} />
                </label>
                <br/>
    
                <label>
                    <span  className="email">email</span> <br/>
                    <input type="email" name="email" placeholder="Email" {...register("email")} />    
                </label>
                <br/>
                {errors.exampleRequired && <span>This field is required</span>}
                <input id="submit" type="submit" />
            </form>
        </div>
        </div>
    );
};

export default MakeAdmin;