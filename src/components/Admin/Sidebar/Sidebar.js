import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faLock,faGripHorizontal,faPlus,faUserShield,faShoppingCart, faUsers,faUserPlus } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt,faComments } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    // const [isDoctor,setIsDoctor] = useState(false);

    // useEffect(() => {
    //     fetch('https://rocky-forest-80852.herokuapp.com/isDoctor', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({email: loggedInUser.email})
    //     })
    //     .then(res => res.json())
    //     .then(data => setIsDoctor(data));
    // },[])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                {/* {
                    isDoctor && <li>
                        <Link to="/dashboard" className="text-white">
                            <FontAwesomeIcon className="icons" icon={faGripHorizontal} /> <span style={{marginLeft:'17%'}}>Dashboard</span> 
                        </Link>
                    </li>
                }
                <li>
                    <Link to="/dashboard/appointment" className="text-white">
                        <FontAwesomeIcon className="icons" icon={faCalendar} /> <span style={{marginLeft:'17%'}}>Appointment</span> 
                    </Link>
                </li>
                {
                    isDoctor && <div>
                        <li>
                            <Link to="/dashboard/allPatients" className="text-white">
                                <FontAwesomeIcon className="icons" icon={faUsers} /> <span>Patients</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/prescriptions" className="text-white">
                                <FontAwesomeIcon className="icons" icon={faFileAlt} /> <span style={{marginLeft:'6%'}}>Prescriptions</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/addDoctor" className="text-white">
                                <FontAwesomeIcon className="icons" icon={faUserPlus} /> <span style={{marginLeft:'0%'}}>Add Doctor</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/doctor/setting" className="text-white" >
                            <FontAwesomeIcon className="icons" icon={faCog} /> <span style={{marginLeft:'4%'}}>Setting</span>
                            </Link>
                        </li>
                    </div>
                } */}



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
                
                    <div>
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
                        <li>
                            <Link to="/dashboard/addDoctor" className="text-white">
                                <FontAwesomeIcon className="icons" icon={faShoppingCart} /> <span style={{marginLeft:'9%'}}>Book</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/doctor/setting" className="text-white" >
                            <FontAwesomeIcon className="icons" icon={faLock} /> <span style={{marginLeft:'11%'}}>Booking List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addReview" className="text-white" >
                            <FontAwesomeIcon className="icons" icon={faComments} /> <span style={{marginLeft:'9%'}}>Review</span>
                            </Link>
                        </li>
                    </div>
            
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon className="icons" icon={faSignOutAlt} /> <span style={{marginLeft:'2%', textDecoration: 'none'}}>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;