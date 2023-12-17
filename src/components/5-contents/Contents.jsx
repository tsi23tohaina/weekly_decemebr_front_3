import React from 'react';
import './contents.css';

function Contents() {
  return (
    <div className='contents'>
      <div className="scrible">
        <img src="./image-contents/Scribble.png" alt="" />
      </div>
      <div className="title">
        <p className="text-desc">Recent Episodes</p>
        <p className="para">Available on your favorite platform</p>
      </div>
      <div className="cards">
        <div className="card1">
          <div className="cover-title">
            <img src="./image-contents/cover.png" className="cover" />
            <div className="desc">
            <div className="title-desc">
              <p className='orange'>Eps.6</p>
              <p className='title-orange'>Pandemic Becoming Endimic</p>
            </div>
              <p className="lorem">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Curabitur ac ultrices odio. </p>
            </div>
          </div>
          <div className="cover-subtitle">
            <div className="bouttons">
              <div className="btn-transparent">covid-19</div>
              <div className="btn-transparent">health</div>
            </div>
            <div className="host">
              <p className="host-style">Hosted by:</p>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="cover-title">
            <img src="./image-contents/cover.png" className="cover" />
            <div className="desc">
            <div className="title-desc">
              <p className='orange'>Eps.6</p>
              <p className='title-orange'>Pandemic Becoming Endimic</p>
            </div>
              <p className="lorem">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Curabitur ac ultrices odio. </p>
            </div>
          </div>
          <div className="cover-subtitle">
            <div className="bouttons">
              <div className="btn-transparent">covid-19</div>
              <div className="btn-transparent">health</div>
            </div>
            <div className="host">
              <p className="host-style">Hosted by:</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cards"></div>
      <div className="cards"></div>
      <div className="btn3">BROWSE ALL EPISODES</div>
    </div>
  )
}

export default Contents