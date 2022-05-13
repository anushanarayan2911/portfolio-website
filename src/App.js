import './App.css';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import Home from './Pages'
import React from 'react'
import ThePeriodSteriliserPage from './Pages/ThePeriodSteriliserPage';
import ReStandPage from './Pages/ReStandPage';
import TeddyBotPage from './Pages/TeddyBotPage';
import BouncerExperimentPage from './Pages/BouncerExperimentPage';
import TheAmbioBracePage from './Pages/TheAmbioBracePage'
import SocialResponsibilityPage from './Pages/SocialResponsibilityPage';
import AramaPage from './Pages/AramaPage';
import CarbonNeutralHousingPage from './Pages/CarbonNeutralHousingPage';
import TravelToothpastePage from './Pages/TravelToothpastePage';
import MaterialisePage from './Pages/MaterialisePage';
import HealthTrackerAppPage from './Pages/HealthTrackerAppPage';
import FearOfFallingPage from './Pages/FearOfFallingPage';
import StandardisingCampingFurniturePage from './Pages/StandardisingCampingFurniturePage';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/ThePeriodSteriliserPage" component={withRouter(ThePeriodSteriliserPage)}/>
      <Route path="/ReStandPage" component={ReStandPage} exact/>
      <Route path="/TeddyBotPage" component={TeddyBotPage} exact/>
      <Route path="/BouncerExperimentPage" component={BouncerExperimentPage} exact/>
      <Route path="/TheAmbioBracePage" component={TheAmbioBracePage} exact/>
      <Route path="/SocialResponsibilityPage" component={SocialResponsibilityPage} exact/>
      <Route path="/AramaPage" component={AramaPage} exact/>
      <Route path="/CarbonNeutralHousingPage" component={CarbonNeutralHousingPage} exact/>
      <Route path="/TravelToothpastePage" component={TravelToothpastePage} exact/>
      <Route path="/MaterialisePage" component={MaterialisePage} exact/>
      <Route path="/HealthTrackerAppPage" component={HealthTrackerAppPage} exact/>
      <Route path="/FearOfFallingPage" component={FearOfFallingPage} exact/>
      <Route path="/StandardisingCampingFurniturePage" component={StandardisingCampingFurniturePage} exact/>  
    </Switch>
  );
}

export default App;
