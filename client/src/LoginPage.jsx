import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import CreateAcctHeader from './CreateAcctHeader.jsx'
import LoginHeader from './LoginHeader.jsx'
import BusinessInfo from './BusinessInfo.jsx'

function LoginPage() {
  return (
    <div>
      <NavBar />
    <Switch>
      <LoginHeader />
      <CreateAcctHeader/>
      </Switch>
      <div className='loginContainer'>
        {/* hold both consumer and merchant login */}
        <div className='consMerchContainer'>
          {/* consumer login */}
          <div className='consumerLogin'>
            <div>
              <strong>consumer</strong>
              <i className='italics'>one click login with google</i>
            </div>

            <div className='userLogin'>
              <label htmlFor='userInput'>username: </label>
              <input type='text' id='userInput'></input>
            </div>
            <div className='userPW'>
              <label htmlFor='userPW'>password: </label>
              <input type='text' id='userPW'></input>
            </div>
          </div>
          {/* merchant login */}
          <div className='merchantLogin'>
            <div>
              <strong>merchant</strong>
            </div>
            <div className='merchantUsername'>
              <label htmlFor='merchantUsername'>username: </label>
              <input type='text' id='merchantUsername'></input>
            </div>
            <div className='merchantPassword'>
              <label htmlFor='merchantPassword'>password: </label>
              <input type='text' id='merchantPassword'></input>
              <Switch>
              <BusinessInfo/>
              </Switch>
                          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
