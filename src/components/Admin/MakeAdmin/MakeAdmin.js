import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
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
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        <div className=""> 
        <Sidebar/>  
        <div className="form makeAdmin">
        <div className=" headSection d-flex justify-content-between">
            <h2>Make an Admin</h2> 
            <h4>{loggedInUser.name || loggedInUser.displayName || loggedInUser.userName || " "}</h4>
        </div> 

              
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