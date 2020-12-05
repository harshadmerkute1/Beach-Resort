import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Browser routing setup is done using this below import.
import {BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  //We have created a Router object for browser routing above in import section and below we are 
  //using it for routing our App through it.
  <Router>

    <App />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
