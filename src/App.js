import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import DruidContainer from './components/DruidContainer';
import BeastDetailsContainer from './components/BeastDetailsContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Druid Wild Shapes</h1>
          <Route exact path="/" component={DruidContainer} />
          <Route path="/:id" component={BeastDetailsContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
