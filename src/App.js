import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import { Nav } from 'reactstrap';
import './App.css'

import MyNav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Software from './components/Software/Software';
import Services from './components/Services/Service';
import Cfr from './components/Cfr/Cfr';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Error from './hoc/Error';



class App extends Component {
  render () {
    return (
      <Router basename="/">
        <div className="App">
          <MyNav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} />
            <Route path="/software" component={Software} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/cfr" component={Cfr} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
