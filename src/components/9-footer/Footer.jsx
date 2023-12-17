import React from 'react';
import "./footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className="foot-list">
        <div className="list1">
          <div className="logo-site">
            <img src="./image-footer/logo.png" />
            <img src="./image-footer/annee.png" />
          </div>
          <p className="text-site">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
          </p>
          <div className="socials">
            <img src="./image-footer/twitter(1).png"/>
            <img src="./image-footer/instagram.png" />
            <img src="./image-footer/tiktok.png"/>
          </div>
        </div>
        <div className="list2">
          <div className="lt1">
            <p className="noir-text">About</p>
            <p className="orange-text">Testimonials</p>
            <p className="noir-text">features</p>
          </div>
          <div className="lt2">
            <p className="orange-text">Episodes</p>
            <p className="noir-text">Pricing</p>
            <p className="noir-text">Blog</p>
          </div>
          <div className="lt3">
            <p className="text-des">Listen to episodes on your fav platform:</p>
            <div className="platform">
              <img src="./image-footer/Google Podcast.png"/>
              <img src="./image-footer/Spotify.png"/>
              <img src="./image-footer/Youtube.png"/>
            </div>
            <div className="menu">
              <p className="text-des">App available on:</p>
              <div className="image-socials">
                <img src="./image-footer/app_store.png" alt="" />
                <img src="./image-footer/google_play.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot-note">
        <img src="./image-footer/footnote.png" alt="" />
      </div>
    </div>
  )
}

export default Footer