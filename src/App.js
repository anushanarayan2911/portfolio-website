import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/index'
import React from 'react'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
      </Switch>
    </Router>
  );
}

export default App;
