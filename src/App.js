import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Orders from './Orders';
const promise = loadStripe("")
function App() {
  const[{}, dispatch]= useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log("THE USER IS >>>>", authUser)
      if(authUser){
      dispatch({
        type:"SET_USER",
        user:authUser
      })
      }else{
      dispatch({
        type:"SET_USER",
        user:null
      })
      }
    })
    
  }, [])
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

          <Route path="/login" component={Login}/>

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
