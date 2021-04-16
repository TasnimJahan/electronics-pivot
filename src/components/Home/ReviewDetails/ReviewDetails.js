import React from 'react';
import reviewIcon from '../../../icons/review.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './ReviewDetails.css'
const ReviewDetails = ({review}) => {
    return (
        <div className="col-md-3 reviewDetails shadow p-3 col-sm-5 d-flex justify-content-center align-items-center m-4">
                    {/* {
                        review.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${review.image.img}`}/>
                        :
                        <img style={{height: '200px'}} className="img-fluid mb-3" src={`https://rocky-forest-80852.herokuapp.com/${review.img}`} alt=""/>
                    } */}
                    <div className="review">
                    <img style={{height: '50px'}} className="img-fluid mb-3" src={reviewIcon} alt=""/>
                    <div class="ms-2">
                        <h3>{review.name}</h3>
                        <p>{review.description}</p>
                    </div>
                    </div>
        </div>
    );
};


export default ReviewDetails;