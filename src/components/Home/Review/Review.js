import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect( () => {
        fetch('https://peaceful-coast-73791.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <section className="reviews p-5" style={{backgroundColor:'dimgrey'}}>
                <h5 className="text-center  text-brand p-3">Reviews</h5>
                <div className="row justify-content-center">
                    {
                        reviews.map(review =><ReviewDetails key={review._id} review={review} />)
                    }
               </div>
        </section>
    );
};

export default Review;