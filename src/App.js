import './App.css';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import Home from './Pages'
import React from 'react'
import ThePeriodSteriliserPage from './Pages/ThePeriodSteriliserPage';
import ReStandPage from './Pages/ReStandPage';
import TeddyBotPage from './Pages/TeddyBotPage';
import AramaPage from './Pages/AramaPage';
import TravelToothpastePage from './Pages/TravelToothpastePage';
import HealthTrackerAppPage from './Pages/HealthTrackerAppPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={withRouter(Home)}/>
      <Route exact path="/ThePeriodSteriliserPage" component={withRouter(ThePeriodSteriliserPage)}/>
      <Route path="/ReStandPage" component={ReStandPage} exact/>
      <Route path="/TeddyBotPage" component={TeddyBotPage} exact/>
      <Route path="/AramaPage" component={AramaPage} exact/>
      <Route path="/TravelToothpastePage" component={TravelToothpastePage} exact/>
      <Route path="/HealthTrackerAppPage" component={HealthTrackerAppPage} exact/> 
    </Switch>
  );
}

export default App;
