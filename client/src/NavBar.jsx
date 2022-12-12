import React, { useState } from 'react';

// function NavBar() {
//   return (
//     <div className='navBar'>
//       <div className='leftLogo'>
//         <img
//           className='leftImage'
//           src='https://i.imgur.com/AHFcYv1.png'
//           alt='Logo'
//         />
//       </div>
//       <div className='middleNeighbor'>
//         <img
//           className='middleImage'
//           src='https://i.imgur.com/pD5v9ZC.png'
//           alt='Neighbor'
//         />
//       </div>
//       <div className='teamAndAboutNeighbor'>
//         <img
//           className='teamImage'
//           src='https://i.imgur.com/zD4CIGj.png'
//           alt='Team'
//         />
//         <img
//           className='aboutNeighborImage'
//           src='https://i.imgur.com/E0grArt.png'
//           alt='About Neighbors'
//         />
//       </div>
//     </div>
//   );
// }


function NavBar() {
  return (
    <div className='navBar'>
      
      <div className='leftNav'>
      <a href = '/'> <img
          className='leftImage'
          src='https://i.imgur.com/AHFcYv1.png'
          alt='Logo'
        /></a>
      </div>

      <div className='spacer'></div>

      <div className='middleNeighbor'>
        <img
          className='siteFontLogo'
          src='https://i.imgur.com/pD5v9ZC.png'
          alt='Neighbor'
        />
      </div>

      <div className='spacer'></div>

      <div className='rightNav'>
        <a href = '/team'>
        <img
          className='teamImage'
          src='https://i.imgur.com/L5aHpyB.png'
          alt='Team'
        /></a>
        <a href = '/aboutus'>
        <img
          className='aboutNeighborImage'
          src='https://i.imgur.com/dB8guhW.png'
          alt='About Neighbors'
        /></a>
      </div>
    </div>
  );
}

export default NavBar;
