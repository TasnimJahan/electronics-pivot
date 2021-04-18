import React, { useContext, useMemo } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";
import './SplitForm.css'

import useResponsiveFontSize from "../../useResponsiveFontSize";
import { UserContext } from "../../../../../App";

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    [fontSize]
  );

  return options;
};

const SplitForm = ({book,loggedInUser}) => {
  console.log(book,loggedInUser);
  // const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const serviceName= book?.serviceTitle;
    const serviceDescription=book?.description;
    const serviceImg=book?.imageUrl;


  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    console.log("[PaymentMethod]", payload);
  };


  
const handleOrders = () => {
  const newOrders = {...loggedInUser,serviceName,serviceDescription,serviceImg};
  fetch('https://peaceful-coast-73791.herokuapp.com/addBook', {
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newOrders)
  })
  .then(response => response.json())
  .then(data=>{
      console.log(data);
  })

}

  return (
    <form id="splitForm" onSubmit={handleSubmit}>
      <label id="cardNumber">
        Card number
        <CardNumberElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <label id="expirationDate">
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <label id="cvc">
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <div className="d-flex justify-content-between ">
        <span><h6>Your Service charge is 1000$</h6></span>
        <span><button type="submit" disabled={!stripe} onClick={handleOrders} >
          Pay
        </button></span>
      </div>
    </form>
  );
};

export default SplitForm;
