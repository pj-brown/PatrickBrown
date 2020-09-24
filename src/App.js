import React from 'react';
import './App.css';
import { HashRouter, HashRouter as Router, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <HashRouter basename="/">
      <div className="container">
        <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </HashRouter>
  );
}

export default App;
