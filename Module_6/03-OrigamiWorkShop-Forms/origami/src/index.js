import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

/* 
  ToDo - Data Make State/ variable data 
          for User login and tracking 
  ToDo - Cookies? do we need or no
  ToDo - Create helpers for the Fetch API calls
*/

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />

      <App />

      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
