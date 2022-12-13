import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../public/styles.scss';
import HomePage from './HomePage.jsx';
import LoginPage from './LoginPage.jsx';
import CreateAcct from './CreateAcct';
import LandingPage from './LandingPage';
import Team from './Team';
import AboutUs from './AboutUs'; 
import UserInformation from './UserInformation'

function App() {

  const [dummyEmail, setDummyEmail] = useState('dummy@gmail.com'); 

  return (
    <div>
      <Switch>

        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route path='/loginPage'>
          <LoginPage/>
        </Route>

        <Route path='/createAccount'>
          <CreateAcct dummyEmail={dummyEmail} setDummyEmail={setDummyEmail} />
        </Route>

        <Route path='/landing'>
          <LandingPage />
        </Route>

        <Route path='/team'>
          <Team />
        </Route>

        <Route path='/aboutus'>
          <AboutUs />
        </Route>

        <Route path='/userinformation'>
          <UserInformation  dummyEmail={dummyEmail} setDummyEmail={setDummyEmail} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
