import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

function NavBar() {
  const history = useHistory();

  return (
    <div className='navBar'>
      
      <div className='leftNav'>
       <img
          onClick={()=> history.push('/')}
          className='leftImage'
          src='https://i.imgur.com/AHFcYv1.png'
          alt='Logo'
        />
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
    
        <img
        onClick={()=> history.push('/team')}
          className='teamImage'
          src='https://i.imgur.com/FFrUPpK.png'
          alt='Team'
        />
        
        | <img
        onClick={()=> history.push('/aboutus')}
          className='aboutNeighborImage'
          src='https://i.imgur.com/su5pf5g.png'
          alt='About Neighbors'
        />
    

      
         | <img onClick={()=> history.push('/userinformation')} className='userInfo'
          src= 'https://i.imgur.com/VWTc4IU.png'
          alt='User Information' 
          />
      </div>
    </div>
  );
}

export default NavBar;
