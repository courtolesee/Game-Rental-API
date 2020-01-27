import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Landing from '../Landing/Landing';
import CheckOut from '../CheckOut/CheckOut';

class App extends Component {

  // renders App
  render() {
    return (
      <div >
        <Router>
          <Route exact path="/" component={ Landing } />
          <Route path="/checkout" component={ CheckOut }/>
        </Router>
      </div>
    );
  }
}

export default App;
