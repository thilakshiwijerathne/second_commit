import React from 'react';
import './Hero.css';
import hand from '../Assets/hand.gif';
import arrow from '../Assets/arrow.png';


function Hero() {
  return (
    <div className='hero'>

      <div className='hero-left'>
        <h3>NEW ARRIVAL ONLY</h3>
        <div>
          <div className='hand'>
            <p>new</p>
            <img src={hand} alt='' />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className='hero-btn'>
          <div>Latest collection</div>
          <img src={arrow} alt=''/>
        </div>
      </div>
      <div className='hero-right'>
       
      </div>

    </div>
  );
}

export default Hero;
