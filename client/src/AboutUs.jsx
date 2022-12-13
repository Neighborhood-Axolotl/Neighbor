import React from 'react';
import NavBar from './NavBar';


// About Us page 
// Import Navigation bar component 

function AboutUs() {
  return (
    <div className='aboutUsPage'>
      <div>
        <NavBar />
      </div>

      <div className='aboutUsContainer'>
        <div className='aboutUsTextContainer'>
          <img id='aboutUsLogo' src='https://i.imgur.com/UWrIPFU.png'></img>
          <br />
          <br />
          <p>
            Welcome to Neighbor! We are an online platform that bridges the gap
            between shoppers and their local businesses. Our mission is to make
            it easier for people to discover and support their local businesses,
            while also providing a convenient shopping experience. We have an
            extensive directory of local merchants, offering a variety of goods
            and services. Whether you are looking for a unique gift, a special
            treat, or a one-of-a-kind item, you will be sure to find it on
            Neighbor. With special discounts, promotions, and offers, Neighbor
            is the perfect solution for all of your shopping needs. Shop local
            and support your community today! <br /> <br />
            Shopping at small businesses is important because it helps to
            strengthen local economies and create jobs. Small businesses are
            often the backbone of communities, providing goods and services that
            may not be available from larger retailers. Shopping at small
            businesses also helps to keep money in the local economy, since
            small businesses are more likely to reinvest their profits in the
            local economy. Additionally, small businesses often offer unique and
            personalized products and services that cannot be found elsewhere.
            <br /> <br />
            Sign up with Neighbor and start supporting your community today.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
