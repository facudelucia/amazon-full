import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import Orders from './Orders';
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout"
import Payment from './Payment';
import './App.css';

const promise = loadStripe("")

function App() {

  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
