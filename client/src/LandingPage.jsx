import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import MerchantCards from './merchantCards';

function LandingPage() {
  const [data, setData] = useState([]);

  useEffect(function () {
    fetch('http://localhost:3000/api')
      .then((data) => data.json())
      .then((info) => {
        setData([...info]);
        console.log(info);
      });
  }, []);

  return (
    <section className='merchantWrapper'>
      <div>
        <NavBar />
      </div>
      {/* <MerchantCards /> */}
    </section>
  );
}

export default LandingPage;
