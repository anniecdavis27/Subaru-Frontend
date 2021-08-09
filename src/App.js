import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Inventory from './Components/Inventory/Inventory'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import CarSingle from './Components/CarSingle/CarSingle';
import React, { useState, useEffect } from "react";
import axios from 'axios'
import apiUrl from "../apiConfig";

function App(props) {

  const [cars, setCars] = useState([])

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(`${apiUrl}/cars`);
        setCars(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={routerProps => <Home {...routerProps} cars={cars} />} />
        <Route path='/contact' component={Contact} />
        <Route path='/inventory' render={routerProps => <Inventory {...routerProps} cars={cars} />}/>
        <Route exact path="/cars/:id" component={CarSingle}/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
