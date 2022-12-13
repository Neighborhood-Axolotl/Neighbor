import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function CreateAcct({ setDefaultEmail, defaultEmail }) {
  useEffect(() => {}, [defaultEmail]);
  // State for consumer
  // These values get sent to the MongoDb
  // Passwords are currently not encrypted using BCrypt

  const [consumerPassword, setConsumerPassword] = useState('');
  const [consumerEmail, setConsumerEmail] = useState('');
  const [consumerFirstName, setConsumerFirstName] = useState('');
  const [consumerLastName, setConsumerLastName] = useState('');
  const [consumerZipCode, setConsumerZipCode] = useState('');

  // State for merchant values
  // Currently not set up in the backend.
  const [merchantPassword, setMerchantPassword] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [typeOfBusiness, setTypeOfBusiness] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [businessZipCode, setBusinessZipCode] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const history = useHistory();

  function handleConsumerFormSubmit(event) {
    event.preventDefault();
    setDefaultEmail(consumerEmail);

    // Axios request to send user information to our backend
    axios
      .post('http://localhost:3000/api', {
        body: {
          firstName: consumerFirstName,
          lastName: consumerLastName,
          email: consumerEmail,
          password: consumerPassword,
          zipCode: consumerZipCode,
        },
      })
      .then(
        // Routes to the landing page upon login
        // Using history.push since it doesn't force a refresh which would get rid of our ability to store the email address persisting in state to load the user data
        history.push('/landing')
      );
  }

  function handleMerchantFormSubmit(event) {
    event.preventDefault();
    // Axios logic for handling merchant user creation should go here. 
  }

  // Spacing below was done using manual spacers. Should be done via divs in SCSS. 

  return (
    <div>
      <NavBar />
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
