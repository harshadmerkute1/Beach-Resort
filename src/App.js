import React from "react";
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

//Route and Switch is used to route to pages and provide them a link
import {Route, Switch } from 'react-router-dom';


import Navbar from "./components/Navbar";

function App() {
  //We are using Route object to navigate through the pages and gave it a Page name 
  //We have multiple Single rooms so we are using :PArameter to access every single room 
  //It is implemented in later code
  //Exact keyword is used to match the exact keyword match for link path


  return (<>
  <Navbar/>
  <Switch>
  <Route exact path='/' component={Home}/>
  <Route exact path='/rooms/' component={Rooms}/>
  <Route exact path='/rooms/:slug' component={SingleRoom}/>
  <Route component={Error}/>
    </Switch>
  </>);
}

export default App;
