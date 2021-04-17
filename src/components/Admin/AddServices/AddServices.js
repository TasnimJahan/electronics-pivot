import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
const axios = require('axios').default;
import './AddServices.css'


const AddServices = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [imageUrl, setImageUrl] =useState(null);
    const onSubmit = data => {
        console.log(data);
        const servicesData = {
            serviceTitle: data.serviceTitle,
            description: data.description,
            imageUrl: imageUrl
        }
        const url = `http://localhost:5000/addServices`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(servicesData)
        })
        .then(response => console.log("server side response", response))
    };
    
    const handleImageUpload = (event) => {
        console.log(event.target.files);
        console.log(event.target.files[0]);
        const apiKey='ab8a0a3270789799c6a5a7b39fbf54c4'
        const imageData = new FormData();
        imageData.set('key',apiKey);
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            console.log(response);
            console.log(response.data.data.display_url);
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <Sidebar/>
            <div className="addService">   
            <div className=" headSection d-flex justify-content-between">
                <h2>Add Services</h2>
                <h4>{loggedInUser.name || loggedInUser.displayName || loggedInUser.userName || " "}</h4>
            </div> 

                   
            <form onSubmit={handleSubmit(onSubmit)}>
            
                <label>
                    <span  className="nameSection">Service Title</span> <br/>
                    <input name="name" placeholder="Service Name" {...register("serviceTitle")} />
                </label>
                <br/>
                <label>
                    <span  className="description">Description</span> <br/>
                    <input name="description" placeholder="Description" {...register("description")} />
                </label>
                <br/>
                <label>
                    <span  className="photo">Upload Image</span> <br/>
                    <input type="file" placeholder="Upload photo" {...register("exampleRequired", { required: true })} onChange={handleImageUpload} />     
                </label>
                <br/>
                {errors.exampleRequired && <span>This field is required</span>}
                <input id="submit" type="submit" />
            </form>
        </div>
        </div>
    );
};

export default AddServices;