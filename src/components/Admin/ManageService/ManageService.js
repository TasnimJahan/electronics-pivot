import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import DeleteService from '../DeleteService/DeleteService';
import Sidebar from '../Sidebar/Sidebar';
import './ManageService.css';

const ManageService = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('https://peaceful-coast-73791.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    console.log(services);

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <Sidebar/>
            <div className="form addReview">
                <div className=" headSection d-flex justify-content-between">
                    <h1>Manage service</h1>
                    <h4>{loggedInUser.name || loggedInUser.displayName || loggedInUser.userName || " "}</h4>
                </div> 

            
           <div style={{width:'90%'}}>
               <table className="table table-striped table-hover">
                   <tr>
                       <th scope="row">Id</th>
                       <th scope="row">serviceTitle</th>
                       <th scope="row">Delete</th>
                   </tr>
                  
                {
                   services.map(service =><DeleteService service={service} key={service._id}></DeleteService>)
                } 

               </table>
           </div>
            </div>
           </div>
    );
};
export default ManageService;