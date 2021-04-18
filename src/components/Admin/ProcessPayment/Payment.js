import React from "react";
import ReactDOM from "react-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter } from "react-router-dom";


import "./Payment.css";
import SplitForm from "./components/demos/SplitForm";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const Payment = ({book,loggedInUser}) => {
  
  console.log(book);
  return (
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <SplitForm book={book} loggedInUser={loggedInUser}></SplitForm>
      </Elements>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<Payment />, rootElement);

export default Payment;