import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

function Team() {
  return (
    <div className='teamPage'>
      <div>
        <NavBar />
      </div>

      <div className='allTeamPhotos'>
        <div className='zach'>
          <img
            className='teamPhoto'
            src='https://i.imgur.com/A0Q4L5l.png'
          ></img>
          <div className='teamText'>
            <p>
              Zach Hall <br />
              <br />
              Network Ninja
            </p>
            <a href='https://github.com/zachh85'>Github</a>
          </div>
        </div>

        <div className='chase'>
          <img
            className='teamPhoto'
            src='https://i.imgur.com/kXsSP3w.png'
          ></img>
          <div className='teamText'>
            <p>
              Chase Benjamin <br />
              <br />
              Digital Data Detective
            </p>
            <a href='https://github.com/chasebenj'>Github</a>
          </div>
        </div>

        <div className='danny'>
          <img
            className='teamPhoto'
            src='https://i.imgur.com/5JzRNX2.png'
          ></img>
          <div className='teamText'>
            <p>
              Danny Zheng <br />
              <br />
              Automation Wizard
            </p>
            <a href='https://github.com/dannyzheng159'>Github</a>
          </div>
        </div>

        <div className='sakura'>
          <img
            className='teamPhoto'
            src='https://i.imgur.com/DHJlkOx.png'
          ></img>
          <div className='teamText'>
            <p>
              Sakura Akiyama-Bowden <br />
              <br />
              Server Wrangler
            </p>
            <a href='https://github.com/sakurakiyama'>Github</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
