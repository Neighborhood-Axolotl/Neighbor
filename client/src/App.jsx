import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../public/styles.scss';
import HomePage from './HomePage.jsx';
import LoginPage from './LoginPage.jsx';
import CreateAcct from './CreateAcct';
import LandingPage from './LandingPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/loginPage'>
          <LoginPage />
        </Route>
        <Route path='/createAccount'>
          <CreateAcct />
        </Route>
        <Route path='/landing'>
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
