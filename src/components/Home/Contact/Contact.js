import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contacts py-5">
            <div className="container">
                <div className="section-header d-flex justify-content-center">
                    <div className="text-center mb-3">
                    <h5 className="text-center  text-brand p-3">Contact Us</h5>
                        <h1 className="text-white">24/7 hour Connect with us</h1>
                    </div>
                </div>
                <div className="col-md-9 mx-auto">
                   <form style={{ margin:'5%'}} action="">
                       <div className="form-group mb-4">
                           <input type="text" className="form-control p-3" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group mb-4">
                           <input type="text" className="form-control p-3" placeholder="Subject *"/>
                       </div>
                       <div className="form-group mb-4">
                           <textarea name="" className="form-control p-3" id="" cols="30" rows="8" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group mb-4 text-center">
                           <button type="button" className="btn btn-primary text-uppercase w-25"> Submit </button>
                       </div>
                   </form>
               </div>
            </div>
        </section>
    );
};

export default Contact;