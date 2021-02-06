import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './home.css';
import slide1 from './slide_1.jpg';
import slide2 from './slide_2.jpg';
import slide3 from './slide_3.jpg';

const Home = () => (
  <div className="home-page">
    <div className="home-page__container middle">
      <Slide easing="ease">
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slide1})`}}>
            <div className="home-page__slide-show--caption">
              <span className="line-1">Suniga Construction Company</span>
              <span className="line-2">Building Your Dreams</span>
            </div>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slide2})`}}>
          <div className="home-page__slide-show--caption">
              <span className="line-1">Dream House?</span>
              <span className="line-2">A mansion, bungalow or an apartment, we make your dreams happen</span>
            </div>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slide3})`}}>
          <div className="home-page__slide-show--caption">
              <span className="line-1">Design and Build</span>
              <span className="line-2">A quality that will surely last</span>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  </div>
);

export default Home;
