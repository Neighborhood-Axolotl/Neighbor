import merchantData from './merchantData';
import React from 'react';


// On load, merchant cards will load all merchants regardless of zip code. 
// When the value in the search field if changed to a string with five characters (the length of zip codes in the US), it will filter through the merchant data, returning only the merchants matching that zip code. 

// the merchant cards are populated with their merchant Id so you can implement modals to load the rest of their data. on click with modals. 
// ran out of time before implementing it
function MerchantCards({searchZipcode}) {

  let filteredData = merchantData 

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