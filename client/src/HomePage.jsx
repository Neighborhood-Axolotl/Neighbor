import React, { useState } from 'react';

function HomePage() {
  function loginPage() {
    window.location.href = '/loginPage';
  }

  function createAcctPage() {
    window.location.href = '/createAccount';
  }

  return (
    <div className='homeContainer'>
      <div className='leftInterface'>
        <img
          className='leftImage'
          src='https://i.imgur.com/2fgUkIk.png'
          alt='shops'
        />
      </div>

      <div className='middleInterface'>
        <img
          className='middleImage'
          src='https://i.imgur.com/AHFcYv1.png'
          alt='shop-logo'
        />
        <h1>
          <img
            className='neighborImage'
            src='https://i.imgur.com/pD5v9ZC.png'
            alt='Neighbor'
          />
        </h1>
        <h2>"The go to source for small businesses in your neighborhood."</h2>
        <h2 className='quoteSource'>-Mr. Rogers</h2>
        <div>
          <img
            onClick={() => loginPage()}
            className='loginImage'
            src='https://i.imgur.com/rvjQK1R.png'
            alt='login'
          />
        </div>
        <div>
          <img
            onClick={() => createAcctPage()}
            className='createAccountImage'
            src='https://i.imgur.com/hpMvW3E.png'
            alt='create account'
          />
        </div>
      </div>
      <div className='rightInterface'>
        <img
          className='rightImage'
          src='https://i.imgur.com/4rNsynC.jpg'
          alt='shops'
        />
      </div>
    </div>
  );
}

export default HomePage;
