import React from 'react';

import banner from '../../img/banner/banner-image.png';
import './Banner.css';

import { PrimaryButton } from '../utils/button/Button';
import { SecondaryButton } from '../utils/button/Button';

const Banner = ({ darkMode }) => (
  <section className='site-banner'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-md-12 site-title'>
          <h3 className='title-text'>Hey</h3>
          <h1 className='title-text text-uppercase'>I am Alkesh</h1>
          <h4 className='title-text text-uppercase'>
            Full Stack Web Developer
          </h4>
          <div className='site-buttons'>
            <div className='d-flex flex-row flex-wrap'>
              <PrimaryButton>Hire Me</PrimaryButton>
              <SecondaryButton>Get CV</SecondaryButton>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-12 banner-image'>
          <img src={banner} alt='banner-img' className='img-fluid' />
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
