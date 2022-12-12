import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import MerchantCards from './merchantCards';

function LandingPage() {
  const [data, setData] = useState([]);
  const [searchZipcode, setSearchZipcode] = useState(''); 

  useEffect(() => {
    fetch('http://localhost:3000/api')
      .then((data) => data.json())
      .then((info) => {
        setData([...info]);
      })
      .catch((err) => console.log('Could not get user data', err)); 
  }, []);

  return (
    
      <div className='landingPage'>
        <NavBar />

        <div className = 'searchBar'>

          <form>
            <label>
              <input
              type='text'
              name='searchZipcode'
              value={searchZipcode}
              onChange={(event) => {setSearchZipcode(event.target.value)}}/>
            </label>

            <input id='formButton' type='submit' value='search' />
          </form>

        </div>
      <section className='merchantWrapper'>
      <MerchantCards />
    </section>
    </div>
  );
}

export default LandingPage;
