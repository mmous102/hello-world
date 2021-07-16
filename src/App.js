import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Evaluate from './components/pages/Evaluate';
import Activities from './components/pages/Activities';
import Register from './components/pages/Register';

import SurveyComponent from './components/pages/Evaluate' 

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Evaluate' component={Evaluate} />
          <Route path='/Activities' component={Activities} />
          <Route path='/Register' component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
