import React from 'react';
import "./testimonials.css";

function Testimonials() {
  return (
    <div className='testimonials'>
      <div className="scrible">
        <img src="./image-testimonials/Scribble.png" alt="" />
      </div>
      <div className="title">
        <div className="display-elem">*
          <img src="./image-testimonials/Sparkle.png" className='brillant'/>
          <p className="text-desc">What our listeners say</p>
        </div>
        <p className="para">Their experience throughout every platform</p>
      </div>
      <div className="testimonials-auto">
          <div className="test-auto">
            <img src="./image-testimonials/1.png" className='prio' alt="1" />
            <img src="./image-testimonials/2.png" className='seco' alt="2" />
          </div>
          <div className="gauche-droite">
            <img src="./image-testimonials/Arrow-LeftCircle.png" className='left'  />
            <img src="./image-testimonials/RightCircle.png" className='right' />
          </div>    
      </div>
    </div>
  )
}

export default Testimonials