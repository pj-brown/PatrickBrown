import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router basename="/">
          <Navbar />
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
