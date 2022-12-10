import merchantData from './merchantData';
import React, { useState, useEffect } from 'react';

function MerchantCards() {
  return (
    <>
      {merchantData.map((merchantImg) => {
        const merchantImg = merchantData.image;
        const merchantId = merchantData._id; 
        return (
          <div>
            <section className='cardWrapper'>
            <article key={merchantId} className='eachMerchantImage'>
            <img src={merchantImg} id='merchantImage'></img>
            </article>
            </section>
          </div>
        );
      })}
    </>
  );
}

export default MerchantCards; 