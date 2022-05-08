import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/index'
import React from 'react'
import ThePeriodSteriliserPage from './Pages/ThePeriodSteriliserPage';
import ReStandPage from './Pages/ReStandPage';
import TeddyBotPage from './Pages/TeddyBotPage';
import BouncerExperimentPage from './Pages/BouncerExperimentPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/ThePeriodSteriliserPage" component={ThePeriodSteriliserPage} exact/>
        <Route path="/ReStandPage" component={ReStandPage} exact/>
        <Route path="/TeddyBotPage" component={TeddyBotPage} exact/>
        <Route path="/BouncerExperimentPage" component={BouncerExperimentPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
