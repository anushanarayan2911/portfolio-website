import './App.css';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import Home from './Pages'
import React from 'react'
import AboutPage from './Pages/AboutPage';
import PortfolioPage from './Pages/PortfolioPage';
import ThePeriodSteriliserPage from './Pages/ThePeriodSteriliserPage';
import ReStandPage from './Pages/ReStandPage';
import TeddyBotPage from './Pages/TeddyBotPage';
import AramaPage from './Pages/AramaPage';
import TravelToothpastePage from './Pages/TravelToothpastePage';
import HealthTrackerAppPage from './Pages/HealthTrackerAppPage';
import CVPage from './Pages/CVPage'
import PDFPortfolioPage from './Pages/PDFPortfolioPage';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={withRouter(Home)}/>
      <Route exact path="/AboutPage" component={withRouter(AboutPage) }/>
      <Route path="/PortfolioPage" component={PortfolioPage} exact/>
      <Route exact path="/ThePeriodSteriliserPage" component={withRouter(ThePeriodSteriliserPage)}/>
      <Route path="/ReStandPage" component={ReStandPage} exact/>
      <Route path="/TeddyBotPage" component={TeddyBotPage} exact/>
      <Route path="/AramaPage" component={AramaPage} exact/>
      <Route path="/TravelToothpastePage" component={TravelToothpastePage} exact/>
      <Route path="/HealthTrackerAppPage" component={HealthTrackerAppPage} exact/>
      <Route path="/CVPage" component={CVPage} exact/>
      <Route path="/PDFPortfolioPage" component={PDFPortfolioPage} exact/>
      <Route path="/ReStandPage" component={ReStandPage} exact/>
    </Switch>
  );
}

export default App;
