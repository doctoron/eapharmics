import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'
import MyNav from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Generics from './components/Genrics/Generics';
import Toxics from './components/Toxics/Toxics';
import Services from './components/Services/Service';
import Cfr from './components/Cfr/Cfr';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Error from './hoc/Error';



class App extends Component {
  render () {
    return (
      <Router basename="/">
        <>
          <MyNav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} />
            <Route path="/toxics" component={Toxics} />
            <Route path="/generics" component={Generics} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/cfr" component={Cfr} />
            <Route component={Error} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
