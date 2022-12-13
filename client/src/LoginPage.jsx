import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();

  // state for consumer values
  const [consumerEmailLogin, setConsumerEmailLogin] = useState('');
  const [consumerPasswordLogin, setConsumerPasswordLogin] = useState('');

  // state for merchant values
  const [merchantEmailLogin, setMerchantEmailLogin] = useState('');
  const [merchantPasswordLogin, setMerchantPasswordLogin] = useState('');

  function handleConsumerLogin() {
    // logic for consumers logging in should go here. 
    // currently redirects to landing page
    history.push('/landing')
  }

  function handleMerchantLogin() {
    // logic for merchants logging in should go here
  }
  return (
    <div>
      <NavBar />
      <div>
        <h2 className='login'>login</h2>
      </div>
      <div className='loginContainer'>
        {/* hold both consumer and merchant login */}
        <div className='consMerchContainer'>
          {/* consumer login */}
          <div className='consumerLogin'>
            <div className='consumerAlignment'>
              <strong>consumer</strong>
            </div>
            <br />

            <form className='consumerForm' onSubmit={handleConsumerLogin}>
              <div className='userLogin'>
                <label htmlFor='consumerEmailLogin'>
                  email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type='text'
                    id='consumerEmailLogin'
                    value={consumerEmailLogin}
                    onChange={(event) =>
                      setConsumerEmailLogin(event.target.value)
                    }
                  />
                </label>
              </div>

              <div className='userPW'>
                <label htmlFor='consumerPasswordLogin'>
                  password:
                  <input
                    type='text'
                    id='consumerPasswordLogin'
                    value={consumerPasswordLogin}
                    onChange={(event) => {
                      setConsumerPasswordLogin(event.target.value);
                    }}
                  />
                </label>
              </div>
              <input id='formButton' type='submit' value='submit' />
            </form>
          </div>
          {/* merchant login */}
          <div className='merchantLogin'>
            <div className='merchantAlignment'>
              <strong>merchant</strong>
            </div>
            <br />
            <form className='merchantForm' onSubmit={handleMerchantLogin}>
              <div className='merchantUsername'>
                <label htmlFor='merchantUsernameLogin'>

                  email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input 
                type='text' 
                id='merchantEmailLogin'
                value={merchantEmailLogin}
                onChange={(event) => {
                  setMerchantEmailLogin(event.target.value)
                }}
                />

                </label>
              </div>
              <div className='merchantPassword'>
                <label htmlFor='merchantPasswordLogin'>
                  password:
                  <input
                    type='text'
                    id='merchantPasswordLogin'
                    value={merchantPasswordLogin}
                    onChange={(event) => {
                      setMerchantPasswordLogin(event.target.value);
                    }}
                  />
                </label>
              </div>
              <input id='formButton' type='submit' value='submit' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
