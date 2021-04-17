import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import PaymentCardForm from './PaymentCardForm';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IhJDQFODneLVq4tCKrAmyFCNdOMhIrxYSejxI6NWZBGzNPZn0yKiTjvh57Z0XM8WXjwVKh4Mu3Ww3RzJUoRbCZw00gxt6IbEr');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
           <PaymentCardForm/>
        </Elements>
    );
};

export default ProcessPayment;