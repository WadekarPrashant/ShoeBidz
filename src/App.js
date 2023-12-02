// import React from "react";
import React, { useEffect, useState } from "react";
import './App.css';
import Header from './Header';
import Home from "./Home" ;
import Checkout from "./Checkout";
import Payment from "./Payment";
import Login from "./Login" ;
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
// import {loadStripe, loadscripts} from "@stripe/stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import { BrowserRouter as Router, Switch, Route }
// from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


// //
// const stripe = stripe('pk_test_51OJ09kSHmbRanvDpXDljoNRbjcxCSBrdzQAapYncGMcziead9CORqnF07eBWlOB8A4q9HvhpBEhHGNjgw9MwsmDT00sWrw3uoF');

// const appearance = { /* appearance */ };
// const options = { /* options */ };
// // const elements = stripe.elements({ clientSecret, appearance });
// const paymentElement = elements.create('payment', options);
// paymentElement.mount('#payment-element');
// //

// const promise = loadStripe('pk_test_51OJ09kSHmbRanvDpXDljoNRbjcxCSBrdzQAapYncGMcziead9CORqnF07eBWlOB8A4q9HvhpBEhHGNjgw9MwsmDT00sWrw3uoF');
function App() {

  const[{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);




  return (
    // following BEM convention
<Router>
      {/* <Link to='/Home'></Link> */}

      <Routes>
      <Route path='/' element={
        <>
          <Header />
          <Home />
        </>
      } />
      
      <Route path='/checkout' element={
        <>
          <Header />
          <Checkout/>
        </>
      } />

      <Route path='/login' element={
        <>
          <Header />
          <Login />
        </>
      } />
      <Route path='/payment' element={
        <>
          <Header />
          {/* <Elements stripe={promise}>

          </Elements> */}
          <Payment />
        </>
      } />
      {/* <Route path='/login' element={0} /> */}
      {/* <Route path='/checkout' element={<Checkout/>} /> */}
      {/* <Route path='/' element={<Header/>} /> */}
    
      </Routes>
      </Router>

    /*
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
          <Header />
          <Home />
          </Route>
        </Switch>
    </div>
    </Router>
    */
  );
}

export default App;
