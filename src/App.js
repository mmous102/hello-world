import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Evaluate from './components/pages/Evaluate';
import Activities from './components/pages/Activities';
import signup from './components/pages/sign-up';
import help from './components/pages/help';
import  { useState } from "react";
import SurveyComponent from './components/pages/Evaluate' 

function App() {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );

  return (
    <>
      <Router>
        <Navbar

        language={language}
        handleSetLanguage={language => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}
      />
        <Switch>
          <Route exact path='/'  component={Home} />
          <Route exact path='/Evaluate' component={Evaluate} />
          <Route exact path='/Activities' component={Activities} >
          <Activities language={language}/>
          </Route>
          <Route exact path='/sign-up' component={signup} />
          <Route exact path='/help' component={help} />
        </Switch>


      </Router>

    </>
  );
}
function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}
export default App;
