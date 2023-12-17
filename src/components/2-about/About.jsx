import React from 'react'
import './about.css';

function About() {
  return (
    <div className='about'>
      <div className="scrible">
        <img src="./image-about/Scribble.png" alt="scrible" />
      </div>
      <div className="text">
        <p className="text-desc">Talk. Listen. Get inspired <br /> by every minute of it.</p>
      </div>
      <div className="groupe">
        <div className="gp1">
          <img src="./image-about/Illustration 01.png" alt="illustration01" />
          <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Curabitur ac ultrices odio. </p>
        </div>
        <div className="gp2">
          <img src="./image-about/Illustration 02.png" alt="illustration02" />
          <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Curabitur ac ultrices odio. </p>
        </div>
      </div>
      <div className="quote">
        <img src="./image-about/quote.png" alt="quote" />
      </div>
    </div>
  )
}

export default About