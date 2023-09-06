import React from 'react';
import { ReactDOM } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';


const Pgerro = () =>  {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default Pgerro;
