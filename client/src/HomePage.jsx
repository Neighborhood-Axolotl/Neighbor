import React, { useState } from 'react';

function HomePage() {
  return (
    <div className='homeContainer'>
      <div className='leftImage'>
        <img src='' alt='shops' />
      </div>
      
      <div className='middleInterface'>
        <img src='../images/logo.png' alt='shop-logo' />
        <h1>NEIGHBOR</h1>
        <h2>"The go to source for small businesses in your neighborhood." -Mr. Rogers</h2>
        <div>login</div>
        <div>create account</div>
      </div>
      <div className='rightImage'>
        <img src='' alt='shops' />
      </div>
    </div>
  );
}

export default HomePage;
