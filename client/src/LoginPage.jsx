
import React, { useState } from 'react';
import NavBar from './NavBar';

function LoginPage() {
    // state for consumer values 

  const [consumerUsernameLogin, setConsumerUsernameLogin] = useState('');
  const [consumerPasswordLogin, setConsumerPasswordLogin] = useState('');

    // state for merchant values 
  const [merchantUsernameLogin, setMerchantUsernameLogin] = useState('');
  const [merchantPasswordLogin, setMerchantPasswordLogin] = useState('');

  function handleConsumerLogin() {
    // fetch request for consumer authentication goes here
  }

  function handleMerchantLogin() {
    // fetch request for merchant authentication goes here
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
                <label htmlFor='consumerUsernameLogin'>
                  username:
                  <input
                    type='text'
                    id='consumerUsernameLogin'
                    value={consumerUsernameLogin}
                    onChange={(event) =>
                      setConsumerUsernameLogin(event.target.value)
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
                    onChange={(event => {
                      setConsumerPasswordLogin(event.target.value)
                    })}
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
                  username: 
                <input 
                type='text' 
                id='merchantUsernameLogin'
                value={merchantUsernameLogin}
                onChange={(event) => {
                  setMerchantUsernameLogin(event.target.value)
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
                  setMerchantPasswordLogin(event.target.value)
                }}/>
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
