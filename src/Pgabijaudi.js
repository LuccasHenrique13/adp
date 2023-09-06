import React from 'react';
import { ReactDOM } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Embed from './components/Embed'
import About from './components/About';
import Projects from './components/Projects';
import ScrollAnimationComponent from './components/ScrollAnimationComponent';
import Footer from './components/Footer';


const Pgabijaudi = () =>  {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Embed />
      <Footer />
    </div>
  );
}

export default Pgabijaudi;
