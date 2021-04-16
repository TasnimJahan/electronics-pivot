import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
const Review = () => {
    const reviews = [
        {
            _id:"sfj76s5fd5sdf678sd5df",  
            name:"Arnab",    
            description: "asdsda asdsad ewre rew rwgdg dfgds eter terte tetete etert et ertet ertertre sdasd",
        },
        {
            _id:"sfj76s5fd5sdf678sd5df",
            name:"Ria",
            description: "asdasda asdsad ewre rew rwgdg dfgds eter terte tetete etert et ertet ertertre sdsd",
        },
        {
            _id:"sfj76s5fd5sdf678sd5df",
            name:"Priya",
            description: "asda asdsad ewre rew rwgdg dfgds eter terte tetete etert et ertet ertertre sd",
        }
    ]
    // const [doctors, setDoctors] = useState([])
    // useEffect( () => {
    //     fetch('https://rocky-forest-80852.herokuapp.com/doctors')
    //     .then(res => res.json())
    //     .then(data => setDoctors(data))
    // }, [])
    return (
        <section className="reviews p-5" style={{backgroundColor:'dimgrey'}}>
            <div className="container">
                <h5 className="text-center  text-brand p-3">Reviews</h5>
                <div className="row justify-content-center">
                    {
                        reviews.map(review =><ReviewDetails key={review._id} review={review} />)
                    }
               </div>
            </div>
        </section>
    );
};

export default Review;