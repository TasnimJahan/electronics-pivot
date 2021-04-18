import React from 'react';
import { useContext } from 'react';
import './DeleteService.css'
import DeleteIcon from '../../../icons/delete.png'
// import 'date-fns';
import { UserContext } from '../../../App';


const DeleteService = ({service}) => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);  
        const deleteEvent=(id)=>{
            fetch(`https://peaceful-coast-73791.herokuapp.com/deleteService/${id}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(result => {
                console.log("successfully deleted");
                if(result){           
                    document.getElementById("serviceRow").style.display="none"
                }
            })
            
        }
    
        return (
       <tbody id="serviceRow">
            <tr>
                <td scope="col">{service._id}</td>
                <td scope="col">{service.serviceTitle}</td>
                <td onClick={() =>deleteEvent(service._id)} scope="col"><img className="deleteIcon" src={DeleteIcon} alt=""/></td>
            </tr>
       </tbody>
        );
};

export default DeleteService;