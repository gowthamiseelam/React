import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css';
//import App from './App';
//import Classcmp from './react1';
//import Funcmp from './react2';
//import Calci from './calci.js';
//import Incre from './event';
import Vote from './vote.js';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Vote/>
  </React.StrictMode>
);
// Rendering the GreetingComponent into the DOM
//root.render(<GreetingComponent name="Alice" age={30} />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();