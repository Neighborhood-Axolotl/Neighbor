import merchantData from './merchantData';
import React, { useState, useEffect } from 'react';

function MerchantCards() {
  return (
    <>
      {merchantData.map((data) => {
        const merchantImg = data.image;
        const merchantId = data._id; 
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