import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import UserInformation from './UserInformation'

function CreateAcct({setDummyEmail, dummyEmail}) {

  useEffect(() => {
  }, [dummyEmail])
  // state for consumer values
  const [consumerPassword, setConsumerPassword] = useState('');
  const [consumerEmail, setConsumerEmail] = useState('');
  const [consumerFirstName, setConsumerFirstName] = useState('');
  const [consumerLastName, setConsumerLastName] = useState('');
  const [consumerZipCode, setConsumerZipCode] = useState('');
  const history = useHistory();

  // state for merchant values
  const [merchantPassword, setMerchantPassword] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [typeOfBusiness, setTypeOfBusiness] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [businessZipCode, setBusinessZipCode] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  console.log('original dummy email', dummyEmail)

  function handleConsumerFormSubmit(event) {
    event.preventDefault();
    setDummyEmail(consumerEmail); 
    console.log('dummy email', dummyEmail)
    
    // come back to this and refactor if we have time to explore why we aren't able to simply pass in our object (body.body issue)
      axios.post('http://localhost:3000/api', {
      body: {
        firstName: consumerFirstName, 
        lastName: consumerLastName,
        email: consumerEmail, 
        password: consumerPassword, 
        zipCode: consumerZipCode
      }
      })
      .then(
        //this should be landing
      history.push('/userinformation')
      );
    // fetch request logic goes here
  }

  function handleMerchantFormSubmit(event) {
    event.preventDefault();
    // fetch request logic goes here
  }

  return (
    <div>
      <NavBar />
      {/* header for the create account page */}
      <div>

        <h2 className='createAccount'>creating an account is easy</h2>
      </div>

      {/* hold both consumer and merchant login */}
      <div className='loginContainer'>
        <div className='consMerchContainer'>
          {/* consumer login */}
          <section className='formSection'>
            {/* header for consumer login */}
            <div className='consumerAlignment'>
              <strong>consumer</strong>
            </div>
            <br></br>

            {/* form for consumer */}
            <form onSubmit={handleConsumerFormSubmit}>
            <label>
                first name: 
                <input
                  type='text'
                  name='firstName'
                  value={consumerFirstName}
                  onChange={(event) => setConsumerFirstName(event.target.value)}
                />
              </label>
              <br />

              <label>
                last name: 
                <input
                  type='text'
                  name='lastName'
                  value={consumerLastName}
                  onChange={(event) => setConsumerLastName(event.target.value)}
                />
              </label>
              <br />

            <label>
                email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type='text'
                  name='consumeremail'
                  value={consumerEmail}
                  onChange={(event) => setConsumerEmail(event.target.value)}
                />
              </label>
              <br />

              <label>
                password: 
                <input
                  type='text'
                  name='password'
                  value={consumerPassword}
                  onChange={(event) => setConsumerPassword(event.target.value)}
                />
              </label>
              <br />

              <label>
                zip code:&nbsp;&nbsp; 
                <input
                  type='text'
                  name='consumerZipCode'
                  value={consumerZipCode}
                  onChange={(event) => setConsumerZipCode(event.target.value)}
                />
              </label>
              <br />

              <input id='formButton' type='submit' value='submit' />
            </form>
          </section>

          {/* merchant login */}
          <div className='merchantLogin'>
            {/* header for consumer login */}
            <div className='merchantAlignment'>
              <strong>merchant</strong>
            </div>
            <br></br>

            <form onSubmit={handleMerchantFormSubmit}>
              {/* <label>
                username:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type='text'
                  name='username'
                  value={merchantUsername}
                  onChange={(event) => setMerchantUsername(event.target.value)}
                />
              </label> */}
                <label>
                email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type='text'
                  name='email'
                  value={businessEmail}
                  onChange={(event) => setBusinessEmail(event.target.value)}
                />
              </label>
              <br />

              <label>
                password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type='text'
                  name='password'
                  value={merchantPassword}
                  onChange={(event) => setMerchantPassword(event.target.value)}
                />
              </label>
              <br />

              <label>
                business name:&nbsp;&nbsp;
                <input
                  type='text'
                  name='businessname'
                  value={businessName}
                  onChange={(event) => setBusinessName(event.target.value)}
                />
              </label>
              <br />

              <label>
                type of business:
                <input
                  type='text'
                  name='typeofbusiness'
                  value={typeOfBusiness}
                  onChange={(event) => setTypeOfBusiness(event.target.value)}
                />
              </label>
              <br />

              <label>
                address:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type='text'
                  name='businessaddress'
                  value={businessAddress}
                  onChange={(event) => setBusinessAddress(event.target.value)}
                />
              </label>
              <br />

              <label>
                zip
                code:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type='text'
                  name='businesszipcode'
                  value={businessZipCode}
                  onChange={(event) => setBusinessZipCode(event.target.value)}
                />
              </label>
              <br />

              <label>
                description:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type='text'
                  name='description'
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </label>
              <br />

              <label>
                image:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type='text'
                  name='image'
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                />
              </label>
              <br />
              <input id='formButton' type='submit' value='submit' />
              <br />
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateAcct;
