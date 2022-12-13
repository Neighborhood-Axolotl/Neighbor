import merchantData from './merchantData';
import React, { useState, useEffect } from 'react';

function MerchantCards({searchZipcode}) {

console.log(searchZipcode)
  let filteredData = merchantData 
  console.log(filteredData)
   if (searchZipcode.length === 5) {
    filteredData = merchantData.filter(el => {
      return el.zipCode === searchZipcode;   
    })
  }
  
  return (
    <>
      {
      filteredData.map((data) => {
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