import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import MerchantCards from './merchantCards';

function UserInformation() {
  const [consumerUsername, setConsumerUsername] = useState('');
  const [consumerPassword, setConsumerPassword] = useState('');
  const [consumerEmail, setConsumerEmail] = useState('');
  const [consumerZipCode, setConsumerZipCode] = useState('');

  function handleUpdateForm() {}
  // with each label, we populate the current user data next to it
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className='userInformationContainer'>
        <div className='userInformationTextContainer'>
            <img id='userLogo' src = 'https://i.imgur.com/3KH1t8i.png'></img><br />
          <form onSubmit={handleUpdateForm}>
            <label>
              First Name: 'Placeholder'
              <input
                type='text'
                name='username'
                value={consumerUsername}
                onChange={(event) => setConsumerUsername(event.target.value)}
              />
            </label>
            <input id='formButton' type='submit' value='update' />
          </form>

          <form onSubmit={handleUpdateForm}>
            <label>
              Last Name: 'Placeholder'
              <input
                type='text'
                name='password'
                value={consumerPassword}
                onChange={(event) => setConsumerPassword(event.target.value)}
              />
            </label>
            <input id='formButton' type='submit' value='update' />
          </form>

          <form onSubmit={handleUpdateForm}>
            <label>
              Email: 'Placeholder'
              <input
                type='text'
                name='email'
                value={consumerEmail}
                onChange={(event) => setConsumerEmail(event.target.value)}
              />
            </label>
            <input id='formButton' type='submit' value='update' />
          </form>

          <form onSubmit={handleUpdateForm}>
            <label>
              Password: 'Placeholder'
              <input
                type='text'
                name='username'
                value={consumerPassword}
                onChange={(event) => setConsumerPassword(event.target.value)}
              />
            </label>
            <input id='formButton' type='submit' value='update' />
          </form>
          <form onSubmit={handleUpdateForm}>
            <label>
              Zip Code: 'Placeholder'
              <input
                type='text'
                name='username'
                value={consumerZipCode}
                onChange={(event) => setConsumerZipCode(event.target.value)}
              />
            </label>
            <input id='formButton' type='submit' value='update' />
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserInformation;
