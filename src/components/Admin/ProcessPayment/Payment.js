import React from "react";
import ReactDOM from "react-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter } from "react-router-dom";

// import ElementDemos from "./components/ElementDemos";
// import CardForm from "./components/demos/CardForm";
// import FpxBankForm from "./components/demos/FpxBankForm";
// import IbanForm from "./components/demos/IbanForm";
// import IdealBankForm from "./components/demos/IdealBankForm";
// import PaymentRequestForm from "./components/demos/PaymentRequestForm";
// import SplitForm from "./components/demos/SplitForm";
// import AfterpayClearpayMessage from "./components/demos/AfterpayClearpayMessage";

import "./Payment.css";
// import IbanForm from "./components/demos/IbanForm";
// import AfterpayClearpayMessage from "./components/demos/AfterpayClearpayMessage";
// import FpxBankForm from "./components/demos/FpxBankForm";
// // import ElementDemos from "./components/ElementDemos";
// import CardForm from "./components/demos/CardForm";
// import IdealBankForm from "./components/demos/IdealBankForm";
// import PaymentRequestForm from "./components/demos/PaymentRequestForm";
import SplitForm from "./components/demos/SplitForm";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const Payment = () => {
  return (
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        {/* <ElementDemos demos={demos} /> */}
        <SplitForm/>
      </Elements>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<Payment />, rootElement);

export default Payment;