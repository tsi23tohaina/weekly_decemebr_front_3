import React from 'react'
import './header.css'
import logo from "./logo/logo.svg"
import arrow from "./logo/Arrow - Down.svg"
import swirl from "./logo/decorations/Hero Shape Swirl.svg";
import stars from "./logo/decorations/Hero Shape Stars.svg"

//les covers
import cover2 from './covers/cover2.svg';
import cover3 from './covers/cover3.svg';
import cover4 from './covers/cover4.svg';

//les platforms colorer
import spotify from './logo/reseau-sociaux/Spotify-col.svg';
import googlePod from './logo/reseau-sociaux/GooglePodcast-col.svg';
import youtube from "./logo/reseau-sociaux/Youtube-col.svg"

function Header() {
  return (
  <div className="header">  
    <nav className='navigation'>
      <div className="logo">
          <img className='img-logo' src={logo} alt="logo-pod"/>
          <div className="menus">
              <p>Episodes</p>
              <p>About</p>
            <div className="frame11">
              <p>More</p>
              <img src={arrow} alt="arrow-down" />
            </div>
          </div>
      </div>
      
      <div className="buttons">
          <button className='btn1'>RECENT EPISODES</button>
          <button className='btn2'>SUBSCRIBE</button>
      </div>
    </nav>

    <section className="description">
      <div className="hs-swirl">
        <img src={swirl} alt="hero shape swirl" />
      </div>
      <div className="text-decription">
        <h1 className='title-style'>Your Daily <span className='cl-pd'>Podcast</span></h1>
        <p className='para-style'>We cover all kinds of categories and <br /> a weekly special guest.</p>
        <button className="btn3">SUBSCRIBE</button>
      </div>
      <div className="hs-stars">
        <img src={stars} alt="hero shape stars"/>
      </div>
    </section>

    <section className="covers">
      <div className="cover1">
        <img src="./img/cover1.png"  id='no-radius1' alt="cover"/>
      </div>

      <div className="cover2">
        <img src={cover2} alt="cover"/>
      </div>

      <div className="cover3">
        <img src={cover3} alt="cover"/>
      </div>

      <div className="cover4">
        <img src={cover4} alt="cover"/>
      </div>

      <div className="cover5">
        <img src="./img/cover5.png" id='no-radius5' alt="cover"/>
      </div>
    </section>

    <section className="platforms">
      <p className="support">Supported by:</p>
      <div className="supp-sociaux">
        <img src={spotify} className='sp' alt="Spotify" />
        <img src={googlePod} className='gp' alt="google podcast" />
        <img src={youtube} className='yb' alt="youtube" />
      </div>
    </section>
  </div>
  )
}

export default Header