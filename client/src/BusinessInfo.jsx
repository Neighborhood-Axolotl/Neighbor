import React, { useState } from 'react';
import NavBar from './NavBar';

function BusinessInfo() {
  return (
    <div className='businessInfo'>
      {/* merchant business name */}
      <div className='merchantBusinessName'>
        <label htmlFor='merchantBusinessName'>business name: </label>
        <input type='text' id='merchantBusinessName'></input>
      </div>
      {/* merchant address */}
      <div className='merchantAddress'>
        <label htmlFor='merchantAddress'>address: </label>
        <input type='text' id='merchantAddress'></input>
      </div>
      {/* merchant zip code */}
      <div className='merchantZipCode'>
        <label htmlFor='merchantZipCode'>zip code: </label>
        <input type='text' id='merchantZipCode'></input>
      </div>
    </div>
  );
}

export default BusinessInfo;
