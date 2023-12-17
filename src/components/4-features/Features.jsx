import React from 'react';
import './features.css';

function Features() {
  return (
    <div className='features'>
      <div className="scrible">
        <img src="./image-features/Scribble.png"/>
      </div>
      <div className="title">
        <div className="deux">
          <p className="text-desc">Membership benefits</p>
          <img src="./image-features/Scribble1.png" className="scribble-decoration" />
        </div>
        <p className="para">Become our sponsor and get all benefits</p>
      </div>
      <div className="boites3">
          <div className="boite2">
            <img src="./image-features/1.png" alt="01" />
            <img src="./image-features/2.png" alt="02" />
          </div>
          <img src="./image-features/3.png" alt="03" />
      </div>
      <div className="boites3">
        <div className="boite2">
          <img src="./image-features/4.png" alt="04" />
          <img src="./image-features/5.png" alt="05" />
        </div>
        <img src="./image-features/6.png" alt="06" />
      </div>
      <div className="btn3">SEE PRICING</div>
    </div>
  )
}

export default Features