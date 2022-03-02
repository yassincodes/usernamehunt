import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UsernamesContextProvider } from "./usernamesContext";
import {BrowserRouter as Router} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <UsernamesContextProvider>
      <App />
    </UsernamesContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

