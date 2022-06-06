import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Fib} />
      </Router>
    );
  }
}

export default App;
