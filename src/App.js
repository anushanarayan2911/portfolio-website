import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/index'
import React from 'react'
import ThePeriodSteriliser from './Pages/ThePeriodSteriliser';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/ThePeriodSteriliser" component={ThePeriodSteriliser} exact/>
      </Switch>
    </Router>
  );
}

export default App;
