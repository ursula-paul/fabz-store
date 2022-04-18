import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router  } from 'react-router-dom';
//import {BrowserRouter} you can do it this way 

import App from './App';
import { UserProvider } from './Contexts/user.context';

import './index.scss';


const rootElement = document.getElementById('root')


ReactDOM.render(
  <React.StrictMode>
    <Router> 
      <UserProvider>
        <App />
      </UserProvider>
      </Router>
    </React.StrictMode>,
  rootElement
  
);


