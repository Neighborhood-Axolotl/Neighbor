import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import CreateAcctHeader from './CreateAcctHeader.jsx';
import LoginHeader from './LoginHeader.jsx';
import BusinessInfo from './BusinessInfo.jsx';

{
  /* <Switch>
<Route path='/createAccount'>
<BusinessInfo />
</Route>
</Switch> */
}

function LoginPage() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path='/loginPage'>
          <LoginHeader />
        </Route>
        <Route path='/createAccount'>
          <CreateAcctHeader />
        </Route>
      </Switch>
      <div className='loginContainer'>
        {/* hold both consumer and merchant login */}
        <div className='consMerchContainer'>
          {/* consumer login */}
          <div className='consumerLogin'>
            <div className='consumerAlignment'>
              <strong>consumer</strong>
              <Switch>
                <Route path='/loginPage'>
                  <i className='italics'>one click login with google</i>
                </Route>
              </Switch>
            </div>
            <form className="consumerForm">
              <div className='userLogin'>
                <label htmlFor='userInput'>username: </label>
                <input type='text' id='userInput'></input>
              </div>
              <div className='userPW'>
                <label htmlFor='userPW'>password: </label>
                <input type='text' id='userPW'></input>
              </div>
            </form>
          </div>
          {/* merchant login */}
          <div className='merchantLogin'>
            <div className='merchantAlignment'>
              <strong>merchant</strong>
            </div>
            <form className="merchantForm">
              <div className='merchantUsername'>
                <label htmlFor='merchantUsername'>username: </label>
                <input type='text' id='merchantUsername'></input>
              </div>
              <div className='merchantPassword'>
                <label htmlFor='merchantPassword'>password: </label>
                <input type='text' id='merchantPassword'></input>
                <Switch>
                  <Route path='/createAccount'>
                    <BusinessInfo />
                  </Route>
                </Switch>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
