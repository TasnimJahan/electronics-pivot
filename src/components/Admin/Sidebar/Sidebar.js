import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faLock,faGripHorizontal,faPlus,faUserShield,faShoppingCart, faUsers,faUserPlus } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt,faComments } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    const [isAdmin,setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data));
    },[])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                {
                    isAdmin && <div>
                        <li>
                            <Link to="/dashboard" className="text-white">
                                <FontAwesomeIcon className="icons" icon={faGripHorizontal} /> <span style={{marginLeft:'10%'}}>Order List</span> 
                            </Link>
                        </li>
                        
                        <li>
                            <Link to="/addServices" className="text-white">
                                <FontAwesomeIcon className="icons" icon={faPlus} /> <span style={{marginLeft:'10%'}}>Add Service</span> 
                            </Link>
                        </li>
                        <li>
                            <Link to="/makeAdmin" className="text-white">
                                <FontAwesomeIcon className="icons" icon={faUserShield} /> <span  style={{marginLeft:'7%'}}>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/prescriptions" className="text-white">
                                <FontAwesomeIcon className="icons" icon={faFileAlt} /> <span style={{marginLeft:'12%'}}>Manage Service</span>
                            </Link>
                        </li>
                    </div>
                }
                        
                        <li>
                            <Link to="/book" className="text-white">
                                <FontAwesomeIcon className="icons" icon={faShoppingCart} /> <span style={{marginLeft:'9%'}}>Book</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/myBookings" className="text-white" >
                            <FontAwesomeIcon className="icons" icon={faLock} /> <span style={{marginLeft:'11%'}}>Booking List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addReview" className="text-white" >
                            <FontAwesomeIcon className="icons" icon={faComments} /> <span style={{marginLeft:'9%'}}>Review</span>
                            </Link>
                        </li>
                    
            
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon className="icons" icon={faSignOutAlt} /> <span style={{marginLeft:'2%', textDecoration: 'none'}}>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;