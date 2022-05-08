import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/index'
import React from 'react'
import ThePeriodSteriliserPage from './Pages/ThePeriodSteriliserPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/ThePeriodSteriliserPage" component={ThePeriodSteriliserPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
