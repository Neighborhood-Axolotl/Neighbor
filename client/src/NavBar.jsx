import React, { useState } from 'react';

function NavBar() {
  return (
    <div className='navBar'>
      <div className='leftLogo'>
        <img
          className='leftImage'
          src='https://i.imgur.com/AHFcYv1.png'
          alt='Logo'
        />
      </div>
      <div className='middleNeighbor'>
        <img
          className='middleImage'
          src='https://i.imgur.com/pD5v9ZC.png'
          alt='Neighbor'
        />
      </div>
      <div className='teamAndAboutNeighbor'>
        <img
          className='teamImage'
          src='https://i.imgur.com/zD4CIGj.png'
          alt='Team'
        />
        <img
          className='aboutNeighborImage'
          src='https://i.imgur.com/E0grArt.png'
          alt='About Neighbors'
        />
      </div>
    </div>
  );
}

export default NavBar;
